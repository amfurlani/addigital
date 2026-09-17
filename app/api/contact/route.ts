import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = 'a.furlani+adv@gmail.com';
const PRODUCTION_ORIGIN = 'https://addigital.adv.br';

const MAX_BODY_SIZE = 10_000;

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clean(value: unknown, maxLength: number) {
  return String(value ?? '')
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function allowedOrigin(origin: string | null) {
  /*
   * Em produção, somente o domínio oficial pode chamar
   * o formulário pelo navegador.
   *
   * Em desenvolvimento, localhost também é permitido.
   */
  if (origin === PRODUCTION_ORIGIN) {
    return true;
  }

  if (
    process.env.NODE_ENV !== 'production' &&
    origin &&
    /^http:\/\/localhost:\d+$/.test(origin)
  ) {
    return true;
  }

  return false;
}

export async function POST(req: Request) {
  try {
    /*
     * 1. O serviço de e-mail precisa estar configurado.
     */
    if (!process.env.RESEND_API_KEY) {
      console.error(
        '[CONTACT_FORM] RESEND_API_KEY não configurada.'
      );

      return NextResponse.json(
        {
          error:
            'O serviço de contato está temporariamente indisponível.',
        },
        { status: 500 }
      );
    }

    /*
     * 2. Aceitamos somente JSON.
     */
    const contentType = req.headers.get('content-type');

    if (
      !contentType ||
      !contentType
        .toLowerCase()
        .startsWith('application/json')
    ) {
      return NextResponse.json(
        {
          error: 'Requisição inválida.',
        },
        { status: 415 }
      );
    }

    /*
     * 3. Verificação de origem.
     *
     * Isso dificulta submissões feitas diretamente
     * por páginas hospedadas em outros domínios.
     */
    const origin = req.headers.get('origin');

    if (!allowedOrigin(origin)) {
      console.warn(
        '[CONTACT_FORM] Origem rejeitada:',
        origin ?? 'ausente'
      );

      return NextResponse.json(
        {
          error: 'Requisição inválida.',
        },
        { status: 403 }
      );
    }

    /*
     * 4. Limite do corpo da requisição.
     *
     * Content-Length é apenas uma primeira barreira.
     * O tamanho real também será conferido depois.
     */
    const contentLength = Number(
      req.headers.get('content-length') ?? '0'
    );

    if (
      Number.isFinite(contentLength) &&
      contentLength > MAX_BODY_SIZE
    ) {
      return NextResponse.json(
        {
          error: 'Requisição inválida.',
        },
        { status: 413 }
      );
    }

    /*
     * 5. Lemos primeiro como texto para também limitar
     * o tamanho real recebido.
     */
    const rawBody = await req.text();

    if (
      !rawBody ||
      rawBody.length > MAX_BODY_SIZE
    ) {
      return NextResponse.json(
        {
          error: 'Requisição inválida.',
        },
        { status: 413 }
      );
    }

    let body: Record<string, unknown>;

    try {
      const parsed: unknown = JSON.parse(rawBody);

      if (
        typeof parsed !== 'object' ||
        parsed === null ||
        Array.isArray(parsed)
      ) {
        throw new Error('Invalid JSON object');
      }

      body = parsed as Record<string, unknown>;
    } catch {
      return NextResponse.json(
        {
          error: 'Requisição inválida.',
        },
        { status: 400 }
      );
    }

    /*
     * 6. Normalização dos campos.
     *
     * Os limites existem no frontend e novamente aqui,
     * porque o frontend pode ser contornado.
     */
    const name = clean(body.name, 120);
    const email = clean(body.email, 200);
    const phone = clean(body.phone, 30);
    const company = clean(body.company, 150);
    const subject = clean(body.subject, 150);
    const message = clean(body.message, 5000);
    const website = clean(body.website, 200);
    const privacy = clean(body.privacy, 10);

    /*
     * 7. Honeypot.
     *
     * Usuários normais nunca preenchem "website".
     * Para bots, respondemos como se tudo tivesse dado
     * certo para não revelar a barreira anti-spam.
     */
    if (website) {
      console.info(
        '[CONTACT_FORM] Honeypot acionado.'
      );

      return NextResponse.json({
        message:
          'Mensagem enviada com sucesso. Retornaremos o contato quando possível.',
      });
    }

    /*
     * 8. Validação server-side.
     */
    if (
      name.length < 2 ||
      !validEmail(email) ||
      subject.length < 3 ||
      message.length < 10 ||
      privacy !== 'yes'
    ) {
      return NextResponse.json(
        {
          error:
            'Preencha corretamente os campos obrigatórios e aceite a Política de Privacidade.',
        },
        { status: 400 }
      );
    }

    /*
     * 9. Escapamos todo conteúdo inserido pelo usuário
     * antes de incorporá-lo ao HTML do e-mail.
     */
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCompany = escapeHtml(company);
    const safeSubject = escapeHtml(subject);

    const safeMessage = escapeHtml(message)
      .replace(/\r\n/g, '\n')
      .replace(/\n/g, '<br />');

    /*
     * 10. Envio pelo Resend.
     */
    const { data, error } = await resend.emails.send({
      from:
        'AD Advocacia Digital <site@addigital.adv.br>',

      to: [CONTACT_EMAIL],

      /*
       * Ao responder à notificação, a resposta será
       * destinada ao e-mail informado pelo visitante.
       */
      replyTo: email,

      subject:
        `Novo contato pelo site — ${subject}`,

      html: `
        <!doctype html>
        <html lang="pt-BR">
          <body
            style="
              margin:0;
              padding:0;
              background:#f5f5f5;
              font-family:Arial,Helvetica,sans-serif;
              color:#222222;
            "
          >
            <div
              style="
                max-width:640px;
                margin:0 auto;
                padding:32px 20px;
              "
            >
              <div
                style="
                  background:#ffffff;
                  border:1px solid #e5e5e5;
                  padding:32px;
                "
              >
                <p
                  style="
                    margin:0 0 8px;
                    font-size:12px;
                    letter-spacing:1px;
                    text-transform:uppercase;
                    color:#777777;
                  "
                >
                  AD Advocacia Digital
                </p>

                <h1
                  style="
                    margin:0 0 28px;
                    font-size:24px;
                    line-height:1.3;
                  "
                >
                  Novo contato pelo site
                </h1>

                <p>
                  <strong>Nome:</strong><br />
                  ${safeName}
                </p>

                <p>
                  <strong>E-mail:</strong><br />
                  <a href="mailto:${safeEmail}">
                    ${safeEmail}
                  </a>
                </p>

                ${
                  safePhone
                    ? `
                      <p>
                        <strong>Telefone:</strong><br />
                        ${safePhone}
                      </p>
                    `
                    : ''
                }

                ${
                  safeCompany
                    ? `
                      <p>
                        <strong>Empresa:</strong><br />
                        ${safeCompany}
                      </p>
                    `
                    : ''
                }

                <p>
                  <strong>Assunto:</strong><br />
                  ${safeSubject}
                </p>

                <div
                  style="
                    margin-top:28px;
                    padding-top:24px;
                    border-top:1px solid #e5e5e5;
                  "
                >
                  <strong>Mensagem:</strong>

                  <p style="line-height:1.65;">
                    ${safeMessage}
                  </p>
                </div>

                <p
                  style="
                    margin-top:32px;
                    padding-top:20px;
                    border-top:1px solid #e5e5e5;
                    font-size:12px;
                    color:#777777;
                  "
                >
                  Mensagem enviada pelo formulário de contato de
                  addigital.adv.br.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,

      text: [
        'AD Advocacia Digital',
        'Novo contato pelo site',
        '',
        `Nome: ${name}`,
        `E-mail: ${email}`,
        phone ? `Telefone: ${phone}` : '',
        company ? `Empresa: ${company}` : '',
        `Assunto: ${subject}`,
        '',
        'Mensagem:',
        message,
        '',
        'Mensagem enviada pelo formulário de contato de addigital.adv.br.',
      ]
        .filter(Boolean)
        .join('\n'),
    });

    /*
     * 11. O Resend recebeu a chamada, mas recusou
     * o envio.
     */
    if (error) {
      console.error(
        '[CONTACT_FORM] Resend:',
        error
      );

      return NextResponse.json(
        {
          error:
            'Não foi possível enviar sua mensagem neste momento. Tente novamente mais tarde.',
        },
        { status: 502 }
      );
    }

    /*
     * Não registramos nome, e-mail, telefone ou
     * mensagem do visitante nos nossos próprios logs.
     */
    console.info(
      '[CONTACT_FORM] Mensagem enviada:',
      data?.id
    );

    return NextResponse.json({
      message:
        'Mensagem enviada com sucesso. Retornaremos o contato quando possível.',
    });
  } catch (error) {
    console.error(
      '[CONTACT_FORM] Erro:',
      error
    );

    return NextResponse.json(
      {
        error:
          'Não foi possível processar sua mensagem neste momento.',
      },
      { status: 500 }
    );
  }
}

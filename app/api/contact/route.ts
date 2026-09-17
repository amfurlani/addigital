import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = 'a.furlani+adv@gmail.com';

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

export async function POST(req: Request) {
  try {
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

    const body = await req.json();

    const name = clean(body.name, 120);
    const email = clean(body.email, 200);
    const phone = clean(body.phone, 30);
    const company = clean(body.company, 150);
    const subject = clean(body.subject, 150);
    const message = clean(body.message, 5000);
    const website = clean(body.website, 200);
    const privacy = clean(body.privacy, 10);

    /*
     * Honeypot anti-spam.
     * Usuários reais não veem nem preenchem este campo.
     */
    if (website) {
      return NextResponse.json({
        message:
          'Mensagem recebida. Retornaremos o contato quando possível.',
      });
    }

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

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCompany = escapeHtml(company);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message)
      .replace(/\r\n/g, '\n')
      .replace(/\n/g, '<br />');

    const { data, error } = await resend.emails.send({
      from: 'AD Advocacia Digital <site@addigital.adv.br>',

      to: [CONTACT_EMAIL],

      replyTo: email,

      subject: `Novo contato pelo site — ${subject}`,

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

    if (error) {
      console.error('[CONTACT_FORM] Resend:', error);

      return NextResponse.json(
        {
          error:
            'Não foi possível enviar sua mensagem neste momento. Tente novamente mais tarde.',
        },
        { status: 502 }
      );
    }

    console.info(
      '[CONTACT_FORM] Mensagem enviada:',
      data?.id
    );

    return NextResponse.json({
      message:
        'Mensagem enviada com sucesso. Retornaremos o contato quando possível.',
    });
  } catch (error) {
    console.error('[CONTACT_FORM] Erro:', error);

    return NextResponse.json(
      {
        error:
          'Não foi possível processar sua mensagem neste momento.',
      },
      { status: 500 }
    );
  }
}

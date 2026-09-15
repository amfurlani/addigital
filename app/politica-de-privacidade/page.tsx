import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de Privacidade e Proteção de Dados Pessoais do AD | Advocacia Digital.',
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="PRIVACIDADE E PROTEÇÃO DE DADOS"
        title="Política de Privacidade"
        text="Transparência sobre como tratamos dados pessoais e protegemos a privacidade de quem utiliza nossos canais digitais."
      />

      <section className="section">
        <div className="container narrow prose privacy-policy">

          <p className="privacy-updated">
            Última atualização: 15 de setembro de 2026.
          </p>

          <p>
            O <strong>{site.name}</strong> valoriza a privacidade e a
            proteção dos dados pessoais de clientes, potenciais clientes,
            visitantes do site e demais pessoas que utilizam seus canais
            de comunicação.
          </p>

          <p>
            Esta Política de Privacidade descreve, de forma transparente,
            como os dados pessoais podem ser coletados, utilizados,
            armazenados, compartilhados e protegidos no contexto deste
            site e dos contatos realizados por meio dele, em conformidade
            com a Lei nº 13.709/2018 — Lei Geral de Proteção de Dados
            Pessoais (LGPD).
          </p>

          <h2>1. Controlador dos dados pessoais</h2>

          <p>
            Para os tratamentos de dados pessoais realizados no contexto
            deste site e das atividades em que determine as respectivas
            finalidades e meios, o controlador é:
          </p>

          <div className="privacy-controller">
            <strong>{site.legalName}</strong>
            <span>{site.oab}</span>
            <span>{site.address}</span>
            <span>{site.email}</span>
            <span>{site.phone}</span>
          </div>

          <h2>2. Dados pessoais que podemos tratar</h2>

          <p>
            Os dados tratados dependem da forma como o titular interage
            com o site e com nossos canais de atendimento. Poderão incluir:
          </p>

          <ul>
            <li>nome e dados de identificação;</li>
            <li>endereço de e-mail;</li>
            <li>telefone;</li>
            <li>
              informações voluntariamente fornecidas em mensagens,
              formulários ou comunicações;
            </li>
            <li>
              informações relacionadas à solicitação apresentada pelo
              titular;
            </li>
            <li>
              dados técnicos relacionados ao acesso ao site, como endereço
              IP, navegador, dispositivo, data e horário de acesso, quando
              tecnicamente coletados;
            </li>
            <li>
              outros dados necessários para atender uma solicitação ou
              cumprir obrigações legais ou regulatórias.
            </li>
          </ul>

          <h2>3. Informações fornecidas em questões jurídicas</h2>

          <p>
            Ao entrar em contato com o escritório, o usuário poderá,
            por sua própria iniciativa, fornecer informações relacionadas
            a uma situação jurídica, inclusive dados pessoais de terceiros
            ou, eventualmente, dados pessoais sensíveis.
          </p>

          <p>
            Recomendamos que, no primeiro contato realizado pelo site, sejam
            fornecidas apenas as informações necessárias para que possamos
            compreender de maneira geral a natureza da solicitação.
          </p>

          <p>
            O simples envio de uma mensagem ou formulário pelo site não
            constitui, por si só, contratação de serviços advocatícios nem
            estabelece automaticamente relação advogado-cliente.
          </p>

          <h2>4. Para quais finalidades utilizamos os dados</h2>

          <p>Os dados pessoais poderão ser tratados para:</p>

          <ul>
            <li>receber e responder solicitações de contato;</li>
            <li>identificar o titular e manter comunicação com ele;</li>
            <li>
              avaliar solicitações relacionadas aos serviços profissionais
              do escritório;
            </li>
            <li>
              executar procedimentos preliminares eventualmente solicitados
              pelo próprio titular;
            </li>
            <li>
              prestar serviços contratados e manter o relacionamento
              profissional, quando aplicável;
            </li>
            <li>
              cumprir obrigações legais, regulatórias, éticas e
              profissionais;
            </li>
            <li>
              exercer regularmente direitos em processos judiciais,
              administrativos ou arbitrais;
            </li>
            <li>prevenir fraudes e incidentes de segurança;</li>
            <li>proteger os sistemas e a infraestrutura do site;</li>
            <li>
              produzir informações estatísticas e de desempenho, quando
              aplicável e observada a legislação.
            </li>
          </ul>

          <h2>5. Bases legais</h2>

          <p>
            O tratamento de dados pessoais será realizado quando houver
            fundamento jurídico previsto na LGPD, conforme a finalidade e
            as circunstâncias de cada operação.
          </p>

          <p>
            Conforme aplicável, o tratamento poderá estar fundamentado em
            procedimentos preliminares relacionados a contrato, execução
            de contrato, cumprimento de obrigação legal ou regulatória,
            exercício regular de direitos, legítimo interesse, consentimento
            ou outra hipótese autorizada pela legislação.
          </p>

          <p>
            Para dados pessoais sensíveis, quando houver tratamento,
            serão observadas as hipóteses específicas previstas na LGPD.
          </p>

          <h2>6. Compartilhamento de dados</h2>

          <p>
            O escritório não comercializa dados pessoais.
          </p>

          <p>
            Dados poderão ser compartilhados apenas quando necessário e
            de forma compatível com as finalidades do tratamento, inclusive
            com fornecedores de tecnologia, hospedagem, infraestrutura,
            comunicação, armazenamento e outros prestadores que auxiliem
            na operação do site ou na prestação dos serviços profissionais.
          </p>

          <p>
            O compartilhamento também poderá ocorrer quando necessário
            para cumprimento de obrigação legal ou regulatória, atendimento
            de ordem judicial ou de autoridade competente, ou para o
            exercício regular de direitos.
          </p>

          <h2>7. Transferência internacional de dados</h2>

          <p>
            Alguns fornecedores de tecnologia ou infraestrutura utilizados
            pelo escritório poderão processar ou armazenar informações em
            outros países.
          </p>

          <p>
            Quando houver transferência internacional de dados pessoais,
            serão observados os requisitos aplicáveis da LGPD e da
            regulamentação da Autoridade Nacional de Proteção de Dados.
          </p>

          <h2>8. Cookies e tecnologias semelhantes</h2>

          <p>
            O site poderá utilizar cookies estritamente necessários ao seu
            funcionamento e à segurança da navegação.
          </p>

          <p>
            Caso sejam implementadas ferramentas adicionais de análise de
            audiência, publicidade ou outras tecnologias que impliquem
            tratamento adicional de dados pessoais, esta Política poderá
            ser atualizada e, quando necessário, serão disponibilizados
            mecanismos apropriados de informação e escolha ao usuário.
          </p>

          <h2>9. Armazenamento e retenção</h2>

          <p>
            Os dados pessoais serão mantidos pelo período necessário para
            cumprir as finalidades para as quais foram coletados, observados
            os requisitos legais, regulatórios, contratuais, éticos e
            profissionais aplicáveis.
          </p>

          <p>
            Determinados dados poderão ser conservados após o encerramento
            de uma relação ou atendimento quando sua manutenção for
            necessária para cumprimento de obrigação legal ou regulatória,
            exercício regular de direitos ou outra finalidade legitimamente
            admitida pela LGPD.
          </p>

          <h2>10. Segurança dos dados</h2>

          <p>
            Adotamos medidas técnicas e administrativas apropriadas ao
            contexto do tratamento para reduzir riscos de acesso não
            autorizado, perda, alteração, divulgação ou tratamento
            inadequado de dados pessoais.
          </p>

          <p>
            Apesar das medidas adotadas, nenhum ambiente tecnológico pode
            ser considerado absolutamente imune a incidentes. Eventuais
            incidentes envolvendo dados pessoais serão tratados conforme
            a legislação e regulamentação aplicáveis.
          </p>

          <h2>11. Direitos dos titulares</h2>

          <p>
            Nos termos da LGPD e conforme aplicável a cada situação, o
            titular poderá solicitar:
          </p>

          <ul>
            <li>confirmação da existência de tratamento;</li>
            <li>acesso aos dados pessoais;</li>
            <li>correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>
              anonimização, bloqueio ou eliminação de dados desnecessários,
              excessivos ou tratados em desconformidade com a legislação;
            </li>
            <li>
              informações sobre compartilhamento de dados;
            </li>
            <li>
              informações sobre a possibilidade de não fornecer
              consentimento e suas consequências, quando aplicável;
            </li>
            <li>revogação do consentimento, quando essa for a base legal;</li>
            <li>
              eliminação dos dados tratados com fundamento no consentimento,
              ressalvadas as hipóteses legais de conservação;
            </li>
            <li>oposição ao tratamento, nas hipóteses previstas em lei;</li>
            <li>
              outros direitos previstos na legislação aplicável.
            </li>
          </ul>

          <p>
            Alguns pedidos poderão não ser atendidos integralmente quando a
            conservação ou o tratamento dos dados for necessário para o
            cumprimento de obrigação legal ou regulatória, exercício regular
            de direitos ou outra hipótese admitida pela legislação.
          </p>

          <h2>12. Como exercer seus direitos</h2>

          <p>
            Solicitações relacionadas à privacidade e à proteção de dados
            pessoais poderão ser encaminhadas para:
          </p>

          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>

          <p>
            Poderemos solicitar informações adicionais estritamente
            necessárias para confirmar a identidade do solicitante e
            proteger os dados pessoais contra solicitações fraudulentas
            ou realizadas por terceiros não autorizados.
          </p>

          <h2>13. Links para sites de terceiros</h2>

          <p>
            Este site poderá conter links para páginas ou serviços mantidos
            por terceiros. O tratamento de dados realizado nesses ambientes
            é de responsabilidade dos respectivos operadores ou
            controladores e estará sujeito às suas próprias políticas de
            privacidade.
          </p>

          <h2>14. Alterações desta Política</h2>

          <p>
            Esta Política poderá ser atualizada para refletir mudanças
            legislativas, regulatórias, tecnológicas ou nas práticas de
            tratamento de dados do escritório.
          </p>

          <p>
            A versão vigente será disponibilizada nesta página, acompanhada
            da respectiva data de atualização.
          </p>

          <h2>15. Contato</h2>

          <p>
            Em caso de dúvidas sobre esta Política ou sobre o tratamento de
            dados pessoais realizado pelo escritório, entre em contato pelo
            e-mail{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <div className="privacy-footer-note">
            <strong>{site.name}</strong>
            <br />
            {site.legalName}
            <br />
            {site.oab}
            <br />
            {site.address}
          </div>

          <p>
            <Link className="text-link" href="/contato">
              Ir para a página de contato
            </Link>
          </p>

        </div>
      </section>
    </>
  );
}

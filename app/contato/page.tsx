import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';

const baseUrl = 'https://addigital.adv.br';

export const metadata: Metadata = {
  title: 'Contato',

  description:
    'Entre em contato com a AD - Advocacia Digital. Atendimento jurídico com agendamento para clientes de São Paulo e Grande São Paulo.',

  alternates: {
    canonical: `${baseUrl}/contato`,
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: `${baseUrl}/contato`,
    siteName: 'AD Advocacia Digital',
    title: 'Contato | AD Advocacia Digital',
    description:
      'Informações de contato e atendimento da AD - Advocacia Digital em São Paulo.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const whatsappUrl =
    `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
      'Olá, gostaria de obter informações sobre o atendimento.'
    )}`;

  return (
    <>
      <PageHero
        eyebrow="CONTATO"
        title="Vamos conversar sobre sua questão jurídica."
        text="Apresente sua demanda para obter informações sobre as possibilidades de atendimento."
      />

      <section className="section">
        <div className="container contact-grid">

          <div className="contact-info">

            <span className="eyebrow">
              CONTATO
            </span>

            <h2>Informações de atendimento</h2>

            <a href={`mailto:${site.email}`}>
              {site.email}
            </a>

            <a href={`tel:${site.phoneInternational}`}>
              {site.phone}
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <div className="contact-detail">
              <strong>Endereço profissional</strong>
              <p>{site.address}</p>
            </div>

            <div className="contact-detail">
              <strong>Forma de atendimento</strong>
              <p>{site.appointment}</p>
            </div>

            <div className="contact-detail">
              <strong>Área de atendimento</strong>
              <p>{site.serviceArea}</p>
            </div>

            <div className="contact-detail">
              <strong>Responsável profissional</strong>
              <p>
                {site.responsibleName}
                <br />
                {site.oab}
              </p>
            </div>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              LinkedIn
            </a>

          </div>

          <ContactForm />

        </div>
      </section>
    </>
  );
}

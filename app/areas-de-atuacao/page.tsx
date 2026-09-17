import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { areas } from '@/lib/data';
import { PageHero } from '@/components/PageHero';
import { CTA } from '@/components/CTA';

const baseUrl = 'https://addigital.adv.br';

export const metadata: Metadata = {
  title: 'Áreas de Atuação',

  description:
    'Conheça as áreas de atuação da AD Advocacia Digital e as frentes jurídicas em que o escritório presta assessoria consultiva e contenciosa.',

  alternates: {
    canonical: `${baseUrl}/areas-de-atuacao`,
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: `${baseUrl}/areas-de-atuacao`,
    siteName: 'AD Advocacia Digital',
    title: 'Áreas de Atuação | AD Advocacia Digital',
    description:
      'Conheça as áreas de atuação da AD Advocacia Digital e as frentes jurídicas em que o escritório presta assessoria consultiva e contenciosa.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="ATUAÇÃO"
        title="Áreas de atuação"
        text="Atuação consultiva e contenciosa em diferentes frentes jurídicas, com foco na análise individualizada de cada situação."
      />

      <section className="section">
        <div className="container cards">
          {areas.map((a, i) => (
            <Link
              className="card"
              href={`/areas-de-atuacao/${a.slug}`}
              key={a.slug}
            >
              <span className="number">
                {String(i + 1).padStart(2, '0')}
              </span>

              <h2>{a.title}</h2>

              <p>{a.summary}</p>

              <span className="text-link">
                Conheça a atuação
                <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}

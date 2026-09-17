import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { lawyers } from '@/lib/data';
import { PageHero } from '@/components/PageHero';
import { CTA } from '@/components/CTA';

const baseUrl = 'https://addigital.adv.br';

export const metadata: Metadata = {
  title: 'Equipe',

  description:
    'Conheça os profissionais da AD Advocacia Digital, suas áreas de atuação, experiências, formações e conteúdos jurídicos publicados.',

  alternates: {
    canonical: `${baseUrl}/equipe`,
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: `${baseUrl}/equipe`,
    siteName: 'AD Advocacia Digital',
    title: 'Equipe | AD Advocacia Digital',
    description:
      'Conheça os profissionais da AD Advocacia Digital, suas áreas de atuação, experiências e formações.',
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
        eyebrow="EQUIPE"
        title="Pessoas por trás da estratégia jurídica."
        text="Profissionais com diferentes experiências e formações, atuando de maneira integrada."
      />

      <section className="section">
        <div className="container team-grid">

          {lawyers.map((person) => (
            <Link
              className="person-card large"
              href={`/equipe/${person.slug}`}
              key={person.slug}
            >
              {person.image ? (
                <Image
                  src={person.image}
                  alt={person.name}
                  width={120}
                  height={120}
                  className="team-card-photo"
                />
              ) : (
                <div className="avatar">
                  {person.name
                    .split(' ')
                    .slice(0, 2)
                    .map((x) => x[0])
                    .join('')}
                </div>
              )}

              <span>{person.role}</span>

              <h2>{person.name}</h2>

              {person.oab && (
                <small>{person.oab}</small>
              )}

              <p>{person.areas.join(' · ')}</p>

              <span className="text-link">
                Conheça o perfil
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

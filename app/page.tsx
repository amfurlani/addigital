import type { Metadata } from 'next';
import { site } from '@/lib/site';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Building2,
  Scale,
  ShieldCheck,
} from 'lucide-react';

import {
  areas,
  articles,
  lawyers,
  reviews,
} from '@/lib/data';

import { SectionTitle } from '@/components/SectionTitle';
import { CTA } from '@/components/CTA';

const baseUrl = 'https://addigital.adv.br';

export const metadata: Metadata = {
  title: 'Advocacia em São Paulo',

  description:
    'AD - Advocacia Digital. Atuação jurídica consultiva e contenciosa para empresas e pessoas em São Paulo e Grande São Paulo.',

  alternates: {
    canonical: baseUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: baseUrl,
    siteName: 'AD Advocacia Digital',
    title: 'AD - Advocacia Digital | Advocacia em São Paulo',
    description:
      'Atuação jurídica consultiva e contenciosa para empresas e pessoas em São Paulo e Grande São Paulo.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
    const professionalJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',

    name: site.responsibleName,

    url: `${baseUrl}/equipe/adilson-furlani`,

    jobTitle: 'Advogado',

    identifier: site.oab,

    worksFor: {
      '@type': 'Organization',
      name: site.displayName,
      url: baseUrl,
    },

    address: {
      '@type': 'PostalAddress',
      streetAddress: site.streetAddress,
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      postalCode: site.postalCode,
      addressCountry: site.addressCountry,
    },

    email: site.email,

    telephone: site.phoneInternational,

    sameAs: [
      site.linkedin,
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',

    name: site.displayName,
    url: baseUrl,
    inLanguage: 'pt-BR',
  };
  return (
    <>
      {/* DADOS ESTRUTURADOS — RESPONSÁVEL PROFISSIONAL */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            professionalJsonLd
          ).replace(/</g, '\\u003c'),
        }}
      />

      {/* DADOS ESTRUTURADOS — SITE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            websiteJsonLd
          ).replace(/</g, '\\u003c'),
        }}
      />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              ADVOCACIA · SÃO PAULO
            </span>

            <h1>
              Estratégia jurídica para decisões que exigem{' '}
              <em>conhecimento e precisão.</em>
            </h1>

            <p>
              Atuação jurídica técnica, estratégica e próxima,
              conectada à realidade de empresas e pessoas.
            </p>

            <div className="actions">
              <Link
                className="button primary"
                href="/o-escritorio"
              >
                Conheça o escritório
                <ArrowRight size={17} />
              </Link>

              <Link
                className="button ghost"
                href="/areas-de-atuacao"
              >
                Áreas de atuação
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div>
              <Scale />
              <span>Conhecimento</span>
            </div>

            <div>
              <ShieldCheck />
              <span>Estratégia</span>
            </div>

            <div>
              <Building2 />
              <span>Proximidade</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">
              O ESCRITÓRIO
            </span>

            <h2>
              Conhecimento jurídico aplicado à realidade de cada negócio.
            </h2>
          </div>

          <div className="prose">
            <p>
              Mais do que oferecer respostas jurídicas, buscamos
              compreender o contexto em que cada decisão é tomada.
            </p>

            <p>
              Nossa atuação combina análise técnica, visão estratégica
              e proximidade para construir soluções juridicamente
              consistentes.
            </p>

            <Link
              href="/o-escritorio"
              className="text-link"
            >
              Conheça nossa abordagem
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <SectionTitle
            eyebrow="ATUAÇÃO"
            title="Áreas de atuação"
            text="Diferentes frentes jurídicas, com análise individualizada de cada situação."
          />

          <div className="cards">
            {areas.map((a, i) => (
              <Link
                href={`/areas-de-atuacao/${a.slug}`}
                className="card"
                key={a.slug}
              >
                <span className="number">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3>{a.title}</h3>

                <p>{a.summary}</p>

                <span className="text-link">
                  Saiba mais
                  <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container two-col">
          <div>
            <span className="eyebrow">
              EXPERIÊNCIA
            </span>

            <h2>
              Experiência construída com atuação contínua.
            </h2>
          </div>

          <div className="prose">
            <p>
              Nossa experiência é construída a partir da atuação em
              diferentes contextos jurídicos, setores econômicos e tipos
              de demanda — sem transformar resultados individuais em
              promessa comercial.
            </p>

            <Link
              href="/experiencia"
              className="text-link light-link"
            >
              Conheça nossa experiência
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="EQUIPE"
            title="Pessoas por trás da estratégia jurídica."
            text="Profissionais com diferentes experiências e formações, atuando de maneira integrada."
          />

          <div className="team-grid">
            {lawyers.map(p => (
              <Link
                className="person-card"
                href={`/equipe/${p.slug}`}
                key={p.slug}
              >
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={120}
                    height={120}
                    className="team-photo"
                  />
                ) : (
                  <div className="avatar">
                    {p.name
                      .split(' ')
                      .slice(0, 2)
                      .map(x => x[0])
                      .join('')}
                  </div>
                )}

                <span>{p.role}</span>

                <h3>{p.name}</h3>

                <small>{p.oab}</small>

                <span className="text-link">
                  Conheça o perfil
                  <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <SectionTitle
            eyebrow="CONHECIMENTO"
            title="Análises para decisões mais informadas."
            text="Conteúdo jurídico produzido para explicar temas relevantes com clareza e profundidade."
          />

          <div className="article-grid">
            {articles.map(a => (
              <Link
                className="article-card"
                href={`/conteudo/${a.slug}`}
                key={a.slug}
              >
                <span>{a.category}</span>

                <h3>{a.title}</h3>

                <p>{a.excerpt}</p>

                <small>
                  {a.date} · {a.readTime}
                </small>

                <span className="text-link">
                  Ler análise
                  <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container reviews-preview">
          <div>
            <span className="eyebrow">
              AVALIAÇÕES NO GOOGLE
            </span>

            <h2>
              Reputação apresentada com origem preservada.
            </h2>

            <p>
              As avaliações devem ser reproduzidas a partir de
              publicação espontânea em plataforma pública, sem edição
              de sentido e sem exposição de resultados, valores ou
              detalhes confidenciais.
            </p>

            <Link
              className="button ghost"
              href="/avaliacoes"
            >
              Ver avaliações
            </Link>
          </div>

          <div className="review-stack">
            {reviews.map(r => (
              <blockquote key={r.author}>
                <div className="stars">
                  ★★★★★
                </div>

                <p>“{r.text}”</p>

                <footer>
                  {r.author} · {r.source}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

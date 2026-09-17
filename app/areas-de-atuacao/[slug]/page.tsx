import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { areas, articles } from '@/lib/data';
import { PageHero } from '@/components/PageHero';
import { CTA } from '@/components/CTA';

const baseUrl = 'https://addigital.adv.br';

export function generateStaticParams() {
  return areas.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const area = areas.find((x) => x.slug === slug);

  if (!area) {
    return {
      title: 'Área de atuação',
    };
  }

  const pageUrl = `${baseUrl}/areas-de-atuacao/${area.slug}`;

  return {
    title: area.title,

    description: area.summary,

    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: pageUrl,
      siteName: 'AD Advocacia Digital',
      title: `${area.title} | AD Advocacia Digital`,
      description: area.summary,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const area = areas.find((x) => x.slug === slug);

  if (!area) notFound();

  const pageUrl = `${baseUrl}/areas-de-atuacao/${area.slug}`;

  /*
   * Conteúdo relacionado.
   *
   * Mantemos por enquanto a lógica existente.
   * Em uma etapa posterior vamos melhorar o relacionamento
   * entre artigos e áreas usando slugs, em vez de palavras.
   */
  const related = articles.filter((a) =>
    a.category
      .toLowerCase()
      .includes(
        area.title.split(' ')[1]?.toLowerCase() || ''
      )
  );

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Áreas de atuação',
        item: `${baseUrl}/areas-de-atuacao`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: area.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      {/* DADOS ESTRUTURADOS — BREADCRUMB */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(
            /</g,
            '\\u003c'
          ),
        }}
      />

      <PageHero
        eyebrow="ÁREA DE ATUAÇÃO"
        title={area.title}
        text={area.intro}
      />

      <section className="section">
        <div className="container two-col">

          <div>
            <h2>Como podemos atuar</h2>

            <p>
              Entre outras frentes, a atuação pode envolver:
            </p>
          </div>

          <div className="check-list">
            {area.services.map((service) => (
              <div key={service}>
                <Check size={17} />
                <span>{service}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="section surface">
        <div className="container narrow">

          <span className="eyebrow">
            NOSSA ABORDAGEM
          </span>

          <h2>
            Análise jurídica conectada ao contexto.
          </h2>

          <p className="lead">
            {area.approach}
          </p>

        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="container">

            <h2>Conteúdo relacionado</h2>

            <div className="article-grid">
              {related.map((article) => (
                <Link
                  className="article-card"
                  href={`/conteudo/${article.slug}`}
                  key={article.slug}
                >
                  <span>{article.category}</span>

                  <h3>{article.title}</h3>

                  <p>{article.excerpt}</p>

                  <span className="text-link">
                    Ler análise
                    <ArrowRight size={15} />
                  </span>
                </Link>
              ))}
            </div>

          </div>
        </section>
      )}

      <CTA />
    </>
  );
}

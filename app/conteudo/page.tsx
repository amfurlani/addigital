import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { articles, areas, lawyers } from '@/lib/data';
import { PageHero } from '@/components/PageHero';

const baseUrl = 'https://addigital.adv.br';

export const metadata: Metadata = {
  title: 'Conteúdo Jurídico',

  description:
    'Artigos e análises jurídicas sobre Direito Digital e LGPD, Direito Empresarial, Tributário, Contratos, Direito Imobiliário e outros temas relevantes.',

  alternates: {
    canonical: `${baseUrl}/conteudo`,
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: `${baseUrl}/conteudo`,
    siteName: 'AD Advocacia Digital',
    title:
      'Conteúdo Jurídico | AD Advocacia Digital',
    description:
      'Artigos e análises jurídicas sobre temas relacionados ao ambiente empresarial, tecnologia, proteção de dados, contratos e outras questões jurídicas.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const areasWithArticles = areas.filter(
    (area) =>
      articles.some((article) =>
        article.areaSlugs?.includes(area.slug)
      )
  );

  return (
    <>
      <PageHero
        eyebrow="CONHECIMENTO"
        title="Conteúdo jurídico para decisões mais informadas."
        text="Artigos e análises sobre temas relevantes do ambiente jurídico, empresarial e digital."
      />

      {/* INTRODUÇÃO */}
      <section className="section content-intro">
        <div className="container narrow">
          <span className="eyebrow">
            ARTIGOS E ANÁLISES
          </span>

          <h2>
            Informação jurídica em contexto.
          </h2>

          <p className="lead">
            Reunimos análises sobre questões
            jurídicas que podem impactar empresas,
            profissionais e relações cotidianas.
            Os conteúdos possuem caráter informativo
            e procuram apresentar os temas de forma
            clara, contextualizada e juridicamente
            fundamentada.
          </p>
        </div>
      </section>

      {/* TEMAS */}
      {areasWithArticles.length > 0 && (
        <section className="section surface content-topics">
          <div className="container">
            <div className="content-section-heading">
              <div>
                <span className="eyebrow">
                  EXPLORE POR TEMA
                </span>

                <h2>
                  Áreas relacionadas aos conteúdos
                </h2>
              </div>

              <Link
                href="/areas-de-atuacao"
                className="text-link"
              >
                Todas as áreas
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="content-topic-grid">
              {areasWithArticles.map(
                (area) => {
                  const count =
                    articles.filter(
                      (article) =>
                        article.areaSlugs?.includes(
                          area.slug
                        )
                    ).length;

                  return (
                    <Link
                      key={area.slug}
                      href={`/areas-de-atuacao/${area.slug}`}
                      className="content-topic-card"
                    >
                      <span className="content-topic-count">
                        {count}{' '}
                        {count === 1
                          ? 'artigo'
                          : 'artigos'}
                      </span>

                      <h3>
                        {area.title}
                      </h3>

                      <p>
                        {area.summary}
                      </p>

                      <span className="text-link">
                        Explorar tema
                        <ArrowRight
                          size={15}
                        />
                      </span>
                    </Link>
                  );
                }
              )}
            </div>
          </div>
        </section>
      )}

      {/* TODOS OS ARTIGOS */}
      <section className="section">
        <div className="container">
          <div className="content-section-heading">
            <div>
              <span className="eyebrow">
                PUBLICAÇÕES
              </span>

              <h2>
                Artigos e análises
              </h2>
            </div>

            <span className="content-article-count">
              {articles.length}{' '}
              {articles.length === 1
                ? 'publicação'
                : 'publicações'}
            </span>
          </div>

          <div className="article-grid">
            {articles.map((article) => {
              const authors =
                article.authorSlugs
                  .map((authorSlug) =>
                    lawyers.find(
                      (lawyer) =>
                        lawyer.slug ===
                        authorSlug
                    )
                  )
                  .filter(
                    (
                      lawyer
                    ): lawyer is (typeof lawyers)[number] =>
                      Boolean(lawyer)
                  );

              const relatedAreas =
                areas.filter((area) =>
                  article.areaSlugs?.includes(
                    area.slug
                  )
                );

              return (
                <article
                  className="article-card content-article-card"
                  key={article.slug}
                >
                  <div className="content-article-top">
                    <span className="content-category">
                      {article.category}
                    </span>

                    <span className="content-read-time">
                      {article.readTime}
                    </span>
                  </div>

                  <h3>
                    <Link
                      href={`/conteudo/${article.slug}`}
                    >
                      {article.title}
                    </Link>
                  </h3>

                  <p>
                    {article.excerpt}
                  </p>

                  {relatedAreas.length >
                    0 && (
                    <div className="content-article-areas">
                      {relatedAreas.map(
                        (area) => (
                          <Link
                            key={
                              area.slug
                            }
                            href={`/areas-de-atuacao/${area.slug}`}
                          >
                            {
                              area.title
                            }
                          </Link>
                        )
                      )}
                    </div>
                  )}

                  <div className="content-article-footer">
                    <div className="content-article-meta">
                      <span>
                        {article.date}
                      </span>

                      {authors.map(
                        (author) => (
                          <Link
                            key={
                              author.slug
                            }
                            href={`/equipe/${author.slug}`}
                          >
                            {
                              author.name
                            }
                          </Link>
                        )
                      )}
                    </div>

                    <Link
                      href={`/conteudo/${article.slug}`}
                      className="text-link"
                      aria-label={`Ler artigo: ${article.title}`}
                    >
                      Ler artigo
                      <ArrowRight
                        size={15}
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

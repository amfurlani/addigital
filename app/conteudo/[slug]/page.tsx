import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { articles, lawyers, areas } from '@/lib/data';
import { ArticleNarrator } from '@/components/ArticleNarrator';

const baseUrl = 'https://addigital.adv.br';

/**
 * Converte as datas editoriais usadas no data.ts para ISO 8601.
 *
 * Formatos aceitos:
 * "10 set. 2025"             -> "2025-09-10T12:00:00-03:00"
 * "10 set. 2025 às 17:55"    -> "2025-09-10T17:55:00-03:00"
 * "10/09/2025"               -> "2025-09-10T12:00:00-03:00"
 * "10/09/2025 às 17:55"      -> "2025-09-10T17:55:00-03:00"
 */
function toIsoDate(date: string) {
  const months: Record<string, string> = {
    jan: '01',
    fev: '02',
    mar: '03',
    abr: '04',
    mai: '05',
    jun: '06',
    jul: '07',
    ago: '08',
    set: '09',
    out: '10',
    nov: '11',
    dez: '12',
  };

  const normalizedDate = date
    .trim()
    .toLowerCase();

  const editorialMatch = normalizedDate.match(
    /^(\d{1,2})\s+([a-zç]{3})\.?\s+(\d{4})(?:\s+às\s+(\d{1,2}):(\d{2}))?$/
  );

  if (editorialMatch) {
    const [
      ,
      day,
      monthName,
      year,
      hour = '12',
      minute = '00',
    ] = editorialMatch;

    const month = months[monthName];

    if (!month) {
      return undefined;
    }

    return `${year}-${month}-${day.padStart(2, '0')}T${hour.padStart(
      2,
      '0'
    )}:${minute}:00-03:00`;
  }

  const numericMatch = normalizedDate.match(
    /^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+às\s+(\d{1,2}):(\d{2}))?$/
  );

  if (numericMatch) {
    const [
      ,
      day,
      month,
      year,
      hour = '12',
      minute = '00',
    ] = numericMatch;

    return `${year}-${month.padStart(2, '0')}-${day.padStart(
      2,
      '0'
    )}T${hour.padStart(2, '0')}:${minute}:00-03:00`;
  }

  return undefined;
}

function getArticleAuthors(authorSlugs: string[]) {
  return authorSlugs
    .map((slug) =>
      lawyers.find((lawyer) => lawyer.slug === slug)
    )
    .filter(
      (lawyer): lawyer is (typeof lawyers)[number] =>
        Boolean(lawyer)
    );
}

function isArticleHeading(text: string) {
  return (
    text === 'Introdução' ||
    text === 'Conclusão' ||
    text === 'Referências Bibliográficas' ||
    text === 'Referências e fontes' ||
    text === 'Referências e fontes do artigo original' ||
    text.startsWith('Introdução:') ||
    text.startsWith('Conclusão:') ||
    /^\d+(\.\d+)*\.\s/.test(text)
  );
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return {
      title: 'Conteúdo',
    };
  }

  const authors = getArticleAuthors(
    article.authorSlugs
  );

  const articleUrl =
    `${baseUrl}/conteudo/${article.slug}`;

  const publishedTime =
    toIsoDate(article.date);

  return {
    title: article.title,

    description: article.excerpt,

    alternates: {
      canonical: articleUrl,
    },

    authors:
      authors.length > 0
        ? authors.map((author) => ({
            name: author.name,
            url: `${baseUrl}/equipe/${author.slug}`,
          }))
        : undefined,

    openGraph: {
      type: 'article',
      locale: 'pt_BR',
      url: articleUrl,
      siteName: 'AD Advocacia Digital',
      title: article.title,
      description: article.excerpt,
      publishedTime,

      authors:
        authors.length > 0
          ? authors.map(
              (author) =>
                `${baseUrl}/equipe/${author.slug}`
            )
          : undefined,

      images: article.image
        ? [
            {
              url: `${baseUrl}${article.image}`,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: article.image
        ? [`${baseUrl}${article.image}`]
        : undefined,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  const authors = getArticleAuthors(
    article.authorSlugs
  );

  const articleUrl =
    `${baseUrl}/conteudo/${article.slug}`;

  const publishedTime =
    toIsoDate(article.date);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',

    headline: article.title,
    description: article.excerpt,

    url: articleUrl,

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },

    ...(publishedTime && {
      datePublished: publishedTime,
    }),

    ...(authors.length > 0 && {
      author: authors.map((author) => ({
        '@type': 'Person',
        name: author.name,
        url: `${baseUrl}/equipe/${author.slug}`,
      })),
    }),

    publisher: {
      '@type': 'Organization',
      name: 'AD Advocacia Digital',
      url: baseUrl,
    },

    image: article.image
      ? `${baseUrl}${article.image}`
      : undefined,

    inLanguage: 'pt-BR',
  };

  return (
    <article>
      {/* DADOS ESTRUTURADOS — GOOGLE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            '\\u003c'
          ),
        }}
      />

      {/* CABEÇALHO */}
      <header className="article-hero">
        <div className="container narrow">
          <span className="eyebrow">
            {article.category}
          </span>

          <h1>{article.title}</h1>

          <p>{article.excerpt}</p>

          <div className="article-meta">
            <span>{article.date}</span>

            <span>
              {article.readTime} de leitura
            </span>

            {authors.map((author) => (
              <Link
                key={author.slug}
                href={`/equipe/${author.slug}`}
              >
                {author.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* PODCAST / LINKEDIN */}
      {article.podcast?.embedUrl && (
        <div className="container article-content-width">
          <section className="article-podcast">
            <div className="article-podcast-header">
              <span className="podcast-eyebrow">
                NOSSO PODCAST - DEEP DIVE
              </span>

              <h2>
                Prefere ouvir este debate em nosso Podcast?
              </h2>

              <p>
                Confira o debate deste artigo publicado
                em nosso Podcast &quot;Deep Dive&quot;
                no LinkedIn.
              </p>
            </div>

            <div className="linkedin-embed">
              <iframe
                src={article.podcast.embedUrl}
                title={`Podcast: ${article.title}`}
                width="504"
                height="399"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>
        </div>
      )}

      {/* NARRADOR */}
      <div className="container article-content-width">
        <ArticleNarrator
          title={article.title}
          body={article.body}
        />
      </div>

      {/* TEXTO */}
      <div className="container article-body article-content-width">
        {article.body.map((paragraph, index) => {
          if (isArticleHeading(paragraph)) {
            return (
              <h2 key={index}>
                {paragraph}
              </h2>
            );
          }

          const isLastParagraph =
            !article.body
              .slice(index + 1)
              .some(
                (item) =>
                  !isArticleHeading(item)
              );

          const urlRegex =
            /(https?:\/\/[^\s]+)/g;

          const parts =
            paragraph.split(urlRegex);

          return (
            <p
              key={index}
              className={
                isLastParagraph
                  ? 'article-closing'
                  : undefined
              }
            >
              {parts.map(
                (part, partIndex) => {
                  if (
                    /^https?:\/\//.test(part)
                  ) {
                    return (
                      <a
                        key={partIndex}
                        href={part}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="article-url"
                      >
                        {part}
                      </a>
                    );
                  }

                  return part;
                }
              )}
            </p>
          );
        })}
      </div>

      {/* ÁREAS RELACIONADAS */}
      {article.areaSlugs &&
        article.areaSlugs.length > 0 && (
          <section className="section article-related-areas">
            <div className="container article-content-width">
              <span className="eyebrow">
                ÁREAS RELACIONADAS
              </span>

              <h2>
                Atuação relacionada a este conteúdo
              </h2>

              <div className="article-related-areas-list">
                {article.areaSlugs.map(
                  (areaSlug) => {
                    const relatedArea =
                      areas.find(
                        (area) =>
                          area.slug ===
                          areaSlug
                      );

                    if (!relatedArea) {
                      return null;
                    }

                    return (
                      <Link
                        key={
                          relatedArea.slug
                        }
                        href={`/areas-de-atuacao/${relatedArea.slug}`}
                        className="article-related-area"
                      >
                        <div>
                          <strong>
                            {
                              relatedArea.title
                            }
                          </strong>

                          <p>
                            {
                              relatedArea.summary
                            }
                          </p>
                        </div>

                        <span className="text-link">
                          Conheça a atuação →
                        </span>
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
          </section>
        )}

      {/* AUTORES */}
      {authors.length > 0 && (
        <section className="section surface">
          <div className="container narrow">
            <span className="eyebrow">
              {authors.length === 1
                ? 'SOBRE O AUTOR'
                : 'SOBRE OS AUTORES'}
            </span>

            <div className="article-authors">
              {authors.map((author) => (
                <div
                  className="author-box"
                  key={author.slug}
                >
                  {author.image ? (
                    <Image
                      src={author.image}
                      alt={author.name}
                      width={110}
                      height={110}
                      className="author-photo"
                    />
                  ) : (
                    <div className="avatar">
                      {author.name
                        .split(' ')
                        .slice(0, 2)
                        .map(
                          (part) =>
                            part[0]
                        )
                        .join('')}
                    </div>
                  )}

                  <div>
                    <h3>{author.name}</h3>

                    <p>{author.bio}</p>

                    <Link
                      className="text-link"
                      href={`/equipe/${author.slug}`}
                    >
                      Ver perfil
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

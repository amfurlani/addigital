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
 *
 * Mantemos suporte ao formato numérico para compatibilidade
 * com conteúdos antigos.
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

  /*
   * Formato editorial:
   * 10 set. 2025
   * 10 set. 2025 às 17:55
   */
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

  /*
   * Formato numérico legado:
   * 10/09/2025
   * 10/09/2025 às 17:55
   */
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

export function generateStaticParams() {
  return articles.map((x) => ({
    slug: x.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const a = articles.find((x) => x.slug === slug);

  if (!a) {
    return {
      title: 'Conteúdo',
    };
  }

  const author = lawyers.find((x) => x.slug === a.authorSlug);

  const articleUrl = `${baseUrl}/conteudo/${a.slug}`;
  const publishedTime = toIsoDate(a.date);

  return {
    title: a.title,

    description: a.excerpt,

    alternates: {
      canonical: articleUrl,
    },

    authors: author
      ? [
          {
            name: author.name,
            url: `${baseUrl}/equipe/${author.slug}`,
          },
        ]
      : undefined,

    openGraph: {
      type: 'article',
      locale: 'pt_BR',
      url: articleUrl,
      siteName: 'AD Advocacia Digital',
      title: a.title,
      description: a.excerpt,
      publishedTime,
      authors: author
        ? [`${baseUrl}/equipe/${author.slug}`]
        : undefined,
    },

    twitter: {
      card: 'summary',
      title: a.title,
      description: a.excerpt,
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

  const a = articles.find((x) => x.slug === slug);

  if (!a) notFound();

  const author = lawyers.find((x) => x.slug === a.authorSlug);

  const articleUrl = `${baseUrl}/conteudo/${a.slug}`;
  const publishedTime = toIsoDate(a.date);

  /*
   * Dados estruturados para Google.
   *
   * Não adicionamos "image" neste momento porque os artigos
   * ainda não possuem uma imagem editorial própria cadastrada.
   * É melhor omitir do que usar uma imagem que não represente
   * especificamente o conteúdo.
   */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',

    headline: a.title,
    description: a.excerpt,

    url: articleUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },

    ...(publishedTime && {
      datePublished: publishedTime,
    }),

    ...(author && {
      author: {
        '@type': 'Person',
        name: author.name,
        url: `${baseUrl}/equipe/${author.slug}`,
      },
    }),

    publisher: {
      '@type': 'Organization',
      name: 'AD Advocacia Digital',
      url: baseUrl,
    },

    inLanguage: 'pt-BR',
  };

  return (
    <article>

      {/* DADOS ESTRUTURADOS — GOOGLE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {/* CABEÇALHO DO ARTIGO */}
      <header className="article-hero">
        <div className="container narrow">
          <span className="eyebrow">{a.category}</span>

          <h1>{a.title}</h1>

          <p>{a.excerpt}</p>

          <div className="article-meta">
            <span>{a.date}</span>

            <span>{a.readTime} de leitura</span>

            {author && (
              <Link href={`/equipe/${author.slug}`}>
                {author.name}
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* PODCAST / LINKEDIN */}
      {a.podcast?.embedUrl && (
        <div className="container article-content-width">
          <section className="article-podcast">

            <div className="article-podcast-header">
              <span className="podcast-eyebrow">
                NOSSO PODCAST - DEEP DIVE
              </span>

              <h2>Prefere ouvir este debate em nosso Podcast?</h2>

              <p>
                Confira o debate deste artigo publicado em nosso Podcast
                &quot;Deep Dive&quot; no LinkedIn.
              </p>
            </div>

            <div className="linkedin-embed">
              <iframe
                src={a.podcast.embedUrl}
                title={`Podcast: ${a.title}`}
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
          title={a.title}
          body={a.body}
        />
      </div>

      {/* TEXTO DO ARTIGO */}
      <div className="container article-body article-content-width">
        {a.body.map((p, i) => {
          const isHeading =
            p === 'Introdução' ||
            p === 'Conclusão' ||
            p === 'Referências Bibliográficas' ||
            p === 'Referências e fontes do artigo original' ||
            p.startsWith('Introdução:') ||
            p.startsWith('Conclusão:') ||
            /^\d+(\.\d+)*\.\s/.test(p);

          if (isHeading) {
            return <h2 key={i}>{p}</h2>;
          }

          const isLastParagraph =
            !a.body
              .slice(i + 1)
              .some((item) => {
                const nextIsHeading =
                  item === 'Introdução' ||
                  item === 'Conclusão' ||
                  item === 'Referências Bibliográficas' ||
                  item === 'Referências e fontes do artigo original' ||
                  item.startsWith('Introdução:') ||
                  item.startsWith('Conclusão:') ||
                  /^\d+(\.\d+)*\.\s/.test(item);

                return !nextIsHeading;
              });

          const urlRegex = /(https?:\/\/[^\s]+)/g;
          const parts = p.split(urlRegex);

          return (
            <p
              key={i}
              className={isLastParagraph ? 'article-closing' : undefined}
            >
              {parts.map((part, partIndex) => {
                if (/^https?:\/\//.test(part)) {
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
              })}
            </p>
          );
        })}
      </div>

      {/* ÁREAS DE ATUAÇÃO RELACIONADAS */}
      {a.areaSlugs && a.areaSlugs.length > 0 && (
        <section className="section article-related-areas">
          <div className="container article-content-width">

            <span className="eyebrow">
              ÁREAS RELACIONADAS
            </span>

            <h2>
              Atuação relacionada a este conteúdo
            </h2>

            <div className="article-related-areas-list">
              {a.areaSlugs.map((areaSlug) => {
                const relatedArea = areas.find(
                  (area) => area.slug === areaSlug
                );

                if (!relatedArea) return null;

                return (
                  <Link
                    key={relatedArea.slug}
                    href={`/areas-de-atuacao/${relatedArea.slug}`}
                    className="article-related-area"
                  >
                    <div>
                      <strong>{relatedArea.title}</strong>
                      <p>{relatedArea.summary}</p>
                    </div>

                    <span className="text-link">
                      Conheça a atuação →
                    </span>
                  </Link>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* AUTOR */}
      {author && (
        <section className="section surface">
          <div className="container narrow author-box">

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
                  .map((x) => x[0])
                  .join('')}
              </div>
            )}

            <div>
              <span className="eyebrow">
                SOBRE O AUTOR
              </span>

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
        </section>
      )}

    </article>
  );
}

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { articles, lawyers } from '@/lib/data';

export function generateStaticParams() {
  return articles.map((x) => ({
    slug: x.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);

  return {
    title: a?.title || 'Conteúdo',
    description: a?.excerpt,
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

  return (
    <article>

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
        <div className="container article-body">
          <section className="article-podcast">

            <div className="article-podcast-header">
              <span className="podcast-eyebrow">
                OUÇA TAMBÉM
              </span>

              <h2>Prefere ouvir este conteúdo?</h2>

              <p>
                Confira a versão em áudio deste artigo publicada no LinkedIn.
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

      {/* TEXTO DO ARTIGO */}
      <div className="container article-body">
        {a.body.map((p, i) => {
          const isHeading =
            p === 'Introdução' ||
            p === 'Conclusão' ||
            p === 'Referências Bibliográficas' ||
            p === 'Referências e fontes do artigo original' ||
            p.startsWith('Introdução:') ||
            /^\d+(\.\d+)*\.\s/.test(p);

          if (isHeading) {
            return <h2 key={i}>{p}</h2>;
          }

          return <p key={i}>{p}</p>;
        })}
      </div>

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

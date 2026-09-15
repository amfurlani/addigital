import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { lawyers, articles } from '@/lib/data';
import { PageHero } from '@/components/PageHero';
import { CTA } from '@/components/CTA';
import Image from 'next/image';

export function generateStaticParams() {
  return lawyers.map(x => ({ slug: x.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = lawyers.find(x => x.slug === slug);

  return {
    title: p?.name || 'Equipe',
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const p = lawyers.find(x => x.slug === slug);

  if (!p) notFound();

  const pubs = articles.filter(a => a.authorSlug === p.slug);

  return (
    <>
      <PageHero
        eyebrow={`${p.role} · ${p.oab}`}
        title={p.name}
        text={p.areas.join(' · ')}
      />

      <section className="section">
        <div className="container profile-grid">

          <aside className="profile-aside">

            {p.image ? (
              <Image
                src={p.image}
                alt={p.name}
                width={240}
                height={300}
                className="profile-photo"
                priority
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

            <h3>Formação</h3>

            {p.education.map(x => (
              <p key={x}>{x}</p>
            ))}

          </aside>

          <div className="prose">

            <h2>Experiência profissional</h2>
            <p>{p.bio}</p>

            <h2>Áreas de atuação</h2>

            <ul>
              {p.areas.map(x => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            {pubs.length > 0 && (
              <>
                <h2>Publicações</h2>

                {pubs.map(a => (
                  <Link
                    className="publication"
                    href={`/conteudo/${a.slug}`}
                    key={a.slug}
                  >
                    {a.title}
                    <ArrowRight size={15} />
                  </Link>
                ))}
              </>
            )}

          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

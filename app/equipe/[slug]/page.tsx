import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { lawyers, articles } from '@/lib/data';
import { PageHero } from '@/components/PageHero';
import { CTA } from '@/components/CTA';

const baseUrl = 'https://addigital.adv.br';

export function generateStaticParams() {
  return lawyers.map((lawyer) => ({
    slug: lawyer.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const person = lawyers.find(
    (lawyer) => lawyer.slug === slug
  );

  if (!person) {
    return {
      title: 'Equipe',
    };
  }

  const profileUrl =
    `${baseUrl}/equipe/${person.slug}`;

  const description = person.bio;

  return {
    title: person.name,

    description,

    alternates: {
      canonical: profileUrl,
    },

    openGraph: {
      type: 'profile',
      locale: 'pt_BR',
      url: profileUrl,
      siteName: 'AD Advocacia Digital',
      title: `${person.name} | AD Advocacia Digital`,
      description,

      ...(person.image && {
        images: [
          {
            url: `${baseUrl}${person.image}`,
            alt: person.name,
          },
        ],
      }),
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

  const person = lawyers.find(
    (lawyer) => lawyer.slug === slug
  );

  if (!person) notFound();

  /*
   * Um artigo pode possuir um ou mais autores.
   * Por isso, verificamos se o profissional atual
   * está presente no array authorSlugs.
   */
  const publications = articles.filter(
    (article) =>
      article.authorSlugs.includes(person.slug)
  );

  const profileUrl =
    `${baseUrl}/equipe/${person.slug}`;

  /*
   * Dados estruturados do perfil profissional.
   */
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',

    name: person.name,
    url: profileUrl,

    ...(person.image && {
      image: `${baseUrl}${person.image}`,
    }),

    jobTitle: person.role,

    description: person.bio,

    worksFor: {
      '@type': 'Organization',
      name: 'AD Advocacia Digital',
      url: baseUrl,
    },

    knowsAbout: person.areas,
  };

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
        name: 'Equipe',
        item: `${baseUrl}/equipe`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: person.name,
        item: profileUrl,
      },
    ],
  };

  return (
    <>
      {/* DADOS ESTRUTURADOS — PERFIL */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(
            /</g,
            '\\u003c'
          ),
        }}
      />

      {/* DADOS ESTRUTURADOS — BREADCRUMB */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd
          ).replace(/</g, '\\u003c'),
        }}
      />

      <PageHero
        eyebrow={
          person.oab
            ? `${person.role} · ${person.oab}`
            : person.role
        }
        title={person.name}
        text={person.areas.join(' · ')}
      />

      <section className="section">
        <div className="container profile-grid">

          <aside className="profile-aside">

            {person.image ? (
              <Image
                src={person.image}
                alt={person.name}
                width={240}
                height={300}
                className="profile-photo"
                priority
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

            <h3>Formação</h3>

            {person.education.map((item) => (
              <p key={item}>
                {item}
              </p>
            ))}

          </aside>

          <div className="prose">

            <span className="eyebrow">
              PERFIL PROFISSIONAL
            </span>

            <h2>Experiência profissional</h2>

            <p>{person.bio}</p>

            <h2>Áreas de atuação</h2>

            <ul>
              {person.areas.map((area) => (
                <li key={area}>
                  {area}
                </li>
              ))}
            </ul>

            {publications.length > 0 && (
              <section className="profile-publications">

                <span className="eyebrow">
                  CONTEÚDO
                </span>

                <h2>Publicações</h2>

                <p className="profile-publications-intro">
                  Artigos e análises com participação de{' '}
                  {person.name}.
                </p>

                {publications.map((article) => (
                  <Link
                    href={`/conteudo/${article.slug}`}
                    className="publication author-article-title"
                    key={article.slug}
                  >
                    <div>
                      <small>
                        {article.category} · {article.date}
                      </small>

                      <span>
                        {article.title}
                      </span>
                    </div>

                    <ArrowRight size={15} />
                  </Link>
                ))}

              </section>
            )}

          </div>

        </div>
      </section>

      <CTA />
    </>
  );
}

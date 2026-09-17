import { notFound } from 'next/navigation';import Link from 'next/link';import Image from 'next/image';import { articles, lawyers } from '@/lib/data';
import { ArrowRight, Headphones } from 'lucide-react';
export function generateStaticParams(){return articles.map(x=>({slug:x.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=articles.find(x=>x.slug===slug);return {title:a?.title||'Conteúdo',description:a?.excerpt}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=articles.find(x=>x.slug===slug);if(!a)notFound();const author=lawyers.find(x=>x.slug===a.authorSlug);return <article><header className="article-hero"><div className="container narrow"><span className="eyebrow">{a.category}</span><h1>{a.title}</h1><p>{a.excerpt}</p><div className="article-meta"><span>{a.date}</span><span>{a.readTime} de leitura</span>{author&&<Link href={`/equipe/${author.slug}`}>{author.name}</Link>}</div></div></header><div className="container article-body">{a.body.map((p,i)=><p key={i}>{p}</p>)}</div>{a.podcast && (
      <div className="container">
        <aside className="podcast-box">
          <div className="podcast-icon" aria-hidden="true">
            <Headphones size={26} />
          </div>

          <div className="podcast-content">
            <span className="eyebrow">OUÇA TAMBÉM</span>

            <h2>Este artigo também está disponível em áudio.</h2>

            <p>
              Ouça o conteúdo complementar publicado por {author?.name || 'nosso autor'} no {a.podcast.platform}.
            </p>

            <a
              href={a.podcast.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button ghost podcast-button"
            >
              Ouvir podcast no {a.podcast.platform}
              <ArrowRight size={16} />
            </a>
          </div>
        </aside>
      </div>
    )}{author&&<section className="section surface"><div className="container narrow author-box">{author.image ? (
  <Image
    src={author.image}
    alt={author.name}
    width={110}
    height={110}
    className="author-photo"
  />
) : (
  <div className="avatar">
    {author.name.split(' ').slice(0,2).map(x=>x[0]).join('')}
  </div>
)}<div><span className="eyebrow">SOBRE O AUTOR</span><h3>{author.name}</h3><p>{author.bio}</p><Link className="text-link" href={`/equipe/${author.slug}`}>Ver perfil</Link></div></div></section>}</article>}

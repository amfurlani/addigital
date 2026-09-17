import type { MetadataRoute } from 'next';
import { articles, lawyers } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://addigital.adv.br';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/areas-de-atuacao`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/equipe`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/conteudo`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contato`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/conteudo/${article.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const lawyerPages: MetadataRoute.Sitemap = lawyers.map((lawyer) => ({
    url: `${baseUrl}/equipe/${lawyer.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...articlePages,
    ...lawyerPages,
  ];
}

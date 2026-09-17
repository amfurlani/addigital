import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://addigital.adv.br/sitemap.xml',
    host: 'https://addigital.adv.br',
  };
}

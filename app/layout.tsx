import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/lib/site';

const base = 'https://addigital.adv.br';

export const metadata: Metadata = {
  metadataBase: new URL(base),

  title: {
    default: site.name,
    template: `%s | ${site.shortName}`,
  },

  description: site.description,

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: '/logoCurto-addigital.png',
    shortcut: '/logoCurto-addigital.png',
    apple: '/logoCurto-addigital.png',
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: base,
    siteName: site.name,
    title: site.name,
    description: site.description,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

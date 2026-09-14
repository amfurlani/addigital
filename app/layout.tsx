import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/lib/site';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.seudominio.com.br';
export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: { default: site.name, template: `%s | ${site.shortName}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, type:'website', locale:'pt_BR', url:base, siteName:site.name },
  robots: { index:true, follow:true },
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><Header/><main>{children}</main><Footer/></body></html>}

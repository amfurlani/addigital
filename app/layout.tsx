import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nome do Escritório | Advocacia',
  description: 'Escritório de advocacia com atuação técnica, estratégica e próxima.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

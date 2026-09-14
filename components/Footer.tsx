import Link from 'next/link';
import { Scale } from 'lucide-react';
import { nav, site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">
              <Scale size={21} />
            </span>

            <span>
              <strong>{site.shortName}</strong>
              <small>ADVOCACIA</small>
            </span> 
          </div>

          <p>{site.tagline}</p>
          <p className="muted">{site.oab}</p>
        </div>

        <div>
          <h4>Navegação</h4>

          {nav.slice(0, 4).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}

          <Link href="/contato">Contato</Link>
        </div>

        <div>
          <h4>Institucional</h4>

          <Link href="/politica-de-privacidade">
            Política de Privacidade
          </Link>

          <a href={`mailto:${site.email}`}>
            {site.email}
          </a>

          <span>{site.city}</span>
        </div>

        <div>
          <h4>Redes</h4>

          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href={site.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.legalName}
        </span>

        <span>Conteúdo de caráter informativo.</span>
      </div>
    </footer>
  );
}

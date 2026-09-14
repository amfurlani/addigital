import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div className="footer-brand">
          <Link href="/" aria-label="AD - Advocacia Digital">
            <Image
              src="/logo-addigital.png?t=1"
              alt="AD - Advocacia Digital"
              width={300}
              height={150}
              className="footer-logo"
            />
          </Link>

          <p>
            Estratégia jurídica, conhecimento e tecnologia para decisões
            empresariais mais seguras.
          </p>
        </div>

        <div>
          <strong>Navegação</strong>

          <Link href="/o-escritorio">O Escritório</Link>
          <Link href="/areas-de-atuacao">Áreas de Atuação</Link>
          <Link href="/equipe">Equipe</Link>
          <Link href="/experiencia">Experiência</Link>
          <Link href="/conteudo">Conteúdo</Link>
          <Link href="/avaliacoes">Avaliações</Link>
        </div>

        <div>
          <strong>Contato</strong>

          <a href={`mailto:${site.email}`}>
            {site.email}
          </a>

          <a href={`tel:${site.phone.replace(/\D/g, "")}`}>
            {site.phone}
          </a>

          <Link href="/contato">
            Fale conosco
          </Link>
        </div>

        <div>
          <strong>Institucional</strong>

          <Link href="/politica-de-privacidade">
            Política de Privacidade
          </Link>

          {site.linkedin && (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          )}

          {site.instagram && (
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          )}

          {site.youtube && (
            <a
              href={site.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          )}
        </div>

      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </span>

        <span>
          Publicidade de caráter exclusivamente informativo.
        </span>
      </div>
    </footer>
  );
}

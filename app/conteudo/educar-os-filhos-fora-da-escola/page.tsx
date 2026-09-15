import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educar os filhos fora da escola: é crime ou não?",
  description:
    "Análise jurídica sobre educação domiciliar, homeschooling, direito à educação e situações excepcionais relacionadas à frequência escolar.",
  alternates: {
    canonical:
      "/conteudo/educar-os-filhos-fora-da-escola",
  },
};

export default function ArtigoEducacaoDomiciliar() {
  return (
    <>
      <header className="article-hero">
        <div className="container narrow">
          <span className="eyebrow">
            DIREITO À EDUCAÇÃO
          </span>

          <h1>
            Educar os filhos fora da escola: é crime ou não?
          </h1>

          <p>
            Uma análise sobre educação domiciliar, direito à educação
            e situações excepcionais relacionadas à frequência escolar.
          </p>

          <div className="article-meta">
            <span>Adilson Furlani</span>
            <span>11 de abril de 2023</span>
          </div>
        </div>
      </header>

      <main className="container article-body">

        <div className="article-notice">
          <strong>Nota editorial</strong>
          <p>
            Este artigo foi originalmente publicado em abril de 2023.
            O conteúdo reflete o contexto legislativo e jurisprudencial
            considerado à época da publicação.
          </p>
        </div>

        {/* COLE AQUI O CORPO ORIGINAL DO ARTIGO */}

        <hr className="article-divider" />

        <section className="original-publication">
          <span className="eyebrow">PUBLICAÇÃO ORIGINAL</span>

          <h2>Revista Jus Navigandi</h2>

          <p>
            Artigo originalmente publicado na Revista Jus Navigandi,
            ano 28, n. 7223, em 11 de abril de 2023.
          </p>

          <a
            className="button ghost"
            href="https://jus.com.br/artigos/103491/educar-os-filhos-fora-da-escola-e-crime-ou-nao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver publicação original ↗
          </a>
        </section>
      </main>
    </>
  );
}

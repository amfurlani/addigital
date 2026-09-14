'use client';

import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Menu, X, Scale, Linkedin, Instagram, Youtube } from 'lucide-react';

const areas = [
  { title: 'Direito Tributário', text: 'Assessoria e atuação em questões tributárias administrativas e judiciais.' },
  { title: 'Direito Empresarial', text: 'Estratégias jurídicas alinhadas às necessidades e ao contexto de cada negócio.' },
  { title: 'Contratos', text: 'Análise, elaboração, negociação e revisão de instrumentos contratuais.' },
  { title: 'Contencioso', text: 'Atuação técnica na condução de demandas judiciais e administrativas.' },
  { title: 'Consultoria', text: 'Análise preventiva de questões jurídicas e identificação de alternativas.' },
  { title: 'Regulatório', text: 'Apoio jurídico em temas regulatórios e ambientes normativos complexos.' },
];

const team = [
  { name: 'Nome do Advogado', role: 'Sócio | Direito Tributário', oab: 'OAB/SP 00.000' },
  { name: 'Nome da Advogada', role: 'Sócia | Direito Empresarial', oab: 'OAB/SP 00.000' },
  { name: 'Nome do Advogado', role: 'Advogado | Contencioso', oab: 'OAB/SP 00.000' },
];

const articles = [
  { category: 'Tributário', title: 'Reforma Tributária: principais pontos para empresas', date: '12 set. 2026' },
  { category: 'Empresarial', title: 'Decisões empresariais e a importância da análise jurídica preventiva', date: '05 set. 2026' },
  { category: 'Contratos', title: 'Cláusulas contratuais que merecem atenção especial', date: '28 ago. 2026' },
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-title"><span>{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <main>
      <header className="header">
        <div className="container nav">
          <button className="brand" onClick={() => go('inicio')} aria-label="Voltar ao início">
            <span className="brand-mark"><Scale size={22}/></span>
            <span><strong>NOME</strong><small>ADVOCACIA</small></span>
          </button>
          <nav className={open ? 'nav-links open' : 'nav-links'}>
            {['escritorio','areas','equipe','experiencia','conteudo','avaliacoes'].map((id) => <button key={id} onClick={() => go(id)}>{id === 'escritorio' ? 'O Escritório' : id === 'areas' ? 'Áreas de Atuação' : id === 'equipe' ? 'Equipe' : id === 'experiencia' ? 'Experiência' : id === 'conteudo' ? 'Conteúdo' : 'Avaliações'}</button>)}
            <button className="nav-cta" onClick={() => go('contato')}>Fale conosco</button>
          </nav>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-grid container">
          <div className="hero-copy">
            <span className="eyebrow">ADVOCACIA · SÃO PAULO</span>
            <h1>Estratégia jurídica para decisões que exigem <em>conhecimento e precisão.</em></h1>
            <p>Atuação jurídica técnica, estratégica e próxima, conectada à realidade de empresas e pessoas.</p>
            <div className="actions"><button className="button primary" onClick={() => go('escritorio')}>Conheça o escritório <ArrowRight size={17}/></button><button className="button ghost" onClick={() => go('areas')}>Áreas de atuação</button></div>
          </div>
          <div className="hero-art"><div className="art-card"><span>CONHECIMENTO</span><strong>+</strong><span>ESTRATÉGIA</span><strong>+</strong><span>PROXIMIDADE</span></div></div>
        </div>
      </section>

      <section id="escritorio" className="section intro"><div className="container two-col"><div><span className="eyebrow">O ESCRITÓRIO</span><h2>Conhecimento jurídico aplicado à realidade de cada negócio.</h2></div><div><p>Mais do que oferecer respostas jurídicas, buscamos compreender o contexto em que cada decisão é tomada.</p><p>Nossa atuação combina análise técnica, visão estratégica e proximidade com nossos clientes para construir soluções juridicamente consistentes e alinhadas às necessidades de cada situação.</p></div></div></section>

      <section id="areas" className="section light"><div className="container"><SectionTitle eyebrow="ATUAÇÃO" title="Áreas de atuação" text="Nossa atuação abrange diferentes demandas jurídicas, com foco na análise individualizada de cada situação."/><div className="cards">{areas.map((a,i)=><article className="card" key={a.title}><span className="number">0{i+1}</span><h3>{a.title}</h3><p>{a.text}</p><button onClick={() => go('contato')}>Saiba mais <ArrowRight size={16}/></button></article>)}</div></div></section>

      <section id="experiencia" className="section dark"><div className="container two-col experience"><div><span className="eyebrow">EXPERIÊNCIA</span><h2>Experiência construída com atuação contínua.</h2></div><div><p>Construímos nossa experiência a partir da atuação em diferentes contextos jurídicos, setores econômicos e tipos de demanda.</p><div className="stats"><div><strong>+10</strong><span>anos de atuação</span></div><div><strong>06</strong><span>áreas principais</span></div><div><strong>100%</strong><span>análise individualizada</span></div></div></div></div></section>

      <section id="equipe" className="section"><div className="container"><SectionTitle eyebrow="EQUIPE" title="Pessoas por trás da estratégia jurídica." text="Profissionais com diferentes experiências e formações, atuando de maneira integrada."/><div className="team-grid">{team.map((person)=><article className="person" key={person.name}><div className="avatar">{person.name.split(' ').slice(0,2).map(x=>x[0]).join('')}</div><span>{person.role}</span><h3>{person.name}</h3><small>{person.oab}</small><button onClick={() => go('contato')}>Conheça o perfil <ArrowRight size={15}/></button></article>)}</div></div></section>

      <section id="conteudo" className="section light"><div className="container"><SectionTitle eyebrow="CONHECIMENTO" title="Análises para decisões mais informadas." text="Conteúdo jurídico produzido para explicar temas relevantes com clareza e profundidade."/><div className="articles">{articles.map(a=><article className="article" key={a.title}><span>{a.category}</span><h3>{a.title}</h3><small>{a.date}</small><button onClick={() => go('contato')}>Ler análise <ArrowRight size={15}/></button></article>)}</div></div></section>

      <section id="avaliacoes" className="section reviews"><div className="container review-wrap"><div><span className="eyebrow">AVALIAÇÕES NO GOOGLE</span><h2>A experiência também se constrói na relação com as pessoas.</h2><p>Avaliações apresentadas nesta seção são publicadas por seus autores em plataforma pública, preservando sua origem.</p><button className="button primary" onClick={() => window.open('https://www.google.com/search?q=Nome+do+Escritorio','_blank')}>Ver avaliações no Google <ArrowRight size={17}/></button></div><div className="review-list"><blockquote>“Excelente atendimento. Equipe muito preparada e sempre disponível para esclarecer nossas dúvidas.”<footer>★★★★★ · Google</footer></blockquote><blockquote>“Profissionais atenciosos, técnicos e claros na condução das questões.”<footer>★★★★★ · Google</footer></blockquote></div></div></section>

      <section id="contato" className="section contact"><div className="container contact-grid"><div><span className="eyebrow">CONTATO</span><h2>Vamos conversar sobre sua questão jurídica.</h2><p>Apresente sua demanda à nossa equipe para obter informações sobre as possibilidades de atendimento.</p><div className="contact-links"><a href="mailto:contato@seudominio.com.br">contato@seudominio.com.br</a><a href="https://wa.me/5511999999999">WhatsApp</a></div></div><form onSubmit={(e)=>{e.preventDefault();setSent(true)}}>{sent ? <div className="success"><Check size={28}/><h3>Mensagem recebida.</h3><p>Obrigado pelo contato. A equipe retornará assim que possível.</p></div> : <><label>Nome<input required name="name" /></label><label>E-mail<input required type="email" name="email" /></label><label>Telefone<input name="phone" /></label><label>Mensagem<textarea required name="message" rows={5}/></label><label className="check"><input required type="checkbox"/> Li e concordo com a Política de Privacidade.</label><button className="button primary" type="submit">Enviar mensagem <ArrowRight size={17}/></button><small>O envio deste formulário não implica, por si só, constituição de relação advogado-cliente.</small></>}</form></div></section>

      <footer className="footer"><div className="container footer-grid"><div><div className="brand footer-brand"><span className="brand-mark"><Scale size={22}/></span><span><strong>NOME</strong><small>ADVOCACIA</small></span></div><p>Advocacia técnica, estratégica e próxima.</p></div><div><h4>Navegação</h4><button onClick={()=>go('escritorio')}>O Escritório</button><button onClick={()=>go('areas')}>Áreas de Atuação</button><button onClick={()=>go('equipe')}>Equipe</button><button onClick={()=>go('contato')}>Contato</button></div><div><h4>Redes</h4><a href="#"><Linkedin/> LinkedIn</a><a href="#"><Instagram/> Instagram</a><a href="#"><Youtube/> YouTube</a></div></div><div className="container legal"><span>OAB/SP 00.000</span><span>© 2026 Nome do Escritório</span><a href="#">Política de Privacidade</a></div></footer>
    </main>
  );
}

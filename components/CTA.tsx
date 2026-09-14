import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
export function CTA(){return <section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow">CONTATO</span><h2>Vamos conversar sobre sua questão jurídica.</h2></div><Link href="/contato" className="button light">Fale conosco <ArrowRight size={17}/></Link></div></section>}

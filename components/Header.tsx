'use client';
import Link from 'next/link';
import { Menu, Scale, X } from 'lucide-react';
import { useState } from 'react';
import { nav, site } from '@/lib/site';

export function Header(){
  const [open,setOpen]=useState(false);
  return <header className="site-header"><div className="container nav-wrap">
    <Link href="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark"><Scale size={21}/></span><span><strong>{site.shortName}</strong><small>ADVOCACIA</small></span></Link>
    <nav className={open?'main-nav open':'main-nav'}>{nav.map(item=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)}>{item.label}</Link>)}<Link href="/contato" className="nav-cta" onClick={()=>setOpen(false)}>Fale conosco</Link></nav>
    <button className="menu-button" aria-label="Abrir menu" onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button>
  </div></header>
}

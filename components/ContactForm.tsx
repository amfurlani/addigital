'use client';
import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

type Status='idle'|'sending'|'success'|'error';
export function ContactForm(){
  const [status,setStatus]=useState<Status>('idle');
  const [message,setMessage]=useState('');
  async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setStatus('sending');setMessage('');const form=e.currentTarget;const data=Object.fromEntries(new FormData(form).entries());try{const res=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});const body=await res.json();if(!res.ok)throw new Error(body.error||'Não foi possível enviar.');setStatus('success');setMessage(body.message);form.reset();}catch(err){setStatus('error');setMessage(err instanceof Error?err.message:'Erro ao enviar.');}}
  return <form className="contact-form" onSubmit={submit}><div className="form-row"><label>Nome *<input name="name" required minLength={2}/></label><label>E-mail *<input name="email" type="email" required/></label></div><div className="form-row"><label>Telefone<input name="phone"/></label><label>Empresa<input name="company"/></label></div><label>Assunto *<input name="subject" required/></label><label>Mensagem *<textarea name="message" required rows={6}/></label><label className="checkbox"><input type="checkbox" name="privacy" value="yes" required/><span>Li e concordo com a Política de Privacidade.</span></label><button className="button primary" disabled={status==='sending'}>{status==='sending'?'Enviando...':'Enviar mensagem'} <ArrowRight size={17}/></button>{message&&<div className={`form-status ${status}`}>{status==='success'&&<CheckCircle2 size={18}/>} {message}</div>}<small>O envio deste formulário não implica, por si só, constituição de relação advogado-cliente.</small></form>
}

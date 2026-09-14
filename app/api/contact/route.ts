import { NextResponse } from 'next/server';

function validEmail(v:string){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)}
export async function POST(req:Request){
  try{
    const body=await req.json();
    const name=String(body.name||'').trim();const email=String(body.email||'').trim();const subject=String(body.subject||'').trim();const message=String(body.message||'').trim();
    if(name.length<2||!validEmail(email)||!subject||message.length<10||body.privacy!=='yes') return NextResponse.json({error:'Preencha os campos obrigatórios e aceite a Política de Privacidade.'},{status:400});
    const payload={name,email,phone:String(body.phone||''),company:String(body.company||''),subject,message,receivedAt:new Date().toISOString()};
    const webhook=process.env.CONTACT_WEBHOOK_URL;
    if(webhook){const r=await fetch(webhook,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});if(!r.ok)throw new Error('Webhook recusou o envio.');}
    else console.info('[CONTACT_FORM - configure CONTACT_WEBHOOK_URL]',payload);
    return NextResponse.json({message:webhook?'Mensagem enviada com sucesso.':'Formulário validado. Configure CONTACT_WEBHOOK_URL para entrega em produção.'});
  }catch{return NextResponse.json({error:'Não foi possível processar sua mensagem.'},{status:500})}
}

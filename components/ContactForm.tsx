'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus('sending');
    setMessage('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const body = await res.json();

      if (!res.ok) {
        throw new Error(
          body.error || 'Não foi possível enviar sua mensagem.'
        );
      }

      setStatus('success');
      setMessage(body.message);
      form.reset();
    } catch (err) {
      setStatus('error');
      setMessage(
        err instanceof Error
          ? err.message
          : 'Não foi possível enviar sua mensagem.'
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Nome *
          <input
            name="name"
            required
            minLength={2}
            maxLength={120}
            autoComplete="name"
          />
        </label>

        <label>
          E-mail *
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Telefone
          <input
            name="phone"
            type="tel"
            maxLength={30}
            autoComplete="tel"
          />
        </label>

        <label>
          Empresa
          <input
            name="company"
            maxLength={150}
            autoComplete="organization"
          />
        </label>
      </div>

      <label>
        Assunto *
        <input
          name="subject"
          required
          minLength={3}
          maxLength={150}
        />
      </label>

      <label>
        Mensagem *
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
        />
      </label>

      {/* Honeypot anti-spam: deve permanecer vazio */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
      >
        <label>
          Website
          <input
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <label className="checkbox">
        <input
          type="checkbox"
          name="privacy"
          value="yes"
          required
        />

        <span>
          Li e concordo com a Política de Privacidade.
        </span>
      </label>

      <button
        className="button primary"
        type="submit"
        disabled={status === 'sending'}
      >
        {status === 'sending'
          ? 'Enviando...'
          : 'Enviar mensagem'}

        <ArrowRight size={17} />
      </button>

      {message && (
        <div
          className={`form-status ${status}`}
          role="status"
          aria-live="polite"
        >
          {status === 'success' && (
            <CheckCircle2 size={18} />
          )}

          {message}
        </div>
      )}

      <small>
        O envio deste formulário não implica, por si só,
        constituição de relação advogado-cliente.
      </small>
    </form>
  );
}

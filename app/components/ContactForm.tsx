"use client";

import { useState, type FormEvent } from "react";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1500);
  };

  if (sent) {
    return (
      <div className="card text-center py-16">
        <div className="w-14 h-14 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-white mb-3">
          Messaggio Inviato
        </h3>
        <p className="text-[var(--foreground-muted)] max-w-md mx-auto">
          Grazie per averci contattato. Vi risponderemo entro 24 ore lavorative.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Nome e Cognome
          </label>
          <input id="name" name="name" type="text" required placeholder="Il tuo nome" className="input" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="la-tua@email.com" className="input" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
          Oggetto
        </label>
        <input id="subject" name="subject" type="text" required placeholder="Come possiamo aiutarvi?" className="input" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
          Messaggio
        </label>
        <textarea id="message" name="message" required placeholder="Descrivete la vostra richiesta…" className="input" rows={5} />
      </div>
      <button type="submit" disabled={sending} className="btn-primary w-full sm:w-auto justify-center disabled:opacity-60">
        {sending ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Invio in corso…
          </>
        ) : (
          <>
            <Send size={18} />
            Invia Messaggio
          </>
        )}
      </button>
    </form>
  );
}

"use client";

import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Indirizzo",
    value: "Via I° Maggio 6/B",
    sub: "30029 San Stino di Livenza (VE)",
    href: "https://maps.app.goo.gl/ZmPd98826orT7Be47",
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "+39 0421 14 81 319",
    href: "tel:+390421148139",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@nt1service.com",
    href: "mailto:info@nt1service.com",
  },
  {
    icon: Clock,
    label: "Orari",
    value: "Lun — Ven",
    sub: "8:00–12:00 / 14:00–18:00",
  },
];

export default function ContattiPage() {
  return (
    <main className="noise-overlay">
      <PageHero
        overline="Contatti"
        title="Parliamo del vostro prossimo progetto"
        description="Compilate il modulo o contattateci direttamente. Rispondiamo entro 24 ore lavorative con un preventivo dettagliato e senza impegno."
      />

      {/* ─── Contact Content ─── */}
      <Section>
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-7">
            {contactInfo.map((item) => {
              const Inner = (
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-lg bg-[var(--accent-glow)] border border-[var(--border-accent)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-400">
                    <item.icon size={19} className="text-[var(--accent-light)]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[var(--accent-light)] font-semibold block mb-1">
                      {item.label}
                    </span>
                    <span className="text-white font-medium block">{item.value}</span>
                    {item.sub && (
                      <span className="text-[var(--foreground-muted)] text-sm block mt-0.5">
                        {item.sub}
                      </span>
                    )}
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block hover:opacity-80 transition-opacity"
                >
                  {Inner}
                </a>
              ) : (
                <div key={item.label}>{Inner}</div>
              );
            })}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="card !p-0 overflow-hidden mt-4"
            >
              <div className="aspect-[4/3] bg-[var(--background-elevated)]">
                <iframe
                  title="NT1 Service Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.5!2d12.6757!3d45.7308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477956a0a0a0a0a0%3A0x0!2sVia+I+Maggio+6%2C+30029+San+Stino+di+Livenza+VE!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                  className="w-full h-full border-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </main>
  );
}

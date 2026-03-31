"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Factory,
  Layers,
  Cog,
  Wrench,
  Shield,
  Target,
  Cpu,
} from "lucide-react";
import Section, { SectionHeader } from "./components/Section";
import Card from "./components/Card";

const HeroScene = dynamic(() => import("./components/HeroScene"), {
  ssr: false,
});

const highlights = [
  {
    icon: Shield,
    value: "30+",
    label: "Anni di Esperienza",
  },
  {
    icon: Target,
    value: "500+",
    label: "Progetti Completati",
  },
  {
    icon: Cpu,
    value: "99%",
    label: "Clienti Soddisfatti",
  },
];

const servicePreview = [
  {
    icon: Factory,
    title: "Lavorazione Acciaio",
    description:
      "Fresatura, tornitura e lavorazioni CNC su tutti i tipi di acciaio con tolleranze centesimali.",
  },
  {
    icon: Layers,
    title: "Lavorazione Gomma",
    description:
      "Stampaggio, taglio e lavorazione di componenti in gomma per applicazioni industriali.",
  },
  {
    icon: Cog,
    title: "Lavorazione Plastica",
    description:
      "Fresatura e tornitura di componenti plastici tecnici per settori ad alta specializzazione.",
  },
  {
    icon: Wrench,
    title: "Assistenza & Saldatura",
    description:
      "Supporto completo nella manutenzione e saldature MIG/MAG, TIG e ossiacetilene.",
  },
];

export default function Home() {
  return (
    <main className="noise-overlay">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Three.js scene — fills right portion on desktop, full on mobile */}
        <div
          className="absolute inset-0 lg:left-[35%]"
          style={{ pointerEvents: "none" }}
        >
          <HeroScene />
        </div>

        {/* Gradient overlay: solid left → transparent right */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[var(--background)] via-[var(--background)]/80 to-transparent lg:via-[var(--background)]/50" />

        {/* Hero Content — LEFT aligned */}
        <div className="container relative z-10 py-32 lg:py-0">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15,
              }}
            >
              <span className="inline-flex items-center gap-3 px-4 py-2 rounded-md border border-[var(--border-accent)] bg-[var(--accent-glow)] text-[var(--accent-light)] text-sm font-semibold tracking-wide mb-8">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-light)] animate-pulse" />
                Lavorazioni Meccaniche di Precisione
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-8"
            >
              Al servizio delle aziende per{" "}
              <span className="gradient-text">sviluppare ed assistere</span> le
              vostre idee
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.45,
              }}
              className="text-lg sm:text-xl text-[var(--foreground-muted)] max-w-xl mb-12 leading-relaxed"
            >
              Lavorazione di precisione su acciaio, gomma e plastica con
              macchinari CNC all&apos;avanguardia. La vostra visione, la nostra
              competenza.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.6,
              }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link href="/contatti" className="btn-primary">
                Richiedi Preventivo
                <ArrowRight size={18} />
              </Link>
              <Link href="/servizi" className="btn-outline">
                Scopri i Servizi
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <button
            onClick={() =>
              document
                .getElementById("stats")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col items-center gap-2 text-[var(--foreground-muted)] hover:text-[var(--accent-light)] transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scopri</span>
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </motion.div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section
        id="stats"
        className="relative py-20 bg-[var(--background-elevated)] tech-grid"
      >
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-lg bg-[var(--accent-glow)] border border-[var(--border-accent)] flex items-center justify-center shrink-0">
                  <item.icon
                    size={24}
                    className="text-[var(--accent-light)]"
                  />
                </div>
                <div>
                  <div className="stat-value">{item.value}</div>
                  <div className="text-[var(--foreground-muted)] text-sm tracking-wide mt-1">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── ABOUT PREVIEW ─── */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <SectionHeader
              overline="Chi Siamo"
              title="Un partner industriale su cui contare da sempre"
              description="NT1 Service SRL è un'azienda specializzata nella lavorazione meccanica di precisione con sede a San Stino di Livenza (VE). Offriamo soluzioni complete per la lavorazione di acciaio, gomma e plastica."
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Link href="/chi-siamo" className="btn-outline">
                Scopri di più
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="card !p-8 tech-grid"
          >
            <div className="space-y-6">
              {[
                {
                  label: "Qualità Certificata",
                  desc: "Controllo qualità rigoroso su ogni pezzo prodotto.",
                },
                {
                  label: "Precisione Assoluta",
                  desc: "Tolleranze centesimali con sonde di misura e righe ottiche.",
                },
                {
                  label: "Tecnologia Avanzata",
                  desc: "Parco macchine CNC costantemente aggiornato.",
                },
              ].map((item, i) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-[var(--accent-glow)] border border-[var(--border-accent)] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[var(--accent-light)] font-bold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {item.label}
                    </h4>
                    <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <hr className="section-divider" />

      {/* ─── SERVICES PREVIEW ─── */}
      <Section dark>
        <SectionHeader
          overline="I Nostri Servizi"
          title="Soluzioni industriali complete"
          description="Offriamo un ventaglio completo di lavorazioni meccaniche di precisione, supportate da tecnologia CNC avanzata."
          center
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicePreview.map((service, i) => (
            <Card
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-14"
        >
          <Link href="/servizi" className="btn-primary">
            Tutti i Servizi
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </Section>

      {/* ─── CTA ─── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--background-elevated)] via-[var(--background)] to-[var(--background)]" />
        <div className="absolute inset-0 tech-grid opacity-50" />

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12] mb-6 max-w-3xl mx-auto">
              La vostra prossima soluzione industriale{" "}
              <span className="gradient-text">inizia qui</span>
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Che si tratti di un pezzo unico o di una produzione in serie, il
              nostro team è pronto a trasformare le vostre specifiche in realtà.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contatti"
                className="btn-primary text-lg px-8 py-3.5"
              >
                Contattaci Ora
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:+390421148139"
                className="btn-outline text-lg px-8 py-3.5"
              >
                +39 0421 14 81 319
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

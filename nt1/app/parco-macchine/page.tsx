"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Section, { SectionHeader } from "../components/Section";
import { ArrowRight } from "lucide-react";

const machines = [
  {
    name: "Centro di Lavoro CME",
    tag: "Fresatura",
    specs: "Testa rotante — Corse: 1800×850×800 mm con righe ottiche",
    description:
      "Centro di lavoro a 3 assi con testa rotante per lavorazioni complesse di alta precisione. Dotato di righe ottiche per il massimo controllo dimensionale.",
    highlights: ["3 assi", "Righe ottiche", "Alta precisione"],
  },
  {
    name: "Centro di Lavoro QUASER MV204 CPL",
    tag: "Fresatura CNC",
    specs: "Corse: 1500×700×700 mm — Sonda di misura e presetting",
    description:
      "Centro di lavoro CNC equipaggiato con sonda di misura e sistema di presetting utensili per garantire tolleranze minime e ripetibilità perfetta.",
    highlights: ["Sonda di misura", "Presetting utensili", "Ripetibilità"],
  },
  {
    name: "Tornio CNC DMG NEF400",
    tag: "Tornitura",
    specs: "Ø350 × 700 mm",
    description:
      "Tornio a controllo numerico DMG per lavorazioni di tornitura di precisione su alberi, boccole e componenti cilindrici di medie dimensioni.",
    highlights: ["CNC DMG", "Ø350mm max", "Precisione"],
  },
  {
    name: "Magazzino Automatico",
    tag: "Logistica",
    specs: "Gestione automatizzata ricambi",
    description:
      "Sistema di stoccaggio automatizzato per la gestione efficiente dei ricambi, garantendo disponibilità immediata per il fabbisogno interno e per i clienti.",
    highlights: ["Automatizzato", "Ricambi", "Disponibilità H24"],
  },
];

const extras = [
  "Lapidelli per rettifica di precisione",
  "Seghetti a nastro per taglio materiali",
  "Presse da montaggio",
  "Saldatrici MIG/MAG, TIG e ossiacetilene",
  "Tavola rotante per saldatura tubi",
];

export default function ParcoMacchinePage() {
  return (
    <main className="noise-overlay">
      <PageHero
        overline="Parco Macchine"
        title="Tecnologia CNC all'avanguardia"
        description="Il nostro parco macchine è costantemente aggiornato per garantire lavorazioni di massima qualità su acciaio, gomma e plastica."
      />

      {/* ─── Machines ─── */}
      <Section>
        <div className="space-y-6">
          {machines.map((machine, i) => (
            <motion.div
              key={machine.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card group !p-0 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Accent bar */}
                <div className="lg:w-1.5 w-full h-1.5 lg:h-auto bg-[var(--accent)] shrink-0" />

                <div className="flex flex-col lg:flex-row flex-1 p-7 lg:p-9 gap-6 lg:gap-10 lg:items-center">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-white tracking-tight">
                        {machine.name}
                      </h3>
                      <span className="px-3 py-0.5 text-xs font-semibold tracking-wider uppercase rounded bg-[var(--accent-glow)] text-[var(--accent-light)] border border-[var(--border-accent)]">
                        {machine.tag}
                      </span>
                    </div>
                    <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-4">
                      {machine.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {machine.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-2.5 py-1 text-xs rounded bg-white/[0.04] border border-white/[0.06] text-[var(--foreground-muted)]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="lg:w-72 shrink-0">
                    <div className="rounded-lg bg-[var(--background-elevated)] border border-[var(--border)] px-5 py-4">
                      <span className="text-xs uppercase tracking-widest text-[var(--accent-light)] font-semibold block mb-2">
                        Specifiche
                      </span>
                      <span className="text-sm text-white font-medium">
                        {machine.specs}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <hr className="section-divider" />

      {/* ─── Extras ─── */}
      <Section dark>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              overline="Attrezzature Complementari"
              title="Officina completa per ogni lavorazione"
              description="Oltre ai centri di lavoro CNC, la nostra officina è dotata di strumentazione complementare per completare qualsiasi ciclo produttivo."
            />
            <ul className="space-y-3">
              {extras.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[var(--foreground-muted)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="card !p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Vuoi saperne di più?
            </h3>
            <p className="text-[var(--foreground-muted)] mb-8 leading-relaxed">
              Contattaci per una consulenza tecnica gratuita. Possiamo valutare
              insieme la fattibilità del tuo progetto.
            </p>
            <Link href="/contatti" className="btn-primary">
              Contattaci
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}

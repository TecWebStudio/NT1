"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Section, { SectionHeader } from "../components/Section";
import Card from "../components/Card";
import {
  Factory,
  Layers,
  Cog,
  Settings2,
  Wrench,
  Hammer,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Lavorazione Acciaio",
    description:
      "Fresatura, tornitura e lavorazioni CNC su tutti i tipi di acciaio con tolleranze centesimali. Capacità di eseguire lavorazioni complesse su pezzi di grandi dimensioni.",
    details: [
      "Fresatura 3 assi con corse fino a 1800mm",
      "Tornitura CNC fino a Ø350mm",
      "Acciaio inox, al carbonio, legato",
      "Tolleranze centesimali garantite",
    ],
  },
  {
    icon: Layers,
    title: "Lavorazione Gomma",
    description:
      "Stampaggio, taglio e lavorazione di componenti in gomma per applicazioni industriali con massima precisione dimensionale.",
    details: [
      "Stampaggio a compressione e iniezione",
      "Taglio di precisione",
      "Guarnizioni e componenti tecnici",
      "Piccole e grandi serie",
    ],
  },
  {
    icon: Cog,
    title: "Lavorazione Plastica",
    description:
      "Fresatura e tornitura di componenti plastici tecnici per settori ad alta specializzazione, dal prototipo alla produzione in serie.",
    details: [
      "POM, PTFE, Nylon, PEEK",
      "Prototipazione rapida",
      "Componentistica tecnica",
      "Finiture di alta qualità",
    ],
  },
  {
    icon: Settings2,
    title: "Assistenza Tecnica",
    description:
      "Supporto completo nella manutenzione e riparazione di impianti industriali con interventi tempestivi e ricambi dal magazzino automatico.",
    details: [
      "Interventi tempestivi on-site",
      "Magazzino ricambi automatizzato",
      "Manutenzione programmata",
      "Consulenza tecnica dedicata",
    ],
  },
  {
    icon: Wrench,
    title: "Saldatura Specializzata",
    description:
      "Saldature MIG/MAG, TIG e ossiacetilene su tavola rotante per la lavorazione di tubi e componenti strutturali complessi.",
    details: [
      "MIG/MAG, TIG, Ossiacetilene",
      "Tavola rotante per tubi",
      "Acciaio, inox, alluminio",
      "Certificazioni di qualità",
    ],
  },
  {
    icon: Hammer,
    title: "Progettazione & Sviluppo",
    description:
      "Dall'idea al prodotto finito: vi accompagniamo nello sviluppo tecnico di nuovi pezzi e ricambi, con prototipazione rapida e consulenza.",
    details: [
      "Co-design con il cliente",
      "Sviluppo da disegno o campione",
      "Prototipazione e validazione",
      "Ottimizzazione produttiva",
    ],
  },
];

export default function ServiziPage() {
  return (
    <main className="noise-overlay">
      <PageHero
        overline="I Nostri Servizi"
        title="Soluzioni industriali complete per ogni esigenza"
        description="Un ventaglio completo di lavorazioni meccaniche di precisione, supportate da tecnologia CNC avanzata e decenni di esperienza."
      />

      {/* ─── Services Grid ─── */}
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card group"
            >
              <div className="flex items-start gap-5 mb-5">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent-glow)] border border-[var(--border-accent)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-400">
                  <service.icon size={22} className="text-[var(--accent-light)]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <ul className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/[0.05]">
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      <hr className="section-divider" />

      {/* ─── Extra ─── */}
      <Section dark>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              overline="Completamento Officina"
              title="Attrezzature complementari"
              description="Oltre ai centri di lavoro CNC, la nostra officina dispone di una gamma completa di attrezzature per ogni esigenza produttiva."
            />
            <ul className="space-y-3">
              {[
                "Lapidelli per rettifica di precisione",
                "Seghetti a nastro per taglio materiali",
                "Presse da montaggio",
                "Saldatrici MIG/MAG, TIG e ossiacetilene",
                "Tavola rotante per saldatura tubi",
              ].map((item) => (
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
              Hai un progetto in mente?
            </h3>
            <p className="text-[var(--foreground-muted)] mb-8 leading-relaxed">
              Contattaci per un preventivo gratuito e senza impegno. Il nostro team
              è pronto a valutare la fattibilità e i tempi di realizzazione.
            </p>
            <Link href="/contatti" className="btn-primary">
              Richiedi Preventivo
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}

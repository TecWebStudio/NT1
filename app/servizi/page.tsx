"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Section, { SectionHeader } from "../components/Section";
import {
  Factory,
  Layers,
  Cog,
  Settings2,
  Wrench,
  Hammer,
  ArrowRight,
  ImageIcon,
} from "lucide-react";

const services = [
  {
    icon: Factory,
    emoji: "🔩",
    title: "Lavorazione Acciaio",
    description:
      "Fresatura, tornitura e lavorazioni CNC su tutti i tipi di acciaio con tolleranze centesimali. Capacità di eseguire lavorazioni complesse su pezzi di grandi dimensioni.",
    details: [
      "Fresatura 3 assi con corse fino a 1800mm",
      "Tornitura CNC fino a Ø350mm",
      "Acciaio inox, al carbonio, legato",
      "Tolleranze centesimali garantite",
    ],
    color: "from-emerald-500/10 to-cyan-500/10",
    size: "large",
  },
  {
    icon: Layers,
    emoji: "🟠",
    title: "Lavorazione Gomma",
    description:
      "Stampaggio, taglio e lavorazione di componenti in gomma per applicazioni industriali con massima precisione dimensionale.",
    details: [
      "Stampaggio a compressione e iniezione",
      "Taglio di precisione",
      "Guarnizioni e componenti tecnici",
      "Piccole e grandi serie",
    ],
    color: "from-orange-500/10 to-amber-500/10",
    size: "small",
  },
  {
    icon: Cog,
    emoji: "🔵",
    title: "Lavorazione Plastica",
    description:
      "Fresatura e tornitura di componenti plastici tecnici per settori ad alta specializzazione, dal prototipo alla produzione in serie.",
    details: [
      "POM, PTFE, Nylon, PEEK",
      "Prototipazione rapida",
      "Componentistica tecnica",
      "Finiture di alta qualità",
    ],
    color: "from-blue-500/10 to-indigo-500/10",
    size: "small",
  },
  {
    icon: Settings2,
    emoji: "🛠️",
    title: "Assistenza Tecnica",
    description:
      "Supporto completo nella manutenzione e riparazione di impianti industriali con interventi tempestivi e ricambi dal magazzino automatico.",
    details: [
      "Interventi tempestivi on-site",
      "Magazzino ricambi automatizzato",
      "Manutenzione programmata",
      "Consulenza tecnica dedicata",
    ],
    color: "from-violet-500/10 to-purple-500/10",
    size: "small",
  },
  {
    icon: Wrench,
    emoji: "🔥",
    title: "Saldatura Specializzata",
    description:
      "Saldature MIG/MAG, TIG e ossiacetilene su tavola rotante per la lavorazione di tubi e componenti strutturali complessi.",
    details: [
      "MIG/MAG, TIG, Ossiacetilene",
      "Tavola rotante per tubi",
      "Acciaio, inox, alluminio",
      "Certificazioni di qualità",
    ],
    color: "from-red-500/10 to-orange-500/10",
    size: "small",
  },
  {
    icon: Hammer,
    emoji: "📐",
    title: "Progettazione & Sviluppo",
    description:
      "Dall'idea al prodotto finito: vi accompagniamo nello sviluppo tecnico di nuovi pezzi e ricambi, con prototipazione rapida e consulenza.",
    details: [
      "Co-design con il cliente",
      "Sviluppo da disegno o campione",
      "Prototipazione e validazione",
      "Ottimizzazione produttiva",
    ],
    color: "from-teal-500/10 to-emerald-500/10",
    size: "large",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const isLarge = service.size === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 4 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`card group relative ${isLarge ? "md:col-span-2" : ""}`}
    >
      {/* Image placeholder */}
      <div
        className={`service-card-image mb-5 ${
          isLarge ? "h-40 sm:h-48" : "h-32 sm:h-40"
        } flex flex-col items-center justify-center gap-2 bg-gradient-to-br ${service.color}`}
      >
        <span className="text-4xl sm:text-5xl animate-float">{service.emoji}</span>
        <div className="flex items-center gap-1.5 text-[var(--foreground-muted)] text-xs">
          <ImageIcon size={12} />
          <span>Immagine in arrivo</span>
        </div>
      </div>

      <div className="flex items-start gap-4 mb-4">
        <div className="w-11 h-11 rounded-lg bg-[var(--accent-glow)] border border-[var(--border-accent)] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400">
          <service.icon size={20} className="text-[var(--accent-light)]" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-1 tracking-tight">
            {service.title}
          </h3>
          <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
        }}
        className={`grid ${
          isLarge ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-1 sm:grid-cols-2"
        } gap-2 mt-4 pt-4 border-t border-white/[0.05]`}
      >
        {service.details.map((detail) => (
          <motion.li
            key={detail}
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
            {detail}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default function ServiziPage() {
  return (
    <main className="noise-overlay">
      <PageHero
        overline="I Nostri Servizi"
        title="Soluzioni industriali complete per ogni esigenza"
        description="Un ventaglio completo di lavorazioni meccaniche di precisione, supportate da tecnologia CNC avanzata e decenni di esperienza."
      />

      {/* ─── Services — Dynamic Layout ─── */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </Section>

      <hr className="section-divider" />

      {/* ─── Attrezzature ─── */}
      <Section dark>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader
              overline="Completamento Officina"
              title="Attrezzature complementari"
              description="Oltre ai centri di lavoro CNC, la nostra officina dispone di una gamma completa di attrezzature per ogni esigenza produttiva."
            />
            <ul className="space-y-3">
              {[
                { text: "Lapidelli per rettifica di precisione", emoji: "🔧" },
                { text: "Seghetti a nastro per taglio materiali", emoji: "🪚" },
                { text: "Presse da montaggio", emoji: "⚙️" },
                { text: "Saldatrici MIG/MAG, TIG e ossiacetilene", emoji: "🔥" },
                { text: "Tavola rotante per saldatura tubi", emoji: "🔄" },
              ].map((item, i) => (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-center gap-3 text-[var(--foreground-muted)]"
                >
                  <span className="text-lg">{item.emoji}</span>
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                  {item.text}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="card !p-6 sm:!p-8 text-center"
          >
            <span className="text-5xl block mb-4">🚀</span>
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

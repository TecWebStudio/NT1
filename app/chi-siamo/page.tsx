"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PageHero from "../components/PageHero";
import Section, { SectionHeader } from "../components/Section";
import { Shield, Target, Cpu, Award, Users, Clock } from "lucide-react";

const timeline = [
  {
    year: "1990",
    emoji: "🔧",
    title: "Le Origini",
    description:
      "Nasce la passione per la meccanica di precisione. I primi passi in un piccolo laboratorio nel cuore del Veneto, con la visione di creare qualcosa di grande.",
  },
  {
    year: "1998",
    emoji: "🏭",
    title: "Fondazione NT1 Service",
    description:
      "Si concretizza il progetto con la fondazione ufficiale di NT1 Service SRL a San Stino di Livenza. Primi investimenti in macchinari CNC e avvio delle collaborazioni industriali.",
  },
  {
    year: "2005",
    emoji: "⚙️",
    title: "Espansione del Parco Macchine",
    description:
      "Importante ampliamento dell'officina con l'acquisizione di nuovi centri di lavoro CNC a 3 assi, torni di precisione e attrezzature per la saldatura specializzata.",
  },
  {
    year: "2012",
    emoji: "🚀",
    title: "Magazzino Automatizzato",
    description:
      "Investimento nel magazzino automatico per la gestione dei ricambi, riducendo i tempi di consegna e migliorando drasticamente l'efficienza produttiva.",
  },
  {
    year: "2018",
    emoji: "🌍",
    title: "Crescita e Diversificazione",
    description:
      "Ampliamento dei servizi con lavorazione gomma e plastica. NT1 diventa un partner completo per le aziende, dal prototipo alla produzione in serie.",
  },
  {
    year: "Oggi",
    emoji: "💎",
    title: "Eccellenza e Innovazione",
    description:
      "Oltre 30 anni di esperienza, 500+ progetti completati e un team dedicato che continua ad investire in tecnologia e formazione per restare all'avanguardia.",
  },
];

const values = [
  {
    icon: Shield,
    emoji: "🛡️",
    title: "Qualità Certificata",
    text: "Standard di lavorazione ai massimi livelli, con controllo qualità rigoroso su ogni pezzo prodotto.",
  },
  {
    icon: Target,
    emoji: "🎯",
    title: "Precisione Assoluta",
    text: "Tolleranze minime grazie a macchinari CNC dotati di sonde di misura e righe ottiche.",
  },
  {
    icon: Cpu,
    emoji: "💻",
    title: "Tecnologia Avanzata",
    text: "Parco macchine all'avanguardia costantemente aggiornato per rispondere alle esigenze più complesse.",
  },
  {
    icon: Award,
    emoji: "🏆",
    title: "Esperienza Trentennale",
    text: "Oltre 30 anni di esperienza nella lavorazione meccanica di precisione al servizio dell'industria.",
  },
  {
    icon: Users,
    emoji: "🤝",
    title: "Approccio Collaborativo",
    text: "Lavoriamo a stretto contatto con i clienti, dal progetto alla consegna, come veri partner industriali.",
  },
  {
    icon: Clock,
    emoji: "⏱️",
    title: "Tempi Certi",
    text: "Pianificazione efficiente e magazzino automatizzato per garantire consegne puntuali e affidabili.",
  },
];

const stats = [
  { value: "30+", label: "Anni di Esperienza", emoji: "📅" },
  { value: "500+", label: "Progetti Completati", emoji: "📦" },
  { value: "99%", label: "Clienti Soddisfatti", emoji: "⭐" },
  { value: "24h", label: "Tempo di Risposta", emoji: "⚡" },
];

function TimelineItem({
  item,
  index,
}: {
  item: (typeof timeline)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-start gap-4 md:gap-0 mb-12 md:mb-16 last:mb-0">
      {/* Mobile: dot left + content right */}
      {/* Desktop: alternating left/right */}

      {/* Left content (desktop even) */}
      <div className="hidden md:flex md:w-1/2 md:justify-end md:pr-12">
        {isEven && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="card !p-6 max-w-md text-right"
          >
            <span className="text-3xl mb-3 block">{item.emoji}</span>
            <span className="text-[var(--accent-light)] font-mono text-sm font-bold tracking-wider">
              {item.year}
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2 tracking-tight">
              {item.title}
            </h3>
            <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        )}
      </div>

      {/* Center dot (desktop) */}
      <div className="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 md:top-6 md:z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.4,
            delay: 0.15,
            type: "spring",
            stiffness: 300,
          }}
          className="timeline-dot timeline-dot-pulse"
        />
      </div>

      {/* Mobile: dot */}
      <div className="md:hidden flex flex-col items-center shrink-0 pt-1">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
          className="timeline-dot timeline-dot-pulse"
        />
      </div>

      {/* Mobile: content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden card !p-5 flex-1"
      >
        <span className="text-2xl mb-2 block">{item.emoji}</span>
        <span className="text-[var(--accent-light)] font-mono text-sm font-bold tracking-wider">
          {item.year}
        </span>
        <h3 className="text-lg font-bold text-white mt-1 mb-2 tracking-tight">
          {item.title}
        </h3>
        <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
          {item.description}
        </p>
      </motion.div>

      {/* Right content (desktop odd) */}
      <div className="hidden md:flex md:w-1/2 md:pl-12">
        {!isEven && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="card !p-6 max-w-md"
          >
            <span className="text-3xl mb-3 block">{item.emoji}</span>
            <span className="text-[var(--accent-light)] font-mono text-sm font-bold tracking-wider">
              {item.year}
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2 tracking-tight">
              {item.title}
            </h3>
            <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function ChiSiamoPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="noise-overlay">
      <PageHero
        overline="Chi Siamo"
        title="Un partner industriale su cui contare da sempre"
        description="NT1 Service SRL è un'azienda specializzata nella lavorazione meccanica di precisione con sede a San Stino di Livenza (VE)."
      />

      {/* ─── Intro + Stats ─── */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              overline="La Nostra Storia"
              title="Decenni di eccellenza nella meccanica di precisione"
            />
            <div className="space-y-5 text-[var(--foreground-muted)] leading-relaxed">
              <p>
                NT1 Service SRL è nata dalla passione per la meccanica di precisione e
                dalla volontà di offrire alle aziende un servizio completo e affidabile.
                Con sede a San Stino di Livenza, nel cuore del Veneto industriale, siamo
                cresciuti insieme ai nostri clienti, investendo costantemente in tecnologia
                e competenze.
              </p>
              <p>
                La nostra officina è equipaggiata con centri di lavoro CNC, torni di
                precisione e un magazzino automatizzato che ci consente di gestire ricambi
                e commesse con la massima efficienza. L&apos;esperienza maturata negli anni ci
                permette di affrontare qualsiasi sfida produttiva con competenza e
                affidabilità.
              </p>
            </div>
          </motion.div>

          {/* Stats column */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="card !p-5 sm:!p-6 text-center"
              >
                <span className="text-2xl sm:text-3xl block mb-2">{stat.emoji}</span>
                <div className="stat-value mb-1">{stat.value}</div>
                <div className="text-[var(--foreground-muted)] text-xs sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <hr className="section-divider" />

      {/* ─── Timeline ─── */}
      <Section dark>
        <SectionHeader
          overline="La Nostra Evoluzione"
          title="Un percorso di crescita continua"
          description="Dalle origini ad oggi, ogni anno ha segnato un passo avanti verso l'eccellenza nella meccanica di precisione."
          center
        />

        <div ref={timelineRef} className="relative mt-8">
          {/* Animated line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[var(--border)]">
            <motion.div
              className="w-full bg-gradient-to-b from-[var(--accent)] via-[var(--accent-light)] to-[var(--accent)]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Animated line (mobile) */}
          <div className="md:hidden absolute left-[6px] top-0 bottom-0 w-0.5 bg-[var(--border)]">
            <motion.div
              className="w-full bg-gradient-to-b from-[var(--accent)] via-[var(--accent-light)] to-[var(--accent)]"
              style={{ height: lineHeight }}
            />
          </div>

          {timeline.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>
      </Section>

      <hr className="section-divider" />

      {/* ─── Valori ─── */}
      <Section>
        <SectionHeader
          overline="I Nostri Valori"
          title="Ciò che ci guida ogni giorno"
          description="Ogni lavorazione che esce dalla nostra officina riflette i valori fondamentali su cui abbiamo costruito la nostra reputazione."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="card group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent-glow)] border border-[var(--border-accent)] flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
                  <item.icon size={22} className="text-[var(--accent-light)]" />
                </div>
                <span className="text-2xl">{item.emoji}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
}

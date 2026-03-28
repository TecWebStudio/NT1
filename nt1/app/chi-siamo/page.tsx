"use client";

import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import Section, { SectionHeader } from "../components/Section";
import { Shield, Target, Cpu, Award, Users, Clock } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Qualità Certificata",
    text: "Standard di lavorazione ai massimi livelli, con controllo qualità rigoroso su ogni pezzo prodotto.",
  },
  {
    icon: Target,
    title: "Precisione Assoluta",
    text: "Tolleranze minime grazie a macchinari CNC dotati di sonde di misura e righe ottiche.",
  },
  {
    icon: Cpu,
    title: "Tecnologia Avanzata",
    text: "Parco macchine all'avanguardia costantemente aggiornato per rispondere alle esigenze più complesse.",
  },
  {
    icon: Award,
    title: "Esperienza Trentennale",
    text: "Oltre 30 anni di esperienza nella lavorazione meccanica di precisione al servizio dell'industria.",
  },
  {
    icon: Users,
    title: "Approccio Collaborativo",
    text: "Lavoriamo a stretto contatto con i clienti, dal progetto alla consegna, come veri partner industriali.",
  },
  {
    icon: Clock,
    title: "Tempi Certi",
    text: "Pianificazione efficiente e magazzino automatizzato per garantire consegne puntuali e affidabili.",
  },
];

export default function ChiSiamoPage() {
  return (
    <main className="noise-overlay">
      <PageHero
        overline="Chi Siamo"
        title="Un partner industriale su cui contare da sempre"
        description="NT1 Service SRL è un'azienda specializzata nella lavorazione meccanica di precisione con sede a San Stino di Livenza (VE)."
      />

      {/* ─── Storia ─── */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
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
              <p>
                Offriamo soluzioni complete per la lavorazione di acciaio, gomma e plastica,
                supportando le imprese dallo sviluppo del progetto fino alla produzione in
                serie, con un&apos;attenzione costante alla qualità e ai tempi di consegna.
              </p>
            </div>
          </motion.div>

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { value: "30+", label: "Anni di Esperienza" },
              { value: "500+", label: "Progetti Completati" },
              { value: "99%", label: "Clienti Soddisfatti" },
              { value: "24h", label: "Tempo di Risposta" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="card !p-6 text-center"
              >
                <div className="stat-value mb-2">{stat.value}</div>
                <div className="text-[var(--foreground-muted)] text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      <hr className="section-divider" />

      {/* ─── Valori ─── */}
      <Section dark>
        <SectionHeader
          overline="I Nostri Valori"
          title="Ciò che ci guida ogni giorno"
          description="Ogni lavorazione che esce dalla nostra officina riflette i valori fondamentali su cui abbiamo costruito la nostra reputazione."
          center
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card group"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-glow)] border border-[var(--border-accent)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-400">
                <item.icon size={22} className="text-[var(--accent-light)]" />
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

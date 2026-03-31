"use client";

import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ExternalLink,
  ChevronUp,
} from "lucide-react";

const footerNav = [
  {
    title: "Navigazione",
    links: [
      { label: "Home", href: "/" },
      { label: "Chi Siamo", href: "/chi-siamo" },
      { label: "Servizi", href: "/servizi" },
      { label: "Parco Macchine", href: "/parco-macchine" },
      { label: "Contatti", href: "/contatti" },
    ],
  },
  {
    title: "Legale",
    links: [
      {
        label: "Informativa Privacy",
        href: "https://www.iubenda.com/privacy-policy/70894784",
        external: true,
      },
      {
        label: "Cookie Policy",
        href: "https://www.iubenda.com/privacy-policy/70894784/cookie-policy",
        external: true,
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#04040A] border-t border-white/[0.05]">
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center font-bold text-white text-lg">
                N1
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wide text-white leading-tight">
                  NT1 SERVICE
                </span>
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[var(--foreground-muted)]">
                  SRL a socio unico
                </span>
              </div>
            </div>
            <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-5 max-w-xs">
              Al servizio delle aziende per sviluppare ed assistere le vostre
              idee. Lavorazione di precisione su acciaio, gomma e plastica.
            </p>
            <div className="flex flex-col gap-2 text-sm text-[var(--foreground-muted)]">
              <span>P.IVA: 04889380277</span>
              <span>REA: VE-461158</span>
            </div>
          </div>

          {/* Link Columns */}
          {footerNav.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold tracking-[0.12em] uppercase text-white mb-5">
                {group.title}
              </h4>
              <ul className="space-y-3.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--foreground-muted)] hover:text-white text-sm transition-colors duration-300 inline-flex items-center gap-1.5 group"
                      >
                        {link.label}
                        <ExternalLink
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[var(--foreground-muted)] hover:text-white text-sm transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.12em] uppercase text-white mb-5">
              Contatti
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="text-[var(--accent-light)] mt-0.5 shrink-0" />
                <div>
                  <span className="text-sm text-[var(--foreground-muted)] block leading-relaxed">
                    Via I° Maggio 6/B
                  </span>
                  <span className="text-sm text-[var(--foreground-muted)]">
                    30029 San Stino di Livenza (VE)
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={17} className="text-[var(--accent-light)] shrink-0" />
                <a
                  href="tel:+390421148139"
                  className="text-sm text-[var(--foreground-muted)] hover:text-white transition-colors"
                >
                  +39 0421 14 81 319
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={17} className="text-[var(--accent-light)] shrink-0" />
                <a
                  href="mailto:info@nt1service.com"
                  className="text-sm text-[var(--foreground-muted)] hover:text-white transition-colors"
                >
                  info@nt1service.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={17} className="text-[var(--accent-light)] mt-0.5 shrink-0" />
                <div>
                  <span className="text-sm text-[var(--foreground-muted)] block">Lun — Ven</span>
                  <span className="text-sm text-white">8:00–12:00 / 14:00–18:00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] mt-16 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--foreground-muted)] tracking-wide">
            © {new Date().getFullYear()} NT1 Service SRL a socio unico. Tutti i diritti riservati.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xs text-[var(--foreground-muted)] hover:text-[var(--accent-light)] transition-colors group"
          >
            Torna in alto
            <ChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

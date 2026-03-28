"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Servizi", href: "/servizi" },
  { label: "Parco Macchine", href: "/parco-macchine" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#06060B]/90 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between h-20 lg:h-[88px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center font-bold text-white text-lg tracking-tight">
              N1
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wide text-white leading-tight">
                NT1 SERVICE
              </span>
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[var(--foreground-muted)] leading-tight">
                Lavorazioni Meccaniche
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[1.1rem] font-medium tracking-[0.03em] transition-colors duration-300 relative group ${
                    isActive
                      ? "text-white"
                      : "text-[var(--foreground-muted)] hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] bg-[var(--accent)] transition-all duration-300 ease-[var(--ease-out-expo)] ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="tel:+390421148139"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-[#06060B] font-bold text-sm tracking-wide hover:bg-[var(--accent-light)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <Phone size={15} />
            Chiamaci
          </a>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#06060B]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-7"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  className={`text-2xl font-semibold tracking-wide transition-colors ${
                    pathname === link.href
                      ? "text-[var(--accent-light)]"
                      : "text-white hover:text-[var(--accent-light)]"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="tel:+390421148139"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="btn-primary mt-4"
            >
              <Phone size={18} />
              +39 0421 14 81 319
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

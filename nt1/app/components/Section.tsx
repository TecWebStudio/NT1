"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Section({
  id,
  children,
  className = "",
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section relative overflow-hidden ${
        dark ? "bg-[var(--background-elevated)]" : ""
      } ${className}`}
    >
      <div className="container relative z-10">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  overline: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionHeader({
  overline,
  title,
  description,
  center = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}
    >
      <span className={`overline ${center ? "justify-center" : ""}`}>
        {overline}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-[1.15] mb-5">
        {title}
      </h2>
      {description && (
        <p className="text-[var(--foreground-muted)] text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

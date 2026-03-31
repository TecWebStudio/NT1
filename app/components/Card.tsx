"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { type ReactNode } from "react";

interface CardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  index?: number;
  children?: ReactNode;
  className?: string;
}

export default function Card({
  icon: Icon,
  title,
  description,
  index = 0,
  children,
  className = "",
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`card group ${className}`}
    >
      {Icon && (
        <div className="w-12 h-12 rounded-lg bg-[var(--accent-glow)] border border-[var(--border-accent)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-400">
          <Icon size={24} className="text-[var(--accent-light)]" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-[var(--foreground-muted)] leading-relaxed text-[0.93rem]">
        {description}
      </p>
      {children}
    </motion.div>
  );
}

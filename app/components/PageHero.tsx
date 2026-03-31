"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const SceneBackground = dynamic(() => import("./SceneBackground"), {
  ssr: false,
});

interface PageHeroProps {
  overline: string;
  title: string;
  description?: string;
}

export default function PageHero({
  overline,
  title,
  description,
}: PageHeroProps) {
  return (
    <div className="page-hero relative overflow-hidden">
      <SceneBackground />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="overline">{overline}</span>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.1] mb-5">
            {title}
          </h1>
          {description && (
            <p className="text-[var(--foreground-muted)] text-lg leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}

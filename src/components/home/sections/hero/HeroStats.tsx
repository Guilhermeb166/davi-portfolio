"use client";

import { motion } from "framer-motion";
import { certificates, totalHours } from "@/data/certificates";

const stats = [
  { value: `${totalHours}h`, label: "de formação prática" },
  { value: `${certificates.length}`, label: "certificações" },
  { value: "100%", label: "foco em prazo e qualidade" },
];

export function HeroStats() {
  return (
    <motion.dl
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-8"
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            {stat.value}
          </dt>
          <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">
            {stat.label}
          </dd>
        </div>
      ))}
    </motion.dl>
  );
}

"use client";

import { motion } from "framer-motion";
import type { JourneyItem as JourneyItemData } from "@/data/journey";

type JourneyItemProps = {
  item: JourneyItemData;
  delay: number;
};

export function JourneyItem({ item, delay }: JourneyItemProps) {
  const Icon = item.icon;

  return (
    <motion.li
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
      className="relative"
    >
      <span className="absolute -left-[3.2rem] top-1 grid size-10 place-items-center rounded-full bg-linear-to-br from-primary to-accent text-on-primary ring-4 ring-background sm:-left-[3.7rem]">
        <Icon size={16} />
      </span>
      <div className="rounded-3xl border border-border bg-surface p-6 shadow-card">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          {item.period}
        </span>
        <h3 className="mt-1 font-display text-xl font-bold">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {item.description}
        </p>
      </div>
    </motion.li>
  );
}

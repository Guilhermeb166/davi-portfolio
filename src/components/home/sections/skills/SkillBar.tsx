"use client";

import { motion } from "framer-motion";

type SkillBarProps = {
  name: string;
  hours: number;
  percent: number;
  delay: number;
};

export function SkillBar({ name, hours, percent, delay }: SkillBarProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm font-semibold">
        <span>{name}</span>
        <span className="text-primary">{hours}h</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-primary-soft">
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-primary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

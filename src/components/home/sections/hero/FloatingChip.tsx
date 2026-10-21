"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";

type FloatingChipProps = {
  icon: IconType;
  label: string;
  className: string;
  delay: number;
};

export function FloatingChip({
  icon: Icon,
  label,
  className,
  delay,
}: FloatingChipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`absolute ${className}`}
    >
      <div
        className="flex animate-float items-center gap-2 rounded-2xl border border-border bg-surface/90 px-3.5 py-2.5 text-sm font-semibold shadow-card backdrop-blur"
        style={{ animationDelay: `${delay * 2}s` }}
      >
        <span className="grid size-8 place-items-center rounded-lg bg-primary-soft text-primary">
          <Icon size={15} />
        </span>
        {label}
      </div>
    </motion.div>
  );
}

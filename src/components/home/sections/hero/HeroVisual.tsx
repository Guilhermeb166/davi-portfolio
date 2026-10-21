"use client";

import { motion } from "framer-motion";
import { FaBullhorn, FaChartLine, FaFileExcel, FaRobot } from "react-icons/fa6";
import { profile } from "@/data/profile";
import { FloatingChip } from "./FloatingChip";

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto grid aspect-square w-full max-w-md place-items-center"
    >
      <div className="absolute inset-4 animate-spin-slow rounded-full border-2 border-dashed border-primary/40" />
      <div className="absolute inset-14 rounded-full border border-border" />
      <div className="absolute inset-24 rounded-full bg-linear-to-br from-primary/25 to-accent/25 blur-2xl" />

      <div className="relative grid size-44 place-items-center rounded-[2.5rem] bg-linear-to-br from-primary to-accent shadow-card sm:size-52">
        <span className="font-display text-6xl font-bold text-on-primary sm:text-7xl">
          {profile.initials}
        </span>
      </div>

      <FloatingChip
        icon={FaBullhorn}
        label="Marketing"
        className="left-0 top-10"
        delay={0.6}
      />
      <FloatingChip
        icon={FaFileExcel}
        label="Excel"
        className="right-0 top-24"
        delay={0.8}
      />
      <FloatingChip
        icon={FaRobot}
        label="IA aplicada"
        className="bottom-12 left-2"
        delay={1}
      />
      <FloatingChip
        icon={FaChartLine}
        label="Resultados"
        className="bottom-2 right-6"
        delay={1.2}
      />
    </motion.div>
  );
}

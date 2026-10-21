"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { RotatingRole } from "./RotatingRole";

export function HeroTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="space-y-4"
    >
      <p className="font-medium text-muted">Olá, eu sou</p>
      <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
        <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
          {profile.shortName}
        </span>
      </h1>
      <RotatingRole />
      <p className="max-w-xl pt-2 text-base leading-relaxed text-muted sm:text-lg">
        {profile.intro}
      </p>
    </motion.div>
  );
}

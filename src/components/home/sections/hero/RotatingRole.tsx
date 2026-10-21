"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((current) => (current + 1) % profile.roles.length),
      2600,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-9 overflow-hidden sm:h-11">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[index]}
          initial={{ y: 36, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -36, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute left-0 font-display text-2xl font-semibold text-primary sm:text-3xl"
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

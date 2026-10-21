"use client";

import IconButton from "@mui/material/IconButton";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { navigation } from "@/data/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <IconButton
        onClick={() => setOpen((value) => !value)}
        aria-label="Abrir menu"
        sx={{
          color: "var(--foreground)",
          border: "1px solid var(--border)",
          backgroundColor: "var(--surface)",
        }}
      >
        {open ? <FaXmark size={16} /> : <FaBars size={16} />}
      </IconButton>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-[4.5rem] rounded-3xl border border-border bg-surface p-3 shadow-card"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold transition-colors hover:bg-primary-soft hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

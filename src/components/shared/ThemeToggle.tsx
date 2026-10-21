"use client";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useThemeMode } from "@/hooks/useThemeMode";

export function ThemeToggle() {
  const { mode, toggle } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <Tooltip title={isDark ? "Tema claro" : "Tema escuro"}>
      <IconButton
        onClick={toggle}
        aria-label="Alternar tema"
        sx={{
          color: "var(--primary)",
          border: "1px solid var(--border)",
          backgroundColor: "var(--surface)",
          "&:hover": { backgroundColor: "var(--primary-soft)" },
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={mode}
            className="flex"
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
          </motion.span>
        </AnimatePresence>
      </IconButton>
    </Tooltip>
  );
}

"use client";

import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { FaArrowRight, FaAward } from "react-icons/fa6";
import { outlinedButtonSx, primaryButtonSx } from "@/lib/muiInput";

export function HeroActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="flex flex-wrap gap-3"
    >
      <Button
        href="#contato"
        sx={primaryButtonSx}
        endIcon={<FaArrowRight size={14} />}
      >
        Solicitar orçamento
      </Button>
      <Button
        href="#certificados"
        variant="outlined"
        sx={outlinedButtonSx}
        startIcon={<FaAward size={14} />}
      >
        Ver certificados
      </Button>
    </motion.div>
  );
}

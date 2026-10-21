"use client";

import Chip from "@mui/material/Chip";
import type { SoftSkill } from "@/data/skills";

export function SoftSkillChip({ skill }: { skill: SoftSkill }) {
  const Icon = skill.icon;

  return (
    <Chip
      icon={<Icon size={14} />}
      label={skill.name}
      sx={{
        height: 42,
        px: 0.5,
        fontWeight: 600,
        fontFamily: "inherit",
        color: "var(--foreground)",
        backgroundColor: "var(--surface-alt)",
        border: "1px solid var(--border)",
        transition: "all 0.2s ease",
        "& .MuiChip-icon": { color: "var(--primary)" },
        "&:hover": {
          backgroundColor: "var(--primary)",
          color: "var(--on-primary)",
          transform: "translateY(-2px)",
          "& .MuiChip-icon": { color: "var(--on-primary)" },
        },
      }}
    />
  );
}

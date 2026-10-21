"use client";

import { Reveal } from "@/components/shared/Reveal";
import { softSkills } from "@/data/skills";
import { SoftSkillChip } from "./SoftSkillChip";

export function SoftSkills() {
  return (
    <Reveal
      delay={0.1}
      className="rounded-3xl border border-border bg-surface p-7 shadow-card"
    >
      <h3 className="font-display text-xl font-bold">Competências</h3>
      <p className="mt-1 text-sm text-muted">
        Como eu trabalho com pessoas e resultados.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {softSkills.map((skill) => (
          <SoftSkillChip key={skill.name} skill={skill} />
        ))}
      </div>
    </Reveal>
  );
}

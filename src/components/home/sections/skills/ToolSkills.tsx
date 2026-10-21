import { Reveal } from "@/components/shared/Reveal";
import { toolSkills } from "@/data/skills";
import { SkillBar } from "./SkillBar";

const maxHours = Math.max(...toolSkills.map((skill) => skill.hours));

export function ToolSkills() {
  return (
    <Reveal className="rounded-3xl border border-border bg-surface p-7 shadow-card">
      <h3 className="font-display text-xl font-bold">Ferramentas</h3>
      <p className="mt-1 text-sm text-muted">
        Carga horária de formação em cada área.
      </p>
      <div className="mt-6 space-y-5">
        {toolSkills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            hours={skill.hours}
            percent={(skill.hours / maxHours) * 100}
            delay={index * 0.08}
          />
        ))}
      </div>
    </Reveal>
  );
}

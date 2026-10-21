import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SoftSkills } from "./SoftSkills";
import { ToolSkills } from "./ToolSkills";

export function Skills() {
  return (
    <SectionContainer id="habilidades">
      <SectionTitle
        eyebrow="Habilidades"
        title="Técnica e comportamento andando juntas"
        description="Domínio das principais ferramentas de trabalho, somado a habilidades humanas que fazem a diferença no dia a dia."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <ToolSkills />
        <SoftSkills />
      </div>
    </SectionContainer>
  );
}

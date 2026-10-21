import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { AboutHighlights } from "./AboutHighlights";
import { AboutText } from "./AboutText";

export function About() {
  return (
    <SectionContainer id="sobre">
      <SectionTitle
        eyebrow="Sobre mim"
        title="Profissionalismo que você pode contar"
        description="Compromisso com resultado, clareza na comunicação e entrega dentro do combinado."
      />
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <AboutText />
        <AboutHighlights />
      </div>
    </SectionContainer>
  );
}

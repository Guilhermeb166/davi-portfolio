import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export function Contact() {
  return (
    <SectionContainer id="contato" className="bg-surface-alt/50">
      <SectionTitle
        eyebrow="Contato"
        title="Vamos conversar sobre o seu projeto?"
        description="Conte o que sua empresa precisa e receba uma resposta rápida, direto no WhatsApp."
      />
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <ContactInfo />
        <ContactForm />
      </div>
    </SectionContainer>
  );
}

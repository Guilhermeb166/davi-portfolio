"use client";

import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <SectionContainer id="servicos" className="bg-surface-alt/50">
      <SectionTitle
        eyebrow="Serviços"
        title="Como posso ajudar sua empresa"
        description="Serviços sob demanda, pensados para dar agilidade e organização à sua operação."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            service={service}
            delay={index * 0.08}
          />
        ))}
      </div>
    </SectionContainer>
  );
}

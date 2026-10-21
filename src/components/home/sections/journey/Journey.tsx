"use client";

import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { journey } from "@/data/journey";
import { JourneyItem } from "./JourneyItem";

export function Journey() {
  return (
    <SectionContainer id="trajetoria">
      <SectionTitle
        eyebrow="Trajetória"
        title="Base sólida desde cedo"
        description="Experiências que moldaram minha postura de responsabilidade, liderança e colaboração."
      />
      <ol className="relative mx-auto max-w-3xl space-y-8 border-l-2 border-border pl-8 sm:pl-10">
        {journey.map((item, index) => (
          <JourneyItem key={item.title} item={item} delay={index * 0.1} />
        ))}
      </ol>
    </SectionContainer>
  );
}

import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { certificates } from "@/data/certificates";
import { CertificateCard } from "./CertificateCard";

export function Certificates() {
  return (
    <SectionContainer id="certificados" className="bg-surface-alt/50">
      <SectionTitle
        eyebrow="Certificados"
        title="Formação comprovada"
        description="Cursos concluídos que sustentam a qualidade do meu trabalho. Baixe qualquer certificado para conferir."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.file}
            certificate={certificate}
            delay={(index % 3) * 0.1}
          />
        ))}
      </div>
    </SectionContainer>
  );
}

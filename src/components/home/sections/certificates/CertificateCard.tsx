import { FaAward, FaClock } from "react-icons/fa6";
import { Reveal } from "@/components/shared/Reveal";
import type { Certificate } from "@/data/certificates";
import { DownloadButton } from "./DownloadButton";

type CertificateCardProps = {
  certificate: Certificate;
  delay: number;
};

export function CertificateCard({ certificate, delay }: CertificateCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary">
        <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/15 blur-2xl transition-opacity group-hover:opacity-100" />
        <span className="relative grid size-12 place-items-center rounded-2xl bg-linear-to-br from-primary to-accent text-on-primary">
          <FaAward size={22} />
        </span>
        <h3 className="relative mt-5 font-display text-xl font-bold">
          {certificate.title}
        </h3>
        <p className="relative mt-1 text-sm text-muted">
          {certificate.institution}
        </p>
        <p className="relative mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
          <FaClock size={13} />
          {certificate.hours} horas
        </p>
        <div className="relative mt-auto pt-6">
          <DownloadButton file={certificate.file} title={certificate.title} />
        </div>
      </article>
    </Reveal>
  );
}

import type { IconType } from "react-icons";
import { Reveal } from "@/components/shared/Reveal";

type HighlightCardProps = {
  icon: IconType;
  title: string;
  description: string;
  delay: number;
};

export function HighlightCard({
  icon: Icon,
  title,
  description,
  delay,
}: HighlightCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="flex h-full gap-4 rounded-3xl border border-border bg-surface p-5 shadow-card transition-transform duration-300 hover:-translate-y-1">
        <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-primary to-accent text-on-primary">
          <Icon size={20} />
        </span>
        <div>
          <h3 className="font-display text-lg font-bold">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            {description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

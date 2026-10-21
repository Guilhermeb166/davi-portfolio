import type { IconType } from "react-icons";

type ContactInfoItemProps = {
  icon: IconType;
  label: string;
  value: string;
  href?: string;
};

export function ContactInfoItem({
  icon: Icon,
  label,
  value,
  href,
}: ContactInfoItemProps) {
  const content = (
    <>
      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-primary to-accent text-on-primary">
        <Icon size={20} />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-widest text-muted">
          {label}
        </span>
        <span className="block truncate font-display text-base font-bold">
          {value}
        </span>
      </span>
    </>
  );

  const className =
    "flex items-center gap-4 rounded-3xl border border-border bg-surface p-5 shadow-card transition-all duration-300";

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} hover:-translate-y-1 hover:border-primary`}
    >
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}

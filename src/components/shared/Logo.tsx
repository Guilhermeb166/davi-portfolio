import { profile } from "@/data/profile";

export function Logo() {
  return (
    <a
      href="#inicio"
      className="group flex items-center gap-2.5"
      aria-label="Início"
    >
      <span className="grid size-10 place-items-center rounded-xl bg-linear-to-br from-primary to-accent font-display text-sm font-bold text-on-primary shadow-card transition-transform group-hover:rotate-6">
        {profile.initials}
      </span>
      <span className="font-display text-lg font-bold tracking-tight">
        {profile.shortName}
      </span>
    </a>
  );
}

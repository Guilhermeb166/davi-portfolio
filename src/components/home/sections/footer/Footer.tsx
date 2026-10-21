import { Logo } from "@/components/shared/Logo";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <Logo />
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

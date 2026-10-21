import { navigation } from "@/data/navigation";

export function NavLinks() {
  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
      {navigation.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-primary-soft hover:text-primary"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

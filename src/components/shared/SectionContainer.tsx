import type { ReactNode } from "react";

type SectionContainerProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function SectionContainer({
  id,
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <section id={id} className={`relative py-24 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

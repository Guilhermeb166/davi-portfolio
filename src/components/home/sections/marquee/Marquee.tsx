import { FaStar } from "react-icons/fa6";
import { marqueeItems } from "@/data/skills";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-border bg-surface py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      <div className="flex w-max animate-marquee items-center gap-10">
        {items.map((item, index) => (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: lista estática duplicada para o loop
            key={`${item}-${index}`}
            className="flex items-center gap-10 font-display text-lg font-semibold text-muted"
          >
            {item}
            <FaStar className="text-accent" size={12} />
          </span>
        ))}
      </div>
    </div>
  );
}

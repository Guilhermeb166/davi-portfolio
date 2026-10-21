import { Reveal } from "@/components/shared/Reveal";
import { profile } from "@/data/profile";

export function AboutText() {
  return (
    <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
      {profile.about.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </Reveal>
  );
}

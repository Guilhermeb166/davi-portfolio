import { HeroActions } from "./HeroActions";
import { HeroBackground } from "./HeroBackground";
import { HeroBadge } from "./HeroBadge";
import { HeroStats } from "./HeroStats";
import { HeroTitle } from "./HeroTitle";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40"
    >
      <HeroBackground />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <HeroBadge />
          <HeroTitle />
          <HeroActions />
          <HeroStats />
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

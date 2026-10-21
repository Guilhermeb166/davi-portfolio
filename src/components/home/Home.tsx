import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { About } from "./sections/about";
import { Certificates } from "./sections/certificates";
import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";
import { Header } from "./sections/header";
import { Hero } from "./sections/hero";
import { Journey } from "./sections/journey";
import { Marquee } from "./sections/marquee";
import { Services } from "./sections/services";
import { Skills } from "./sections/skills";

export function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Skills />
        <Certificates />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

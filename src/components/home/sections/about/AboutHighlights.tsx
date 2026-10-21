import { FaClock, FaComments, FaGem } from "react-icons/fa6";
import { HighlightCard } from "./HighlightCard";

const highlights = [
  {
    icon: FaClock,
    title: "Prazo cumprido",
    description:
      "Organização e gestão de tempo para entregar quando combinado.",
  },
  {
    icon: FaGem,
    title: "Qualidade na entrega",
    description:
      "Atenção aos detalhes e padronização em cada material produzido.",
  },
  {
    icon: FaComments,
    title: "Comunicação clara",
    description:
      "Alinhamento constante, linguagem objetiva e postura profissional.",
  },
];

export function AboutHighlights() {
  return (
    <div className="grid gap-4">
      {highlights.map((item, index) => (
        <HighlightCard key={item.title} {...item} delay={index * 0.1} />
      ))}
    </div>
  );
}

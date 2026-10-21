import type { IconType } from "react-icons";
import {
  FaGraduationCap,
  FaPeopleGroup,
  FaUserGraduate,
} from "react-icons/fa6";

export type JourneyItem = {
  period: string;
  title: string;
  description: string;
  icon: IconType;
};

export const journey: JourneyItem[] = [
  {
    period: "2023",
    title: "Liderança de classe",
    description:
      "Representei minha turma, desenvolvendo comunicação, escuta e responsabilidade com o grupo.",
    icon: FaPeopleGroup,
  },
  {
    period: "2023 - 2024",
    title: "Projetos de monitoria",
    description:
      "Participação em monitorias da escola, apoiando colegas e fortalecendo a didática e o trabalho em equipe.",
    icon: FaUserGraduate,
  },
  {
    period: "2025",
    title: "Ensino médio completo",
    description: "Colégio Nossa Senhora das Graças.",
    icon: FaGraduationCap,
  },
];

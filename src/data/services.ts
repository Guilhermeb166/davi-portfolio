import type { IconType } from "react-icons";
import {
  FaBullhorn,
  FaClipboardCheck,
  FaFileExcel,
  FaFilePowerpoint,
  FaHeadset,
  FaRobot,
} from "react-icons/fa6";

export type Service = {
  title: string;
  description: string;
  icon: IconType;
  items: string[];
};

export const services: Service[] = [
  {
    title: "Marketing Digital",
    description:
      "Presença online estratégica para atrair e engajar o público certo.",
    icon: FaBullhorn,
    items: [
      "Conteúdo para redes sociais",
      "Planejamento de campanhas",
      "Identidade e comunicação",
    ],
  },
  {
    title: "Suporte Administrativo",
    description:
      "Rotinas organizadas para a equipe focar no que realmente importa.",
    icon: FaClipboardCheck,
    items: [
      "Organização de documentos",
      "Controle de agenda e demandas",
      "Cadastros e relatórios",
    ],
  },
  {
    title: "Planilhas e Gestão Financeira",
    description:
      "Controle claro dos números com planilhas inteligentes em Excel.",
    icon: FaFileExcel,
    items: [
      "Fluxo de caixa",
      "Dashboards e relatórios",
      "Automação de planilhas",
    ],
  },
  {
    title: "Apresentações e Documentos",
    description:
      "Materiais profissionais que comunicam com clareza e causam boa impressão.",
    icon: FaFilePowerpoint,
    items: [
      "Apresentações em PowerPoint",
      "Propostas e relatórios em Word",
      "Padronização visual",
    ],
  },
  {
    title: "IA aplicada ao Negócio",
    description:
      "Ferramentas de inteligência artificial para ganhar tempo e produtividade.",
    icon: FaRobot,
    items: [
      "Criação de conteúdo assistida",
      "Otimização de tarefas",
      "Pesquisa e análise rápida",
    ],
  },
  {
    title: "Atendimento e Comunicação",
    description:
      "Comunicação segura com clientes e equipes, com postura profissional.",
    icon: FaHeadset,
    items: [
      "Atendimento ao cliente",
      "Oratória e apresentação",
      "Alinhamento de equipes",
    ],
  },
];

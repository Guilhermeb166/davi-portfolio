import type { IconType } from "react-icons";
import {
  FaBolt,
  FaClock,
  FaMicrophone,
  FaPeopleGroup,
  FaShieldHeart,
  FaUsersGear,
} from "react-icons/fa6";

export const toolSkills = [
  { name: "PowerPoint", hours: 240 },
  { name: "Word", hours: 200 },
  { name: "Excel", hours: 120 },
  { name: "Informática", hours: 100 },
  { name: "Gestão Financeira com Excel", hours: 90 },
  { name: "Marketing Digital", hours: 80 },
] as const;

export type SoftSkill = { name: string; icon: IconType };

export const softSkills: SoftSkill[] = [
  { name: "Gestão de tempo", icon: FaClock },
  { name: "Human skills", icon: FaPeopleGroup },
  { name: "Oratória e autoridade", icon: FaMicrophone },
  { name: "Produtividade e eficiência", icon: FaBolt },
  { name: "Equipes de alta performance", icon: FaUsersGear },
  { name: "Resiliência sob pressão", icon: FaShieldHeart },
];

export const marqueeItems = [
  "Marketing Digital",
  "Excel",
  "PowerPoint",
  "Word",
  "Inteligência Artificial",
  "Gestão Financeira",
  "Assistente Administrativo",
  "Educação Financeira",
];

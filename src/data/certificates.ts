export type Certificate = {
  title: string;
  institution: string;
  hours: number;
  /** Arquivo dentro de /public/certificados */
  file: string;
};

export const certificates: Certificate[] = [
  {
    title: "Marketing Digital",
    institution: "Azara Treinamentos",
    hours: 80,
    file: "/certificados/marketing-digital.pdf",
  },
  {
    title: "Assistente Administrativo",
    institution: "Azara Treinamentos",
    hours: 60,
    file: "/certificados/assistente-administrativo.pdf",
  },
  {
    title: "Informática",
    institution: "Azara Treinamentos",
    hours: 100,
    file: "/certificados/informatica.pdf",
  },
  {
    title: "Educação Financeira",
    institution: "Escola de Pessoas",
    hours: 7,
    file: "/certificados/educacao-financeira.pdf",
  },
  {
    title: "Inteligência Artificial",
    institution: "Expert Cursos",
    hours: 30,
    file: "/certificados/inteligencia-artificial.pdf",
  },
  {
    title: "Excel",
    institution: "Eduliv",
    hours: 120,
    file: "/certificados/excel.pdf",
  },
  {
    title: "Gestão Financeira com Excel",
    institution: "Eduliv",
    hours: 90,
    file: "/certificados/gestao-financeira-excel.pdf",
  },
  {
    title: "PowerPoint",
    institution: "Eduliv",
    hours: 240,
    file: "/certificados/powerpoint.pdf",
  },
  {
    title: "Word",
    institution: "Eduliv",
    hours: 200,
    file: "/certificados/word.pdf",
  },
];

export const totalHours = certificates.reduce((sum, c) => sum + c.hours, 0);

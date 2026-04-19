import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Lenguajes de Programación",
    items: [
      { name: "C#", level: 95 },
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Tecnologías y Frameworks",
    items: [
      { name: ".NET", level: 95 },
      { name: ".NET MAUI", level: 90 },
      { name: "ASP.NET", level: 88 },
      { name: "SQL Server", level: 85 },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { name: "Visual Studio", level: 95 },
      { name: "Git y GitHub", level: 90 },
      { name: "Diseño de BD", level: 88 },
    ],
  },
];

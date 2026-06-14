export type CodeToken = { text: string; color: string };
export type CodeLine  = { num: number; tokens: CodeToken[] };

export const CODE_LINES: CodeLine[] = [
  { num: 1,  tokens: [{ text: "const ",          color: "text-violet-500" }, { text: "developer ", color: "text-zinc-800" }, { text: "= {",         color: "text-zinc-700" }] },
  { num: 2,  tokens: [{ text: "  name: ",         color: "text-zinc-500"  }, { text: "'Yannie'",   color: "text-emerald-600" }, { text: ",",         color: "text-zinc-700" }] },
  { num: 3,  tokens: [{ text: "  role: ",         color: "text-zinc-500"  }, { text: "'Fullstack Developer'", color: "text-emerald-600" }, { text: ",", color: "text-zinc-700" }] },
  {
    num: 4,
    tokens: [
      { text: "  focus: [", color: "text-zinc-500" },
      { text: "'SaaS'", color: "text-sky-500" },
      { text: ", ", color: "text-zinc-700" },
      { text: "'Web Apps'", color: "text-sky-500" },
      { text: ", ", color: "text-zinc-700" },
      { text: "'Enterprise Systems'", color: "text-sky-500" },
      { text: ", ", color: "text-zinc-700" },
    ],
  },
  { num: 5,  tokens: [{ text: "  purpose: ",      color: "text-zinc-500"  }, { text: "'Crear soluciones tecnológicas'", color: "text-emerald-600" }, { text: ",", color: "text-zinc-700" }] },
  { num: 6,  tokens: [{ text: "  location: ",     color: "text-zinc-500"  }, { text: "'México 🇲🇽'", color: "text-emerald-600" }, { text: ",",        color: "text-zinc-700" }] },
  { num: 7,  tokens: [{ text: "}",                color: "text-zinc-500"  }] },
  { num: 8,  tokens: [] },
  { num: 9,  tokens: [{ text: "export default ",  color: "text-violet-500" }, { text: "developer", color: "text-zinc-800" }, { text: ";", color: "text-zinc-700" }] },
  { num: 10, tokens: [] },
];

export const COPY_EASTER_EGG = `Hi! I'm yannie :)`;

export type TechIcon = { label: string; src: string };

export const TECH_ICONS: TechIcon[] = [
  { label: "React",        src: "/svg/react.svg"      },
  { label: "Next.js",      src: "/svg/next.svg"     },
  { label: "TypeScript",   src: "/svg/typescript.svg" },
  { label: "Tailwind CSS", src: "/svg/tailwind.svg"   },
  { label: "Vercel",       src: "/svg/vercel.svg"     },
  { label: "PgSQL",        src: "/svg/postgresql.svg" },
];

export const ROTATING_PREFIX = "Diseñado para";
export const ROTATING_WORDS  = ["innovar.", "impactar.", "permanecer.", "ti."] as const;

export const HEADLINE_LINES = [
  { delay: 0.10, text: "Construyo soluciones" },
  { delay: 0.16, text: "digitales que"        },
  { delay: 0.22, text: "resuelven"            },
] as const;

export type Stat = { value: string; label: string };

export const STATS: Stat[] = [
  { value: "+20", label: "Proyectos" },
  { value: "+10", label: "Clientes"  },
  { value: "+2K", label: "Usuarios"  },
];

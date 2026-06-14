export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
}

export const SERVICES: Service[] = [
  {
    id: "01",
    name: "Desarrollo Web",
    tagline: "Ideal para negocios y empresas que necesitan soluciones a la medida.",
    description:
      "Sitios web, landing pages, plataformas SaaS y sistemas empresariales diseñados para ofrecer rendimiento, escalabilidad y una experiencia de usuario excepcional.",
    stack: ["Next.js", "WordPress", ".NET", "Laravel", "PostgreSQL"],
  },
  {
    id: "02",
    name: "SEO Técnico",
    tagline: "Ideal para sitios web que necesitan mejorar su visibilidad.",
    description:
      "Optimización técnica orientada a buscadores, rendimiento y accesibilidad para mejorar el posicionamiento y la experiencia de tus usuarios.",
    stack: ["SEO Técnico", "Lighthouse", "Core Web Vitals", "Schema Markup"],
  },
  {
    id: "03",
    name: "Automatización de Procesos",
    tagline: "Ideal para equipos de trabajo que realizan tareas monótonas.",
    description:
      "Automatización de flujos de trabajo, integraciones y procesos repetitivos para ahorrar tiempo, reducir errores y mejorar la operación diaria.",
    stack: ["n8n", "Make", "Zapier", "Google Workspace", "Webhooks"],
  },
  {
    id: "04",
    name: "Consultoría y Optimización Técnica",
    tagline: "Ideal para proyectos existentes que necesitan escalar o mejorar su arquitectura.",
    description:
      "Auditoría de aplicaciones, diseño de bases de datos y análisis de infraestructura para mejorar rendimiento, escalabilidad y mantenibilidad.",
    stack: ["PostgreSQL", "MySQL", "Cloudflare", "Vercel", "Supabase"],
  },
];
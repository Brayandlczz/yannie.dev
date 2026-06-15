export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  src: string;
}

export const FOOTER_NAV_LINKS: FooterLink[] = [
  { label: "Inicio",    href: "/" },
  { label: "Servicios", href: "#services" },
];

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: "Términos",   href: "/terminos" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Cookies",    href: "/cookies" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Perfil de GitHub",    href: "https://github.com/Brayandlczz",         src: "/svg/github.svg"    },
  { label: "Perfil de Instagram", href: "https://instagram.com/by_sx19",          src: "/svg/instagram.svg" },
  { label: "Enviar correo",       href: "mailto:iyanniescript.dev@gmail.com",     src: "/svg/email.svg"     },
];

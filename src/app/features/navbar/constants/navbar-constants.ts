export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio",    href: "/" },
  { label: "Servicios", href: "#services" },
  { label: "Clientes", href: "#clients" },
  { label : "Conóceme", href: "#about"},
];

export const SCROLL_THRESHOLD = 60;

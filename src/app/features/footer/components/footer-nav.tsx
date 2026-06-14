import { FOOTER_NAV_LINKS, SOCIAL_LINKS } from "../constants/footer-constants";

export function FooterNav() {
  return (
    <div className="flex flex-col items-center gap-4 text-sm md:flex-row md:items-center md:gap-8">
      <nav className="flex gap-6 text-zinc-300" aria-label="Navegación del footer">
        {FOOTER_NAV_LINKS.map(({ label, href }) => (
          <a key={href} href={href} className="transition hover:text-white">
            {label}
          </a>
        ))}
      </nav>

      <ul className="flex gap-4" aria-label="Redes sociales">
        {SOCIAL_LINKS.map(({ label, href, src }) => (
          <li key={href}>
            <a
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="text-zinc-400 transition hover:text-white"
            >
              <img
                src={src}
                alt=""
                aria-hidden="true"
                className="h-5 w-5 opacity-80 hover:opacity-100 transition-opacity invert"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

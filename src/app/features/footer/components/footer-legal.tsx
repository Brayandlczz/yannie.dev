import { FOOTER_LEGAL_LINKS } from "../constants/footer-constants";

export function FooterLegal() {
  return (
    <div className="flex flex-col items-center gap-3 text-center text-sm text-zinc-300 md:flex-row md:justify-between md:text-left">
      <nav className="flex gap-4" aria-label="Enlaces legales">
        {FOOTER_LEGAL_LINKS.map(({ label, href }, i) => (
          <span key={href} className="flex items-center gap-4">
            {i > 0 && <span aria-hidden="true" className="opacity-100">·</span>}
            <a href={href} className="transition hover:text-zinc-100">{label}</a>
          </span>
        ))}
      </nav>
      <p>© {new Date().getFullYear()} yannie.dev · Casi todos los derechos reservados.</p>
    </div>
  );
}

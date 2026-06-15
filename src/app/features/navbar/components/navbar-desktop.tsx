import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "../constants/navbar-constants";

const WA_URL = "https://wa.me/529601172528";

export function NavbarDesktop() {
  return (
    <>
      <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-1">
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="px-3.5 py-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200 rounded-full hover:bg-zinc-100 font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-500"
          >
            {label}
          </Link>
        ))}
      </nav>
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-zinc-900 text-white rounded-full hover:bg-zinc-700 transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-500"
      >
        <svg fill="currentColor" aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.833L.057 23.428a.75.75 0 0 0 .921.916l5.713-1.494A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0m0 21.75a9.7 9.7 0 0 1-4.953-1.355l-.355-.211-3.688.965.981-3.578-.231-.368A9.7 9.7 0 0 1 2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75"/></svg>
        Contáctame
      </a>
    </>
  );
}
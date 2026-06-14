import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "../constants/navbar-constants";

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

      <Link
        href="#contact"
        className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-zinc-900 text-white rounded-full hover:bg-zinc-700 transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-500"
      >
        Contáctame
        <ArrowUpRight
          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </Link>
    </>
  );
}

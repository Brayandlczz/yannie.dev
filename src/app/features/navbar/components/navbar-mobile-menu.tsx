"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "../constants/navbar-constants";
import {  menuVariants, itemVariants } from "../animations/navbar-animations"

interface NavbarMobileMenuProps {
  onClose: () => void;
}

export function NavbarMobileMenu({ onClose }: NavbarMobileMenuProps) {
  return (
    <motion.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-white px-6 pb-10 pt-28 md:hidden"
    >
      <div aria-hidden="true" className="absolute inset-x-6 top-24 h-px bg-zinc-100" />

      <nav aria-label="Navegación móvil">
        <ul className="flex flex-col gap-1" role="list">
          {NAV_LINKS.map(({ label, href }, i) => (
            <motion.li
              key={href}
              custom={i}
              variants={itemVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <Link
                href={href}
                onClick={onClose}
                className="group flex items-center justify-between border-b border-zinc-100 py-5 text-[22px] font-semibold text-zinc-900 transition-colors duration-200 hover:text-violet-500 focus-visible:outline-none focus-visible:text-violet-500"
              >
                {label}
                <ArrowUpRight
                  className="w-5 h-5 text-zinc-300 transition-all duration-200 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      <motion.div
        custom={NAV_LINKS.length}
        variants={itemVariants}
        initial="closed"
        animate="open"
        exit="closed"
        className="flex flex-col gap-5"
      >
        <div aria-hidden="true" className="flex items-center gap-3">
          <div className="h-px flex-1 bg-zinc-100" />
          <p className="font-mono text-[9px] tracking-[0.3em] text-zinc-700">
            @Brayandlczz ON GITHUB
          </p>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        <Link
          href="#contact"
          onClick={onClose}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-500"
        >
          Contáctame
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </Link>

        <p className="text-center font-mono text-xs text-zinc-800 tracking-wide">
          iyanniescript.dev@gmail.com
        </p>
      </motion.div>
    </motion.div>
  );
}

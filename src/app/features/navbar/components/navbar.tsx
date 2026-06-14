"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarDesktop } from "./navbar-desktop";
import { NavbarMobileBtn } from "./navbar-mobile-btn";
import { NavbarMobileMenu } from "./navbar-mobile-menu";
import { SCROLL_THRESHOLD} from "../constants/navbar-constants";
import { EASE } from "../animations/navbar-animations"

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu  = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  return (
    <>
      <motion.header
        role="banner"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50 w-full px-4 pt-4 sm:px-8 lg:px-16"
      >
        <div
          className={[
            "mx-auto flex w-full max-w-7xl items-center justify-between transition-all duration-500",
            scrolled
              ? "rounded-full border border-zinc-200 bg-white/90 px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-md sm:px-6"
              : "bg-transparent px-0 py-2",
          ].join(" ")}
        >
          <Link
            href="/"
            aria-label="yannie.dev — ir al inicio"
            className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-500"
          >
            <Image
              src="/brand/yannie.webp"
              alt="yannie.dev"
              width={120}
              height={32}
              className="h-6 w-auto"
              priority
            />
          </Link>

          <NavbarDesktop />
          <NavbarMobileBtn open={menuOpen} onToggle={toggleMenu} />
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <NavbarMobileMenu onClose={closeMenu} />}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

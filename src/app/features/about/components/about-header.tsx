"use client";

import { motion } from "framer-motion";
import { aboutHeaderVariants } from "../animations/about-animations";

interface AboutHeaderProps {
  isInView: boolean;
}

export function AboutHeader({ isInView }: AboutHeaderProps) {
  return (
    <motion.div
      variants={aboutHeaderVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left"
    >
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-zinc-800 px-3 py-1 font-mono text-[11px] tracking-widest text-black">
        <span className="h-1.5 w-1.5 rounded-full bg-violet-400" aria-hidden="true" />
        Sobre mí
      </span>

      <h2
        id="about-heading"
        className="text-[clamp(2rem,6vw,2.8rem)] font-bold leading-[1.05] tracking-tight text-zinc-900"
      >
        La persona detrás de cada proyecto...
      </h2>
    </motion.div>
  );
}

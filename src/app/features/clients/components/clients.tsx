"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClientsCarousel } from "./clients-carousel";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Clients() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="clients"
      aria-labelledby="clients-heading"
      className="relative mx-auto max-w-7xl px-6 sm:px-10 pt-24 sm:pt-24 scroll-mt:24"
    >
      <div className="pb-8 flex flex-col items-center gap-4">

        <div ref={ref} className=" flex flex-col items-center gap-3 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, ease: EASE }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 text-[11px] font-mono text-black"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" aria-hidden="true" />
            Clientes & Colaboradores
          </motion.span>

          <motion.h2
            id="clients-heading"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE, delay: 0.08 }}
            className="text-[clamp(1.6rem,5vw,2.8rem)] font-bold tracking-tight text-zinc-900 leading-[1.1]"
          >
            ¡Gracias por su confianza!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE, delay: 0.16 }}
            className="text-[13px] sm:text-[14px] text-zinc-700 leading-relaxed"
          >
            Algunas de las empresas, marcas y proyectos en los que he colaborado desarrollando soluciones digitales.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.24 }}
          className="w-full"
        >
          <ClientsCarousel />
        </motion.div>

      </div>
    </section>
  );
}

export default Clients;

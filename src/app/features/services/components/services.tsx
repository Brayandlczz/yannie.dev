"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SERVICES } from "../constants/services-constants";
import ServicesRow from "./services-row";
import {
  servicesContainerVariants,
  servicesHeaderVariants,
} from "../animations/services-animations";

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="services"
      ref={ref}
      aria-labelledby="services-heading"
      className="relative mx-auto max-w-7xl px-6 sm:px-10 scroll-mt-22"
    >
      <motion.div
        variants={servicesHeaderVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mb-8 flex flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left"
      >
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-zinc-800 px-3 py-1 font-mono text-[11px] tracking-widest text-black">
            <span
              className="h-1.5 w-1.5 rounded-full bg-violet-500"
              aria-hidden="true"
            />
            ¿Cómo puedo ayudarte?
          </span>

          <h2
            id="services-heading"
            className="text-[clamp(1.75rem,5vw,3rem)] font-bold leading-tight tracking-tight text-black"
          >
            Servicios que <span className="text-zinc-500">resuelven algo concreto.</span>
          </h2>
        </div>

        <p className="max-w-xs text-sm leading-relaxed text-zinc-800 sm:text-right">
          Cada proyecto tiene necesidades distintas. La solución también.
        </p>
      </motion.div>

      <motion.div
        variants={servicesContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        role="list"
        aria-label="Lista de servicios"
      >
        {SERVICES.map((service) => (
          <ServicesRow key={service.id} service={service} />
        ))}

        <div className="border-t border-zinc-800" aria-hidden="true" />
      </motion.div>

      <motion.div
        variants={servicesHeaderVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-8 pb-8 flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left"
      >
        <p className="text-sm text-zinc-800">
          ¿Tienes una idea diferente?{" "}
          <span className="text-zinc-700">Hablemos y encontremos la mejor solución.</span>
        </p>
        <a
          href="#contact"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-black transition-colors duration-200 hover:border-violet-700 hover:text-violet-700"
        >
          Contáctame
          <svg fill="none" aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 14 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 12 12 2m0 0H5m7 0v7"/></svg>
        </a>
      </motion.div>
    </section>
  );
}

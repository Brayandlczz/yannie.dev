"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight} from "lucide-react";
import { fadeUp } from "../animations/hero-animations";
import { HEADLINE_LINES, STATS } from "../constants/hero-constants";
import { CodeBlock } from "../components/code-block";
import { RotatingWords } from "../components/rotating-words";

function Stats() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp(0.46)}
      className="flex items-center justify-center lg:justify-start gap-6 pt-1 w-full"
      aria-label="Estadísticas"
    >
      {STATS.map(({ value, label }, i) => (
        <div key={label} className="flex items-center gap-6">
          <div className="flex flex-col items-center lg:items-start gap-0.5">
            <span className="text-xl font-bold tracking-tight text-zinc-900">{value}</span>
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">{label}</span>
          </div>
          {i < STATS.length - 1 && (
            <span className="w-px h-8 bg-zinc-200" aria-hidden="true" />
          )}
        </div>
      ))}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Presentación — Yannie, Desarrollador Fullstack"
      className="relative w-full min-h-screen overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 w-150 h-150 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 w-full min-h-screen flex items-center pt-16">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 items-center">

            <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left lg:gap-7">

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp(0.05)}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 bg-white/70 shadow-sm">
                  <RotatingWords />
                </span>
              </motion.div>

              <h1 className="font-bold tracking-tight text-zinc-900 text-[clamp(2.2rem,10vw,3.2rem)] sm:text-[clamp(7vw,3.6rem)] leading-[1.08]">
                {HEADLINE_LINES.map(({ delay, text }) => (
                  <motion.span
                    key={text}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp(delay)}
                    className="block"
                  >
                    {text}
                  </motion.span>
                ))}
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp(0.28)}
                  className="block mt-1"
                >
                  <span className="text-zinc-300">problemas </span>
                  <span className="text-violet-500">reales.</span>
                </motion.span>
              </h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeUp(0.34)}
                className="text-[14px] sm:text-[15px] text-zinc-500 leading-relaxed max-w-[52ch] lg:max-w-[70ch]"
              >
                Desde aplicaciones web, plataformas SaaS y sistemas empresariales
                enfocados en resolver problemas reales de forma simple, eficiente y escalable.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp(0.4)}
                className="flex flex-row items-center gap-3"
              >
                <a
                  href="https://github.com/Brayandlczz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar el perfil de GitHub de Yannie"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-semibold transition-colors duration-200 hover:bg-zinc-700 group whitespace-nowrap"
                >
                  <Image
                    src="/svg/github.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4 invert"
                    aria-hidden="true"
                  />
                  <span className="hidden sm:inline">Explorar proyectos</span>
                  <span className="sm:hidden">Proyectos</span>
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                    href="/currículum_vitae.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver CV de Yannie en PDF"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 text-sm font-medium text-zinc-900 transition-colors duration-200 hover:border-zinc-400 group whitespace-nowrap"
                    >
                    <span className="hidden sm:inline">Descargar CV</span>
                    <span className="sm:hidden">CV</span>
                    <ArrowUpRight
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                />
                </a>
              </motion.div>

              <Stats />

            </div>

            <div className="hidden lg:block w-full">
              <CodeBlock />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

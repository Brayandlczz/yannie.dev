"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Service } from "../constants/services-constants";
import {
  serviceRowVariants,
  arrowVariants,
  rowContentVariants,
  rowTitleVariants,
} from "../animations/services-animations";

interface ServicesRowProps {
  service: Service;
}

export default function ServicesRow({ service }: ServicesRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={serviceRowVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative grid grid-cols-1 gap-4 border-t py-8 transition-colors duration-300 cursor-pointer sm:grid-cols-[120px_1fr] sm:gap-8 lg:grid-cols-[140px_1fr_auto]"
      style={{
        borderColor: hovered ? "rgba(139,92,246,0.5)" : "rgb(39 39 42)",
      }}
    >
      <div className="relative flex items-start justify-center pt-0.5 sm:justify-start">
        <motion.span
          className="font-mono text-[11px] tracking-widest"
          animate={{ color: hovered ? "rgb(167 139 250)" : "rgb(113 113 122)" }}
          transition={{ duration: 0.25 }}
        >
          [{service.id}]
        </motion.span>
      </div>

      <motion.div
        variants={rowContentVariants}
        animate={hovered ? "hover" : "idle"}
        className="relative flex flex-col gap-2 text-center sm:text-left"
      >
        <div className="flex flex-col gap-1">
          <motion.h3
            variants={rowTitleVariants}
            animate={hovered ? "hover" : "idle"}
            className="text-lg font-bold leading-tight sm:text-xl"
          >
            {service.name}
          </motion.h3>
          <p className="text-[13px] font-medium text-zinc-600">{service.tagline}</p>
        </div>

        <p className="text-[12px] leading-relaxed text-zinc-500">
          {service.description}
        </p>

        <ul
          className="flex flex-wrap justify-center gap-1.5 sm:justify-start"
          aria-label="Stack tecnológico"
        >
          {service.stack.map((tech) => (
            <motion.li
              key={tech}
              animate={{
                borderColor: hovered ? "rgb(113 113 122)" : "rgb(63 63 70)",
              }}
              transition={{ duration: 0.25 }}
              className="rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wide text-zinc-600"
            >
              {tech}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <div className="relative hidden items-start pt-0.5 lg:flex">
        <motion.svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4"
          variants={arrowVariants}
          animate={hovered ? "hover" : "idle"}
        >
          <path
            d="M3 13L13 3M13 3H6M13 3V10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>
    </motion.article>
  );
}

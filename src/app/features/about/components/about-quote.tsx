"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ABOUT_QUOTE } from "../constants/about-constants";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function AboutQuote() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE }}
      className="flex flex-col items-center text-center lg:items-start lg:text-left gap-2"
    >
      <p className="text-[clamp(1.1rem,3vw,1.5rem)] font-bold tracking-tight text-zinc-900 leading-[1.4]">
        {ABOUT_QUOTE.prefix}{" "}

        <span className="relative inline-block">
          {ABOUT_QUOTE.underlined}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            className="absolute -bottom-1 left-0 w-full h-2.5"
          >
            <motion.path
              d="M0 7 Q50 2 100 7"
              fill="none"
              stroke="#6d28d9"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
            />
          </svg>
        </span>

        {" "}{ABOUT_QUOTE.middle}{" "}

        <span className="relative inline-block whitespace-nowrap max-w-full">
          <svg
            aria-hidden="true"
            viewBox="0 0 220 36"
            preserveAspectRatio="none"
            overflow="visible"
            className="absolute inset-0 w-full h-full"
            style={{ top: "2px", left: "-3px", width: "calc(100% + 6px)" }}
          >
            <motion.path
              d="M2 5 C40 3 100 2 160 4 C185 5 210 3 218 5 L218 30 C195 32 145 34 90 32 C45 30 10 32 2 30 Z"
              fill="rgba(253,224,71,0.50)"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.55, ease: EASE, delay: 0.75 }}
              style={{ originX: "0px" }}
            />
            <motion.path
              d="M-2 2 C38 0 100 -1 158 1 C192 2 220 0 226 2 L226 32 C205 34 150 36 90 34 C42 32 2 34 -2 32 Z"
              fill="rgba(253,224,71,0.22)"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.45, ease: EASE, delay: 0.88 }}
              style={{ originX: "0px" }}
            />
          </svg>
          <span className="relative">{ABOUT_QUOTE.highlighted}</span>
        </span>
      </p>

      <span className="text-sm text-zinc-700 italic" style={{ fontFamily: "'Georgia', serif" }}>
        — {ABOUT_QUOTE.signature}
      </span>
    </motion.div>
  );
}
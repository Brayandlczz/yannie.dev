"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wordEnter } from "../animations/hero-animations";
import { ROTATING_PREFIX, ROTATING_WORDS } from "../constants/hero-constants";

const INTERVAL_MS = 2200;

export function RotatingWords() {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (index >= ROTATING_WORDS.length - 1) {
      setDone(true);
      return;
    }
    const id = setTimeout(
      () => setIndex((i) => i + 1),
      INTERVAL_MS
    );
    return () => clearTimeout(id);
  }, [index, done]);

  return (
    <span
      className="inline-flex items-center font-mono text-[11px] text-zinc-400"
      aria-label={`${ROTATING_PREFIX} ${ROTATING_WORDS[index]}`}
    >
      <span aria-hidden="true">{"<"}&nbsp;</span>
      <span className="text-zinc-700 font-medium">{ROTATING_PREFIX}&nbsp;</span>

      <AnimatePresence mode="wait">
        <motion.span
          key={ROTATING_WORDS[index]}
          variants={wordEnter}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-zinc-700 font-medium"
        >
          {ROTATING_WORDS[index]}
        </motion.span>
      </AnimatePresence>

      <span aria-hidden="true">&nbsp;{"/>"}</span>
    </span>
  );
}

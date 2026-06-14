"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState, useCallback } from "react";
import { codeCardVariants } from "../animations/hero-animations";
import { CODE_LINES, COPY_EASTER_EGG, TECH_ICONS } from "../constants/hero-constants";

export function CodeBlock() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(COPY_EASTER_EGG);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch { /* noop */ }
  }, []);

  return (
    <motion.figure
      variants={codeCardVariants}
      initial="hidden"
      animate="visible"
      aria-label="Código de presentación — about-me.tsx"
      className="w-full rounded-2xl border border-zinc-200 shadow-sm overflow-hidden"
    >
      <div
        className="flex items-center px-5 py-3.5 border-b border-zinc-200"
      >
        <div className="flex items-center gap-1.5 w-1/3" aria-hidden="true">
          {["bg-red-400", "bg-yellow-400", "bg-emerald-400"].map((c) => (
            <span key={c} className={`w-3 h-3 rounded-full ${c}`} />
          ))}
        </div>
        <span className="font-mono text-xs text-black tracking-wide text-center w-1/3">
          about-me.tsx
        </span>
        <div className="flex justify-end w-1/3">
          <button
            onClick={handleCopy}
            aria-label="Copiar easter egg"
            className="text-zinc-400 hover:text-zinc-700 transition-colors duration-200 cursor-pointer"
          >
            {copied
              ? <Check className="w-3.5 h-3.5 text-emerald-500" />
              : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      <pre className="px-6 py-6 font-mono text-[12.5px] leading-[1.8] overflow-x-auto bg-white" aria-hidden="true">
        <code>
          {CODE_LINES.map(({ num, tokens }) => (
            <div key={num} className="flex gap-5">
              <span className="select-none text-zinc-300 w-4 shrink-0 text-right tabular-nums">{num}</span>
              <span>
                {tokens.map(({ text, color }, i) => (
                  <span key={i} className={color}>{text}</span>
                ))}
              </span>
            </div>
          ))}
        </code>
      </pre>

      <div
        className="px-6 py-5 border-t border-zinc-100"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px flex-1 bg-zinc-300" aria-hidden="true" />
          <p className="font-mono text-[9px] text-black tracking-[0.18em] uppercase whitespace-nowrap">
            stack principal
          </p>
          <span className="h-px flex-1 bg-zinc-300" aria-hidden="true" />
        </div>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {TECH_ICONS.map(({ label, src }) => (
            <div
              key={label}
              title={label}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-zinc-200 hover:border-violet-700 hover:shadow-[0_0_0_3px_rgba(139,92,246,0.08)] transition-all duration-200 cursor-pointer"
            >
              <Image src={src} alt={label} width={16} height={16} className="w-4 h-4" />
              <span className="font-mono text-[10px] text-zinc-900 leading-none">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.figure>
  );
}
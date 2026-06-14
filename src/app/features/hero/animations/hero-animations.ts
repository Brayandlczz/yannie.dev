import type { Variants } from "framer-motion";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp = (delay = 0): Variants => ({
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

export const fadeIn = (delay = 0): Variants => ({
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE, delay } },
});

export const wordEnter: Variants = {
  hidden:  { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.45, ease: EASE } },
  exit:    { opacity: 0, y: -10, filter: "blur(4px)", transition: { duration: 0.3,  ease: EASE } },
};

export const codeCardVariants: Variants = {
  hidden:  { opacity: 0, y: 20, scale: 0.99 },
  visible: { opacity: 1, y: 0,  scale: 1,    transition: { delay: 0.28, duration: 0.65, ease: EASE } },
};

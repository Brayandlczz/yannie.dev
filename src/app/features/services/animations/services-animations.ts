import type { Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const servicesContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const servicesHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
};

export const serviceRowVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE,
    },
  },
};

export const arrowVariants: Variants = {
  idle: {
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    color: "rgb(63 63 70)",
  },
  hover: {
    x: 3,
    y: -3,
    rotate: 5,
    scale: 1.15,
    color: "rgb(167 139 250)",
    transition: {
      duration: 0.25,
      ease: EASE,
    },
  },
};

export const rowContentVariants: Variants = {
  idle: {
    x: 0,
    transition: { duration: 0.3, ease: EASE },
  },
  hover: {
    x: 6,
    transition: { duration: 0.3, ease: EASE },
  },
};

export const rowTitleVariants: Variants = {
  idle: {
    color: "rgb(0 0 0)",
    transition: { duration: 0.25 },
  },
  hover: {
    color: "rgb(109 40 217)",
    transition: { duration: 0.25 },
  },
};

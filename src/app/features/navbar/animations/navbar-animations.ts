export const EASE = [0.22, 1, 0.36, 1] as const;

export const menuVariants = {
  closed: {
    clipPath: "inset(0 0 100% 0)",
    opacity: 0,
    transition: { duration: 0.35, ease: EASE },
  },
  open: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 0.4, ease: EASE },
  },
};

export const itemVariants = {
  closed: { opacity: 0, x: -12 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, delay: 0.08 + i * 0.06, ease: EASE },
  }),
};
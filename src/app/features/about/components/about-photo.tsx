"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutImageVariants } from "../animations/about-animations";

export function AboutPhoto() {
  return (
    <motion.div
      variants={aboutImageVariants}
      className="order-1 lg:order-2 mx-auto w-48 sm:w-56 lg:w-full"
    >
      <div
        className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-xl"
        style={{ transform: "rotate(3deg)" }}
      >
        <Image
          src="/brand/avatar.webp"
          alt="Foto de Yannie"
          fill
          sizes="(max-width: 1024px) 224px, 300px"
          className="object-cover object-top"
          priority={false}
        />
      </div>
    </motion.div>
  );
}

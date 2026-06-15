"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AboutHeader } from "./about-header";
import { AboutText } from "./about-text";
import { AboutPhoto } from "./about-photo";
import { aboutContentVariants } from "../animations/about-animations";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="about"
      ref={ref}
      aria-labelledby="about-heading"
      className="relative w-full overflow-hidden scroll-mt-22 mt-16 sm:mt-24 pb-16 sm:pb-24"
    >
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 flex flex-col gap-10 sm:gap-10">

        <AboutHeader isInView={isInView} />

        <motion.div
          variants={aboutContentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_300px] lg:gap-20 lg:items-start"
        >
          <AboutText />
          <AboutPhoto />
        </motion.div>

      </div>
    </section>
  );
}

export default About;
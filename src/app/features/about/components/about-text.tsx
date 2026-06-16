"use client";

import { motion } from "framer-motion";
import { aboutItemVariants } from "../animations/about-animations";
import { AboutQuote } from "./about-quote";

export function AboutText() {
  return (
    <div className="flex flex-col gap-5 order-2 lg:order-1">
      <motion.p
        variants={aboutItemVariants}
        className="text-sm leading-relaxed text-zinc-600 text-justify"
      >
        Me llamo Brayan de la Cruz pero mis amigos me dicen yann. Soy desarrollador Full Stack especializado en crear soluciones tecnológicas que resuelven problemas reales.
        Diseño y desarrollo herramientas con enfoque en rendimiento, escalabilidad y sobre todo con pasión. Disfruto transformar procesos complejos en productos simples, intuitivos y fáciles de mantener.
      </motion.p>

      <motion.p
        variants={aboutItemVariants}
        className="text-sm leading-relaxed text-zinc-600 text-justify"
      >
        A lo largo de mi experiencia he trabajado en proyectos para empresas, marcas y amigos, desarrollando desde sitios web hasta plataformas completas y soluciones a la medida. Me considero fiel creyente en que una buena solución no depende únicamente de la tecnología, sino de entender el problema correctamente. Para mí, cada proyecto comienza escuchando las necesidades del cliente y termina con un producto pensado para crecer junto con su negocio.

      </motion.p>

      <motion.p
        variants={aboutItemVariants}
        className="text-sm leading-relaxed text-zinc-600 text-justify"
      >
        Además del desarrollo, disfruto aprendiendo y manteniéndome al día con nuevas tecnologías. Estoy convencido de que el verdadero valor en algo no solo está en funcionar, sino en seguir siendo útil y evolucionar para el mañana.
      </motion.p>

      <AboutQuote />
    </div>
  );
}
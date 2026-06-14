"use client";

import Image from "next/image";
import { CLIENTS } from "../constants/clients-constants";
import type { Client } from "../constants/clients-constants";

function LogoTile({ src, alt }: Client) {
  return (
    <div className="flex shrink-0 items-center justify-center px-6">
      <Image
        src={src}
        alt={alt}
        width={160}
        height={64}
        className="h-12 sm:h-14 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        loading="lazy"
      />
    </div>
  );
}

export function ClientsCarousel() {
  const logos = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <div
      className="relative w-full overflow-hidden py-4"
      aria-label="Logos de clientes"
    >
      <div className="absolute inset-y-0 left-0 w-20 sm:w-32 z-10 pointer-events-none bg-linear-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-32 z-10 pointer-events-none bg-linear-to-l from-background to-transparent" />

      <div
        className="flex w-max brightness-0 cursor-pointer"
        style={{ animation: "clients-scroll 30s linear infinite" }}
      >
        {logos.map(({ id, src, alt }, i) => (
          <LogoTile key={`${id}-${i}`} id={id} src={src} alt={alt} />
        ))}
      </div>

      <style>{`
        @keyframes clients-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.3333%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="clients-scroll"] { animation-play-state: paused; }
        }
      `}</style>
    </div>
  );
}

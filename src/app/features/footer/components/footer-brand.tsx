import Image from "next/image";

export function FooterBrand() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white">
        <Image
          src="/brand/avatar.webp"
          alt="Yannie Dev"
          width={40}
          height={40}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="inline-flex items-center gap-1.5 w-fit px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-800 text-[11px] font-mono text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          Disponible para trabajar
        </span>
      </div>
    </div>
  );
}

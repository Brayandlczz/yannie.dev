interface NavbarMobileBtnProps {
  open: boolean;
  onToggle: () => void;
}

export function NavbarMobileBtn({ open, onToggle }: NavbarMobileBtnProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={open ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={open}
      aria-controls="mobile-menu"
      className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full hover:bg-zinc-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-500 md:hidden"
    >
      {[
        open ? "translate-y-[5px] rotate-45"  : "",
        open ? "opacity-0 scale-x-0"           : "",
        open ? "-translate-y-[5px] -rotate-45" : "",
      ].map((extra, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`block h-[1.5px] w-5 origin-center bg-zinc-900 transition-all duration-300 ${extra}`}
        />
      ))}
    </button>
  );
}

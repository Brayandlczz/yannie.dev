import { FooterBrand } from "./footer-brand";
import { FooterNav } from "./footer-nav";
import { FooterLegal } from "./footer-legal";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-12">

        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <FooterBrand />
          <FooterNav />
        </div>

        <div className="my-4 h-px w-full bg-zinc-700" />

        <FooterLegal />

      </div>
    </footer>
  );
}

export default Footer;

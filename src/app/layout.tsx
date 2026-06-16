import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { Navbar } from "@/app/features/navbar";
import { Footer } from "@/app/features/footer";
import { StructuredData } from "@/app/features/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yannie.dev"),

  title: {
    default: "yannie.dev | Full Stack Developer",
    template: "%s | yannie.dev",
  },

  description:
    "Brayan de la Cruz, Full Stack Developer especializado en SaaS, aplicaciones web, automatización, SEO técnico y soluciones digitales modernas.",

  keywords: [
    "desarrollador web",
    "desarrollo de aplicaciones web",
    "desarrollo de software",
    "desarrollo SaaS",
    "desarrollo de sistemas empresariales",
    "automatización para empresas",
    "consultoría tecnológica",
    "optimización de aplicaciones web",
    "SEO técnico",
    "desarrollo de landing pages",
    "desarrollo de plataformas web",
    "desarrollador web México",
  ],

  authors: [{ name: "Brayan de la Cruz", url: "https://yannie.dev" }],
  creator: "Brayan de la Cruz",
  publisher: "yannie.dev",

  openGraph: {
    title: "yannie.dev | Full Stack Developer",
    description:
      "Desarrollo soluciones digitales modernas: SaaS, aplicaciones web, automatización, SEO técnico y sistemas escalables.",
    url: "https://yannie.dev",
    siteName: "yannie.dev",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Brayan de la Cruz | Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "yannie.dev | Full Stack Developer",
    description:
      "Brayan de la Cruz, Full Stack Developer especializado en soluciones digitales modernas.",
    images: [
      {
        url: "/twitter-image.png",
        alt: "Brayan de la Cruz | Full Stack Developer",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://yannie.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
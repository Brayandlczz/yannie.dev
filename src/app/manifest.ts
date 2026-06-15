import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "yannie.dev",
    short_name: "yannie.dev",
    description:
      "Full Stack Developer specialized in SaaS, web applications, automation, and modern digital experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    lang: "en",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon0.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
  };
}
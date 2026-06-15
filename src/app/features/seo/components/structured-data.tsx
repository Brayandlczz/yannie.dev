export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://yannie.dev/#person",
        name: "Brayan de la Cruz",
        url: "https://yannie.dev",
        jobTitle: "Full Stack Developer",
        description:
          "Full Stack Developer especializado en SaaS, aplicaciones web, automatización, SEO técnico y soluciones digitales modernas.",
        image: "https://yannie.dev/og-image.png",
        sameAs: [
          "https://github.com/iyanniescript-dev"
        ],
        knowsAbout: [
          "Full Stack Development",
          "SaaS Development",
          "Web Applications",
          "Technical SEO",
          "Business Automation",
          "Software Architecture",
          "Frontend Development",
          "Backend Development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://yannie.dev/#website",
        name: "yannie.dev",
        url: "https://yannie.dev",
        description:
          "Portfolio profesional de Brayan de la Cruz, Full Stack Developer especializado en SaaS, aplicaciones web, automatización y soluciones digitales modernas.",
        publisher: {
          "@id": "https://yannie.dev/#person",
        },
        inLanguage: "es-MX",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
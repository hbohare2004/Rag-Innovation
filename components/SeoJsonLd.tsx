const SITE = "https://www.raginnovations.com";

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Rag Innovations",
      url: SITE,
      logo: `${SITE}/logo.png`,
      description:
        "Manufacturer of affordable sanitary napkin making machines, pad making machine India solutions, sanitary napkin raw materials, and training for menstrual hygiene enterprises.",
      sameAs: [
        "https://www.facebook.com/innovationsrag/",
        "https://twitter.com/InnovationsRag",
        "https://www.instagram.com/raginnovations",
        "https://www.linkedin.com/company/rag-innovations/",
        "https://www.youtube.com/channel/UC7a8-5RxDh4TBCc1POTEG2A/videos",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "B-Nest (Smart City Corporation Ltd), Zone 14, near Natraj Petrol Pump, Govindpura",
        addressLocality: "Bhopal",
        postalCode: "462022",
        addressRegion: "Madhya Pradesh",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9425128596",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Rag Innovations",
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE}/#organization` },
    },
  ],
};

export default function SeoJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

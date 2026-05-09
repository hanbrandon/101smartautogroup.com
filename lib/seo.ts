import { FAQS } from "@/constants";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://101smartauto.com";

export const BUSINESS_NAME = "101 Auto Group";
export const MANAGER_NAME = process.env.NEXT_PUBLIC_MANAGER_NAME || "Jake Kim";
export const SITE_TITLE = "101 Auto Group | Premium Car Dealer in LA & OC";
export const SITE_DESCRIPTION =
  "Top car dealer and auto leasing services in Los Angeles and Orange County. Hassle-free car buying, best auto deals, and expert financing with Jake Kim.";

export const absoluteUrl = (path = "/") => {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const defaultOpenGraph = {
  images: [
    {
      url: absoluteUrl("/og-image.png"),
      width: 1200,
      height: 630,
      alt: "101 Auto Group Jake Kim premium car dealer in Los Angeles and Orange County",
    },
  ],
};

export const autoDealerSchema = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: BUSINESS_NAME,
  alternateName: "101 Smart Auto",
  url: SITE_URL,
  logo: absoluteUrl("/logo.png"),
  image: absoluteUrl("/og-image.png"),
  description: SITE_DESCRIPTION,
  founder: {
    "@type": "Person",
    name: MANAGER_NAME,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "936 Crenshaw Blvd. #303",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "90019",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Los Angeles" },
    { "@type": "AdministrativeArea", name: "Orange County" },
    { "@type": "AdministrativeArea", name: "Southern California" },
  ],
  sameAs: ["https://www.instagram.com/goldenkeyautogroup/"],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BUSINESS_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Car buying, leasing, financing, trade-in, and consignment services",
  serviceType: "Automotive sales and leasing",
  provider: {
    "@type": "AutoDealer",
    name: BUSINESS_NAME,
    url: SITE_URL,
  },
  areaServed: ["Los Angeles", "Orange County", "Southern California"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto dealer services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom vehicle sourcing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auto financing and leasing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trade-in and consignment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vehicle inspection and delivery" } },
    ],
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const jsonLdScript = (schema: unknown) => ({
  __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
});

import { FAQS } from "@/constants";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://101smartauto.com";

export const BUSINESS_NAME = "101 Auto Group";
export const MANAGER_NAME = process.env.NEXT_PUBLIC_MANAGER_NAME || "Jake Kim";
export const SITE_TITLE =
  "101 Auto Group | Los Angeles Car Dealer & Orange County Auto Leasing";
export const SITE_DESCRIPTION =
  "Work with Jake Kim for car buying, luxury vehicle sourcing, auto leasing, and financing support across Los Angeles, Koreatown, Irvine, Buena Park, Fullerton, Garden Grove, Torrance, and Orange County.";

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
    { "@type": "City", name: "Koreatown" },
    { "@type": "City", name: "Irvine" },
    { "@type": "City", name: "Buena Park" },
    { "@type": "City", name: "Fullerton" },
    { "@type": "City", name: "Garden Grove" },
    { "@type": "City", name: "Torrance" },
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
  name: "Los Angeles car buying, Orange County auto leasing, financing, trade-in, and consignment services",
  serviceType: "Automotive sales, leasing, sourcing, financing, and trade-in support",
  provider: {
    "@type": "AutoDealer",
    name: BUSINESS_NAME,
    url: SITE_URL,
  },
  areaServed: [
    "Los Angeles",
    "Koreatown",
    "Irvine",
    "Buena Park",
    "Fullerton",
    "Garden Grove",
    "Torrance",
    "Orange County",
    "Southern California",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto dealer services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Los Angeles car buying consultation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Orange County auto leasing support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury vehicle sourcing for BMW, Mercedes-Benz, Porsche, Lexus, Audi, and Tesla" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auto financing and lease pre-approval support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trade-in and consignment support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vehicle inspection, paperwork, and delivery coordination" } },
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

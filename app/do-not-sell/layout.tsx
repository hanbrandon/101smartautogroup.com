import type { Metadata } from "next";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Do Not Sell or Share My Personal Information",
  description:
    "Manage California privacy rights and opt-out preferences for 101 Auto Group website data sharing.",
  alternates: {
    canonical: `${SITE_URL}/do-not-sell`,
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Do Not Sell or Share My Personal Information | 101 Auto Group",
    description:
      "Manage California privacy rights and opt-out preferences for 101 Auto Group website data sharing.",
    url: `${SITE_URL}/do-not-sell`,
    images: [absoluteUrl("/og-image.png")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Do Not Sell or Share My Personal Information | 101 Auto Group",
    description:
      "Manage California privacy rights and opt-out preferences for 101 Auto Group website data sharing.",
    images: [absoluteUrl("/og-image.png")],
  },
};

export default function DoNotSellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

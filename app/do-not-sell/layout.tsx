import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

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
};

export default function DoNotSellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

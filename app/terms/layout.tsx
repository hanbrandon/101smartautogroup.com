import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms of service for 101 Auto Group automotive buying, leasing, financing, and consultation services.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

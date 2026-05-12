import type { Metadata } from "next";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

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
  openGraph: {
    title: "Terms of Service | 101 Auto Group",
    description:
      "Review the terms of service for 101 Auto Group automotive buying, leasing, financing, and consultation services.",
    url: `${SITE_URL}/terms`,
    images: [absoluteUrl("/og-image.png")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | 101 Auto Group",
    description:
      "Review the terms of service for 101 Auto Group automotive buying, leasing, financing, and consultation services.",
    images: [absoluteUrl("/og-image.png")],
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

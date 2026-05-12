import type { Metadata } from "next";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Review how 101 Auto Group handles customer information for vehicle inquiries, financing, leasing, and automotive services.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | 101 Auto Group",
    description:
      "Review how 101 Auto Group handles customer information for vehicle inquiries, financing, leasing, and automotive services.",
    url: `${SITE_URL}/privacy`,
    images: [absoluteUrl("/og-image.png")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | 101 Auto Group",
    description:
      "Review how 101 Auto Group handles customer information for vehicle inquiries, financing, leasing, and automotive services.",
    images: [absoluteUrl("/og-image.png")],
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

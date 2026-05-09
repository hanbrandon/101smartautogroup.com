import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

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
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

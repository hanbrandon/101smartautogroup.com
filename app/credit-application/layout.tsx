import type { Metadata } from "next";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Credit Application",
  description:
    "Apply for auto financing with 101 Auto Group. Start a secure car loan or lease pre-approval for Los Angeles and Orange County vehicle purchases.",
  alternates: {
    canonical: `${SITE_URL}/credit-application`,
  },
  openGraph: {
    title: "Credit Application | 101 Auto Group",
    description:
      "Start a secure auto financing or lease pre-approval with Jake Kim and 101 Auto Group.",
    url: `${SITE_URL}/credit-application`,
    images: [absoluteUrl("/og-image.png")],
  },
};

export default function CreditApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JAKE KIM | Premium Automotive Sourcing in LA & OC",
  description: "Expert automotive dealership services in Los Angeles and Orange County. Finding the perfect drive for your lifestyle with transparency and trust.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}

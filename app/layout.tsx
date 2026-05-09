import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "101 Auto Group | Premium Car Dealer in LA & OC",
  description: "Top car dealer and auto leasing services in Los Angeles and Orange County. Hassle-free car buying, best auto deals, and expert financing with Jake Kim.",
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

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import Topbar from "@/components/topbar/Topbar";
import Footer from "@/components/footer/Footer";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Daniel Mbedobe | Web Developer", template: "%s | Daniel Mbedobe" },
  description: "Daniel Mbedobe builds responsive websites, landing pages, and React interfaces for businesses and organizations.",
  authors: [{ name: "Daniel Mbedobe" }],
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Daniel Mbedobe | Web Developer",
    description: "Responsive websites and React interfaces for businesses and organizations.",
    url: "/",
    siteName: "Daniel Mbedobe Portfolio",
    images: [{ url: "/assets/pp.webp", width: 422, height: 591, alt: "Portrait of Daniel Mbedobe" }],
    type: "website",
  },
  twitter: { card: "summary", title: "Daniel Mbedobe | Web Developer", description: "Responsive websites and React interfaces for businesses and organizations.", images: ["/assets/pp.webp"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} min-h-screen bg-[#f8fafc] text-slate-900 antialiased`}>
        <a href="#main-content" className="sr-only rounded-md bg-white px-4 py-3 font-semibold text-slate-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-2 focus:z-[100] focus:outline-2 focus:outline-orange-600">
          Skip to main content
        </a>
        <Topbar />
        <main id="main-content" className="min-h-[55vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

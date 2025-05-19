// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Mbedobe Portfolio",
  description: "Frontend Developer and Data Expert",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black w-screen h-screen overflow-hidden lg:px-[60px] lg:py-[30px]`}
      >
        {/* Fixed Topbar */}
        <div className="fixed top-0 left-0 w-full z-50 bg-white lg:px-[60px]">
          <Topbar />
        </div>

        {/* Sidebar */}
        <Sidebar />

        {/* Main scrollable area */}
        <main className="pt-[20px] w-full h-full overflow-y-auto px-4 py-6 lg:overflow-hidden">
          <div className="max-w-screen-xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}

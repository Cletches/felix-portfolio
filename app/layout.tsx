import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundLayers from "@/components/BackgroundLayers";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felix Ofori | Software Engineer",
  description:
    "Modern portfolio for Felix Ofori - software engineer, builder, and creator.",
  other: {
    "google-adsense-account": "ca-pub-3359228672904175",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3359228672904175"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <BackgroundLayers />
        <Navbar />
        <main className="min-h-screen pt-20">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Fraunces, Inter, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const notoTelugu = Noto_Sans_Telugu({ subsets: ["telugu"], variable: "--font-noto-telugu", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jyothivermiculite.com"),
  title: { default: "Jyothi Mines & Minerals — Exfoliated Vermiculite", template: "%s | Jyothi Mines & Minerals" },
  description: "Exfoliated vermiculite from Proddatur, Andhra Pradesh, India, for horticulture, agriculture, construction, industrial and specialised applications.",
  openGraph: { type: "website", siteName: "Jyothi Mines & Minerals", locale: "en_IN" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${notoTelugu.variable}`}>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-3 focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

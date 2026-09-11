import type { Metadata } from "next";
import { Fraunces, Inter, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/structured-data";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const notoTelugu = Noto_Sans_Telugu({ subsets: ["telugu"], variable: "--font-noto-telugu", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jyothivermiculite.com"),
  title: { default: "Jyothi Mines & Minerals — Exfoliated Vermiculite", template: "%s | Jyothi Mines & Minerals" },
  description: "Exfoliated vermiculite from Proddatur, Andhra Pradesh, India, for horticulture, agriculture, construction, industrial and specialised applications.",
  applicationName: "Jyothi Mines & Minerals",
  keywords: [
    "exfoliated vermiculite",
    "vermiculite supplier India",
    "vermiculite Proddatur",
    "horticultural vermiculite",
    "industrial vermiculite",
    "vermiculite grades",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName: "Jyothi Mines & Minerals",
    locale: "en_IN",
    url: "https://www.jyothivermiculite.com/",
    title: "Jyothi Mines & Minerals — Exfoliated Vermiculite",
    description: "Exfoliated vermiculite for horticulture, agriculture, construction, industrial and specialised applications.",
  },
  twitter: { card: "summary_large_image", title: "Jyothi Mines & Minerals — Exfoliated Vermiculite", description: "Exfoliated vermiculite from Proddatur, Andhra Pradesh, India." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${notoTelugu.variable}`}>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-3 focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

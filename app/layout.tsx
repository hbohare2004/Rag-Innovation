import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoJsonLd from "@/components/SeoJsonLd";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const siteUrl = "https://www.raginnovations.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sanitary Napkin Machine India | Rag Innovations",
    template: "%s | Rag Innovations",
  },
  description:
    "Affordable sanitary napkin machines in India. Start your pad business with Rag Innovations.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/x-icon" }],
    shortcut: "/logo.png",
  },
  keywords: [
    "sanitary napkin making machine",
    "pad making machine India",
    "low cost sanitary machine",
    "sanitary pad business India",
    "sanitary napkin raw materials",
    "semi automatic sanitary napkin machine",
    "affordable sanitary pad machine",
    "sanitary napkin manufacturing unit",
    "maternity pad machine",
    "menstrual hygiene India",
    "Rag Innovations",
  ],
  authors: [{ name: "Rag Innovations" }],
  creator: "Rag Innovations",
  publisher: "Rag Innovations",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl + "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Rag Innovations",
    title: "Sanitary Napkin Machine India | Rag Innovations",
    description:
      "Affordable sanitary napkin machines in India. Start your pad business with Rag Innovations.",
    images: [
      {
        url: "/images/bg_1.png",
        alt: "Semi automatic sanitary napkin machine and pad production in India — Rag Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanitary Napkin Machine India | Rag Innovations",
    description:
      "Affordable sanitary napkin machines in India. Start your pad business with Rag Innovations.",
    images: ["/images/bg_1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <SeoJsonLd />
      </body>
    </html>
  );
}

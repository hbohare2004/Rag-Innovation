import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default:
      "Rag Innovations — Low-Cost Sanitary Napkin Making Machines India",
    template: "%s | Rag Innovations",
  },
  description:
    "Government-recognised startup manufacturing affordable sanitary napkin & maternity pad machines. Empowering women through menstrual hygiene awareness, vocational training & sustainable livelihoods across India.",
  keywords: [
    "sanitary pad making machine India",
    "menstrual hygiene awareness India",
    "women empowerment NGO India",
    "affordable sanitary pad machine",
    "rural women livelihood India",
    "sanitary napkin manufacturing unit",
    "low cost sanitary napkin machine",
    "maternity pad machine",
    "Rag Innovations",
  ],
  authors: [{ name: "Rag Innovations" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Rag Innovations",
    title: "Rag Innovations — Low-Cost Sanitary Napkin Making Machines India",
    description:
      "Government-recognised startup manufacturing affordable sanitary napkin & maternity pad machines for women empowerment across India.",
  },
  robots: {
    index: true,
    follow: true,
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

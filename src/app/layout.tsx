import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LegalEdge Law Firm | Justice. Integrity. Results.",
  description: "LegalEdge Law Firm represents premium clients with decades of legal excellence in Corporate Law, Family Law, Criminal Defense, Civil Litigation, Real Estate, and Intellectual Property.",
  keywords: "LegalEdge, Law Firm, Attorneys, Corporate Law, Criminal Defense, Litigation, Real Estate, Employment, Intellectual Property",
  authors: [{ name: "LegalEdge Law Firm" }],
  openGraph: {
    title: "LegalEdge Law Firm | Justice. Integrity. Results.",
    description: "LegalEdge Law Firm represents premium clients with decades of legal excellence in Corporate Law, Family Law, Criminal Defense, Civil Litigation, Real Estate, and Intellectual Property.",
    url: "https://legaledgelaw.com",
    siteName: "LegalEdge Law Firm",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorantGaramond.variable} ${outfit.variable} font-sans antialiased bg-bg-dark text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

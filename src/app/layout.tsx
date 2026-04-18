import type { Metadata } from "next";
import { Raleway, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site.config";
import PageLogTracker from "@/components/PageLogTracker";
import WebsiteLogTracker from "@/components/WebsiteLogTracker";
import OrganizationWebSiteSchema from "@/components/schema/OrganizationWebSiteSchema";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const title = `${siteConfig.seoBrand} – ${siteConfig.tagline}`;
const description = siteConfig.hero.subline;
const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(baseUrl),
  icons: {
    icon: [{ url: "/tab.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/tab.png",
    apple: [{ url: "/tab.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: baseUrl,
    siteName: siteConfig.seoBrand,
    title,
    description,
    images: [
      {
        url: "/tab.png",
        width: 512,
        height: 512,
        alt: `${siteConfig.seoBrand} – ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/tab.png"],
  },
  alternates: { canonical: baseUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Explizit: manche Browser/Dev-Caches ignorieren metadata.icons; /tab.png liegt in public/ */}
        <link rel="icon" href="/tab.png" type="image/png" sizes="512x512" />
        <link rel="shortcut icon" href="/tab.png" type="image/png" />
        <link rel="apple-touch-icon" href="/tab.png" />
      </head>
      <body className={`${raleway.variable} ${spaceGrotesk.variable} antialiased`}>
        <OrganizationWebSiteSchema />
        <PageLogTracker />
        <WebsiteLogTracker />
        {children}
      </body>
    </html>
  );
}

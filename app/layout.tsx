import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import { Footer } from "@/components/footer/footer";
import { SkipLink } from "@/components/layout/skip-link";
import { Navbar } from "@/components/navbar/navbar";
import { Analytics } from "@/components/seo/analytics";
import { JsonLd } from "@/components/seo/json-ld";
import { createRootMetadata } from "@/lib/seo/metadata";
import {
  organizationJsonLd,
  travelAgencyJsonLd,
  websiteJsonLd,
} from "@/lib/seo/json-ld";
import { getSiteSettings } from "@/lib/site/source";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return createRootMetadata(settings);
}

export const viewport: Viewport = {
  themeColor: "#1f4d3a",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const settings = await getSiteSettings();
  const localBusiness = travelAgencyJsonLd(settings);

  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationJsonLd(settings)} />
        {localBusiness ? <JsonLd data={localBusiness} /> : null}
        <JsonLd data={websiteJsonLd(settings)} />
        <Analytics />
        <SkipLink />
        <Navbar />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

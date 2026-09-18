import type { Metadata } from "next";
import { FeaturedDestinations } from "@/components/destinations/featured-destinations";
import { Faq } from "@/components/faq/faq";
import { FinalCta } from "@/components/cta/final-cta";
import { Hero } from "@/components/hero/hero";
import { HoneymoonSection } from "@/components/honeymoon/honeymoon-section";
import { HowItWorks } from "@/components/how-it-works/how-it-works";
import { FeaturedPackages } from "@/components/packages/featured-packages";
import { JsonLd } from "@/components/seo/json-ld";
import { Testimonials } from "@/components/testimonials/testimonials";
import { TrustBar } from "@/components/trust/trust-bar";
import { WhyChoose } from "@/components/why-choose/why-choose";
import { getPublishedFaqs } from "@/lib/faq/source";
import { faqPageJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { paths } from "@/lib/seo/paths";
import { getSiteSettings } from "@/lib/site/source";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return createPageMetadata({
    title: settings.title,
    description: settings.description,
    path: paths.home,
    absoluteTitle: true,
    image: settings.shareImage,
  });
}

export default async function HomePage() {
  const faqs = await getPublishedFaqs();

  return (
    <main id="main-content">
      <JsonLd data={faqPageJsonLd(faqs)} />
      <Hero />
      <TrustBar />
      <FeaturedPackages />
      <FeaturedDestinations />
      <WhyChoose />
      <HoneymoonSection />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <FinalCta />
    </main>
  );
}

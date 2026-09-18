import { ButtonLink } from "@/components/ui/button-link";
import { CoverImage } from "@/components/media/cover-image";
import { Container } from "@/components/layout/container";
import { EnquiryCard } from "@/components/forms/enquiry-card";
import { heroImage } from "@/lib/data/hero";
import { businessConfig } from "@/lib/site-config";
import { paths } from "@/lib/seo/paths";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative pb-8">
      <div className="relative isolate min-h-[34rem] overflow-hidden sm:min-h-[38rem] lg:min-h-[42rem]">
        <CoverImage
          image={heroImage}
          priority
          sizes="100vw"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/75 via-primary/35 to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-black/10" />
        <Container className="relative flex min-h-[34rem] flex-col justify-end pb-28 pt-24 sm:min-h-[38rem] sm:pb-32 lg:min-h-[42rem] lg:justify-center lg:pb-36 lg:pt-12">
          <p className="text-xs font-medium tracking-[0.24em] text-primary-foreground/80 uppercase">
            Kashmir travel, planned from the valley
          </p>
          <h1
            id="hero-heading"
            className="mt-4 max-w-xl font-heading text-4xl leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl"
          >
            Discover Kashmir, Your Way
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-primary-foreground/90 sm:text-lg">
            {businessConfig.businessName} creates customized Kashmir holidays — packages,
            honeymoon stays, family tours, and private itineraries shaped around
            your dates, pace, and the places you want to see.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={paths.packages} className="bg-card text-foreground hover:bg-card/90">
              Explore Packages
            </ButtonLink>
            <ButtonLink href={paths.contact} variant="outline" className="border-primary-foreground/35 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Plan Your Trip
            </ButtonLink>
          </div>
        </Container>
      </div>
      <Container className="relative z-10 -mt-20 sm:-mt-24">
        <EnquiryCard />
      </Container>
    </section>
  );
}

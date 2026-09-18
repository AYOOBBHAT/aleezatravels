import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { PackageCard } from "@/components/packages/package-card";
import { getFeaturedPackages } from "@/lib/packages/source";
import { paths } from "@/lib/seo/paths";

export async function FeaturedPackages() {
  const featuredPackages = await getFeaturedPackages();

  if (featuredPackages.length === 0) {
    return null;
  }

  return (
    <Section id="packages" ariaLabelledBy="packages-heading" className="bg-muted/60">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="packages-heading"
            eyebrow="Kashmir packages"
            title="Popular Kashmir packages"
            description="These are starting points. Every itinerary can be adjusted for dates, hotels, and pace before anything is confirmed."
          />
          <ButtonLink href={paths.packages} variant="outline" className="shrink-0">
            All packages
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredPackages.map((tourPackage) => (
            <PackageCard key={tourPackage.slug} tourPackage={tourPackage} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PackageCard } from "@/components/packages/package-card";
import type { TravelPackage } from "@/lib/packages/schema";

type RelatedPackagesProps = {
  title: string;
  description?: string;
  packages: TravelPackage[];
};

export function RelatedPackages({
  title,
  description,
  packages: related,
}: RelatedPackagesProps) {
  if (related.length === 0) {
    return null;
  }

  return (
    <Section className="bg-muted/60 pt-4 sm:pt-6">
      <Container>
        <h2 className="text-2xl sm:text-3xl">{title}</h2>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            {description}
          </p>
        ) : null}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {related.map((tourPackage) => (
            <PackageCard key={tourPackage.slug} tourPackage={tourPackage} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

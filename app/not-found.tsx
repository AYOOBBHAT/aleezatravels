import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { notFoundMetadata } from "@/lib/seo/metadata";
import { paths } from "@/lib/seo/paths";

export const metadata: Metadata = notFoundMetadata();

export default function NotFound() {
  return (
    <main id="main-content" className="flex flex-1 items-center py-20">
      <Container className="max-w-xl text-center">
        <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">
          404
        </p>
        <h1 className="mt-3 text-4xl">This page is not on the map</h1>
        <p className="mt-4 text-muted-foreground">
          The page you were looking for does not exist or has moved. Start again
          from the homepage or browse Kashmir packages.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={paths.home}>Back home</ButtonLink>
          <ButtonLink href={paths.packages} variant="outline">
            View packages
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}

"use client";

import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SiteLogo } from "@/components/layout/site-logo";
import { primaryNav } from "@/lib/data/site";
import { paths } from "@/lib/seo/paths";
import { cn } from "@/lib/utils";
import type { MediaAsset } from "@/lib/types";

export function MobileNav({
  whatsappHref,
  showWhatsApp = false,
  name,
  logo,
}: {
  whatsappHref?: string;
  showWhatsApp?: boolean;
  name?: string;
  logo?: MediaAsset;
}) {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open menu"
        className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "xl:hidden")}
      >
        <Menu />
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(100%,22rem)]">
        <SheetHeader>
          <SheetTitle className="sr-only">Site navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Links to {name ?? "Aleeza Travels"} pages and trip planning.
          </SheetDescription>
          <SiteLogo name={name} logo={logo} />
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
          {primaryNav.map((item) => (
            <SheetClose
              key={item.href}
              render={<Link href={item.href} />}
              className="rounded-lg px-2 py-2.5 text-base text-foreground hover:bg-muted"
            >
              {item.label}
            </SheetClose>
          ))}
        </nav>
        <div className="grid gap-2 px-4 pb-6">
          <ButtonLink href={paths.contact} className="w-full">
            Plan Your Trip
          </ButtonLink>
          {showWhatsApp && whatsappHref ? (
            <ButtonLink href={whatsappHref} variant="whatsapp" className="w-full">
              <MessageCircle data-icon="inline-start" />
              WhatsApp Us
            </ButtonLink>
          ) : null}
        </div>
      </SheetContent>
    </Sheet>
  );
}

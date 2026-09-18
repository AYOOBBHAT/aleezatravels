import { telUrl } from "@/lib/format";
import { paths } from "@/lib/seo/paths";
import { canonicalSiteUrl, resolvedBusinessConfig } from "@/lib/site-config";
import {
  destinationEnquiryMessage,
  generalEnquiryMessage,
  packageEnquiryMessage,
} from "@/lib/enquiry/message";

export function absoluteUrl(path: string = paths.home): string {
  const origin = canonicalSiteUrl();

  if (path === paths.home) {
    return origin;
  }

  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export { buildWhatsAppHref, configuredWhatsAppHref } from "@/lib/enquiry/whatsapp";
export { packageContactHref } from "@/lib/packages/links";
export { destinationContactHref } from "@/lib/destinations/links";
export {
  destinationEnquiryMessage,
  generalEnquiryMessage,
  packageEnquiryMessage,
};

export function honeymoonEnquiryMessage(): string {
  return packageEnquiryMessage("a Kashmir honeymoon");
}

export function businessTelHref(): string | undefined {
  const phone = resolvedBusinessConfig().phone;
  return phone ? telUrl(phone) : undefined;
}

export function businessMailtoHref(): string | undefined {
  const email = resolvedBusinessConfig().email;
  return email ? `mailto:${email}` : undefined;
}

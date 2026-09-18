import { getSiteSettings } from "@/lib/site/source";
import { isDirectWhatsAppHref, whatsappUrl } from "@/lib/format";
import { paths } from "@/lib/seo/paths";

export async function buildWhatsAppHref(message: string): Promise<string> {
  const settings = await getSiteSettings();
  const number = settings.contact.whatsapp;

  if (!number) {
    return `${paths.contact}?channel=whatsapp&message=${encodeURIComponent(message)}`;
  }

  return `${whatsappUrl(number)}?text=${encodeURIComponent(message)}`;
}

export async function configuredWhatsAppHref(
  message: string,
): Promise<string | undefined> {
  const href = await buildWhatsAppHref(message);
  return isDirectWhatsAppHref(href) ? href : undefined;
}

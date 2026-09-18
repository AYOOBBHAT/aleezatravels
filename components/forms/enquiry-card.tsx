import { EnquiryForm } from "@/components/forms/enquiry-form";
import { getPublishedDestinations } from "@/lib/destinations/source";
import { buildWhatsAppHref } from "@/lib/enquiry/whatsapp";
import { generalEnquiryMessage } from "@/lib/seo/urls";

export async function EnquiryCard() {
  const destinations = await getPublishedDestinations();

  return (
    <EnquiryForm
      variant="compact"
      destinations={destinations.map((destination) => ({
        slug: destination.slug,
        name: destination.name,
      }))}
      whatsappHref={await buildWhatsAppHref(generalEnquiryMessage())}
    />
  );
}

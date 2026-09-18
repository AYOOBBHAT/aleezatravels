import { getSiteSettings } from "@/lib/site/source";

export async function deliverEnquiryEmail(options: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const settings = await getSiteSettings();
  const to = settings.contact.email;
  const from = process.env.ENQUIRY_FROM_EMAIL?.trim();

  if (!apiKey || !to || !from) {
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: options.replyTo || undefined,
        subject: options.subject,
        text: options.text,
      }),
    });

    return response.ok;
  } catch {
    return false;
  }
}

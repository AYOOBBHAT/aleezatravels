export function formatMoney(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatInr(amount: number): string {
  return formatMoney(amount, "INR");
}

export function whatsappUrl(number: string): string {
  const digits = number.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}

export function telUrl(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function isDirectWhatsAppHref(href: string): boolean {
  return /https?:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href);
}

export function isoDate(date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

export function formatDisplayDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00+05:30`);

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(date);
}

export function toIsoDateTime(isoDate: string): string {
  return `${isoDate}T00:00:00+05:30`;
}

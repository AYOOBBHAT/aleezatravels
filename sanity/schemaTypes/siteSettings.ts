import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  groups: [
    { name: "business", title: "Business", default: true },
    { name: "seo", title: "Default SEO" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Business name",
      type: "string",
      group: "business",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "legalName",
      title: "Legal name",
      type: "string",
      group: "business",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      group: "business",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      group: "business",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp",
      type: "string",
      group: "business",
      description: "International format, digits only, with country code. Example: 9198XXXXXXXX",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "business",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
      group: "business",
      description:
        "Street address only when it is confirmed. Leave blank for a placeholder. Never invent a pin or locality-only address for Google.",
    }),
    defineField({
      name: "addressLocality",
      title: "City",
      type: "string",
      group: "business",
      description: "Leave blank until the office city is confirmed. Do not invent it.",
    }),
    defineField({
      name: "district",
      title: "District",
      type: "string",
      group: "business",
    }),
    defineField({
      name: "addressRegion",
      title: "State / region",
      type: "string",
      group: "business",
    }),
    defineField({
      name: "addressCountry",
      title: "Country",
      type: "string",
      group: "business",
    }),
    defineField({
      name: "postalCode",
      title: "Postal code",
      type: "string",
      group: "business",
    }),
    defineField({
      name: "latitude",
      title: "Latitude",
      type: "number",
      group: "business",
      description: "Only from a verified map pin. Never guess coordinates.",
    }),
    defineField({
      name: "longitude",
      title: "Longitude",
      type: "number",
      group: "business",
    }),
    defineField({
      name: "hoursNote",
      title: "Business hours",
      type: "text",
      rows: 3,
      group: "business",
      description:
        "Publish only confirmed hours. Leave blank to hide hours. Do not invent opening times.",
    }),
    defineField({
      name: "mapsPlaceUrl",
      title: "Google Maps place URL",
      type: "url",
      group: "business",
      description:
        "Public Google Maps or Google Business Profile link. Leave blank until the listing is verified.",
    }),
    defineField({
      name: "mapsEmbedUrl",
      title: "Google Maps embed URL",
      type: "url",
      group: "business",
      description:
        "The iframe src from Google Maps → Share → Embed a map. Only google.com/maps URLs are rendered.",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "altImage",
      group: "business",
    }),
    defineField({
      name: "social",
      title: "Social links",
      type: "array",
      group: "business",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "href",
              title: "URL",
              type: "url",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "seoTitle",
      title: "Default SEO title",
      type: "string",
      group: "seo",
      description: "Used on the homepage and as the site-wide title template.",
    }),
    defineField({
      name: "seoDescription",
      title: "Default SEO description",
      type: "text",
      rows: 3,
      group: "seo",
    }),
    defineField({
      name: "shareImage",
      title: "Default share image",
      type: "altImage",
      group: "seo",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});

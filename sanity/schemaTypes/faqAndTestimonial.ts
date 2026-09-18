import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "question", published: "published" },
    prepare: ({ title, published }) => ({
      title,
      subtitle: published ? "Published" : "Draft",
    }),
  },
});

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "customerName",
      title: "Customer name",
      type: "string",
      validation: (rule) => rule.required(),
      description: "Use a real guest name only when they have agreed to be quoted.",
    }),
    defineField({
      name: "quote",
      title: "Testimonial",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Trip date",
      type: "date",
    }),
    defineField({
      name: "trip",
      title: "Trip / package",
      type: "string",
      description: "Example: Kashmir honeymoon. Do not invent a package name.",
    }),
    defineField({
      name: "packageSlug",
      title: "Related package slug",
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "altImage",
      description: "Optional. Only upload a photo with the guest’s permission.",
    }),
    defineField({
      name: "permissionGranted",
      title: "Permission to publish",
      type: "boolean",
      initialValue: false,
      validation: (rule) => rule.required(),
      description: "Must be true. Do not publish without the guest’s consent.",
    }),
    defineField({
      name: "verified",
      title: "Verified genuine review",
      type: "boolean",
      initialValue: false,
      validation: (rule) => rule.required(),
      description: "Must be true. Never mark invented quotes as verified.",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "customerName", subtitle: "trip", published: "published" },
    prepare: ({ title, subtitle, published }) => ({
      title,
      subtitle: published ? subtitle : "Draft",
    }),
  },
});

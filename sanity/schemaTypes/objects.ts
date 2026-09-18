import { defineField, defineType } from "sanity";

export const altImage = defineType({
  name: "altImage",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Alt text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "credit",
      title: "Credit",
      type: "string",
    }),
  ],
});

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ",
  type: "object",
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
  ],
});

export const labeledItem = defineType({
  name: "labeledItem",
  title: "Titled note",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
});

export const seasonItem = defineType({
  name: "seasonItem",
  title: "Season",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
});

export const itineraryDay = defineType({
  name: "itineraryDay",
  title: "Itinerary day",
  type: "object",
  fields: [
    defineField({
      name: "day",
      title: "Day",
      type: "number",
      validation: (rule) => rule.required().integer().min(1),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "destination",
      title: "Destination",
      type: "reference",
      to: [{ type: "destination" }],
    }),
  ],
  preview: {
    select: { day: "day", title: "title" },
    prepare: ({ day, title }) => ({
      title: day ? `Day ${day}: ${title ?? ""}` : title,
    }),
  },
});

export const hotelStay = defineType({
  name: "hotelStay",
  title: "Hotel stay",
  type: "object",
  fields: [
    defineField({
      name: "destination",
      title: "Destination",
      type: "reference",
      to: [{ type: "destination" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "nights",
      title: "Nights",
      type: "number",
      validation: (rule) => rule.integer().min(0),
    }),
    defineField({
      name: "name",
      title: "Hotel or houseboat name",
      type: "string",
      description: "Leave empty until the property is confirmed in a written quote.",
    }),
    defineField({
      name: "roomCategory",
      title: "Room category",
      type: "string",
      initialValue: "To be confirmed",
    }),
    defineField({
      name: "note",
      title: "Note",
      type: "text",
      rows: 2,
    }),
  ],
});

export const seoFields = [
  defineField({
    name: "seoTitle",
    title: "SEO title",
    type: "string",
    description: "Browser tab and search title. Keep it close to the page H1.",
    validation: (rule) => rule.max(70),
    group: "seo",
  }),
  defineField({
    name: "seoDescription",
    title: "SEO description",
    type: "text",
    rows: 3,
    description: "Search snippet. Describe the page; do not stuff keywords.",
    validation: (rule) => rule.max(160),
    group: "seo",
  }),
];

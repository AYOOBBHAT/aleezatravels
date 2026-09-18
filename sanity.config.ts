import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { deskStructure } from "./sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "aleezatravels",
  title: "Aleeza Travels",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({ structure: deskStructure }),
    visionTool({ defaultApiVersion: "2026-01-01" }),
  ],
  schema: {
    types: schemaTypes,
  },
});

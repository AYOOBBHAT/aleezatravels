import type { BlogBlock, BlogSpan } from "@/lib/blog/schema";

type PortableSpan = {
  _type?: string;
  text?: string;
  marks?: string[];
};

type PortableMarkDef = {
  _key?: string;
  _type?: string;
  href?: string;
};

type PortableBlock = {
  _type?: string;
  _key?: string;
  style?: string;
  listItem?: "bullet" | "number";
  children?: PortableSpan[];
  markDefs?: PortableMarkDef[];
  text?: string;
};

function isBlogBlockArray(value: unknown[]): value is BlogBlock[] {
  const first = value[0];
  return Boolean(
    first &&
      typeof first === "object" &&
      "_type" in first &&
      (first._type === "heading" ||
        first._type === "paragraph" ||
        first._type === "list" ||
        first._type === "note"),
  );
}

function slugifyHeading(text: string): string {
  return (
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 64) || "section"
  );
}

function spansFromBlock(block: PortableBlock): BlogSpan[] {
  const markDefs = new Map(
    (block.markDefs ?? [])
      .filter((def) => def._key)
      .map((def) => [def._key as string, def]),
  );

  const spans: BlogSpan[] = [];

  for (const child of block.children ?? []) {
    const text = child.text ?? "";
    if (!text) {
      continue;
    }

    const linkMark = (child.marks ?? []).find((mark) => markDefs.get(mark)?.href);
    const href = linkMark ? markDefs.get(linkMark)?.href : undefined;

    spans.push(href ? { text, href } : { text });
  }

  return spans;
}

function blockText(block: PortableBlock): string {
  return (block.children ?? []).map((child) => child.text ?? "").join("");
}

/**
 * Convert Sanity Portable Text (or existing BlogBlock[]) into the renderer shape.
 */
export function portableTextToBlocks(value: unknown, slug: string): BlogBlock[] {
  if (!Array.isArray(value) || value.length === 0) {
    return [];
  }

  if (isBlogBlockArray(value)) {
    return value;
  }

  const blocks: BlogBlock[] = [];
  let index = 0;
  const key = () => `${slug}-pt-${++index}`;
  const headingIds = new Set<string>();
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length === 0) {
      return;
    }

    blocks.push({
      _type: "list",
      _key: key(),
      style: "bullet",
      items: listItems,
    });
    listItems = [];
  };

  for (const raw of value as PortableBlock[]) {
    if (raw?._type === "note") {
      flushList();
      const text = raw.text?.trim() || blockText(raw).trim();
      if (text) {
        blocks.push({ _type: "note", _key: raw._key || key(), text });
      }
      continue;
    }

    if (raw?._type !== "block") {
      continue;
    }

    if (raw.listItem) {
      const text = blockText(raw).trim();
      if (text) {
        listItems.push(text);
      }
      continue;
    }

    flushList();

    const style = raw.style ?? "normal";

    if (style === "h2" || style === "h3" || style === "h4") {
      const text = blockText(raw).trim();
      if (!text) {
        continue;
      }

      let id = slugifyHeading(text);
      if (headingIds.has(id)) {
        id = `${id}-${index + 1}`;
      }
      headingIds.add(id);

      blocks.push({
        _type: "heading",
        _key: raw._key || key(),
        id,
        text,
      });
      continue;
    }

    if (style === "blockquote") {
      const text = blockText(raw).trim();
      if (text) {
        blocks.push({ _type: "note", _key: raw._key || key(), text });
      }
      continue;
    }

    const spans = spansFromBlock(raw);
    if (spans.length > 0) {
      blocks.push({
        _type: "paragraph",
        _key: raw._key || key(),
        spans,
      });
    }
  }

  flushList();
  return blocks;
}

export function toIsoDate(value: string | undefined): string {
  if (!value) {
    return "";
  }

  return value.slice(0, 10);
}

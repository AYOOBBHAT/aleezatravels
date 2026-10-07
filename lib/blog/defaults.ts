import type {
  BlogArticle,
  BlogBlock,
  BlogSpan,
} from "@/lib/blog/schema";
import { assertBlogArticle } from "@/lib/blog/validate";

export function link(text: string, href: string): BlogSpan {
  return { text, href };
}

export function articleBlocks(slug: string) {
  let index = 0;
  const key = () => `${slug}-block-${++index}`;

  return {
    h2(id: string, text: string): BlogBlock {
      return { _type: "heading", _key: key(), id, text, level: 2 };
    },
    h3(id: string, text: string): BlogBlock {
      return { _type: "heading", _key: key(), id, text, level: 3 };
    },
    p(...parts: Array<string | BlogSpan>): BlogBlock {
      return {
        _type: "paragraph",
        _key: key(),
        spans: parts.map((part) =>
          typeof part === "string" ? { text: part } : part,
        ),
      };
    },
    ul(items: string[]): BlogBlock {
      return { _type: "list", _key: key(), style: "bullet", items };
    },
    note(text: string): BlogBlock {
      return { _type: "note", _key: key(), text };
    },
  };
}

export function defineArticle(doc: BlogArticle): BlogArticle {
  return assertBlogArticle(doc);
}

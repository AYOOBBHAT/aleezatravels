import Link from "next/link";
import type { BlogBlock, BlogSpan } from "@/lib/blog/schema";

function SpanText({ span }: { span: BlogSpan }) {
  if (!span.href) {
    return span.text;
  }

  const isInternal = span.href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={span.href} className="text-primary underline-offset-4 hover:underline">
        {span.text}
      </Link>
    );
  }

  return (
    <a
      href={span.href}
      className="text-primary underline-offset-4 hover:underline"
      rel="noopener noreferrer"
      target="_blank"
    >
      {span.text}
    </a>
  );
}

export function ArticleBody({ content }: { content: BlogBlock[] }) {
  return (
    <div className="space-y-6">
      {content.map((block) => {
        switch (block._type) {
          case "heading":
            return (
              <h2
                key={block._key}
                id={block.id}
                className="scroll-mt-28 text-2xl sm:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={block._key} className="text-base leading-7 text-muted-foreground">
                {block.spans.map((span, index) => (
                  <SpanText key={`${block._key}-${index}`} span={span} />
                ))}
              </p>
            );
          case "list":
            return (
              <ul
                key={block._key}
                className="list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground"
              >
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "note":
            return (
              <aside
                key={block._key}
                className="rounded-2xl bg-muted/80 px-5 py-4 text-sm leading-7 text-muted-foreground ring-1 ring-foreground/8"
              >
                {block.text}
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

type TocItem = {
  id: string;
  text: string;
};

export function ArticleToc({ items }: { items: TocItem[] }) {
  if (items.length < 3) {
    return null;
  }

  return (
    <nav aria-label="On this page">
      <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        On this page
      </p>
      <ul className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="inline-flex rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-secondary hover:text-secondary-foreground lg:rounded-lg"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

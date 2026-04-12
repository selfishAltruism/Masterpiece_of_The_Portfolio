"use client";

import { MouseEvent, useEffect, useRef, useState } from "react";

interface TableOfContentsProps {
  headings: { id: string; title: string; level: 1 | 2 | 3 | 4 }[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(headings[0]?.id ?? "");
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    setActiveId(headings[0]?.id ?? "");
  }, [headings]);

  useEffect(() => {
    if (headings.length === 0) return;

    const root = document.getElementById("detail-scroll-container");
    if (!root) return;

    const elements = headings
      .map((heading) => ({
        ...heading,
        element: document.getElementById(heading.id),
      }))
      .filter(
        (
          item,
        ): item is {
          id: string;
          title: string;
          level: 1 | 2 | 3 | 4;
          element: HTMLElement;
        } => Boolean(item.element),
      );

    if (elements.length === 0) return;

    const updateActiveId = () => {
      const rootTop = root.getBoundingClientRect().top;
      const activationLine = rootTop + 120;

      let nextActiveId = elements[0].id;

      elements.forEach((item) => {
        const top = item.element.getBoundingClientRect().top;
        if (top <= activationLine) {
          nextActiveId = item.id;
        }
      });

      setActiveId(nextActiveId);
    };

    updateActiveId();
    root.addEventListener("scroll", updateActiveId, { passive: true });
    window.addEventListener("resize", updateActiveId);

    return () => {
      root.removeEventListener("scroll", updateActiveId);
      window.removeEventListener("resize", updateActiveId);
    };
  }, [headings]);

  useEffect(() => {
    const list = listRef.current;
    if (!list || !activeId) return;
    if (!window.matchMedia("(min-width: 1280px)").matches) return;

    const activeLink = list.querySelector<HTMLElement>(
      `[data-toc-id="${CSS.escape(activeId)}"]`,
    );

    activeLink?.scrollIntoView({
      block: "nearest",
      inline: "nearest",
    });
  }, [activeId]);

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="theme-panel mb-4 w-full rounded-2xl border px-3 py-3 xl:ml-auto xl:max-h-[50vh] xl:w-[96%] xl:max-w-[420px] xl:overflow-hidden"
    >
      <p className="theme-text-soft text-[11px] font-semibold tracking-[0.08em]">
        목차
      </p>
      <ul
        ref={listRef}
        className="space-y-0.5 xl:max-h-[calc(50vh-2.75rem)] xl:overflow-y-auto"
      >
        {headings.map((heading) => {
          const isActive = heading.id === activeId;
          const levelClass =
            heading.level === 1
              ? "pl-0 text-sm"
              : heading.level === 2
                ? "pl-4 text-sm"
                : heading.level === 3
                  ? "pl-8 text-sm"
                  : "pl-12 text-sm";

          const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();

            const target = document.getElementById(heading.id);
            if (!target) return;

            setActiveId(heading.id);
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            window.history.replaceState(null, "", `#${heading.id}`);
          };

          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={handleClick}
                data-toc-id={heading.id}
                className={`block whitespace-normal break-keep rounded-lg px-2 py-1 leading-snug transition-colors ${levelClass} ${
                  isActive
                    ? "font-bold text-[var(--page-fg)]"
                    : "theme-text-soft hover:text-[var(--page-fg)]"
                }`}
              >
                {heading.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

import React, { Fragment } from "react";

import { groupLists } from "@/entities/detail/util";

function renderRichText(rich?: any[]) {
  if (!rich || !Array.isArray(rich)) return null;

  return rich.map((r, idx) => {
    const text = r?.plain_text ?? "";
    const ann = r?.annotations ?? {};
    const href = r?.href ?? r?.text?.link?.url;

    let node: React.ReactNode = text;

    if (ann.code) {
      node = (
        <code
          key={`code-${idx}`}
          className="rounded bg-gray-100 px-1 py-0.5 text-[0.95em] text-primary"
        >
          {text}
        </code>
      );
    }

    if (href) {
      node = (
        <a
          key={`a-${idx}`}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          {node}
        </a>
      );
    }

    if (ann.bold) node = <strong key={`b-${idx}`}>{node}</strong>;
    if (ann.italic) node = <em key={`i-${idx}`}>{node}</em>;
    if (ann.underline) node = <u key={`u-${idx}`}>{node}</u>;
    if (ann.strikethrough) node = <s key={`s-${idx}`}>{node}</s>;

    return <Fragment key={idx}>{node}</Fragment>;
  });
}

function Block({ block }: { block: any }) {
  const { type } = block;
  const data = block[type];

  switch (type) {
    case "paragraph":
      return <p className="mb-4 leading-7">{renderRichText(data.rich_text)}</p>;

    case "heading_1":
      return (
        <h1 className="mb-2 mt-8 text-3xl font-semibold max-md:text-2xl">
          {renderRichText(data.rich_text)}
        </h1>
      );

    case "heading_2":
      return (
        <h2 className="mb-2 mt-6 text-2xl font-semibold max-md:text-xl">
          {renderRichText(data.rich_text)}
        </h2>
      );

    case "heading_3":
      return (
        <h3 className="mb-2 mt-4 text-xl font-semibold max-md:text-[19px]">
          {renderRichText(data.rich_text)}
        </h3>
      );

    case "quote":
      return (
        <blockquote className="my-4 border-l-4 pl-4 italic">
          {renderRichText(data.rich_text)}
        </blockquote>
      );

    case "divider":
      return <hr className="my-3" />;

    case "code": {
      const language = data.language;
      const text = (data.rich_text || [])
        .map((r: any) => r.plain_text)
        .join("");
      return (
        <pre className="overflow-x-auto rounded-2xl border p-4 text-sm leading-6">
          <code className={`language-${language ?? "plain"}`}>{text}</code>
        </pre>
      );
    }

    case "image": {
      const src = data.type === "external" ? data.external.url : data.file.url;
      const caption = (data.caption || [])
        .map((r: any) => r.plain_text)
        .join("");
      return (
        <figure className="my-4">
          <img
            src={src}
            alt={caption || "notion-image"}
            className="rounded-xl"
          />
          {caption && (
            <figcaption className="mt-2 text-sm text-gray-500">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    }

    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li
          className={
            type === "bulleted_list_item"
              ? "ml-6 list-disc"
              : "ml-6 list-decimal"
          }
        >
          {renderRichText(data.rich_text)}
          {/* 중첩 리스트 처리: children 내부의 list item 재귀 렌더링. */}
          {Array.isArray(block.children) && block.children.length > 0 && (
            <NotionContent blocks={block.children} />
          )}
        </li>
      );

    default:
      return (
        <div className="my-2 text-sm text-gray-400">
          Unsupported block: {type}
        </div>
      );
  }
}

export function NotionContent({ blocks }: { blocks: any[] }) {
  const grouped = groupLists(blocks);

  return (
    <div className="max-md:text-[12px]">
      {grouped.map((g: any, idx: number) => {
        if (g._type === "ul") {
          return (
            <ul key={idx} className="my-2 space-y-2">
              {g.items.map((it: any) => (
                <Block key={it.id} block={it} />
              ))}
            </ul>
          );
        }
        if (g._type === "ol") {
          return (
            <ol key={idx} className="my-2 space-y-2">
              {g.items.map((it: any) => (
                <Block key={it.id} block={it} />
              ))}
            </ol>
          );
        }
        return <Block key={idx} block={g} />;
      })}
    </div>
  );
}

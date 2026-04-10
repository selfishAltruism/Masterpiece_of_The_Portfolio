import React, { Fragment } from "react";

import { highlightCode } from "@/entities/detail/highlight";
import {
  getHeadingId,
  getPlainText,
  groupLists,
} from "@/entities/detail/util";

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
          className="rounded bg-white px-1 py-0.5 text-[0.95em] text-[#161616]"
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

async function CodeBlock({
  code,
  language,
}: {
  code: string;
  language?: string;
}) {
  const html = await highlightCode(code, language);

  return (
    <div
      className="notion-code-block my-4 overflow-hidden rounded-2xl border border-black/10 bg-white text-sm shadow-sm"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

async function Block({
  block,
  headingIds,
}: {
  block: any;
  headingIds: Map<string, number>;
}) {
  const { type } = block;
  const data = block[type];

  switch (type) {
    case "paragraph":
      return <p className="mb-4 leading-7">{renderRichText(data.rich_text)}</p>;

    case "heading_1": {
      const headingText = getPlainText(data.rich_text);
      const headingId = getHeadingId(headingText, block.id, headingIds);

      return (
        <h1
          id={headingId}
          className="scroll-mt-24 mb-2 mt-8 text-[1.85rem] font-semibold leading-tight max-md:text-[1.55rem]"
        >
          {renderRichText(data.rich_text)}
        </h1>
      );
    }

    case "heading_2": {
      const headingId = getHeadingId(
        getPlainText(data.rich_text),
        block.id,
        headingIds,
      );

      return (
        <h2
          id={headingId}
          className="scroll-mt-24 mb-2 mt-6 text-2xl font-semibold max-md:text-xl"
        >
          {renderRichText(data.rich_text)}
        </h2>
      );
    }

    case "heading_3": {
      const headingId = getHeadingId(
        getPlainText(data.rich_text),
        block.id,
        headingIds,
      );

      return (
        <h3
          id={headingId}
          className="scroll-mt-24 mb-2 mt-4 text-xl font-semibold max-md:text-[19px]"
        >
          {renderRichText(data.rich_text)}
        </h3>
      );
    }

    case "quote":
      return (
        <blockquote className="my-4 border-l-4 pl-4 italic">
          {renderRichText(data.rich_text)}
        </blockquote>
      );

    case "divider":
      return <hr className="my-3" />;

    case "table_of_contents":
      return null;

    case "code": {
      const language = data.language;
      const text = (data.rich_text || [])
        .map((r: any) => r.plain_text)
        .join("");

      return <CodeBlock code={text} language={language} />;
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
          {Array.isArray(block.children) && block.children.length > 0 && (
            <NotionContent blocks={block.children} headingIds={headingIds} />
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

export async function NotionContent({
  blocks,
  headingIds = new Map<string, number>(),
}: {
  blocks: any[];
  headingIds?: Map<string, number>;
}) {
  const grouped = groupLists(blocks);

  return (
    <div className="max-md:text-[12px]">
      {await Promise.all(
        grouped.map(async (g: any, idx: number) => {
          if (g._type === "ul") {
            return (
              <ul key={idx} className="my-2 space-y-2">
                {await Promise.all(
                  g.items.map((it: any) => (
                    <Block key={it.id} block={it} headingIds={headingIds} />
                  )),
                )}
              </ul>
            );
          }
          if (g._type === "ol") {
            return (
              <ol key={idx} className="my-2 space-y-2">
                {await Promise.all(
                  g.items.map((it: any) => (
                    <Block key={it.id} block={it} headingIds={headingIds} />
                  )),
                )}
              </ol>
            );
          }

          return <Block key={idx} block={g} headingIds={headingIds} />;
        }),
      )}
    </div>
  );
}

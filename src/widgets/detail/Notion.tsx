import React, { Fragment } from "react";

import { groupLists } from "@/entities/detail/util";

// ---------- 컴포넌트: RichText(인라인 코드 포함) ----------
function renderRichText(rich?: any[]) {
  // 비정상 입력 처리.
  if (!rich || !Array.isArray(rich)) return null;

  // 각 리치 텍스트 조각을 React 노드로 변환.
  return rich.map((r, idx) => {
    const text = r?.plain_text ?? "";
    const ann = r?.annotations ?? {};
    const href = r?.href ?? r?.text?.link?.url;

    // 기본 노드 설정.
    let node: React.ReactNode = text;

    // inline code 적용.
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

    // 링크 래핑 처리.
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

    // 스타일 주석 적용.
    if (ann.bold) node = <strong key={`b-${idx}`}>{node}</strong>;
    if (ann.italic) node = <em key={`i-${idx}`}>{node}</em>;
    if (ann.underline) node = <u key={`u-${idx}`}>{node}</u>;
    if (ann.strikethrough) node = <s key={`s-${idx}`}>{node}</s>;

    // 조각 반환.
    return <Fragment key={idx}>{node}</Fragment>;
  });
}

// ---------- 컴포넌트: 블록 렌더러 ----------
function Block({ block }: { block: any }) {
  // 블록 타입 분기.
  const { type } = block;
  const data = block[type];

  switch (type) {
    case "paragraph":
      // 문단 렌더링.
      return <p className="mb-4 leading-7">{renderRichText(data.rich_text)}</p>;

    case "heading_1":
      // H1 렌더링.
      return (
        <h1 className="mb-4 mt-8 text-3xl font-semibold">
          {renderRichText(data.rich_text)}
        </h1>
      );

    case "heading_2":
      // H2 렌더링.
      return (
        <h2 className="mb-3 mt-6 text-2xl font-semibold">
          {renderRichText(data.rich_text)}
        </h2>
      );

    case "heading_3":
      // H3 렌더링.
      return (
        <h3 className="mb-2 mt-4 text-xl font-semibold">
          {renderRichText(data.rich_text)}
        </h3>
      );

    case "quote":
      // 인용 블록 렌더링.
      return (
        <blockquote className="my-4 border-l-4 pl-4 italic">
          {renderRichText(data.rich_text)}
        </blockquote>
      );

    case "divider":
      // 구분선 렌더링.
      return <hr className="my-6" />;

    case "code": {
      // 코드 블록 렌더링.
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
      // 이미지 블록 렌더링.
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
      // 리스트 아이템 렌더링 및 중첩 리스트 처리.
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
      // 미지원 블록 타입 안내.
      return (
        <div className="my-2 text-sm text-gray-400">
          Unsupported block: {type}
        </div>
      );
  }
}

// ---------- 컴포넌트: 리스트 그룹 ----------
export function NotionContent({ blocks }: { blocks: any[] }) {
  // 연속 리스트 묶기.
  const grouped = groupLists(blocks);

  // 그룹 타입에 따라 ul/ol/단일 블록 렌더링.
  return (
    <div className="h-full overflow-y-auto px-3 pb-16 max-xl:pt-20">
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

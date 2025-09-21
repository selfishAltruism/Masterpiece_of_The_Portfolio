// http://localhost:3000/detail/23248a08-56d4-8058-a94b-caec414175df

import { Client } from "@notionhq/client";
import React, { Fragment } from "react";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Notion 클라이언트 초기화.
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// ---------- 유틸: 페이지 제목 조회 ----------
async function getPageTitle(pageId: string) {
  // 페이지 객체 조회.
  const page: any = await notion.pages.retrieve({ page_id: pageId });

  // title 타입 프로퍼티 찾기.
  const titleProp = Object.values(page.properties || {}).find(
    (p: any) => p?.type === "title",
  ) as any;

  // plain_text를 이어 붙여 반환.
  return titleProp?.title?.map((r: any) => r.plain_text).join("") ?? "Untitled";
}

// ---------- 유틸: 자식 블록 수집(페이지네이션 처리) ----------
async function fetchChildren(blockId: string) {
  // 결과 누적 배열 생성.
  const results: any[] = [];
  // 커서 초기화.
  let cursor: string | undefined = undefined;

  // has_more가 존재할 때까지 반복 호출.
  do {
    const resp: any = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 100,
    });
    // 결과 누적.
    results.push(...resp.results);
    // 다음 커서 갱신.
    cursor = resp.has_more ? resp.next_cursor : undefined;
  } while (cursor);

  return results;
}

// ---------- 유틸: 블록 트리 구성(중첩 리스트 지원) ----------
async function buildTree(
  blocks: any[],
  depth = 0,
  maxDepth = 6,
): Promise<any[]> {
  // 최대 깊이 초과 시 종료.
  if (depth >= maxDepth) return blocks;

  // 자식이 있는 블록에 대해 재귀적으로 children 구성.
  return Promise.all(
    blocks.map(async (b) => {
      if (b.has_children) {
        const kids = await fetchChildren(b.id);
        const children = await buildTree(kids, depth + 1, maxDepth);
        return { ...b, children };
      }
      return b;
    }),
  );
}

// ---------- 유틸: 연속 리스트 블록 그룹화 ----------
function groupLists(blocks: any[]) {
  // 그룹 결과 초기화.
  const grouped: any[] = [];
  // 인덱스 초기화.
  let i = 0;

  // 전체 블록 순회.
  while (i < blocks.length) {
    const b = blocks[i];

    // 리스트 아이템인 경우 동일 타입 연속 구간을 묶음.
    if (b.type === "bulleted_list_item" || b.type === "numbered_list_item") {
      const listType = b.type;
      const items: any[] = [];

      // 동일 타입이 연속되는 동안 수집.
      while (i < blocks.length && blocks[i].type === listType) {
        items.push(blocks[i]);
        i++;
      }

      // ul/ol 구분으로 묶어서 push.
      grouped.push({
        _type: listType === "bulleted_list_item" ? "ul" : "ol",
        items,
      });
      continue;
    }

    // 리스트 외 블록은 그대로 push.
    grouped.push(b);
    i++;
  }

  return grouped;
}

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
            <ListGroup blocks={block.children} />
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
function ListGroup({ blocks }: { blocks: any[] }) {
  // 연속 리스트 묶기.
  const grouped = groupLists(blocks);

  // 그룹 타입에 따라 ul/ol/단일 블록 렌더링.
  return (
    <>
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
    </>
  );
}

// ---------- 페이지 컴포넌트 ----------
export default async function NotionPage({
  params,
}: {
  params: { pageId: string };
}) {
  // 환경 변수 존재 여부 확인.
  if (!process.env.NOTION_API_KEY) {
    throw new Error(
      "NOTION_API_KEY 누락: .env.local 설정 후 서버 재시작이 필요함.",
    );
  }

  // 라우터로부터 페이지 ID 수신.
  const PAGE_ID = params.pageId;

  // 루트 children 수집.
  const rootChildren = await fetchChildren(PAGE_ID);

  // 트리 구성.
  const tree = await buildTree(rootChildren);

  // 최상위 리스트 그룹화.
  const grouped = groupLists(tree);

  // 제목 조회.
  const title = await getPageTitle(PAGE_ID);

  // 렌더링 수행.
  return (
    <main className="multi-gradient-background px-6 py-10 text-white">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      </header>

      <ListGroup blocks={grouped} />

      <footer className="mt-16 text-xs text-gray-500">
        이미지(file.url)는 임시 URL이므로 ISR/재호출 전략을 권장함.
      </footer>
    </main>
  );
}

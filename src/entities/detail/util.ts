import { Client } from "@notionhq/client";

// Notion 클라이언트 초기화.
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// ---------- 유틸: 페이지 제목 조회 ----------
export async function getPageTitle(pageId: string) {
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
export async function fetchChildren(blockId: string) {
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
export async function buildTree(
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
export function groupLists(blocks: any[]) {
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

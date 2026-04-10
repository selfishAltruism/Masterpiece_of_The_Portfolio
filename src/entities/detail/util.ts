import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function fetchPageTitle(pageId: string) {
  const page: any = await notion.pages.retrieve({ page_id: pageId });

  const titleProp = Object.values(page.properties || {}).find(
    (p: any) => p?.type === "title",
  ) as any;

  return titleProp?.title?.map((r: any) => r.plain_text).join("") ?? "Untitled";
}

export async function fetchChildren(blockId: string) {
  const results: any[] = [];
  let cursor: string | undefined = undefined;

  do {
    const resp: any = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 100,
    });
    results.push(...resp.results);
    cursor = resp.has_more ? resp.next_cursor : undefined;
  } while (cursor);

  return results;
}

export async function buildTree(
  blocks: any[],
  depth = 0,
  maxDepth = 6,
): Promise<any[]> {
  if (depth >= maxDepth) return blocks;

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

export function groupLists(blocks: any[]) {
  const grouped: any[] = [];
  let i = 0;

  while (i < blocks.length) {
    const b = blocks[i];

    if (b.type === "bulleted_list_item" || b.type === "numbered_list_item") {
      const listType = b.type;
      const items: any[] = [];

      while (i < blocks.length && blocks[i].type === listType) {
        items.push(blocks[i]);
        i++;
      }

      grouped.push({
        _type: listType === "bulleted_list_item" ? "ul" : "ol",
        items,
      });
      continue;
    }
    grouped.push(b);
    i++;
  }
  return grouped;
}

export function getPlainText(rich?: any[]) {
  if (!Array.isArray(rich)) return "";
  return rich.map((item: any) => item?.plain_text ?? "").join("").trim();
}

export function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[!-/:-@[-`{-~]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getHeadingId(
  title: string,
  fallbackId: string,
  usedIds: Map<string, number>,
) {
  const baseId = slugifyHeading(title) || fallbackId;
  const count = usedIds.get(baseId) ?? 0;
  usedIds.set(baseId, count + 1);

  return count === 0 ? baseId : `${baseId}-${count + 1}`;
}

export function extractHeadingItems(blocks: any[]) {
  const headings: { id: string; title: string; level: 1 | 2 | 3 }[] = [];
  const usedIds = new Map<string, number>();

  const walk = (items: any[]) => {
    items.forEach((block) => {
      if (
        block?.type === "heading_1" ||
        block?.type === "heading_2" ||
        block?.type === "heading_3"
      ) {
        const level = Number(block.type.slice(-1)) as 1 | 2 | 3;
        const title = getPlainText(block[block.type]?.rich_text);

        if (title) {
          headings.push({
            id: getHeadingId(title, block.id, usedIds),
            title,
            level,
          });
        }
      }

      if (Array.isArray(block?.children) && block.children.length > 0) {
        walk(block.children);
      }
    });
  };

  walk(blocks);
  return headings;
}

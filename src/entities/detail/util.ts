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

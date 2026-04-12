import { Construction } from "lucide-react";
import React from "react";

import {
  buildTree,
  extractHeadingItems,
  fetchChildren,
  fetchPageTitle,
  groupLists,
} from "@/entities/detail/util";

import { isStringArray } from "@/shared/shadcn/lib/utils";

import { NotionContent } from "@/widgets/detail/NotionContent";
import { DetailStacks, Header } from "@/widgets/detail/Header";
import { TableOfContents } from "@/widgets/detail/TableOfContents";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export default async function NotionPage({
  params,
}: {
  params: { pageId: string };
}) {
  if (!process.env.NOTION_API_KEY) {
    throw new Error("NOTION_API_KEY 누락.");
  }

  const PAGE_ID = params.pageId;

  const rootChildren = await fetchChildren(PAGE_ID);
  const tree = await buildTree(rootChildren);
  const titleData = (await fetchPageTitle(PAGE_ID)).split("_");

  if (
    !rootChildren ||
    !tree ||
    !titleData ||
    !isStringArray(titleData) ||
    titleData.length !== 4
  )
    return (
      <div className="multi-gradient-background flex h-screen w-screen items-center justify-center text-white">
        <Construction />
        <Construction className="mr-2" />
        Under Construction...
        <Construction className="ml-2" />
        <Construction />
      </div>
    );

  const grouped = groupLists(tree);
  const headings = extractHeadingItems(tree);

  const title = titleData[0];
  const peroid = titleData[1];
  const tags = titleData[2].split("/");
  const techs = titleData[3].split("/");

  return (
    <>
      <main className="multi-gradient-background relative flex h-screen w-screen flex-row gap-5 text-white">
        <header className="relative z-20 flex w-full items-end justify-between gap-1 max-xl:absolute max-xl:items-start max-xl:pr-2 max-xl:pt-2 max-xl:[background-image:linear-gradient(to_bottom,var(--page-bg)_0%,color-mix(in_srgb,var(--page-bg)_94%,transparent)_60%,transparent_100%)] xl:w-[500px] xl:flex-col xl:items-end xl:justify-center">
          <Header
            title={title}
            peroid={peroid}
            tags={tags}
            techs={techs}
            toc={<TableOfContents headings={headings} />}
          />
        </header>

        <div
          id="detail-scroll-container"
          className="relative z-0 flex h-full min-w-0 flex-1 flex-col gap-4 overflow-y-auto scroll-smooth px-3 pb-16 max-xl:pt-20 max-lg:pt-28"
        >
          <DetailStacks
            tags={tags}
            techs={techs}
            className="flex flex-col gap-2 xl:hidden"
          />
          <div className="max-xl:block xl:hidden">
            <TableOfContents headings={headings} />
          </div>
          <div className="min-w-0 flex-1">
            <NotionContent blocks={grouped} />
          </div>
        </div>
      </main>
      <footer className="fixed bottom-2 right-2 w-max text-[10px] text-white/40 max-xl:top-2 xl:left-2 xl:text-xs">
        Designed & Made by <strong>Kyu</strong>
      </footer>
    </>
  );
}

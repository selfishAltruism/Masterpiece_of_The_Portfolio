import { Construction } from "lucide-react";
import React from "react";

import {
  buildTree,
  fetchChildren,
  fetchPageTitle,
  groupLists,
} from "@/entities/detail/util";

import { isStringArray } from "@/shared/shadcn/lib/utils";

import { NotionContent } from "@/widgets/detail/NotionContent";
import { Header } from "@/widgets/detail/Header";

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
    titleData.length < 4
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

  const title = titleData[0];
  const peroid = titleData[1];
  const tags = titleData[2].split("/");
  const techs = titleData[3].split("/");

  return (
    <>
      <main className="multi-gradient-background relative flex h-screen w-screen flex-row gap-5 text-white">
        <header className="relative flex w-full items-end justify-between gap-1 max-xl:absolute max-xl:items-center max-xl:bg-black/60 max-xl:pr-2 max-xl:pt-3 xl:w-[500px] xl:flex-col xl:justify-center">
          <Header title={title} peroid={peroid} tags={tags} techs={techs} />
        </header>

        <div className="h-full overflow-y-auto px-3 pb-16 max-xl:pt-20">
          <NotionContent blocks={grouped} />
        </div>
      </main>
      <footer className="fixed bottom-2 right-2 w-max text-[10px] text-white/40 max-xl:top-2 xl:left-2 xl:text-xs">
        Designed & Made by <strong>Kyu</strong>
      </footer>
    </>
  );
}

import { Construction, Key, Layers } from "lucide-react";
import React from "react";

import {
  buildTree,
  fetchChildren,
  fetchPageTitle,
  groupLists,
} from "@/entities/detail/util";

import { isStringArray } from "@/shared/shadcn/lib/utils";
import { OutlineStackSpan, SolidStackSpan } from "@/shared/ui/StackSpan";
import Title from "@/shared/ui/Title";

import { NotionContent } from "@/widgets/detail/NotionContent";

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
    <main className="multi-gradient-background relative flex h-screen w-screen flex-row gap-5 text-white">
      <header className="flex w-full items-end justify-between gap-1 max-xl:absolute max-xl:items-center max-xl:bg-black/60 max-xl:pr-2 max-xl:pt-3 xl:w-[500px] xl:flex-col xl:justify-center">
        <Title>
          <div className="w-full rounded-r-md bg-white px-3 text-end leading-tight text-black">
            {title}
          </div>
        </Title>
        <div className="flex flex-col items-end gap-1 max-xl:pb-3">
          <h1 className="mt-4 text-[10px] font-bold leading-tight tracking-tight md:text-sm">
            {peroid}
          </h1>
          <h1 className="flex gap-1 font-bold tracking-tight">
            {tags.map((tag, i) => (
              <OutlineStackSpan key={tag} tag={tag} idx={i} />
            ))}
            <Key size={16} className="ml-1 min-w-4" />
          </h1>
          <h1 className="flex gap-1 font-bold tracking-tight">
            {techs.map((tech, i) => (
              <SolidStackSpan key={tech} tag={tech} idx={i} />
            ))}
            <Layers size={16} className="ml-1 min-w-4" />
          </h1>
        </div>
      </header>

      <div className="h-full overflow-y-auto px-3 pb-16 max-xl:pt-20">
        <NotionContent blocks={grouped} />
      </div>
    </main>
  );
}

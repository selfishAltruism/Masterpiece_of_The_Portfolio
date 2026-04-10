import { ChevronLeft, Key, Layers } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import Title from "@/shared/ui/Title";
import { OutlineStackSpan, SolidStackSpan } from "@/shared/ui/StackSpan";

interface HeaderProps {
  title: string;
  peroid: string;
  tags: string[];
  techs: string[];
  toc?: ReactNode;
}

interface DetailMetaProps {
  peroid: string;
  tags: string[];
  techs: string[];
  className?: string;
}

export const DetailMeta = ({
  peroid,
  tags,
  techs,
  className,
}: DetailMetaProps) => (
  <div className={className}>
    <h1 className="text-[10px] font-bold leading-tight tracking-tight md:text-sm">
      {peroid}
    </h1>
    <h1 className="flex items-start gap-1 font-bold tracking-tight">
      <Key size={16} className="mt-0.5 min-w-4" />
      <div className="flex w-full flex-wrap gap-1">
        {tags.map((tag, i) => (
          <OutlineStackSpan key={tag} tag={tag} idx={i} />
        ))}
      </div>
    </h1>
    <h1 className="flex items-start gap-1 font-bold tracking-tight">
      <Layers size={16} className="mt-0.5 min-w-4" />
      <div className="flex w-full flex-wrap gap-1">
        {techs.map((tech, i) => (
          <SolidStackSpan key={tech} tag={tech} idx={i} />
        ))}
      </div>
    </h1>
  </div>
);

export const Header = ({ title, peroid, tags, techs, toc }: HeaderProps) => (
  <>
    <Link href="/" className="absolute left-2 top-2 xl:left-3 xl:top-3">
      <ChevronLeft className="h-6 w-6 max-xl:h-5 max-xl:w-5 xl:h-9 xl:w-9" />
    </Link>
    <Title>
      <p className="w-full px-3 pt-5 pr-10 text-left leading-tight xl:pr-3 xl:text-end">
        {title}
      </p>
    </Title>
    <DetailMeta
      peroid={peroid}
      tags={tags}
      techs={techs}
      className="hidden items-end gap-1 pt-4 xl:flex xl:flex-col"
    />
    {toc && <div className="hidden w-full pt-6 xl:block">{toc}</div>}
  </>
);

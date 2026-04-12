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

interface DetailStacksProps {
  tags: string[];
  techs: string[];
  className?: string;
}

export const DetailStacks = ({ tags, techs, className }: DetailStacksProps) => (
  <div className={className}>
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
    <DetailStacks
      tags={tags}
      techs={techs}
      className="flex flex-col items-end gap-1"
    />
  </div>
);

export const Header = ({ title, peroid, tags, techs, toc }: HeaderProps) => (
  <>
    <Link href="/" className="absolute left-2 top-2 xl:left-2 xl:top-3">
      <ChevronLeft className="theme-text-soft h-6 w-6 max-xl:h-5 max-xl:w-5 xl:h-6 xl:w-6" />
    </Link>
    <Title>
      <p className="w-full pl-3 pt-[22px] text-left leading-tight xl:pr-3 xl:text-left">
        {title}
      </p>
    </Title>
    <h1 className="w-[150px] min-w-[150px] pr-2 pt-7 text-end text-[10px] leading-tight tracking-tight sm:w-[180px] sm:min-w-[180px] md:text-sm xl:hidden">
      {peroid}
    </h1>
    <DetailMeta
      peroid={peroid}
      tags={tags}
      techs={techs}
      className="hidden gap-1 px-3 pt-4 xl:flex xl:w-full xl:flex-col xl:items-end"
    />
    {toc && <div className="hidden w-full pt-6 xl:block">{toc}</div>}
  </>
);

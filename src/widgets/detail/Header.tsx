import { ChevronLeft, Key, Layers } from "lucide-react";
import Link from "next/link";

import Title from "@/shared/ui/Title";
import { OutlineStackSpan, SolidStackSpan } from "@/shared/ui/StackSpan";

interface HeaderProps {
  title: string;
  peroid: string;
  tags: string[];
  techs: string[];
}

export const Header = ({ title, peroid, tags, techs }: HeaderProps) => (
  <>
    <Link href="/" className="absolute left-2 top-2">
      <ChevronLeft className="h-6 w-6 max-xl:h-5 max-xl:w-5" />
    </Link>
    <Title>
      <p className="w-full rounded-r-md bg-white px-3 text-end leading-tight text-black">
        {title}
      </p>
    </Title>
    <div className="flex flex-col items-end gap-1 max-xl:pb-3">
      <h1 className="mt-4 text-[10px] font-bold leading-tight tracking-tight md:text-sm">
        {peroid}
      </h1>
      <h1 className="flex gap-1 font-bold tracking-tight">
        <div className="flex w-full flex-wrap justify-end gap-1">
          {tags.map((tag, i) => (
            <OutlineStackSpan key={tag} tag={tag} idx={i} />
          ))}
        </div>
        <Key size={16} className="ml-1 min-w-4" />
      </h1>
      <h1 className="flex gap-1 font-bold tracking-tight">
        <div className="flex w-full flex-wrap justify-end gap-1">
          {techs.map((tech, i) => (
            <SolidStackSpan key={tech} tag={tech} idx={i} />
          ))}
        </div>
        <Layers size={16} className="ml-1 min-w-4" />
      </h1>
    </div>
  </>
);

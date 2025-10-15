import { Layers, Key } from "lucide-react";

import BasicButton from "@/shared/ui/BasicButton";
import { OutlineStackSpan, SolidStackSpan } from "@/shared/ui/StackSpan";

export const DevelopmentCard = ({
  development,
}: {
  development: Data.Development;
}) => {
  return (
    <div
      id={`dev-${development.id}`}
      className="mb-2 mt-2 flex items-end justify-between rounded-lg border-2 border-white bg-white/15 p-5 text-white max-lg:flex-col max-lg:gap-5 max-md:gap-2 max-sm:p-2"
    >
      <div className="w-full">
        <h3 className="mb-4 text-lg leading-tight max-md:mb-2 max-md:text-[13px]">
          {development.title}
        </h3>
        <div className="flex gap-1">
          <Key size={16} className="mr-1 min-w-4" />
          <div className="mb-1 flex flex-wrap items-center gap-1">
            {development.tags.map((tag, i) => (
              <OutlineStackSpan idx={i} tag={tag} />
            ))}
          </div>
        </div>
        <div className="flex gap-1">
          <Layers size={16} className="mr-1 min-w-4" />
          <div className="mb-5 flex flex-wrap items-center gap-1 max-md:mb-2">
            {development.techStacks.map((tag, i) => (
              <SolidStackSpan idx={i} tag={tag} />
            ))}
          </div>
        </div>

        <p className="mb-[2px] text-xs leading-tight text-white/60 max-md:text-[10px]">
          {development.period}
        </p>
        <p className="mb-[2px] text-sm leading-tight text-white/90 max-md:text-[11px]">
          {development.description}
        </p>
      </div>

      <div className="">
        <BasicButton to={development.link}>Development Detail</BasicButton>
      </div>
    </div>
  );
};

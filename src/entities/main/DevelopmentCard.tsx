import { Layers, Key } from "lucide-react";

import { cn } from "@/shared/shadcn/lib/utils";
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
      className={cn(
        "mb-2 mt-2 flex items-end justify-between rounded-lg border border-white bg-transparent p-5",
      )}
    >
      <div>
        <h3 className="mb-4 text-lg">{development.title}</h3>
        <div className="mb-1 flex flex-wrap items-center gap-1">
          <Key size={16} className="mr-1" />
          {development.tags.map((tag, i) => (
            <OutlineStackSpan idx={i} tag={tag} />
          ))}
        </div>
        <div className="mb-4 flex flex-wrap items-center gap-1">
          <Layers size={16} className="mr-1" />
          {development.techStacks.map((tag, i) => (
            <SolidStackSpan idx={i} tag={tag} />
          ))}
        </div>
        <p className="mb-[2px] text-xs text-white/50">{development.period}</p>
        <p className="mb-[2px] text-sm text-white/90">
          {development.description}
        </p>
      </div>

      <div className="">
        <BasicButton whiteBg to={development.link}>
          Development Detail
        </BasicButton>
      </div>
    </div>
  );
};

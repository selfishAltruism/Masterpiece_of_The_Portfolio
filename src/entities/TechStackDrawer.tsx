import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/shared/shadcn/components/ui/drawer";
import Divider from "@/shared/ui/Divider";

import { StackSpan } from "@/shared/ui/StackSpan";
import { techStacks } from "@/shared/data/techstacks";

export const TechStackDrawer = () => {
  return (
    <DrawerContent>
      <div className="flex max-h-[70vh] w-full flex-col gap-2 overflow-y-auto px-4 pb-7 pt-2">
        <strong className="-mb-2 text-sub">Keyword</strong>
        <Divider />
        <div className="flex flex-wrap items-start gap-2 text-xs text-white">
          {techStacks["Keyword"].map((item) => (
            <span
              key={item}
              className="whitespace-nowrap rounded-sm bg-sub px-3 pb-[11px] pt-[12px] text-[15px] text-white"
            >
              {item}
            </span>
          ))}
        </div>

        <strong className="-mb-2 mt-1 text-sub">Pretty well-used</strong>
        <Divider />
        <div className="flex flex-wrap items-start gap-2 text-xs text-white">
          <div className="flex flex-col gap-2 rounded-md border bg-sub p-2">
            <strong className="ml-[1px]">Language</strong>
            <div className="flex flex-wrap gap-2">
              {techStacks["Pretty well-used / Language"].map((name, idx) => (
                <StackSpan tag={name} idx={idx} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-md border bg-sub p-2">
            <strong className="ml-[1px]">Framework</strong>
            <div className="flex flex-wrap gap-2">
              {techStacks["Pretty well-used / Framework"].map((name, idx) => (
                <StackSpan tag={name} idx={idx} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-md border bg-sub p-2">
            <strong className="ml-[1px]">Tool</strong>
            <div className="flex flex-wrap gap-2">
              {techStacks["Pretty well-used / Tool"].map((name, idx) => (
                <StackSpan tag={name} idx={idx} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-md border bg-sub p-2">
            <strong className="ml-[1px]">Library</strong>
            <div className="flex flex-wrap gap-2">
              {techStacks["Pretty well-used / Library"].map((name, idx) => (
                <StackSpan tag={name} idx={idx} />
              ))}
            </div>
          </div>
        </div>

        <strong className="-mb-2 mt-1 text-sub">Well-used</strong>
        <Divider />

        <div className="flex flex-wrap items-start gap-2 text-xs text-white">
          <div className="flex flex-col gap-2 rounded-md border bg-sub p-2">
            <strong className="ml-[1px]">Language</strong>
            <div className="flex flex-wrap gap-2">
              {techStacks["Well-used / Language"].map((name, idx) => (
                <StackSpan tag={name} idx={idx} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-md border bg-sub p-2">
            <strong className="ml-[1px]">Framework</strong>
            <div className="flex flex-wrap gap-2">
              {techStacks["Well-used / Framework"].map((name, idx) => (
                <StackSpan tag={name} idx={idx} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-md border bg-sub p-2">
            <strong className="ml-[1px]">Library</strong>
            <div className="flex flex-wrap gap-2">
              {techStacks["Well-used / Library"].map((name, idx) => (
                <StackSpan tag={name} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DrawerContent>
  );
};

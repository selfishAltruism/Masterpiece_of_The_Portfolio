import { Layers } from "lucide-react";

import { DrawerContent } from "@/shared/shadcn/components/ui/drawer";
import Divider from "@/shared/ui/Divider";
import { SolidStackSpan } from "@/shared/ui/StackSpan";
import { techStacks } from "@/shared/data/techstacks";
import Title from "@/shared/ui/Title";

export const TechStackDrawer = () => {
  return (
    <DrawerContent>
      <Title>
        <strong className="flex items-center gap-2 px-3 text-[#161616]">
          Tech Stack
          <Layers size={19} className="xl:hidden" />
          <Layers size={27} className="max-xl:hidden" />
        </strong>
      </Title>
      <div className="flex max-h-[70vh] w-full flex-col gap-2 overflow-y-auto px-4 pb-10 pt-2">
        <strong className="-mb-2 text-[#161616]">
          <span className="text-[#0A5BBD]">Core</span> Dev Area
        </strong>
        <Divider />
        <div className="flex flex-wrap items-start gap-2 text-xs text-white">
          {techStacks["Core Dev Area"].map((item) => (
            <span
              key={item}
              className="whitespace-nowrap rounded-[3px] bg-[#161616] px-4 pb-[8px] pt-[9px] text-sm text-white"
            >
              {item}
            </span>
          ))}
        </div>

        <strong className="-mb-2 mt-1 text-[#161616]">
          <span className="text-[#0A5BBD]">Pretty well</span>-used
        </strong>
        <Divider />
        <div className="flex flex-wrap items-start gap-2 text-[11px] text-white">
          <div className="flex flex-col gap-2 rounded-[3px] border bg-[#161616]/85 p-2">
            <strong className="ml-[1px]">Language</strong>
            <div className="flex flex-wrap gap-1">
              {techStacks["Pretty well-used / Language"].map((name, idx) => (
                <SolidStackSpan key={name} tag={name} idx={idx} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-[3px] border bg-[#161616]/85 p-2">
            <strong className="ml-[1px]">Framework</strong>
            <div className="flex flex-wrap gap-1">
              {techStacks["Pretty well-used / Framework"].map((name, idx) => (
                <SolidStackSpan key={name} tag={name} idx={idx} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-[3px] border bg-[#161616]/85 p-2">
            <strong className="ml-[1px]">Tool</strong>
            <div className="flex flex-wrap gap-1">
              {techStacks["Pretty well-used / Tool"].map((name, idx) => (
                <SolidStackSpan key={name} tag={name} idx={idx} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-[3px] border bg-[#161616]/85 p-2">
            <strong className="ml-[1px]">Library</strong>
            <div className="flex flex-wrap gap-1">
              {techStacks["Pretty well-used / Library"].map((name, idx) => (
                <SolidStackSpan key={name} tag={name} idx={idx} />
              ))}
            </div>
          </div>
        </div>

        <strong className="-mb-2 mt-1 text-[#161616]">
          <span className="text-[#0A5BBD]">Well</span>-used
        </strong>
        <Divider />

        <div className="flex flex-wrap items-start gap-2 text-xs text-white">
          <div className="flex flex-col gap-2 rounded-[3px] border bg-[#161616]/80 p-2">
            <strong className="ml-[1px]">Language</strong>
            <div className="flex flex-wrap gap-1">
              {techStacks["Well-used / Language"].map((name, idx) => (
                <SolidStackSpan key={name} tag={name} idx={idx} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-[3px] border bg-[#161616]/80 p-2">
            <strong className="ml-[1px]">Framework</strong>
            <div className="flex flex-wrap gap-1">
              {techStacks["Well-used / Framework"].map((name, idx) => (
                <SolidStackSpan key={name} tag={name} idx={idx} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-[3px] border bg-[#161616]/80 p-2">
            <strong className="ml-[1px]">Library</strong>
            <div className="flex flex-wrap gap-1">
              {techStacks["Well-used / Library"].map((name, idx) => (
                <SolidStackSpan key={name} tag={name} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DrawerContent>
  );
};

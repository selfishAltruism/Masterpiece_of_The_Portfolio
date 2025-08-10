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
      <DrawerHeader>
        <DrawerTitle>Tech Stack</DrawerTitle>
      </DrawerHeader>
      <div className="flex max-h-[70vh] w-full flex-col gap-2 overflow-y-auto px-4 pb-7 pt-2">
        <strong className="text-lg text-sub">Pretty well-used</strong>
        <Divider />
        <div className="flex flex-wrap items-start gap-2">
          <div className="flex flex-col gap-2 rounded-md border p-4">
            <strong>Language</strong>
            <div className="flex flex-wrap gap-2">
              {techStacks["Pretty well-used / Language"].map((name, idx) => (
                <StackSpan tag={name} idx={idx} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-md border p-4">
            <strong>Framework</strong>
            <div className="flex flex-wrap gap-2">
              {techStacks["Pretty well-used / Framework"].map((name, idx) => (
                <StackSpan tag={name} idx={idx} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-md border p-4">
            <strong>Tool</strong>
            <div className="flex flex-wrap gap-2">
              {techStacks["Pretty well-used / Tool"].map((name, idx) => (
                <StackSpan tag={name} idx={idx} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-md border p-4">
            <strong>Library</strong>
            <div className="flex flex-wrap gap-2">
              {techStacks["Pretty well-used / Library"].map((name, idx) => (
                <StackSpan tag={name} idx={idx} />
              ))}
            </div>
          </div>
        </div>

        <strong className="mt-5 text-lg text-sub">Well-used</strong>
        <Divider />

        <div className="flex flex-wrap items-start gap-2">
          <div className="flex flex-col gap-2 rounded-md border p-4">
            <strong>Language</strong>
            <div className="flex flex-wrap gap-2">
              {techStacks["Well-used / Language"].map((name, idx) => (
                <StackSpan tag={name} idx={idx} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-md border p-4">
            <strong>Framework</strong>
            <div className="flex flex-wrap gap-2">
              {techStacks["Well-used / Framework"].map((name, idx) => (
                <StackSpan tag={name} idx={idx} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-md border p-4">
            <strong>Library</strong>
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

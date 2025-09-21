import React from "react";

import Title from "@/shared/ui/Title";
import BlackOutlineButton from "@/shared/ui/OutlineButton";
import { developmentLogs } from "@/shared/data/development";
import { SolidStackSpan, OutlineStackSpan } from "@/shared/ui/StackSpan";
import { cn } from "@/shared/shadcn/lib/utils";

const DevelopmentList = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex h-full w-full flex-col overflow-y-auto bg-transparent p-8"
    >
      <Title>
        <span className="text-primary">Development Detail</span>
      </Title>
      <div className="mt-2 flex flex-col gap-4">
        {developmentLogs.map((log, index) => (
          <div
            id={`dev-${log.id}`}
            key={index}
            className={cn(
              "flex flex-col justify-between rounded-md border border-white p-4 px-7 shadow-md backdrop-blur-md",
              log.linkedTo === "career"
                ? "bg-primary text-white"
                : "bg-white/80 text-black",
            )}
          >
            <div>
              <h3 className="mb-2 text-lg">{log.title}</h3>
              <p className="mb-4 text-sm">{log.description}</p>
              <div className="mb-4 flex flex-wrap gap-1">
                {log.tags.map((tag, i) =>
                  log.linkedTo === "career" ? (
                    <OutlineStackSpan idx={i} tag={tag} />
                  ) : (
                    <SolidStackSpan idx={i} tag={tag} />
                  ),
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs">{log.period}</p>
              <BlackOutlineButton
                to={log.link}
                blackBorder={log.linkedTo !== "career"}
                whiteBg={log.linkedTo === "career"}
              >
                자세히 보기
              </BlackOutlineButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

DevelopmentList.displayName = "DevelopmentList";

export default DevelopmentList;

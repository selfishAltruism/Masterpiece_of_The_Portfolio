import React from "react";

import { cn } from "@/shared/shadcn/lib/utils";

import Title from "@/shared/ui/Title";
import { developmentLogs } from "@/shared/data/development";
import { OutlineStackSpan } from "@/shared/ui/StackSpan";
import BasicButton from "@/shared/ui/BasicButton";

const DevelopmentList = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex h-full w-full flex-col overflow-y-auto bg-transparent p-8 text-white"
    >
      <Title>
        <span className="text-white">Development Log</span>
      </Title>
      <div className="flex flex-col">
        {developmentLogs.map((log, index) => (
          <div
            id={`dev-${log.id}`}
            key={index}
            className={cn(
              "mb-2 mt-2 flex flex-col justify-between rounded-lg border border-white bg-transparent p-4 px-7",
            )}
          >
            <div>
              <h3 className="mb-2 text-lg">{log.title}</h3>
              <p className="mb-4 text-sm">{log.description}</p>
              <div className="flex flex-wrap gap-1">
                {log.tags.map((tag, i) => (
                  <OutlineStackSpan idx={i} tag={tag} />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-white/50">{log.period}</p>
              <BasicButton whiteBg to={log.link}>
                자세히 보기
              </BasicButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

DevelopmentList.displayName = "DevelopmentList";

export default DevelopmentList;

import React from "react";

import Title from "@/shared/ui/Title";
import OutlineButton from "@/shared/ui/OutlineButton";
import { developmentLogs } from "@/shared/data/development";
import { StackSpan } from "@/shared/ui/StackSpan";

const Development = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex h-full w-full flex-col overflow-y-auto bg-transparent p-8"
    >
      <Title>Development Detail</Title>
      <div className="mt-2 flex flex-col gap-6">
        {developmentLogs.map((log, index) => (
          <div
            id={`dev-${log.id}`}
            key={index}
            className="flex flex-col justify-between rounded-md border border-white bg-white/80 p-6 shadow-md backdrop-blur-md"
          >
            <div>
              <h3 className="mb-2 text-lg text-gray-800">{log.title}</h3>
              <p className="mb-4 text-sm text-gray-700">{log.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {log.tags.map((tag, i) => (
                  <StackSpan idx={i} tag={tag} />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-700">{log.period}</p>
              <OutlineButton href={log.link}>자세히 보기</OutlineButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

Development.displayName = "Development";

export default Development;

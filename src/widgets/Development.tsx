import React from "react";
import Title from "../shared/ui/Title";
import { developmentLogs } from "../data/development";
import OutlineButton from "../shared/ui/OutlineButton";
import SolidButton from "@/shared/ui/SolidButton";

const Development = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex h-full w-full flex-col overflow-y-auto bg-transparent p-8"
    >
      <Title>Development Log</Title>
      <div className="mt-2 flex flex-col gap-6">
        {developmentLogs.map((log, index) => (
          <div
            id={`dev-${log.id}`}
            key={index}
            className="flex flex-col justify-between rounded-lg bg-white p-6 shadow-md"
          >
            <div>
              <h3 className="mb-2 text-lg text-gray-800">{log.title}</h3>
              <p className="mb-4 text-sm text-gray-600">{log.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {log.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-gray-200 px-3 pb-[3px] pt-[4px] text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">{log.period}</p>
              <SolidButton href={log.link}>자세히 보기</SolidButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

Development.displayName = "Development";

export default Development;

import React from "react";

import { DevelopmentCard } from "@/entities/main/DevelopmentCard";
import Title from "@/shared/ui/Title";
import { developmentLogs } from "@/shared/data/development";

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
          <DevelopmentCard development={log} key={index} />
        ))}
      </div>
    </div>
  );
});

DevelopmentList.displayName = "DevelopmentList";

export default DevelopmentList;

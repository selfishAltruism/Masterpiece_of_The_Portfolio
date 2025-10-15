import React from "react";

import { DevelopmentCard } from "@/entities/main/DevelopmentCard";
import Title from "@/shared/ui/Title";
import { developmentLogs } from "@/shared/data/development";

const Developments = () => {
  return (
    <>
      <Title>Development Log</Title>
      <div className="flex flex-col">
        {developmentLogs.map((log, index) => (
          <DevelopmentCard development={log} key={index} />
        ))}
      </div>
    </>
  );
};

const DevelopmentList = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex h-full w-full flex-col overflow-y-auto bg-transparent p-8 text-white max-xl:py-0 max-sm:p-2 max-sm:pl-3"
    >
      <Developments />
    </div>
  );
});

DevelopmentList.displayName = "DevelopmentList";

export default DevelopmentList;

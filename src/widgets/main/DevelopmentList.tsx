import React from "react";

import { DevelopmentCard } from "@/entities/main/DevelopmentCard";

import Title from "@/shared/ui/Title";
import { developmentLogs } from "@/shared/data/development";

const Developments = () => {
  return (
    <div className="flex flex-col pt-[51px] max-lg:pt-10 max-md:pt-8 max-sm:mb-[119px] max-sm:pt-9">
      {developmentLogs.map((log, index) => (
        <DevelopmentCard development={log} key={index} />
      ))}
    </div>
  );
};

const DevelopmentList = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      <div className="theme-fade-top fixed z-40 w-full p-8 max-xl:-mt-1 max-xl:py-0 max-sm:p-2 max-sm:pl-3 max-sm:pt-3">
        <Title description="개발 상세">Project Log</Title>
      </div>
      <div
        ref={ref}
        className="theme-text-primary flex h-full w-full flex-col overflow-y-auto overflow-x-hidden bg-transparent p-8 max-xl:py-0 max-sm:p-2 max-sm:pl-3"
      >
        <Developments />
      </div>
    </>
  );
});

DevelopmentList.displayName = "DevelopmentList";

export default DevelopmentList;

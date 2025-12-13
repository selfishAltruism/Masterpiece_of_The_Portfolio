import React from "react";

import { DevelopmentCard } from "@/entities/main/DevelopmentCard";

import Title from "@/shared/ui/Title";
import { developmentLogs } from "@/shared/data/development";

const Developments = () => {
  return (
    <div className="flex flex-col pt-11 max-lg:pt-10 max-sm:mb-[119px] max-sm:pt-8">
      {developmentLogs.map((log, index) => (
        <DevelopmentCard development={log} key={index} />
      ))}
    </div>
  );
};

const DevelopmentList = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      <div className="fixed z-40 w-full bg-gradient-to-b from-[#161616] to-transparent p-8 max-xl:-mt-1 max-xl:py-0 max-sm:p-2 max-sm:pl-3 max-sm:pt-3">
        <Title>Dev Log</Title>
      </div>
      <div
        ref={ref}
        className="flex h-full w-full flex-col overflow-y-auto bg-transparent p-8 text-white max-xl:py-0 max-sm:p-2 max-sm:pl-3"
      >
        <Developments />
      </div>
    </>
  );
});

DevelopmentList.displayName = "DevelopmentList";

export default DevelopmentList;

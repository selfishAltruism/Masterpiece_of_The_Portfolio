import React from "react";

import Title, { SubTitle } from "@/shared/ui/Title";
import { careers, activities } from "@/shared/data/career";

import { CareerCard } from "@/entities/main/CareerCard";
import { ActivityCard } from "@/entities/main/ActivityCard";

const Careers = () => {
  return (
    <div className="pt-14 max-lg:pt-10 max-sm:pt-8">
      <div className="mb-2">
        {careers.map((career, index) => (
          <CareerCard career={career} key={index} />
        ))}
      </div>

      <SubTitle>Activity</SubTitle>
      <div>
        {activities.map((activity, index) => (
          <ActivityCard activity={activity} key={index} />
        ))}
      </div>
    </div>
  );
};

const CareerList = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      <div className="fixed z-40 w-full bg-gradient-to-b from-[#161616] to-transparent p-8 max-xl:py-0 max-sm:p-2 max-sm:pl-3">
        <Title>Career</Title>
      </div>
      <div
        ref={ref}
        className="flex h-full w-full flex-col overflow-y-auto bg-transparent p-8 max-xl:py-0 max-sm:p-2 max-sm:pr-3"
      >
        <Careers />
      </div>
    </>
  );
});

CareerList.displayName = "CareerList";

export default CareerList;

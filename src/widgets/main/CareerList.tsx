import React from "react";

import Title, { SubTitle } from "@/shared/ui/Title";
import { careers, activities } from "@/shared/data/career";

import { CareerCard } from "@/entities/main/CareerCard";
import { ActivityCard } from "@/entities/main/ActivityCard";

const CareerList = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex h-full w-full flex-col overflow-y-auto bg-transparent p-8"
    >
      <Title>Career</Title>
      <div className="mb-2">
        {careers.map((career, index) => (
          <CareerCard career={career} key={index} />
        ))}
      </div>

      <SubTitle>Startup & Project</SubTitle>
      <div>
        {activities.map((activity, index) => (
          <ActivityCard activity={activity} key={index} />
        ))}
      </div>
    </div>
  );
});

CareerList.displayName = "CareerList";

export default CareerList;

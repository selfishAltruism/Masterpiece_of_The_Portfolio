import React from "react";

import Title, { SubTitle } from "@/shared/ui/Title";
import { careers, activities, ownedServices } from "@/shared/data/group";

import { CareerCard } from "@/entities/main/CareerCard";
import { ActivityCard } from "@/entities/main/ActivityCard";
import { OwnedServiceCard } from "@/entities/main/OwnedServiceCard";

const Groups = () => {
  return (
    <div>
      <Title>Career</Title>
      <div className="mb-2">
        {careers.map((career, index) => (
          <CareerCard career={career} key={index} />
        ))}
      </div>

      <Title>Owned Service</Title>
      <div className="mb-2">
        {ownedServices.map((service, index) => (
          <OwnedServiceCard service={service} key={index} />
        ))}
      </div>

      <Title>Activity</Title>
      <div>
        {activities.map((activity, index) => (
          <ActivityCard activity={activity} key={index} />
        ))}
      </div>
    </div>
  );
};

const GroupList = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      <div className="fixed z-40 h-8 w-full bg-gradient-to-b from-[#161616] to-transparent max-sm:h-3" />
      <div
        ref={ref}
        className="flex h-full w-full flex-col overflow-y-auto bg-transparent p-8 max-xl:py-0 max-sm:p-2 max-sm:pr-3"
      >
        <Groups />
      </div>
    </>
  );
});

GroupList.displayName = "GroupList";

export default GroupList;

import React from "react";

import Title from "@/shared/ui/Title";
import OutlineButton from "@/shared/ui/OutlineButton";
import { careers, projectsAndActivities } from "@/shared/data/career";
import SolidButton from "@/shared/ui/SolidButton";

const Career = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex h-full w-full flex-col overflow-y-auto bg-transparent p-8"
    >
      <Title>Career</Title>
      <div className="mb-2">
        {careers.map((career, index) => (
          <div
            id={`career-${career.id}`}
            key={index}
            className="mb-4 mt-2 flex items-center justify-between rounded-lg border border-white bg-transparent p-4 px-7 shadow-md"
          >
            <div className="flex flex-row">
              <div>
                <h3 className="mb-1 text-lg text-light">{career.company}</h3>
                <p className="mb-1 text-sm text-gray-300">{career.position}</p>
                <p className="text-xs text-gray-400">
                  {career.period} ({career.type})
                </p>
              </div>
            </div>
            <SolidButton href={career.homepage}>About Company</SolidButton>
          </div>
        ))}
      </div>

      <Title>Startup & Project</Title>
      <div>
        {projectsAndActivities.map((activity, index) => (
          <div
            id={`activity-${activity.id}`} // Added ID
            key={index}
            className="mb-4 mt-2 flex items-center justify-between rounded-md border border-white bg-transparent p-4 px-7 shadow-md"
          >
            <div>
              <h3 className="mb-1 text-lg text-light">{activity.name}</h3>
              <p className="mb-1 text-sm text-gray-300">
                {activity.description}
              </p>
              <p className="text-xs text-gray-400">{activity.period}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <OutlineButton href={activity.result}>Result</OutlineButton>
              <SolidButton href={activity.link}>About Team</SolidButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

Career.displayName = "Career";

export default Career;

import { cn } from "@/shared/shadcn/lib/utils";
import BasicButton from "@/shared/ui/BasicButton";
import OutlineButton from "@/shared/ui/OutlineButton";

export const ActivityCard = ({ activity }: { activity: Data.Activity }) => {
  return (
    <div
      id={`activity-${activity.id}`}
      className={cn(
        "theme-panel relative z-10 mb-4 mt-2 flex items-end justify-between rounded-lg border-2 p-5",
        "max-lg:flex-col max-lg:gap-5 max-md:gap-2",
        "duration-200 sm:hover:scale-[1.015]",
      )}
    >
      <div className="w-full">
        <h3 className="theme-text-primary mb-4 text-xl leading-tight max-md:mb-1 max-md:text-[16px] lg:w-[calc(100%+130px)]">
          {activity.name}
        </h3>

        <p className="theme-text-soft mb-[2px] text-xs leading-tight max-md:text-[10px]">
          {activity.position} | {activity.period}
        </p>

        <p className="theme-text-muted text-sm leading-tight max-md:text-[11px]">
          {activity.description}
        </p>
      </div>

      <div className="flex flex-col items-end gap-1 max-lg:flex-row">
        {activity.result && (
          <OutlineButton href={activity.result}>To Service</OutlineButton>
        )}
        {activity.teamLink && (
          <BasicButton href={activity.teamLink}>About Team</BasicButton>
        )}
        {activity.companyLink && (
          <BasicButton href={activity.companyLink}>About Company</BasicButton>
        )}
      </div>
    </div>
  );
};

import { cn } from "@/shared/shadcn/lib/utils";
import BasicButton from "@/shared/ui/BasicButton";
import OutlineButton from "@/shared/ui/OutlineButton";

export const ActivityCard = ({ activity }: { activity: Data.Activity }) => {
  return (
    <div
      id={`activity-${activity.id}`}
      className={cn(
        "relative z-10 mb-4 mt-2 flex items-end justify-between rounded-lg border-2 border-white bg-[#343434] p-5",
        "max-lg:flex-col max-lg:gap-5 max-md:gap-2 max-sm:p-2",
        "duration-200 sm:hover:scale-[1.015]",
      )}
    >
      <div className="w-full">
        <h3 className="mb-4 text-xl leading-tight text-light max-md:mb-1 max-md:text-[16px] max-sm:mb-0 lg:w-[calc(100%+130px)]">
          {activity.name}
        </h3>

        {/* pc mode. */}
        <p className="mb-[2px] text-xs leading-tight text-white/60 max-md:text-[10px] max-sm:hidden">
          {activity.position} | {activity.period}
        </p>
        {/* mobile mode. */}
        <p className="mb-2 text-[10px] leading-tight text-white/90 sm:hidden">
          {activity.position}
        </p>
        <p className="mb-0 text-[10px] leading-tight text-white/60 sm:hidden">
          {activity.period}
        </p>

        <p className="text-sm leading-tight text-white/90 max-md:text-[11px]">
          {activity.description}
        </p>
      </div>

      <div className="flex flex-col items-end gap-1 max-lg:flex-row max-sm:flex-col">
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

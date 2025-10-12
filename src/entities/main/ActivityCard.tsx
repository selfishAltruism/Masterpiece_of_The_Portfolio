import BasicButton from "@/shared/ui/BasicButton";
import OutlineButton from "@/shared/ui/OutlineButton";

export const ActivityCard = ({ activity }: { activity: Data.Activity }) => {
  return (
    <div
      id={`activity-${activity.id}`}
      className="mb-4 mt-2 flex items-end justify-between rounded-md border border-white bg-white/10 p-5 max-lg:flex-col max-lg:gap-5 max-md:gap-2 max-sm:gap-1 max-sm:p-2 max-sm:pt-1"
    >
      <div className="w-full">
        <h3 className="mb-4 text-xl text-light max-md:mb-0 max-md:text-[16px]">
          {activity.name}
        </h3>
        <p className="mb-[2px] text-xs leading-tight text-white/60 max-md:text-[10px]">
          {activity.period}
        </p>
        <p className="text-sm leading-tight text-white/90 max-md:text-[11px]">
          {activity.description}
        </p>
      </div>

      <div className="flex flex-col items-end gap-[6px] max-lg:flex-row">
        <OutlineButton href={activity.result}>Result</OutlineButton>
        <BasicButton whiteBg href={activity.link}>
          About Team
        </BasicButton>
      </div>
    </div>
  );
};

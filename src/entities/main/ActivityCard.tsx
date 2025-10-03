import BasicButton from "@/shared/ui/BasicButton";
import OutlineButton from "@/shared/ui/OutlineButton";

export const ActivityCard = ({ activity }: { activity: Data.Activity }) => {
  return (
    <div
      id={`activity-${activity.id}`}
      className="mb-4 mt-2 flex items-end justify-between rounded-md border border-white bg-transparent p-5"
    >
      <div>
        <h3 className="mb-4 text-xl text-light">{activity.name}</h3>
        <p className="mb-[2px] text-xs text-white/60">{activity.period}</p>
        <p className="text-sm text-white/90">{activity.description}</p>
      </div>

      <div className="flex flex-col items-end gap-[6px]">
        <OutlineButton href={activity.result}>Result</OutlineButton>
        <BasicButton whiteBg href={activity.link}>
          About Team
        </BasicButton>
      </div>
    </div>
  );
};

import OutlineButton from "@/shared/ui/OutlineButton";
import SolidButton from "@/shared/ui/SolidButton";

export const ActivityCard = ({ activity }: { activity: Data.Activity }) => {
  return (
    <div
      id={`activity-${activity.id}`}
      className="mb-4 mt-2 flex items-end justify-between rounded-md border border-white bg-transparent p-4 px-5"
    >
      <div>
        <h3 className="mb-3 text-xl text-light">{activity.name}</h3>
        <p className="text-xs text-white/60">{activity.period}</p>
        <p className="text-sm text-white/90">{activity.description}</p>
      </div>
      <div className="mb-1 flex flex-col items-end gap-1">
        <SolidButton href={activity.result}>Result</SolidButton>
        <OutlineButton whiteBg href={activity.link}>
          About Team
        </OutlineButton>
      </div>
    </div>
  );
};

import OutlineButton from "@/shared/ui/OutlineButton";

export const CareerCard = ({ career }: { career: Data.Career }) => {
  return (
    <div
      id={`career-${career.id}`}
      className="mb-4 mt-2 flex items-end justify-between rounded-lg border border-white bg-transparent p-4 px-5"
    >
      <div className="flex flex-row">
        <div>
          <h3 className="mb-3 text-xl text-light">{career.company}</h3>
          <p className="mb-[2px] text-xs text-white/60">
            {career.type} | {career.period}
          </p>
          <p className="text-sm text-white/90">{career.position}</p>
        </div>
      </div>
      <div className="mb-1">
        <OutlineButton whiteBg href={career.homepage}>
          About Company
        </OutlineButton>
      </div>
    </div>
  );
};

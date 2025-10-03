import BasicButton from "@/shared/ui/BasicButton";

export const CareerCard = ({ career }: { career: Data.Career }) => {
  return (
    <div
      id={`career-${career.id}`}
      className="mb-4 mt-2 flex items-end justify-between rounded-md border border-white bg-transparent p-5"
    >
      <div>
        <h3 className="mb-4 text-xl text-light">{career.company}</h3>
        <p className="mb-[2px] text-xs text-white/60">
          {career.type} | {career.period}
        </p>
        <p className="text-sm text-white/90">{career.position}</p>
      </div>

      <div className="">
        <BasicButton whiteBg href={career.homepage}>
          About Company
        </BasicButton>
      </div>
    </div>
  );
};

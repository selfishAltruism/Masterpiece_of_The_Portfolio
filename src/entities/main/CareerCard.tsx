import BasicButton from "@/shared/ui/BasicButton";

export const CareerCard = ({ career }: { career: Data.Career }) => {
  return (
    <div
      id={`career-${career.id}`}
      className="mb-4 mt-2 flex items-end justify-between rounded-md border-2 border-white bg-white/20 p-5 max-lg:flex-col max-lg:gap-5 max-md:gap-2 max-sm:p-2"
    >
      <div className="w-full">
        <h3 className="mb-4 text-xl leading-tight text-light max-md:mb-1 max-md:text-[16px] max-sm:mb-0">
          {career.company}
        </h3>

        {/* pc mode. */}
        <p className="mb-[2px] text-xs leading-tight text-white/60 max-md:text-[10px] max-sm:hidden">
          {career.position} | {career.period}
        </p>
        {/* mobile mode. */}
        <p className="mb-2 text-[10px] leading-tight text-white sm:hidden">
          {career.position}
        </p>
        <p className="mb-0 text-[10px] leading-tight text-white/60 sm:hidden">
          {career.period}
        </p>

        <p className="text-sm leading-tight text-white/90 max-md:text-[11px]">
          {career.description}
        </p>
      </div>

      <div className="">
        <BasicButton href={career.homepage}>About Company</BasicButton>
      </div>
    </div>
  );
};

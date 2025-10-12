import BasicButton from "@/shared/ui/BasicButton";

export const CareerCard = ({ career }: { career: Data.Career }) => {
  return (
    <div
      id={`career-${career.id}`}
      className="mb-4 mt-2 flex items-end justify-between rounded-md border border-white bg-white/10 p-5 max-lg:flex-col max-lg:gap-5 max-md:gap-2 max-sm:gap-1 max-sm:p-2 max-sm:pt-1"
    >
      <div className="w-full">
        <h3 className="mb-4 text-xl text-light max-md:mb-0 max-md:text-[16px]">
          {career.company}
        </h3>
        <p className="mb-[2px] text-xs leading-tight text-white/60 max-md:text-[10px]">
          {career.type} | {career.period}
        </p>
        <p className="text-sm leading-tight text-white/90 max-md:text-[11px]">
          {career.position}
        </p>
      </div>

      <div className="">
        <BasicButton whiteBg href={career.homepage}>
          About Company
        </BasicButton>
      </div>
    </div>
  );
};

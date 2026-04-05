import { cn } from "@/shared/shadcn/lib/utils";
import BasicButton from "@/shared/ui/BasicButton";

export const CareerCard = ({ career }: { career: Data.Career }) => {
  return (
    <div
      id={`career-${career.id}`}
      className={cn(
        "theme-panel relative z-10 mb-4 mt-2 flex items-end justify-between rounded-md border-2 p-5",
        "max-lg:flex-col max-lg:gap-5 max-md:gap-2 max-sm:p-2",
        "duration-200 sm:hover:scale-[1.015]",
      )}
    >
      <div className="w-full">
        <h3 className="theme-text-primary mb-4 text-xl leading-tight max-md:mb-1 max-md:text-[16px] max-sm:mb-0">
          {career.company}
        </h3>

        {/* pc mode. */}
        <p className="theme-text-soft mb-[2px] text-xs leading-tight max-md:text-[10px] max-sm:hidden">
          {career.position} | {career.period}
        </p>
        {/* mobile mode. */}
        <p className="theme-text-primary mb-2 text-[10px] leading-tight sm:hidden">
          {career.position}
        </p>
        <p className="theme-text-soft mb-0 text-[10px] leading-tight sm:hidden">
          {career.period}
        </p>

        <p className="theme-text-muted text-sm leading-tight max-md:text-[11px]">
          {career.description}
        </p>
      </div>

      <div className="">
        <BasicButton href={career.homepage}>About Company</BasicButton>
      </div>
    </div>
  );
};

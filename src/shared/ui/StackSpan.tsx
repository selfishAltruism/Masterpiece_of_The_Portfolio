import { cn } from "@/shared/shadcn/lib/utils";

export const SolidStackSpan = ({
  tag,
  idx,
  className,
}: {
  tag: string;
  idx: number;
  className?: string;
}) => {
  return (
    <span
      key={idx}
      className={cn(
        "whitespace-nowrap rounded-[1px] bg-white px-[10px] pb-[0px] pt-[2px] text-[11px] text-gray-700 max-md:px-1 max-md:text-[10px]",
        className,
      )}
    >
      {tag}
    </span>
  );
};

export const OutlineStackSpan = ({
  tag,
  idx,
}: {
  tag: string;
  idx: number;
}) => {
  return (
    <span
      key={idx}
      className="whitespace-nowrap rounded-[1px] bg-white/15 px-[10px] pb-[0px] pt-[2px] text-[11px] text-white max-md:px-1 max-md:text-[10px]"
    >
      {tag}
    </span>
  );
};

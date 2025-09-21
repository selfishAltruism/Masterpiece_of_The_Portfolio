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
        "whitespace-nowrap rounded-sm border border-white bg-white px-[10px] pb-[4px] pt-[5px] text-xs text-gray-700 shadow-lg shadow-black/50",
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
      className="shadowg whitespace-nowrap rounded-sm border border-primary bg-primary px-[10px] pb-[4px] pt-[5px] text-xs text-white shadow-lg shadow-black/50"
    >
      {tag}
    </span>
  );
};

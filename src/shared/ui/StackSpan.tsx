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
        "whitespace-nowrap rounded-sm border border-white bg-white px-[10px] pb-[4px] pt-[5px] text-xs text-gray-700",
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
      className="whitespace-nowrap rounded-sm border border-primary bg-white/20 px-[10px] pb-[4px] pt-[5px] text-xs text-white"
    >
      {tag}
    </span>
  );
};

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
        "theme-badge-solid whitespace-nowrap rounded-[1px] px-[10px] pb-[0px] pt-[2px] text-[11px] max-md:px-1 max-md:text-[10px]",
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
      className="theme-badge-outline whitespace-nowrap rounded-[1px] px-[10px] pb-[0px] pt-[2px] text-[11px] max-md:px-1 max-md:text-[10px]"
    >
      {tag}
    </span>
  );
};

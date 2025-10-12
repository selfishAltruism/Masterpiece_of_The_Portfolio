import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/shared/shadcn/lib/utils";

interface BasicButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  to?: string;
  blackBorder?: boolean;
  whiteBg?: boolean;
}

const BasicButton = ({
  children,
  onClick,
  href,
  to,
  blackBorder,
  whiteBg,
}: BasicButtonProps) => {
  const baseClass = cn(
    "whitespace-nowrap transform rounded-full border border-white px-4 pb-[3px] pt-[5px] text-[12.5px] flex items-center justify-between",
    "transition-all duration-200 active:scale-95 active:bg-[#cbcbcb] active:border-[#cbcbcb]",
    "max-md:text-[11px] max-md:px-2 max-md:pb-[1px] max-md:pt-[3px] ",
    "hover:bg-[#cbcbcb] hover:border-[#cbcbcb]",
    blackBorder ? "border-black" : "border-white",
    whiteBg ? "bg-white text-primary" : "bg-primary text-white",
  );

  if (to)
    return (
      <Link href={to} className={baseClass}>
        {children}
        <ArrowRight
          size={17}
          className="-mr-[1px] -mt-[3px] ml-2 max-md:ml-1"
        />
      </Link>
    );

  if (href)
    return (
      <a
        className={baseClass}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );

  return (
    <button className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default BasicButton;

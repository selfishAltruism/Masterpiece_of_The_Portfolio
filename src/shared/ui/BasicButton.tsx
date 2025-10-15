import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/shared/shadcn/lib/utils";

interface BasicButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  to?: string;
}

const BasicButton = ({ children, onClick, href, to }: BasicButtonProps) => {
  const baseClass = cn(
    "whitespace-nowrap transform rounded-md border-2 bg-[#0A5BBD] text-white border-[#0A5BBD] px-4 pb-[3px] pt-[5px] text-[12.5px] flex items-center justify-between",
    "transition-all duration-300 active:scale-95 active:bg-[#083e80] active:border-[#083e80] active:text-white/70",
    "max-md:text-[11px] max-md:px-2 max-md:pb-[1px] max-md:pt-[3px] ",
    "sm:hover:bg-[#083e80] sm:hover:border-[#083e80] sm:hover:text-white/70",
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

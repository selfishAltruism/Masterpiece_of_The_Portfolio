import { ReactNode } from "react";

import { cn } from "@/shared/shadcn/lib/utils";

interface OutlineButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

const OutlineButton = ({ children, onClick, href }: OutlineButtonProps) => {
  const baseClass = cn(
    "whitespace-nowrap inline-flex items-center justify-between rounded-md px-4 pb-[3px] pt-[5px] text-[12.5px]",
    "bg-[#0A5BBD]/30 border-2 border-[#0A5BBD] backdrop-blur-md",
    "max-md:text-[11px] max-md:px-2 max-md:pb-[1px] max-md:pt-[3px] ",
    "text-white",
    "transition-all duration-200 active:scale-95 active:text-white/70 active:border-[#083e80]",
    "sm:hover:text-white/70 sm:hover:border-[#083e80]",
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
  else
    return (
      <button className={baseClass} onClick={onClick}>
        {children}
      </button>
    );
};

export default OutlineButton;

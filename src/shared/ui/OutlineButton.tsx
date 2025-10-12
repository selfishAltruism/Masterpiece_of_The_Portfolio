import { ReactNode } from "react";

import { cn } from "@/shared/shadcn/lib/utils";

interface OutlineButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

const OutlineButton = ({ children, onClick, href }: OutlineButtonProps) => {
  const baseClass = cn(
    "whitespace-nowrap inline-flex items-center justify-between rounded-full px-4 pb-[3px] pt-[5px] text-[12.5px]",
    "bg-white/15 border border-white backdrop-blur-md",
    "max-md:text-[11px] max-md:px-2 max-md:pb-[1px] max-md:pt-[3px] ",
    "text-white",
    "transition-all duration-200 active:scale-95 active:text-[#cbcbcb] active:border-[#cbcbcb]",
    "hover:text-[#cecece] hover:border-[#cbcbcb]",
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

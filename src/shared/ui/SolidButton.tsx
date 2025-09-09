import { ReactNode } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

import { cn } from "@/shared/shadcn/lib/utils";

interface SolidButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

const SolidButton = ({ children, onClick, href }: SolidButtonProps) => {
  const baseClass = cn(
    "whitespace-nowrap inline-flex items-center justify-between rounded-sm px-4 py-2 text-sm",
    "bg-white/5 border border-white backdrop-blur-md",
    "text-white",
    "transition-all duration-300 hover:scale-[1.03] hover:bg-white/10 active:scale-100",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
    "shadow-[0_4px_24px_rgba(0,0,0,0.08)]",
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
        <ArrowRight size={17} className="-mr-1 mb-[2px] ml-1" />
      </a>
    );

  return (
    <button className={baseClass} onClick={onClick}>
      {children}
      <ArrowDown size={17} className="-mr-1 mb-[2px] ml-1" />
    </button>
  );
};

export default SolidButton;

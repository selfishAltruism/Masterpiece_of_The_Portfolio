import { ReactNode } from "react";
import { Link } from "lucide-react";

import { cn } from "@/shared/shadcn/lib/utils";

interface SolidButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  offIcon?: boolean;
}

const SolidButton = ({
  children,
  onClick,
  href,
  offIcon,
}: SolidButtonProps) => {
  const baseClass = cn(
    "whitespace-nowrap inline-flex items-center justify-between rounded-sm px-3 py-2 text-xs",
    "bg-white/5 border border-white backdrop-blur-md shadow-lg shadow-black/50",
    "text-white",
    "transition-all duration-300 hover:scale-105 hover:bg-white/10 active:scale-100",
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
        {!offIcon && <Link size={17} className="-mr-1 ml-1" />}
      </a>
    );

  return (
    <button className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default SolidButton;

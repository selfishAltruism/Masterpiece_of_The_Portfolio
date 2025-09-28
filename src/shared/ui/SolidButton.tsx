import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Link as LinkIcon } from "lucide-react";

import { cn } from "@/shared/shadcn/lib/utils";

interface SolidButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  to?: string;
  offIcon?: boolean;
}

const SolidButton = ({
  children,
  onClick,
  to,
  href,
  offIcon,
}: SolidButtonProps) => {
  const baseClass = cn(
    "whitespace-nowrap inline-flex items-center justify-between rounded-sm px-3 py-1 text-xs",
    "bg-white/5 border border-white backdrop-blur-md",
    "text-white",
    "transition-all duration-300 hover:scale-105 hover:bg-white/10 active:scale-100",
  );

  if (to)
    return (
      <Link href={to}>
        <div className={baseClass}>
          {children}
          <ArrowRight size={16} className="-mr-[2px] ml-[6px]" />
        </div>
      </Link>
    );
  else if (href)
    return (
      <a
        className={baseClass}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        {!offIcon && <LinkIcon size={16} className="-mr-[2px] ml-[6px]" />}
      </a>
    );
  else
    return (
      <button className={baseClass} onClick={onClick}>
        {children}
      </button>
    );
};

export default SolidButton;

import { ReactNode } from "react";
import { Link2 as LinkIcon } from "lucide-react";

import { cn } from "@/shared/shadcn/lib/utils";

interface OutlineButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  offIcon?: boolean;
}

const OutlineButton = ({
  children,
  onClick,
  href,
  offIcon,
}: OutlineButtonProps) => {
  const baseClass = cn(
    "whitespace-nowrap inline-flex items-center justify-between rounded-sm px-3 py-1 text-xs",
    "bg-white/5 border border-white backdrop-blur-md",
    "text-white",
    "transition-all duration-300 hover:scale-105 hover:bg-white/10 active:scale-100",
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
        {!offIcon && <LinkIcon size={17} className="-mr-[1px] ml-2" />}
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

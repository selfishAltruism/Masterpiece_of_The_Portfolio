import { ReactNode } from "react";

import { ArrowRight, Link2 as LinkIcon } from "lucide-react";
import { cn } from "../shadcn/lib/utils";

interface BasicButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  to?: string;
  offIcon?: boolean;
  blackBorder?: boolean;
  whiteBg?: boolean;
}

const BasicButton = ({
  children,
  onClick,
  href,
  to,
  offIcon,
  blackBorder,
  whiteBg,
}: BasicButtonProps) => {
  const baseClass = cn(
    "whitespace-nowrap transform rounded-sm border border-white px-3 py-1 text-xs",
    "transition-all duration-300 hover:scale-105 flex items-center justify-between",
    blackBorder ? "border-black" : "border-white",
    whiteBg ? "bg-white text-primary" : "bg-primary text-white",
  );

  if (href || to)
    return (
      <a
        className={baseClass}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        {!offIcon && !to && <LinkIcon size={17} className="-mr-[1px] ml-2" />}
        {to && <ArrowRight size={15} className="-mr-[1px] ml-2" />}
      </a>
    );
  return (
    <button className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default BasicButton;

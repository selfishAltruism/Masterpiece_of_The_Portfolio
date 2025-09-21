import { ReactNode } from "react";

import { ArrowDown, ArrowRight, Link } from "lucide-react";
import { cn } from "../shadcn/lib/utils";

interface OutlineButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  to?: string;
  offIcon?: boolean;
  blackBorder?: boolean;
  whiteBg?: boolean;
}

const OutlineButton = ({
  children,
  onClick,
  href,
  to,
  offIcon,
  blackBorder,
  whiteBg,
}: OutlineButtonProps) => {
  const baseClass = cn(
    "whitespace-nowrap transform rounded-sm border border-white px-3 py-2 text-xs shadow-black/40 shadow-lg",
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
        {!to && !offIcon && <Link size={17} className="-mr-1 ml-1" />}
        {to && <ArrowRight size={17} className="ml-1" />}
      </a>
    );
  return (
    <button className={baseClass} onClick={onClick}>
      {children}
      <ArrowDown size={17} className="ml-1" />
    </button>
  );
};

export default OutlineButton;

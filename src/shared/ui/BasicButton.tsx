import { ReactNode } from "react";
import { Logs } from "lucide-react";
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
    "flex transform items-center justify-between whitespace-nowrap rounded-md border-2 px-4 pb-[3px] pt-[5px] text-[12.5px]",
    "border-[var(--accent-brand)] bg-[var(--accent-brand)] text-white",
    "transition-all duration-200 active:scale-95 active:border-[var(--accent-brand-strong)] active:bg-[var(--accent-brand-strong)] active:text-white/70",
    "max-md:text-[11px] max-md:px-2 max-md:pb-[1px] max-md:pt-[3px] ",
    "sm:hover:border-[var(--accent-brand-strong)] sm:hover:bg-[var(--accent-brand-strong)] sm:hover:text-white/70",
  );

  if (to)
    return (
      <Link href={to} className={baseClass}>
        {children}
        <Logs size={17} className="-mr-[1px] -mt-[3px] ml-2 max-md:ml-1" />
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

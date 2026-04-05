import { ReactNode } from "react";

import { cn } from "@/shared/shadcn/lib/utils";

interface OutlineButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

const OutlineButton = ({ children, onClick, href }: OutlineButtonProps) => {
  const baseClass = cn(
    "inline-flex items-center justify-between whitespace-nowrap rounded-md border-2 px-4 pb-[3px] pt-[5px] text-[12.5px]",
    "border-[var(--accent-brand)] bg-[var(--accent-brand-soft)] backdrop-blur-md",
    "max-md:text-[11px] max-md:px-2 max-md:pb-[1px] max-md:pt-[3px] ",
    "theme-text-primary",
    "transition-all duration-200 active:scale-95 active:border-[var(--accent-brand-strong)] active:text-[color:var(--page-fg-soft)]",
    "sm:hover:border-[var(--accent-brand-strong)] sm:hover:text-[color:var(--page-fg-soft)]",
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

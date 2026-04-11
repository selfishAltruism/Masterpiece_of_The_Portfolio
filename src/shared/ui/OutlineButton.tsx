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
    "text-[var(--accent-brand-strong)] border-[var(--accent-brand-strong)] bg-[var(--accent-brand-soft)] backdrop-blur-md",
    "theme-text-primary",
    "transition-all duration-200 active:scale-95 active:border-[var(--accent-brand-strong)] active:text-[color:var(--page-fg-soft)]",
    "sm:hover:border-[var(--accent-brand-strong)] sm:hover:text-[color:var(--page-fg-soft)]",
    "max-sm:text-[11.5px]",
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

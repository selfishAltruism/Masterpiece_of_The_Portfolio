import { ReactNode } from "react";

import { ArrowRight } from "lucide-react";

interface OutlineButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  offArrow?: boolean;
}

const OutlineButton = ({
  children,
  onClick,
  href,
  offArrow,
}: OutlineButtonProps) => {
  const baseClass =
    "whitespace-nowrap transform rounded-sm border border-white bg-primary px-4 py-2 text-sm text-light transition-all duration-300 hover:scale-105 flex items-center justify-between";

  if (href)
    return (
      <a
        className={baseClass}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        {!offArrow && <ArrowRight size={17} className="-mr-1 ml-1" />}
      </a>
    );
  return (
    <button className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default OutlineButton;

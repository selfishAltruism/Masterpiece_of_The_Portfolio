import { ReactNode } from "react";

interface SolidButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

const SolidButton = ({ children, onClick, href }: SolidButtonProps) => {
  const baseClass =
    "whitespace-nowrap transform rounded-md border border-light bg-light px-4 py-2 text-sm text-primary transition-all duration-300 hover:scale-105 flex items-center";

  if (href)
    return (
      <a
        className={baseClass}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <span className="icon-[material-symbols-light--arrow-forward-ios-rounded] -mr-1 ml-1 text-lg" />
      </a>
    );
  return (
    <button className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default SolidButton;

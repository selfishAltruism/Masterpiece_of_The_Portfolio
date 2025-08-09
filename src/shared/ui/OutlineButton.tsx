import { ReactNode } from "react";

interface OutlineButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

const OutlineButton = ({ children, onClick, href }: OutlineButtonProps) => {
  if (href)
    return (
      <a
        className="transform rounded-sm border border-light px-4 py-2 text-sm text-light transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary"
        href={href}
      >
        {children}
      </a>
    );
  return (
    <button
      className="transform rounded-sm border border-light px-4 py-2 text-sm text-light transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlineButton;

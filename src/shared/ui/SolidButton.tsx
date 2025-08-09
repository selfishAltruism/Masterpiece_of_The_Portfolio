import { ReactNode } from "react";

interface SolidButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

const SolidButton = ({ children, onClick, href }: SolidButtonProps) => {
  if (href)
    return (
      <a
        className="border-sub text-sub hover:bg-sub transform rounded-sm border bg-light px-4 py-2 text-sm transition-all duration-300 hover:scale-105 hover:text-light"
        href={href}
      >
        {children}
      </a>
    );
  return (
    <button
      className="border-sub text-sub hover:bg-sub transform rounded-sm border bg-light px-4 py-2 text-sm transition-all duration-300 hover:scale-105 hover:text-light"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SolidButton;

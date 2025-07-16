import { ReactNode } from 'react';

interface OutlineButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const OutlineButton = ({ children, onClick }: OutlineButtonProps) => {
  return (
    <button
      className="border border-light text-light px-4 py-2 rounded-sm text-lg hover:bg-primary hover:border-primary hover:scale-105 transform transition-all duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlineButton;

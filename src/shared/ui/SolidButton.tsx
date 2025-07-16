import { ReactNode } from 'react';

interface SolidButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const SolidButton = ({ children, onClick }: SolidButtonProps) => {
  return (
    <button
      className="bg-light text-dark px-4 py-2 rounded-sm text-lg hover:bg-primary hover:text-light hover:scale-105 transform transition-all duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SolidButton;

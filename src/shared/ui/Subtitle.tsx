import { ReactNode } from 'react';

interface SubtitleProps {
  children: ReactNode;
}

const Subtitle = ({ children }: SubtitleProps) => {
  return <h2 className="text-2xl font-bold text-light">{children}</h2>;
};

export default Subtitle;

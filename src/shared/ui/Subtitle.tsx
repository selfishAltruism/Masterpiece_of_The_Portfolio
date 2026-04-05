import { ReactNode } from "react";

interface SubtitleProps {
  children: ReactNode;
}

const Subtitle = ({ children }: SubtitleProps) => {
  return <h2 className="mb-2 text-2xl text-light">{children}</h2>;
};

export default Subtitle;

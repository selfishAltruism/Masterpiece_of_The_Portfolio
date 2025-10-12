import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="mb-1 text-3xl text-light max-lg:text-2xl max-md:text-xl">
      {children}
    </h1>
  );
};

export const SubTitle = ({ children }: TitleProps) => {
  return (
    <h1 className="mb-1 text-[23px] text-light max-lg:text-[19px] max-md:text-[16px]">
      {children}
    </h1>
  );
};

export default Title;

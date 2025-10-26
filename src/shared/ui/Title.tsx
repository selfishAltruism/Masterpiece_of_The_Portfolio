import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="-mb-3 text-[47px] text-light max-lg:-mb-1 max-lg:text-4xl max-md:text-2xl">
      {children}
    </h1>
  );
};

export const SubTitle = ({ children }: TitleProps) => {
  return (
    <h1 className="-mb-1 text-3xl text-light max-lg:text-2xl max-md:text-xl">
      {children}
    </h1>
  );
};

export default Title;

import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  description?: string;
}

const Title = ({ children, description }: TitleProps) => {
  return (
    <h1 className="-mb-1 flex items-end justify-between pt-1 text-[35px] text-light max-lg:-mb-0 max-lg:text-4xl max-md:text-2xl">
      <span>{children}</span>
      {description && (
        <span className="text-sm text-light/70 max-lg:text-[11px] max-sm:hidden lg:mb-2">
          : {description}
        </span>
      )}
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

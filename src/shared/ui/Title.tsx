import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  description?: string;
}

const Title = ({ children, description }: TitleProps) => {
  return (
    <h1 className="theme-text-primary -mb-1 flex items-end justify-between pt-1 text-[35px] font-normal max-xl:text-2xl max-lg:-mb-0">
      <span>{children}</span>
      {description && (
        <span className="theme-text-soft text-sm max-lg:text-[11px] max-sm:hidden lg:mb-2">
          : {description}
        </span>
      )}
    </h1>
  );
};

export const SubTitle = ({ children }: TitleProps) => {
  return (
    <h1 className="theme-text-primary -mb-1 text-3xl max-lg:text-2xl max-md:text-xl">
      {children}
    </h1>
  );
};

export default Title;

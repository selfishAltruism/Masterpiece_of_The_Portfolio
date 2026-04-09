import { ReactNode } from "react";

import Title from "@/shared/ui/Title";

interface MobileTreeSectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

const MobileTreeSection = ({
  title,
  description,
  children,
}: MobileTreeSectionProps) => {
  return (
    <section className="mb-8">
      <div className="mb-3">
        <Title description={description}>{title}</Title>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default MobileTreeSection;

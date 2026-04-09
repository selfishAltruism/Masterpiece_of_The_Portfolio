import { ReactNode } from "react";

import { MOBILE_CARD_BORDER_STYLE } from "@/entities/mobile/MobileDevelopmentNode";

interface MobileTreeItemProps {
  title: string;
  description: string;
  period: string;
  actions?: ReactNode;
  children?: ReactNode;
}

const MobileTreeItem = ({
  title,
  description,
  period,
  actions,
  children,
}: MobileTreeItemProps) => {
  return (
    <div className="mb-5">
      <div
        className="theme-panel relative z-10 mb-3 rounded-xl p-4"
        style={MOBILE_CARD_BORDER_STYLE}
      >
        <div className="mb-3 min-w-0">
          <h3 className="theme-text-primary text-lg leading-tight">{title}</h3>
          <p className="theme-text-soft mt-1 text-[11px] leading-tight">
            {period}
          </p>
        </div>
        <p className="theme-text-muted text-[13px] leading-snug">
          {description}
        </p>
        {actions && <div className="mt-3 flex flex-wrap gap-2">{actions}</div>}
      </div>

      {children && <div className="relative">{children}</div>}
    </div>
  );
};

export default MobileTreeItem;

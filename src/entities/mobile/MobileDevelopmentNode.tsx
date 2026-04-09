import { Key, Layers } from "lucide-react";

import BasicButton from "@/shared/ui/BasicButton";
import { OutlineStackSpan, SolidStackSpan } from "@/shared/ui/StackSpan";

export const MOBILE_CONNECTOR_COLOR = "#d6dbe3";
export const MOBILE_CARD_BORDER_STYLE = {
  borderColor: MOBILE_CONNECTOR_COLOR,
  borderWidth: "1.5px",
};

interface MobileDevelopmentNodeProps {
  development: Data.Development;
  isFirst: boolean;
  isLast: boolean;
}

const MobileDevelopmentNode = ({
  development,
  isFirst,
  isLast,
}: MobileDevelopmentNodeProps) => {
  return (
    <div className="relative pb-3 last:pb-0">
      {!isLast && (
        <span
          className="absolute left-[18px] top-0"
          style={{
            bottom: "-6px",
            width: "1.5px",
            backgroundColor: MOBILE_CONNECTOR_COLOR,
          }}
        />
      )}

      <svg
        className="absolute left-[18px] w-[36px] overflow-visible"
        style={{
          top: isFirst ? "-30px" : "0px",
          height: isFirst ? "66px" : "54px",
        }}
        viewBox={isFirst ? "0 0 36 66" : "0 0 36 54"}
        fill="none"
        aria-hidden="true"
      >
        <path
          d={
            isFirst
              ? "M1 0 L1 34 C1 48, 8 52, 18 52 L36 52"
              : "M1 1 L1 28 C1 36, 8 40, 18 40 L36 40"
          }
          stroke={MOBILE_CONNECTOR_COLOR}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span
        className="absolute left-[52px] h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--accent-brand)]"
        style={{ top: isFirst ? "50px" : "36px" }}
      />

      <div
        className="theme-panel relative z-10 ml-12 rounded-lg p-4"
        style={MOBILE_CARD_BORDER_STYLE}
      >
        <h3 className="theme-text-primary mb-2 text-[15px] leading-snug">
          {development.title}
        </h3>
        <p className="theme-text-soft mb-1 text-[11px] leading-tight">
          {development.period}
        </p>
        <p className="theme-text-muted mb-3 text-[12px] leading-snug">
          {development.description}
        </p>
        <div className="mb-2 flex flex-wrap gap-1">
          <Key size={16} className="mr-1 min-w-4" />
          {development.tags.map((tag, idx) => (
            <OutlineStackSpan key={tag} idx={idx} tag={tag} />
          ))}
        </div>
        <div className="flex flex-wrap gap-1">
          <Layers size={16} className="mr-1 min-w-4" />
          {development.techStacks.map((tag, idx) => (
            <SolidStackSpan key={tag} idx={idx} tag={tag} />
          ))}
        </div>
        {development.link && (
          <div className="flex w-full justify-end">
            <div className="mt-3 w-min">
              <BasicButton to={development.link}>프로젝트 상세</BasicButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileDevelopmentNode;

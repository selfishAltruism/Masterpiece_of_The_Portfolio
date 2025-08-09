"use client";

import { useState, useEffect, useRef } from "react";
import Profile from "../widgets/Profile";
import Career from "../widgets/Career";
import Development from "../widgets/Development";
import { developmentLogs } from "../data/development";

interface Line {
  path: string;
}

export default function Home() {
  const [lines, setLines] = useState<Line[]>([]);
  const mainRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const devLogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateLines = () => {
      if (!mainRef.current) return;

      const newLines: Line[] = [];
      const mainRect = mainRef.current.getBoundingClientRect();

      // Career 컨테이너의 화면 기준 top을 main 기준 좌표로 변환
      const careerPanelTop =
        (careerRef.current?.getBoundingClientRect().top ?? 0) - mainRect.top;

      developmentLogs.forEach((log) => {
        const careerCard = document.getElementById(`career-${log.careerId}`);
        const devCard = document.getElementById(`dev-${log.id}`);

        if (careerCard && devCard) {
          const careerRect = careerCard.getBoundingClientRect();
          const devRect = devCard.getBoundingClientRect();

          const startX = careerRect.right - mainRect.left;
          const startY = careerRect.top - mainRect.top + careerRect.height / 2;
          const endX = devRect.left - mainRect.left;
          const endY = devRect.top - mainRect.top + devRect.height / 2;

          // Career top을 넘어가는 경우 그리지 않음.
          if (startY < careerPanelTop || endY < careerPanelTop) {
            return; // skip
          }

          const offset = (endX - startX) * 0.5;
          const controlX1 = startX + offset;
          const controlX2 = endX - offset;

          const path = `M ${startX} ${startY} C ${controlX1} ${startY}, ${controlX2} ${endY}, ${endX} ${endY}`;
          newLines.push({ path });
        }
      });

      setLines(newLines);
    };

    const careerPanel = careerRef.current;
    const devLogPanel = devLogRef.current;

    const animationFrameId = requestAnimationFrame(calculateLines);

    window.addEventListener("resize", calculateLines);
    careerPanel?.addEventListener("scroll", calculateLines);
    devLogPanel?.addEventListener("scroll", calculateLines);

    return () => {
      window.removeEventListener("resize", calculateLines);
      careerPanel?.removeEventListener("scroll", calculateLines);
      devLogPanel?.removeEventListener("scroll", calculateLines);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main
      ref={mainRef}
      className="multi-gradient-background relative grid h-screen w-screen grid-cols-8 grid-rows-6 xl:gap-8"
    >
      <h1 className="sr-only">강민규 프론트엔드 개발자 포트폴리오</h1>
      <section
        className="col-span-8 row-span-1 xl:col-span-2 xl:row-span-6"
        aria-label="프로필"
      >
        <Profile />
      </section>
      <section
        className="col-span-4 row-span-5 xl:col-span-3 xl:row-span-6"
        aria-label="주요 경력"
      >
        <Career ref={careerRef} />
      </section>
      <section
        className="col-span-4 row-span-5 xl:col-span-3 xl:row-span-6"
        aria-label="개발 로그"
      >
        <Development ref={devLogRef} />
      </section>
      <svg
        className="absolute left-0 top-0 h-full w-full"
        style={{ pointerEvents: "none" }}
      >
        {lines.map((line, index) => (
          <path
            key={index}
            d={line.path}
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
          />
        ))}
      </svg>
    </main>
  );
}

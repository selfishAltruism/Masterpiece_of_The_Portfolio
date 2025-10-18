"use client";

import { useState, useEffect, useRef } from "react";

import Profile from "@/widgets/main/Profile";
import CareerList from "@/widgets/main/CareerList";
import DevelopmentList from "@/widgets/main/DevelopmentList";

import { developmentLogs } from "@/shared/data/development";
import { careers, activities } from "@/shared/data/career";

interface Line {
  path: string;
}

export default function Home() {
  const [lines, setLines] = useState<Line[]>([]);
  const mainRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const devLogRef = useRef<HTMLDivElement>(null);
  const profileSourceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateLines = () => {
      if (!mainRef.current) return;

      const newLines: Line[] = [];
      const mainRect = mainRef.current.getBoundingClientRect();

      const careerPanelTop =
        (careerRef.current?.getBoundingClientRect().top ?? 0) - mainRect.top;

      developmentLogs.forEach((log) => {
        const devCard = document.getElementById(`dev-${log.id}`);
        let startCard = null;

        if (log.linkedTo === "career") {
          startCard = document.getElementById(`career-${log.linkedId}`);
        } else if (log.linkedTo === "activity") {
          startCard = document.getElementById(`activity-${log.linkedId}`);
        }

        if (startCard && devCard) {
          const startRect = startCard.getBoundingClientRect();
          const devRect = devCard.getBoundingClientRect();

          const startX = startRect.right - mainRect.left;
          const startY = startRect.top - mainRect.top + startRect.height / 2;
          const endX = devRect.left - mainRect.left;
          const endY = devRect.top - mainRect.top + devRect.height / 2;

          if (startY < careerPanelTop || endY < careerPanelTop) {
            return;
          }

          const offset = (endX - startX) * 0.5;
          const controlX1 = startX + offset;
          const controlX2 = endX - offset;

          const path = `M ${startX} ${startY} C ${controlX1} ${startY}, ${controlX2} ${endY}, ${endX} ${endY}`;
          newLines.push({ path });
        }
      });

      const isXlScreen = window.innerWidth >= 1280;

      if (isXlScreen && profileSourceRef.current) {
        const profileSourceRect =
          profileSourceRef.current.getBoundingClientRect();

        // profile-career cards.
        careers.forEach((career) => {
          const careerCard = document.getElementById(`career-${career.id}`);

          if (careerCard) {
            const careerRect = careerCard.getBoundingClientRect();

            const startX = profileSourceRect.right - mainRect.left;
            const startY =
              profileSourceRect.top -
              mainRect.top +
              profileSourceRect.height / 2;
            const endX = careerRect.left - mainRect.left;
            const endY = careerRect.top - mainRect.top + careerRect.height / 2;

            const offset = (endX - startX) * 0.5;
            const controlX1 = startX + offset;
            const controlX2 = endX - offset;

            const path = `M ${startX} ${startY} C ${controlX1} ${startY}, ${controlX2} ${endY}, ${endX} ${endY}`;
            newLines.push({ path });
          }
        });

        // career-activity cards.
        activities.forEach((activity) => {
          const activityCard = document.getElementById(
            `activity-${activity.id}`,
          );

          if (activityCard) {
            const activityRect = activityCard.getBoundingClientRect();

            const startX = profileSourceRect.right - mainRect.left;
            const startY =
              profileSourceRect.top -
              mainRect.top +
              profileSourceRect.height / 2;
            const endX = activityRect.left - mainRect.left;
            const endY =
              activityRect.top - mainRect.top + activityRect.height / 2;

            const offset = (endX - startX) * 0.5;
            const controlX1 = startX + offset;
            const controlX2 = endX - offset;

            const path = `M ${startX} ${startY} C ${controlX1} ${startY}, ${controlX2} ${endY}, ${endX} ${endY}`;
            newLines.push({ path });
          }
        });
      }

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
      className="multi-gradient-background grid h-screen w-screen grid-cols-8 grid-rows-5 max-lg:grid-rows-6 xl:grid-cols-9 xl:gap-8"
    >
      <h1 className="sr-only">강민규 프론트엔드 개발자 포트폴리오</h1>
      <section
        className="col-span-8 row-span-1 xl:col-span-2 xl:row-span-5"
        aria-label="프로필"
      >
        <Profile ref={profileSourceRef} /> {/* Pass ref to Profile */}
      </section>
      <section
        className="col-span-4 row-span-4 max-lg:row-span-5 xl:col-span-3 xl:row-span-5"
        aria-label="주요 경력"
      >
        <CareerList ref={careerRef} />
      </section>
      <section
        className="col-span-4 row-span-4 max-lg:row-span-5 xl:col-span-4 xl:row-span-5"
        aria-label="개발 로그"
      >
        <DevelopmentList ref={devLogRef} />
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

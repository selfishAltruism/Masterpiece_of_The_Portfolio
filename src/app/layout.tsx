import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "강민규 | Kyus Log",
  description:
    "프론트엔드 개발자 강민규의 개발 블로그입니다. Next.js, React, React Native 등 다양한 기술 스택을 다룹니다.",
  keywords: [
    "강민규",
    "프론트엔드 개발자",
    "Front-end Developer",
    "Next.js 개발자",
    "React 개발자",
    "React Native 개발자",
    "중앙대학교 소프트웨어학부",
    "IDIS 연구원",
    "IDIS SW 연구원",
    "SW 연구원",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans`}>{children}</body>
    </html>
  );
}

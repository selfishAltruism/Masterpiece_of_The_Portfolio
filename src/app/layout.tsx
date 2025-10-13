import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../index.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Kyu | 강민규",
  description:
    "안전지대를 넘어서는 개발자, 강민규의 경력 기술 웹 페이지입니다. React, Next.js, Web Graphics를 주로 다루고 있습니다.",
  keywords: [
    "강민규",
    "프론트엔드 개발자",
    "Front-end Developer",
    "React 개발자",
    "Next.js 개발자",
    "React Native 개발자",
    "중앙대학교 소프트웨어학부",
    "IDIS 연구원",
    "IDIS SW 연구원",
    "웹 개발자",
  ],
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      {
        url: "/favicon/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
  },
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

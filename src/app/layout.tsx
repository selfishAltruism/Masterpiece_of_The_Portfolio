import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../index.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Kyu, 강민규",
  description:
    "안전지대를 넘어서는 개발자, 강민규의 경력 기술 웹 페이지입니다. Web과 App에서 Web Graphics, RWD, SEO를 주로 다루고 있습니다.",
  keywords: [
    "강민규",
    "프론트엔드 개발자",
    "Front-end 개발자",
    "웹 개발자",
    "앱 개발자",
    "Web 개발자",
    "App 개발자",
    "RWD",
    "Web Graphics",
    "SEO",
    "React",
    "Next.js",
    "React Native",
    "중앙대학교 소프트웨어학부",
    "CAUSW",
    "IDIS 개발자",
    "IDIS 현직자",
    "IDIS 연구원",
    "아이디스",
    "아이디스 현직자",
    "아이디스 연구원",
    "영상 보안 개발자",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/favicon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },
      {
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
  },
  openGraph: {
    title: "Kyu | 강민규",
    description:
      "안전지대를 넘어서는 개발자, 강민규의 경력 기술 웹 페이지입니다. React, Next.js, Web Graphics를 주로 다루고 있습니다.",
    images: ["https://kyu-log.vercel.app/opengraph-image.png"],
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

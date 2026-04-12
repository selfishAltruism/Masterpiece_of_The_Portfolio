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
  title: "강민규",
  manifest: "/site.webmanifest",
  description:
    "강민규의 포트폴리오입니다. 해야 할 일을 찾고, 책임감 있게 완수합니다.",
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
      {
        url: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "강민규",
    description:
      "강민규의 포트폴리오입니다. 해야 할 일을 찾고, 책임감 있게 완수합니다.",
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

import type { Metadata } from "next";
import "./globals.css";
import { inter, noto, barlow } from "./fonts";
import ClientLayout from "@/components/Global/ClientLayout";
export const metadata: Metadata = {
  title: {
    default: "Brand Insight ｜メディア露出価値換算プラットフォーム",
    template: "%s | Brand Insight ｜メディア露出価値換算プラットフォーム",
  },
  metadataBase: new URL("https://brand-insight.com/"),
  description:
    "スポーツチームのスポンサー広告の日々の露出を可視化して1試合のスポットやシーズンを通しての定量的な広告換算をするプロダクト ",
  keywords: [
    "BrandInsight",
    "Brand Insight",
    "スポーツ広告",
    "スポンサー支援",
    "スポーツメディア",
    "福岡",
    "スタートアップ",
  ],
  openGraph: {
    title: "Brand Insight ｜メディア露出価値換算プラットフォーム",
    description:
      "スポーツチームのスポンサー広告の日々の露出を可視化して1試合のスポットやシーズンを通しての定量的な広告換算をするプロダクト ",
    url: "https://brand-insight.com/",
    siteName: "Brand Insight ｜メディア露出価値換算プラットフォーム",
    images: [
      {
        url: "/og-image.png", // ← add this to /public
        width: 1200,
        height: 630,
        alt: "Brand Insight Open Graph Image",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Insight ｜メディア露出価値換算プラットフォーム",
    description:
      "スポーツチームのスポンサー広告の日々の露出を可視化して1試合のスポットやシーズンを通しての定量的な広告換算をするプロダクト ",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${noto.variable} ${barlow.variable}`}
    >
      <body className="font-sans">
        <div className="bg-[url(/assets/background.jpg)] bg-cover bg-center h-screen fixed w-full z-[-3]"></div>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

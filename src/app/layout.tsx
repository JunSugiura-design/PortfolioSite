import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
});

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Jun Sugiura | Portfolio",
  description: "Jun Sugiuraのポートフォリオサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${notoSerif.variable} ${notoSans.variable} scroll-smooth`}
    >
      <body className="font-japanese bg-sakura-50 dark:bg-gray-900">
        {children}
      </body>
    </html>
  );
}

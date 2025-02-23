import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
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
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${notoSansJP.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col`}
      >
        <main className="flex-grow">{children}</main>
        <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6">
            <p>© 2024 Jun Sugiura. All rights reserved.</p>
            <p>当サイトのコンテンツの無断転載・複製を禁じます。</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

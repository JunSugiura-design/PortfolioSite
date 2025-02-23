import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const config: NextConfig = {
  output: "standalone", // 'export'から'standalone'に変更
  images: {
    unoptimized: true, // 静的エクスポート時に必要
  },
  basePath: process.env.GITHUB_ACTIONS ? "/PortfolioSite" : "", // リポジトリ名に合わせて変更してください
};

export default withNextIntl(config);

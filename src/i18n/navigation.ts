export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];

// デフォルトのロケールを設定
export const defaultLocale = "en" as const;

// パスの生成ヘルパー
export function getPathWithLocale(path: string, locale: Locale) {
  return `/${locale}${path}`;
}

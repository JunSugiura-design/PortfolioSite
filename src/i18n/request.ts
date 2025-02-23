import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale } from "./navigation";

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocaleを待機し、有効なロケールを確認
  let locale = await requestLocale;
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
    timeZone: "Asia/Tokyo",
  };
});

import { locales } from "./navigation";
import { headers } from "next/headers";

export default async function getRequestConfig({ locale }: { locale: string }) {
  const headerList = await headers();
  const nextLocale = headerList.get("next-locale");

  return {
    messages: (await import(`./locales/${locale}.json`)).default,
  };
}

import { Locale } from "./navigation";

export async function getMessages(locale: Locale) {
  try {
    return (await import(`./locales/${locale}.json`)).default;
  } catch (error) {
    throw new Error(`Failed to load messages for locale: ${locale}`);
  }
}

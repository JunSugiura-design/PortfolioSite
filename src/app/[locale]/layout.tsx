import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import { unstable_setRequestLocale } from "next-intl/server";
import { Locale } from "@/i18n/navigation";

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

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ja" }];
}

type Props = {
  children: React.ReactNode;
  params: { locale: Locale };
};

export default async function LocaleLayout({ children, params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const { locale } = resolvedParams;
  unstable_setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`../../i18n/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${notoSerif.variable} ${notoSans.variable}`}
    >
      <body className="font-japanese bg-sakura-50">
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone="Asia/Tokyo"
        >
          <Navigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

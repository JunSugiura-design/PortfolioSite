import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import { setRequestLocale } from "next-intl/server";
import { Locale } from "@/i18n/navigation";
import { getMessages } from "@/i18n/getMessages";

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
  params: Promise<{ locale: Locale }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  let messages;
  try {
    messages = await getMessages(locale);
  } catch (error) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${notoSerif.variable} ${notoSans.variable} scroll-smooth`}
    >
      <body className="font-japanese bg-sakura-50 dark:bg-gray-900">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

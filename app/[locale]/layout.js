import { Inter } from "next/font/google";
import "@/app/_assets/syles/globals.css";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Booking",
    template: "%s | Booking",
  },
  description:
    "A modern booking system to easily search, compare, and book apartments, resorts, and cottages with real-time availability and secure payments.",
  icons: {
    icon: "/logo.png",
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await import(`@/src/i18n/messages/${locale}.json`).then(
    (m) => m.default
  );
  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

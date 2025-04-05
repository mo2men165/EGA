import type { Metadata } from "next";
import "@/app/globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {notFound} from 'next/navigation';
import { routing } from "@/i182/routing";

export const metadata: Metadata = {
  metadataBase: new URL("https://ega-site.com"), // Replace with your actual domain
  title: {
    template: "%s | EGA",
    default: "EGA - Egypt's Leading Marketing Agency", 
  },
  description: "The leading marketing agency in Egypt. Give your brand EGO.",
  keywords: ["marketing", "agency", "Egypt", "branding", "advertising"],
  creator: "EGA",
  publisher: "EGA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "google-site-verification-code", // If you have one
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}


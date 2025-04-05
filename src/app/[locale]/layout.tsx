import type { Metadata } from "next";
import "@/app/globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {notFound} from 'next/navigation';
import { routing } from "@/i182/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  try {
    // Ensure that the incoming `locale` is valid
    const resolvedParams = await params;
    const locale = resolvedParams?.locale || 'en';
    
    if (!hasLocale(routing.locales, locale)) {
      notFound();
    }
  
    return (
      <NextIntlClientProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow" lang={locale}>
            {children}
          </main>
          <Footer />
        </div>
      </NextIntlClientProvider>
    );
  } catch (error) {
    console.error('Error in LocaleLayout:', error);
    // Return a simplified layout if params resolution fails
    return (
      <main>
        {children}
      </main>
    );
  }
}


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

// Define the type for layout props
type LayoutProps = {
  children: React.ReactNode;
  params?: Promise<{ locale?: string }>;
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps) {
  // Safely handle params resolution
  let locale = 'en';
  let dir = 'ltr';
  
  if (params) {
    try {
      const resolvedParams = await params;
      locale = resolvedParams?.locale || 'en';
      dir = locale === 'ar' ? 'rtl' : 'ltr';
    } catch (error) {
      console.error('Error resolving params in RootLayout:', error);
      // Use defaults if there's an error
    }
  }
  
  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
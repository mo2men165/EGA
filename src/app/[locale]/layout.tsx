import { NextIntlClientProvider, Locale, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i182/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const isArabic = params.locale === 'ar';
  
  return {
    title: isArabic ? 'EGA - وكالة التسويق الرائدة في مصر' : undefined, // Only override for Arabic
    description: isArabic 
      ? 'وكالة التسويق الرائدة في مصر. امنح علامتك التجارية هوية مميزة.'
      : undefined,
    alternates: {
      languages: {
        'en': '/en',
        'ar': '/ar',
      },
      canonical: `/${params.locale}`,
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <>
      <NextIntlClientProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </>
  );
}
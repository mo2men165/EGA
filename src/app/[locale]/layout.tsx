import { NextIntlClientProvider, Locale, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i182/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  try {
    const resolvedParams = await params;
    const locale = resolvedParams?.locale || 'en';
    const isArabic = locale === 'ar';
    
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
        canonical: `/${locale}`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Provide basic fallback metadata
    return {
      alternates: {
        languages: {
          'en': '/en',
          'ar': '/ar',
        },
        canonical: '/en',
      },
    };
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  try {
    // Ensure that the incoming `locale` is valid
    const resolvedParams = await params;
    const locale = resolvedParams?.locale || 'en';
    
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
  } catch (error) {
    console.error('Error in LocaleLayout:', error);
    // Return a simplified layout if params resolution fails
    return (
      <>
        <main>{children}</main>
      </>
    );
  }
}
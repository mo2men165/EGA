import { NextIntlClientProvider } from 'next-intl';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Generate metadata for the about page with localization
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'about' });
  const isArabic = params.locale === 'ar';
  
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      locale: isArabic ? 'ar_EG' : 'en_US',
      type: 'website',
      url: `https://ega-site.com/${params.locale}/about`,
    },
    alternates: {
      languages: {
        'en': '/en/about',
        'ar': '/ar/about',
      },
      canonical: `/${params.locale}/about`,
    },
  };
}

// Define the type for layout props
interface AboutLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function AboutLayout({
  children,
  params
}: AboutLayoutProps) {
  return (
    <>
      {children}
    </>
  );
}
import { NextIntlClientProvider } from 'next-intl';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Generate metadata for the blog page with localization
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'blogPage' });
  const isArabic = params.locale === 'ar';
  
  return {
    title: t('metaTitle'), // Page title that will use the template from root layout
    description: t('metaDescription'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      locale: isArabic ? 'ar_EG' : 'en_US',
      type: 'website',
      url: `https://ega-site.com/${params.locale}/blog`,
      // No images as requested
    },
    twitter: {
      card: 'summary',
      title: t('metaTitle'),
      description: t('metaDescription'),
      // No images as requested
    },
    alternates: {
      languages: {
        'en': '/en/blog',
        'ar': '/ar/blog',
      },
      canonical: `/${params.locale}/blog`,
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
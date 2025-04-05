import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Generate metadata for the contact page with localization
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'contactPage' });
  const isArabic = params.locale === 'ar';
  
  return {
    title: t('title'), // Will use template from root layout
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: isArabic ? 'ar_EG' : 'en_US',
      type: 'website',
      url: `https://ega-site.com/${params.locale}/contact`,
    },
    twitter: {
      card: 'summary',
      title: t('title'),
      description: t('description'),
    },
    alternates: {
      languages: {
        'en': '/en/contact',
        'ar': '/ar/contact',
      },
      canonical: `/${params.locale}/contact`,
    },
  };
}

export default function ContactLayout({
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
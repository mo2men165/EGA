import { NextIntlClientProvider } from 'next-intl';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Generate metadata for the projects page with localization
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'projectsPage' });
  const isArabic = params.locale === 'ar';
  
  return {
    title: t('metaTitle'), // Page title that will use the template from root layout
    description: t('metaDescription'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      locale: isArabic ? 'ar_EG' : 'en_US',
      type: 'website',
      url: `https://ega-site.com/${params.locale}/projects`,
    },
    alternates: {
      languages: {
        'en': '/en/projects',
        'ar': '/ar/projects',
      },
      canonical: `/${params.locale}/projects`,
    },
  };
}

export default function ProjectsLayout({
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
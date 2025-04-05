// app/[locale]/services/performance-marketing/layout.tsx
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'performanceMarketingPage' });
  const isArabic = params.locale === 'ar';
  
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      languages: {
        'en': '/en/services/performance-marketing',
        'ar': '/ar/services/performance-marketing',
      },
      canonical: `/${params.locale}/services/performance-marketing`,
    },
  };
}

export default function PerformanceMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
// app/[locale]/services/web-solutions/layout.tsx
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'softwarePage' });
  const isArabic = params.locale === 'ar';
  
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      languages: {
        'en': '/en/services/web-solutions',
        'ar': '/ar/services/web-solutions',
      },
      canonical: `/${params.locale}/services/web-solutions`,
    },
  };
}

export default function WebSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
// app/[locale]/services/media-production/layout.tsx
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'mediaProductionPage' });
  const isArabic = params.locale === 'ar';
  
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      languages: {
        'en': '/en/services/media-production',
        'ar': '/ar/services/media-production',
      },
      canonical: `/${params.locale}/services/media-production`,
    },
  };
}

export default function MediaProductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
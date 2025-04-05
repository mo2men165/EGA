// app/[locale]/services/branding/layout.tsx
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'brandingPage' });
  const isArabic = params.locale === 'ar';
  
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      languages: {
        'en': '/en/services/branding',
        'ar': '/ar/services/branding',
      },
      canonical: `/${params.locale}/services/branding`,
    },
  };
}

export default function BrandingServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
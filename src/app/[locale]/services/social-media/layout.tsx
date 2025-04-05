// app/[locale]/services/social-media/layout.tsx
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'socialMediaPage' });
  const isArabic = params.locale === 'ar';
  
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      languages: {
        'en': '/en/services/social-media',
        'ar': '/ar/services/social-media',
      },
      canonical: `/${params.locale}/services/social-media`,
    },
  };
}

export default function SocialMediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
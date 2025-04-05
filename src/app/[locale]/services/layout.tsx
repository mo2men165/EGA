// app/[locale]/services/layout.tsx
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  try {
    // Await the params before using them with fallback to 'en'
    const resolvedParams = await params;
    const locale = resolvedParams?.locale || 'en';
    
    // Get translations - if this fails, we'll use hardcoded values instead
    let metaTitle, metaDescription;
    try {
      const t = await getTranslations({ locale, namespace: 'servicesPage' });
      metaTitle = t('metaTitle');
      metaDescription = t('metaDescription');
    } catch (error) {
      console.error('Translation error:', error);
      // Use hardcoded fallback values directly
      metaTitle = locale === 'ar' ? 'خدماتنا | EGA' : 'Our Services | EGA';
      metaDescription = locale === 'ar' 
        ? 'استكشف الخدمات التسويقية المتنوعة التي تقدمها شركة EGA' 
        : 'Explore the diverse marketing services offered by EGA';
    }
    
    return {
      title: metaTitle,
      description: metaDescription,
      alternates: {
        languages: {
          'en': '/en/services',
          'ar': '/ar/services',
        },
        canonical: `/${locale}/services`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Provide basic fallback metadata
    return {
      title: 'Our Services | EGA',
      description: 'Explore the diverse marketing services offered by EGA',
      alternates: {
        languages: {
          'en': '/en/services',
          'ar': '/ar/services',
        },
        canonical: '/en/services',
      },
    };
  }
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
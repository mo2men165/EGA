// app/[locale]/services/performance-marketing/layout.tsx
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
      const t = await getTranslations({ locale, namespace: 'performanceMarketingPage' });
      metaTitle = t('metaTitle');
      metaDescription = t('metaDescription');
    } catch (error) {
      console.error('Translation error:', error);
      // Use hardcoded fallback values directly
      metaTitle = locale === 'ar' ? 'التسويق الأدائي | EGA' : 'Performance Marketing | EGA';
      metaDescription = locale === 'ar' 
        ? 'خدمات التسويق الأدائي وتحسين معدلات التحويل من EGA' 
        : 'Performance marketing and conversion optimization services from EGA';
    }
    
    return {
      title: metaTitle,
      description: metaDescription,
      alternates: {
        languages: {
          'en': '/en/services/performance-marketing',
          'ar': '/ar/services/performance-marketing',
        },
        canonical: `/${locale}/services/performance-marketing`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Provide basic fallback metadata
    return {
      title: 'Performance Marketing | EGA',
      description: 'Performance marketing and conversion optimization services from EGA',
      alternates: {
        languages: {
          'en': '/en/services/performance-marketing',
          'ar': '/ar/services/performance-marketing',
        },
        canonical: '/en/services/performance-marketing',
      },
    };
  }
}

export default function PerformanceMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
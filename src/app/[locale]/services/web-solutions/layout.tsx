// app/[locale]/services/web-solutions/layout.tsx
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
      const t = await getTranslations({ locale, namespace: 'softwarePage' });
      metaTitle = t('metaTitle');
      metaDescription = t('metaDescription');
    } catch (error) {
      console.error('Translation error:', error);
      // Use hardcoded fallback values directly
      metaTitle = locale === 'ar' ? 'حلول الويب والتطبيقات | EGA' : 'Web & Software Solutions | EGA';
      metaDescription = locale === 'ar' 
        ? 'خدمات تطوير المواقع والتطبيقات وحلول البرمجيات من EGA' 
        : 'Website development, applications, and software solutions from EGA';
    }
    
    return {
      title: metaTitle,
      description: metaDescription,
      alternates: {
        languages: {
          'en': '/en/services/web-solutions',
          'ar': '/ar/services/web-solutions',
        },
        canonical: `/${locale}/services/web-solutions`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Provide basic fallback metadata
    return {
      title: 'Web & Software Solutions | EGA',
      description: 'Website development, applications, and software solutions from EGA',
      alternates: {
        languages: {
          'en': '/en/services/web-solutions',
          'ar': '/ar/services/web-solutions',
        },
        canonical: '/en/services/web-solutions',
      },
    };
  }
}

export default function WebSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
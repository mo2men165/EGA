// app/[locale]/services/branding/layout.tsx
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
      const t = await getTranslations({ locale, namespace: 'brandingPage' });
      metaTitle = t('metaTitle');
      metaDescription = t('metaDescription');
    } catch (error) {
      console.error('Translation error:', error);
      // Use hardcoded fallback values directly
      metaTitle = locale === 'ar' ? 'خدمات العلامات التجارية | EGA' : 'Branding Services | EGA';
      metaDescription = locale === 'ar' 
        ? 'اكتشف خدمات العلامات التجارية المتميزة من EGA' 
        : 'Discover exceptional branding services from EGA';
    }
    
    return {
      title: metaTitle,
      description: metaDescription,
      alternates: {
        languages: {
          'en': '/en/services/branding',
          'ar': '/ar/services/branding',
        },
        canonical: `/${locale}/services/branding`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Provide basic fallback metadata
    return {
      title: 'Branding Services | EGA',
      description: 'Discover exceptional branding services from EGA',
      alternates: {
        languages: {
          'en': '/en/services/branding',
          'ar': '/ar/services/branding',
        },
        canonical: '/en/services/branding',
      },
    };
  }
}

export default function BrandingServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
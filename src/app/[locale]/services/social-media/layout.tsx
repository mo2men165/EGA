// app/[locale]/services/social-media/layout.tsx
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
      const t = await getTranslations({ locale, namespace: 'socialMediaPage' });
      metaTitle = t('metaTitle');
      metaDescription = t('metaDescription');
    } catch (error) {
      console.error('Translation error:', error);
      // Use hardcoded fallback values directly
      metaTitle = locale === 'ar' ? 'خدمات وسائل التواصل الاجتماعي | EGA' : 'Social Media Services | EGA';
      metaDescription = locale === 'ar' 
        ? 'خدمات إدارة وسائل التواصل الاجتماعي والمحتوى الرقمي من EGA' 
        : 'Social media management and digital content services from EGA';
    }
    
    return {
      title: metaTitle,
      description: metaDescription,
      alternates: {
        languages: {
          'en': '/en/services/social-media',
          'ar': '/ar/services/social-media',
        },
        canonical: `/${locale}/services/social-media`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Provide basic fallback metadata
    return {
      title: 'Social Media Services | EGA',
      description: 'Social media management and digital content services from EGA',
      alternates: {
        languages: {
          'en': '/en/services/social-media',
          'ar': '/ar/services/social-media',
        },
        canonical: '/en/services/social-media',
      },
    };
  }
}

export default function SocialMediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
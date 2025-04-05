// app/[locale]/services/media-production/layout.tsx
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
      const t = await getTranslations({ locale, namespace: 'mediaProductionPage' });
      metaTitle = t('metaTitle');
      metaDescription = t('metaDescription');
    } catch (error) {
      console.error('Translation error:', error);
      // Use hardcoded fallback values directly
      metaTitle = locale === 'ar' ? 'خدمات إنتاج الوسائط | EGA' : 'Media Production Services | EGA';
      metaDescription = locale === 'ar' 
        ? 'خدمات إنتاج الفيديو والصوت والوسائط المتعددة من EGA' 
        : 'Video, audio, and multimedia production services from EGA';
    }
    
    return {
      title: metaTitle,
      description: metaDescription,
      alternates: {
        languages: {
          'en': '/en/services/media-production',
          'ar': '/ar/services/media-production',
        },
        canonical: `/${locale}/services/media-production`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Provide basic fallback metadata
    return {
      title: 'Media Production Services | EGA',
      description: 'Video, audio, and multimedia production services from EGA',
      alternates: {
        languages: {
          'en': '/en/services/media-production',
          'ar': '/ar/services/media-production',
        },
        canonical: '/en/services/media-production',
      },
    };
  }
}

export default function MediaProductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
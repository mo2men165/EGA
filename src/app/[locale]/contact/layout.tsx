import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Generate metadata for the contact page with localization
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  try {
    // Await the params before using them with fallback to 'en'
    const resolvedParams = await params;
    const locale = resolvedParams?.locale || 'en';
    
    // Get translations - if this fails, we'll use hardcoded values instead
    let title, description;
    try {
      const t = await getTranslations({ locale, namespace: 'contactPage' });
      title = t('title');
      description = t('description');
    } catch (error) {
      console.error('Translation error:', error);
      // Use hardcoded fallback values directly
      title = locale === 'ar' ? 'اتصل بنا | EGA' : 'Contact Us | EGA';
      description = locale === 'ar' 
        ? 'تواصل مع فريق EGA للاستفسارات والمشاريع الجديدة' 
        : 'Get in touch with the EGA team for inquiries and new projects';
    }
    
    const isArabic = locale === 'ar';
    
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        locale: isArabic ? 'ar_EG' : 'en_US',
        type: 'website',
        url: `https://ega-site.com/${locale}/contact`,
      },
      twitter: {
        card: 'summary',
        title,
        description,
      },
      alternates: {
        languages: {
          'en': '/en/contact',
          'ar': '/ar/contact',
        },
        canonical: `/${locale}/contact`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Provide basic fallback metadata
    return {
      title: 'Contact Us | EGA',
      description: 'Get in touch with the EGA team for inquiries and new projects',
      alternates: {
        languages: {
          'en': '/en/contact',
          'ar': '/ar/contact',
        },
        canonical: '/en/contact',
      },
    };
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
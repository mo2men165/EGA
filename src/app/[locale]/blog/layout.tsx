import { NextIntlClientProvider } from 'next-intl';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Generate metadata for the blog page with localization
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  try {
    // Await the params before using them with fallback to 'en'
    const resolvedParams = await params;
    const locale = resolvedParams?.locale || 'en';
    
    // Get translations - if this fails, we'll use hardcoded values instead
    let metaTitle, metaDescription;
    try {
      const t = await getTranslations({ locale, namespace: 'blogPage' });
      metaTitle = t('metaTitle');
      metaDescription = t('metaDescription');
    } catch (error) {
      console.error('Translation error:', error);
      // Use hardcoded fallback values directly
      metaTitle = locale === 'ar' ? 'المدونة | EGA' : 'Blog | EGA';
      metaDescription = locale === 'ar' 
        ? 'اقرأ أحدث مقالات المدونة حول التسويق والإعلان' 
        : 'Read our latest blog posts about marketing and advertising';
    }
    
    const isArabic = locale === 'ar';
    
    return {
      title: metaTitle,
      description: metaDescription,
      openGraph: {
        title: metaTitle,
        description: metaDescription,
        locale: isArabic ? 'ar_EG' : 'en_US',
        type: 'website',
        url: `https://ega-site.com/${locale}/blog`,
        // No images as requested
      },
      twitter: {
        card: 'summary',
        title: metaTitle,
        description: metaDescription,
        // No images as requested
      },
      alternates: {
        languages: {
          'en': '/en/blog',
          'ar': '/ar/blog',
        },
        canonical: `/${locale}/blog`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Provide basic fallback metadata
    return {
      title: 'Blog | EGA',
      description: 'Read our latest blog posts about marketing and advertising',
      alternates: {
        languages: {
          'en': '/en/blog',
          'ar': '/ar/blog',
        },
        canonical: '/en/blog',
      },
    };
  }
}

// This layout doesn't need params, so it's simpler than others
export default function BlogLayout({
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
import { NextIntlClientProvider } from 'next-intl';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Generate metadata for the projects page with localization
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  try {
    // Await the params before using them with fallback to 'en'
    const resolvedParams = await params;
    const locale = resolvedParams?.locale || 'en';
    
    // Get translations - if this fails, we'll use hardcoded values instead
    let metaTitle, metaDescription;
    try {
      const t = await getTranslations({ locale, namespace: 'projectsPage' });
      metaTitle = t('metaTitle');
      metaDescription = t('metaDescription');
    } catch (error) {
      console.error('Translation error:', error);
      // Use hardcoded fallback values directly
      metaTitle = locale === 'ar' ? 'المشاريع | EGA' : 'Projects | EGA';
      metaDescription = locale === 'ar' 
        ? 'استكشف أحدث مشاريعنا وأعمالنا في مجال التسويق والإعلان' 
        : 'Explore our latest projects and work in marketing and advertising';
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
        url: `https://ega-site.com/${locale}/projects`,
      },
      alternates: {
        languages: {
          'en': '/en/projects',
          'ar': '/ar/projects',
        },
        canonical: `/${locale}/projects`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Provide basic fallback metadata
    return {
      title: 'Projects | EGA',
      description: 'Explore our latest projects and work in marketing and advertising',
      alternates: {
        languages: {
          'en': '/en/projects',
          'ar': '/ar/projects',
        },
        canonical: '/en/projects',
      },
    };
  }
}

export default function ProjectsLayout({
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
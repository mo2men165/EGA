import { NextIntlClientProvider } from 'next-intl';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Generate metadata for the about page with localization
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  try {
    // Await the params before using them with fallback to 'en'
    const resolvedParams = await params;
    const locale = resolvedParams?.locale || 'en';
    
    // Get translations - if this fails, we'll use hardcoded values instead
    let metaTitle, metaDescription;
    try {
      const t = await getTranslations({ locale, namespace: 'about' });
      metaTitle = t('metaTitle');
      metaDescription = t('metaDescription');
    } catch (error) {
      console.error('Translation error:', error);
      // Use hardcoded fallback values directly
      metaTitle = locale === 'ar' ? 'حول الشركة' : 'About Us';
      metaDescription = locale === 'ar' 
        ? 'تعرف على المزيد عن شركتنا وخدماتنا' 
        : 'Learn more about our company and services';
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
        url: `https://ega-site.com/${locale}/about`,
      },
      alternates: {
        languages: {
          'en': '/en/about',
          'ar': '/ar/about',
        },
        canonical: `/${locale}/about`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Provide basic fallback metadata
    return {
      title: 'About Us',
      description: 'Learn more about our company and services',
    };
  }
}

// Use the correct Next.js type for layout components
type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function AboutLayout({
  children,
  params,
}: LayoutProps) {
  try {
    // We're simply awaiting params but not using them directly in the layout
    await params;
    
    return (
      <>
        {children}
      </>
    );
  } catch (error) {
    // Fallback in case of error with params
    console.error('Error in AboutLayout:', error);
    return (
      <>
        {children}
      </>
    );
  }
}
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Simple static metadata that doesn't try to access post data
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string; id: string }> 
}): Promise<Metadata> {
  try {
    // Await the params before using them
    const resolvedParams = await params;
    const locale = resolvedParams?.locale || 'en';
    const id = resolvedParams?.id || '';
    
    // Get translations - if this fails, we'll use hardcoded values instead
    let title: string = '';
    let description: string = '';
    
    try {
      const t = await getTranslations({ locale });
      
      // Try to get post data for metadata
      try {
        // Safely attempt to get post data
        const postKey = `post${id}`;
        const postPath = `blogPage.posts.${postKey}`;
        
        title = t(`${postPath}.title`);
        description = t(`${postPath}.excerpt`);
      } catch (translationError) {
        // Use fallback values if post data can't be accessed
        console.error('Post translation error:', translationError);
        title = `Blog Post ${id}`;
        description = 'Read our latest insights on digital marketing strategies and trends.';
      }
    } catch (error) {
      // Use hardcoded fallback values if translations fail entirely
      console.error('Translation error:', error);
      title = `Blog Post ${id}`;
      description = locale === 'ar' 
        ? 'اقرأ أحدث رؤانا حول استراتيجيات واتجاهات التسويق الرقمي.' 
        : 'Read our latest insights on digital marketing strategies and trends.';
    }
    
    return {
      title, 
      description,
      alternates: {
        languages: {
          'en': `/en/blog/${id}`,
          'ar': `/ar/blog/${id}`,
        },
        canonical: `/${locale}/blog/${id}`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Provide basic fallback metadata
    return {
      title: 'Blog Post',
      description: 'Read our latest insights on digital marketing strategies and trends.',
    };
  }
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
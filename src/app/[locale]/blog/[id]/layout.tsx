import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Simple static metadata that doesn't try to access post data
export async function generateMetadata({ 
  params 
}: { 
  params: { locale: string; id: string } 
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale });
  const isArabic = params.locale === 'ar';
  
  // Try to get basic post data for metadata
  let title = '';
  let description = '';
  
  try {
    // Safely attempt to get post data
    const postKey = `post${params.id}`;
    const postPath = `blogPage.posts.${postKey}`;
    
    title = t(`${postPath}.title`);
    description = t(`${postPath}.excerpt`);
  } catch (error) {
    // Use fallback values if post data can't be accessed
    title = `Blog Post ${params.id}`;
    description = 'Read our latest insights on digital marketing strategies and trends.';
  }
  
  return {
    title, 
    description,
    alternates: {
      languages: {
        'en': `/en/blog/${params.id}`,
        'ar': `/ar/blog/${params.id}`,
      },
      canonical: `/${params.locale}/blog/${params.id}`,
    },
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
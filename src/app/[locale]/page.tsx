import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import CTASection from '@/components/home/CTASection';
import ServicesRadial from '@/components/home/ServicesRadial';
import ValuePropositionGrid from '@/components/home/ValueProposition';
import ClientTestimonial from '@/components/home/ClientTestimonial';
import CaseStudyHighlights from '@/components/home/CaseStudy';
import LatestBlogPosts from '@/components/home/LatestBlogPosts';
import OrganizationSchema from '@/components/schemas/OrganizationSchema';

// Type definition for page props
type PageProps = {
  params: Promise<{ locale?: string }>;
};

// Generate metadata for the home page with localization
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    // Await the params before using them
    const resolvedParams = await params;
    
    // Add fallback logic for locale
    const locale = resolvedParams?.locale || 'en';
    
    try {
      const t = await getTranslations({ locale, namespace: 'HomePage' });
      const isArabic = locale === 'ar';
      
      return {
        title: t('metaTitle'), // Just the page title, template will add "| EGA"
        description: t('metaDescription'),
        openGraph: {
          title: t('metaTitle'),
          description: t('metaDescription'),
          locale: isArabic ? 'ar_EG' : 'en_US',
        },
        alternates: {
          languages: {
            'en': '/en',
            'ar': '/ar',
          },
          canonical: `/${locale}`,
        },
      };
    } catch (error) {
      console.error('Failed to load translations:', error);
      // Fallback metadata if translations fail
      return {
        title: 'Home',
        description: 'Welcome to our website',
        alternates: {
          languages: {
            'en': '/en',
            'ar': '/ar',
          },
          canonical: `/${locale}`,
        },
      };
    }
  } catch (error) {
    console.error('Error resolving params:', error);
    // Complete fallback if params resolution fails
    return {
      title: 'Home',
      description: 'Welcome to our website',
      alternates: {
        languages: {
          'en': '/en',
          'ar': '/ar',
        },
        canonical: '/en',
      },
    };
  }
}

// Make HomePage use the client component pattern with proper parameter handling
export default async function HomePage({ params }: PageProps) {
  try {
    // Await the params before using them
    const resolvedParams = await params;
    
    // Add fallback logic for locale
    const locale = resolvedParams?.locale || 'en';
    
    // Ensure translations are loaded before rendering components
    try {
      // Load translations but don't pass them to components
      // This ensures translations are available in the app's context
      await getTranslations({ locale, namespace: 'HomePage' });
      
      // Now we can render the components without passing props
      // They'll use useTranslations hook internally to access the translations
      return (
        <>
          <HeroSection />
          <CTASection />
          <ServicesRadial />
          <ValuePropositionGrid />
          <CaseStudyHighlights />
          <ClientTestimonial />
          <LatestBlogPosts />
          <OrganizationSchema />
        </>
      );
    } catch (error) {
      console.error('Failed to load component data:', error);
      // Fallback UI if component data fails to load
      return (
        <div className="p-4">
          <h1>Something went wrong</h1>
          <p>We're having trouble loading this page. Please try again later.</p>
        </div>
      );
    }
  } catch (error) {
    console.error('Error resolving params:', error);
    // Fallback UI if params resolution fails
    return (
      <div className="p-4">
        <h1>Something went wrong</h1>
        <p>We're having trouble loading this page. Please try again later.</p>
      </div>
    );
  }
}
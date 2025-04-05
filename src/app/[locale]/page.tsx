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

// Generate metadata for the home page with localization
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'HomePage' });
  const isArabic = params.locale === 'ar';
  
  return {
    title: t('metaTitle'), // Just the page title, template will add "| EGA"
    description: t('metaDescription'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      locale: isArabic ? 'ar_EG' : 'en_US',
    },
    // You can add page-specific structured data
    alternates: {
      languages: {
        'en': '/en',
        'ar': '/ar',
      },
      canonical: `/${params.locale}`,
    },
  };
}

export default function HomePage() {
  const t = useTranslations('HomePage');
  
  return <>
        <HeroSection />
        <CTASection />
        <ServicesRadial />
        <ValuePropositionGrid />
        <CaseStudyHighlights />
        <ClientTestimonial />
        <LatestBlogPosts />
        <OrganizationSchema />
  </>;
}
'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import BrandingHero from '@/components/services/branding/BrandingHero';
import BrandingOverview from '@/components/services/branding/BrandingOverview';
import ProcessSection from '@/components/services/branding/BrandingProcess';
import FeaturesList from '@/components/services/branding/BrandingFeatures';
import BrandingFAQ from '@/components/services/branding/BrandingFAQ';
import ServicesCTA from '@/components/services/ServicesCTA';
import BrandingServiceSchema from '@/components/schemas/BrandingServiceSchema';


const BrandingPage: React.FC = () => {
  const t = useTranslations('brandingPage');

  return (
    <main className="min-h-screen">
        <BrandingHero />
        <BrandingOverview />
        <ProcessSection />
        <FeaturesList />
        <BrandingFAQ />
        <ServicesCTA />
        <BrandingServiceSchema />
    </main>
  );
};

export default BrandingPage;
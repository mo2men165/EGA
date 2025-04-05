'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import ServicesCTA from '@/components/services/ServicesCTA';
import PerformanceMarketingHero from '@/components/services/performanceMarketing/PerformanceMarketingHero';
import PerformanceMarketingOverview from '@/components/services/performanceMarketing/PerformanceMarketingOverview';
import PerformanceMarketingProcess from '@/components/services/performanceMarketing/PerformanceMarketingProcess';
import PerformanceMarketingFeatures from '@/components/services/performanceMarketing/PerformanceMarketingFeatures';
import PerformanceMarketingFaq from '@/components/services/performanceMarketing/PerformanceMarketingFaq';
import PerformanceMarketingSchema from '@/components/schemas/PerformanceMarketingSchema';



const PerformanceMarketingPage: React.FC = () => {
  const t = useTranslations('socialMediaPage');

  return (
    <main className="min-h-screen">
        <PerformanceMarketingHero />
        <PerformanceMarketingOverview />
        <PerformanceMarketingProcess />
        <PerformanceMarketingFeatures />
        <PerformanceMarketingFaq />
        <ServicesCTA />
        <PerformanceMarketingSchema />
    </main>
  );
};

export default PerformanceMarketingPage;
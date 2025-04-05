'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import ServicesCTA from '@/components/services/ServicesCTA';
import SoftwareHero from '@/components/services/webSolutions/SoftwareHero';
import SoftwareOverview from '@/components/services/webSolutions/SoftwareOverview';
import SoftwareProcess from '@/components/services/webSolutions/SoftwareProcess';
import SoftwareFeatures from '@/components/services/webSolutions/SoftwareFeatures';
import WebSolutionsSchema from '@/components/schemas/WebSolutionsSchema';
import SoftwareFaq  from '@/components/services/webSolutions/SoftwareFaq';



const WebSolutionsPage: React.FC = () => {
  const t = useTranslations('softwarePage');

  return (
    <main className="min-h-screen">
        <SoftwareHero />
        <SoftwareOverview />
        <SoftwareProcess />
        <SoftwareFeatures />
        <SoftwareFaq />
        <ServicesCTA />
        <WebSolutionsSchema />
    </main>
  );
};

export default WebSolutionsPage;
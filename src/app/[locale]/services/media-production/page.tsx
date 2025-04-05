'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import ServicesCTA from '@/components/services/ServicesCTA';
import MediaProductionHero from '@/components/services/mediaProduction/MediaProductionHero';
import MediaProductionOverview from '@/components/services/mediaProduction/MediaProductionOverview';
import MediaProductionProcess from '@/components/services/mediaProduction/MediaProductionProcess';
import MediaProductionFeatures from '@/components/services/mediaProduction/MediaProductionFeatures';
import MediaProductionFaq from '@/components/services/mediaProduction/MediaProductionFaq';
import MediaProductionSchema from '@/components/schemas/MediaProductionSchema';


const MediaProductionPage: React.FC = () => {
  const t = useTranslations('mediaProductionPage');

  return (
    <main className="min-h-screen">
        <MediaProductionHero />
        <MediaProductionOverview />
        <MediaProductionProcess />
        <MediaProductionFeatures />
        <MediaProductionFaq />
        <ServicesCTA />
        <MediaProductionSchema />
    </main>
  );
};

export default MediaProductionPage;
'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import ServicesCTA from '@/components/services/ServicesCTA';
import SocialMediaHero from '@/components/services/socialMedia/SocialMediaHero';
import SocialMediaOverview from '@/components/services/socialMedia/SocialMediaOverview';
import SocialMediaProcess from '@/components/services/socialMedia/SocialMediaProcess';
import SocialMediaFeatures from '@/components/services/socialMedia/SocialMediaFeatures';
import SocialMediaFaq from '@/components/services/socialMedia/SocialMediaFaq';
import SocialMediaSchema from '@/components/schemas/SocialMediaSchema';



const SocialMediaPage: React.FC = () => {
  const t = useTranslations('socialMediaPage');

  return (
    <main className="min-h-screen">
        <SocialMediaHero />
        <SocialMediaOverview />
        <SocialMediaProcess />
        <SocialMediaFeatures />
        <SocialMediaFaq />
        <ServicesCTA />
        <SocialMediaSchema />
    </main>
  );
};

export default SocialMediaPage;
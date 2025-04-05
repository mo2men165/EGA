'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import ServicesHero from '../../../components/services/ServicesHero';
import ServicesOverview from '../../../components/services/ServicesOverview';
import ServicesList from '../../../components/services/ServicesList';
import ServicesCTA from '../../../components/services/ServicesCTA';
import CaseStudyHighlights from '@/components/home/CaseStudy';
import ClientTestimonials from '@/components/home/ClientTestimonial';
import ServicesSchema from '@/components/schemas/ServicesSchema';


const ServicesPage: React.FC = () => {
  const t = useTranslations('servicesPage');

  return (
    <main className="min-h-screen">
      <ServicesHero />
      <ServicesOverview />
      <ServicesList />
      <CaseStudyHighlights />
      <ClientTestimonials />
      <ServicesCTA />
      <ServicesSchema />
    </main>
  );
};

export default ServicesPage;
// app/[locale]/about/page.tsx
import CaseStudyHighlights from '@/components/home/CaseStudy';
import ClientTestimonials from '@/components/home/ClientTestimonial';
import CoreValues from '@/components/about/CoreValues';
import ServicesCTA from '@/components/services/ServicesCTA';
import VissionMission from '@/components/about/VissionMission';
import AboutSchema from '@/components/schemas/AboutSchema';
import AboutHero from '@/components/about/AboutHero';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CoreValues />
      <VissionMission />
      <ClientTestimonials />
      <CaseStudyHighlights />
      <ServicesCTA />
      <AboutSchema />
    </>
  );
}
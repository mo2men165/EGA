// app/[locale]/projects/page.tsx
'use client';

import React from 'react';
import ClientTestimonials from '@/components/home/ClientTestimonial';
import ServicesCTA from '@/components/services/ServicesCTA';
import ProjectsHero from '@/components/projects/ProjectsHero';
import FeaturedProjects from '@/components/projects/FeaturedProjects';
import ProjectsSchema from '@/components/schemas/ProjectsSchema';

const ProjectsPage = () => {
  return (
    <main className="min-h-screen">
      <ProjectsHero />
      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <FeaturedProjects />
      </div>
      <ClientTestimonials />
      <ServicesCTA />
      <ProjectsSchema />
    </main>
  );
};

export default ProjectsPage;
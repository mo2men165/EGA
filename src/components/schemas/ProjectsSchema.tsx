// components/ProjectsSchema.tsx
'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';

const ProjectsSchema = () => {
  const t = useTranslations('projectsPage');
  
  useEffect(() => {
    try {
      // Projects collection page schema
      const projectsSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": t('metaTitle'),
        "description": t('metaDescription'),
        "url": window.location.href,
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            // This would ideally be dynamically generated from your actual projects
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "CreativeWork",
                "name": t('featuredProject1Title'),
                "description": t('featuredProject1Description'),
                "url": `${window.location.origin}/projects/${t('featuredProject1Slug')}`,
                "image": `${window.location.origin}${t('featuredProject1Image')}`,
                "datePublished": t('featuredProject1Date'),
                "creator": {
                  "@type": "Organization",
                  "name": "EGA Marketing Agency"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "CreativeWork",
                "name": t('featuredProject2Title'),
                "description": t('featuredProject2Description'),
                "url": `${window.location.origin}/projects/${t('featuredProject2Slug')}`,
                "image": `${window.location.origin}${t('featuredProject2Image')}`,
                "datePublished": t('featuredProject2Date'),
                "creator": {
                  "@type": "Organization",
                  "name": "EGA Marketing Agency"
                }
              }
            },
          ]
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": window.location.origin
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": t('breadcrumbLabel'),
              "item": window.location.href
            }
          ]
        }
      };

      // Add the schema to the page
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(projectsSchema);
      document.head.appendChild(script);

      // Clean up on component unmount
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    } catch (error) {
      console.error('Error creating projects schema:', error);
    }
  }, [t]);

  return null;
};

export default ProjectsSchema;
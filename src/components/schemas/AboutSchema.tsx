// components/AboutSchema.tsx
'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';

const AboutSchema = () => {
  const t = useTranslations('about');
  
  useEffect(() => {
    try {
      // About page schema with organization details
      const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "EGA Marketing Agency",
          "description": t('organizationDescription'),
          "foundingDate": "2025", // Replace with actual founding date
          "founders": [
            {
              "@type": "Person",
              "name": t('founderName'),
              "jobTitle": t('founderTitle')
            }
          ],
          "slogan": t('slogan'),
          "url": window.location.origin,
          "logo": `${window.location.origin}/assets/Untitled-3-02 (1).png`,
          "sameAs": [
            "https://www.facebook.com/egamarketing",
            "https://www.instagram.com/egamarketing",
            "https://twitter.com/egamarketing",
            "https://www.linkedin.com/company/egamarketing"
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
              "name": "About",
              "item": window.location.href
            }
          ]
        }
      };

      // Add the schema to the page
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(aboutSchema);
      document.head.appendChild(script);

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    } catch (error) {
      console.error('Error creating about page schema:', error);
    }
  }, [t]);

  return null;
};

export default AboutSchema;
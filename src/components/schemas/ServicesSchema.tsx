'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';

const ServicesSchema = () => {
  const t = useTranslations('servicesPage');
  
  useEffect(() => {
    try {
      const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": t('servicesList.services.branding.title'),
            "url": `${window.location.origin}/services/branding`,
            "description": t('servicesList.services.branding.description')
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": t('servicesList.services.mediaProduction.title'),
            "url": `${window.location.origin}/services/media-production`,
            "description": t('servicesList.services.mediaProduction.description')
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": t('servicesList.services.performanceMarketing.title'),
            "url": `${window.location.origin}/services/performance-marketing`,
            "description": t('servicesList.services.performanceMarketing.description')
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": t('servicesList.services.socialMediaMarketing.title'),
            "url": `${window.location.origin}/services/social-media`,
            "description": t('servicesList.services.socialMediaMarketing.description')
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": t('servicesList.services.softwareWeb.title'),
            "url": `${window.location.origin}/services/web-solutions`,
            "description": t('servicesList.services.softwareWeb.description')
          }
        ]
      };

      // Organization schema to provide context
      const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "EGA Marketing Agency",
        "url": window.location.origin,
        "logo": `${window.location.origin}/assets/Untitled-3-02 (1).png`,
        "description": t('organizationDescription')
      };

      // BreadcrumbList schema
      const breadcrumbSchema = {
        "@context": "https://schema.org",
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
            "name": t('title'),
            "item": window.location.href
          }
        ]
      };

      // Add schemas to the page
      const servicesScript = document.createElement('script');
      servicesScript.type = 'application/ld+json';
      servicesScript.text = JSON.stringify(servicesSchema);
      document.head.appendChild(servicesScript);

      const orgScript = document.createElement('script');
      orgScript.type = 'application/ld+json';
      orgScript.text = JSON.stringify(organizationSchema);
      document.head.appendChild(orgScript);

      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(breadcrumbScript);

      return () => {
        document.head.removeChild(servicesScript);
        document.head.removeChild(orgScript);
        document.head.removeChild(breadcrumbScript);
      };
    } catch (error) {
      console.error('Error creating services schema:', error);
    }
  }, [t]);

  return null;
};

export default ServicesSchema;
// components/SocialMediaSchema.tsx
'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';

const SocialMediaSchema = () => {
  const t = useTranslations('socialMediaPage');
  
  useEffect(() => {
    try {
      // Service schema
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": t('title'),
        "description": t('description'),
        "provider": {
          "@type": "Organization",
          "name": "EGA Marketing Agency",
          "url": window.location.origin
        },
        "serviceType": "Social Media Marketing",
        "areaServed": "Egypt",
        "audience": {
          "@type": "Audience",
          "audienceType": "Businesses seeking social media presence and engagement"
        }
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
            "name": t('services'),
            "item": `${window.location.origin}/services`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": t('title'),
            "item": window.location.href
          }
        ]
      };

      // Add schemas to the page
      const serviceScript = document.createElement('script');
      serviceScript.type = 'application/ld+json';
      serviceScript.text = JSON.stringify(serviceSchema);
      document.head.appendChild(serviceScript);

      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(breadcrumbScript);

      return () => {
        if (document.head.contains(serviceScript)) {
          document.head.removeChild(serviceScript);
        }
        if (document.head.contains(breadcrumbScript)) {
          document.head.removeChild(breadcrumbScript);
        }
      };
    } catch (error) {
      console.error('Error creating social media schema:', error);
    }
  }, [t]);

  return null;
};

export default SocialMediaSchema;
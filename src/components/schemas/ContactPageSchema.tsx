'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';

const ContactPageSchema = () => {
  const t = useTranslations('contactPage');

  useEffect(() => {
    try {
      // Create schema for the organization
      const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "EGA Marketing Agency",
        "url": window.location.origin,
        "logo": `${window.location.origin}/assets/Untitled-3-02 (1).png`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": t('phoneNumber'),
          "contactType": "customer service",
          "availableLanguage": ["English", "Arabic"],
          "email": t('emailAddress')
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": t('officeAddress'),
          "addressLocality": "6th of October",
          "addressRegion": "Cairo",
          "addressCountry": "Egypt"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "16:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/egamarketing",
          "https://www.instagram.com/egamarketing",
          "https://twitter.com/egamarketing",
          "https://www.linkedin.com/company/egamarketing"
        ]
      };

      // Create schema for the contact page
      const contactPageSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": t('title'),
        "description": t('description'),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": window.location.href
        },
        "publisher": {
          "@type": "Organization",
          "name": "EGA Marketing Agency",
          "logo": {
            "@type": "ImageObject",
            "url": `${window.location.origin}/assets/Untitled-3-02 (1).png`
          }
        },
        keywords: ['contact', 'marketing agency', 'digital marketing', 'Egypt', 'agency contact', 'business hours'],
        robots: {
            index: true,
            follow: true,
            nocache: false, 
            googleBot: {
              index: true,
              follow: true,
              'max-image-preview': 'large',
              'max-snippet': -1,
            }
          },
          verification: {
            google: 'verification-code-here', // Replace with actual verification code
          }                    
      };

      // Add the schemas to the page
      const orgScript = document.createElement('script');
      orgScript.type = 'application/ld+json';
      orgScript.text = JSON.stringify(organizationSchema);
      document.head.appendChild(orgScript);

      const contactScript = document.createElement('script');
      contactScript.type = 'application/ld+json';
      contactScript.text = JSON.stringify(contactPageSchema);
      document.head.appendChild(contactScript);

      // Clean up function
      return () => {
        if (document.head.contains(orgScript)) {
          document.head.removeChild(orgScript);
        }
        if (document.head.contains(contactScript)) {
          document.head.removeChild(contactScript);
        }
      };
    } catch (error) {
      console.error('Error creating contact page schema:', error);
    }
  }, [t]);

  // This component doesn't render anything visible
  return null;
};

export default ContactPageSchema;
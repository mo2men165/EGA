// components/BlogSchema.tsx
'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';

const BlogSchema = () => {
  const t = useTranslations('blogPage');
  
  useEffect(() => {
    try {
      // Blog schema
      const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": t('metaTitle'),
        "description": t('metaDescription'),
        "url": window.location.href,
        "publisher": {
          "@type": "Organization",
          "name": "EGA Marketing Agency",
          "logo": {
            "@type": "ImageObject",
            "url": `${window.location.origin}/assets/Untitled-3-02 (1).png`
          }
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
      script.text = JSON.stringify(blogSchema);
      document.head.appendChild(script);

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    } catch (error) {
      console.error('Error creating blog schema:', error);
    }
  }, [t]);

  return null;
};

export default BlogSchema;
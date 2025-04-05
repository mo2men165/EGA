'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

// This component adds structured data for SEO
const BlogPostSchema: React.FC = () => {
  const params = useParams();
  const postId = params?.id ? params.id as string : '1';
  const t = useTranslations('blogPage');

  useEffect(() => {
    try {
      // Get post data
      const postKey = `post${postId}`;
      const title = t(`posts.${postKey}.title`);
      const excerpt = t(`posts.${postKey}.excerpt`);
      const date = t(`posts.${postKey}.date`);
      const authorName = t(`posts.${postKey}.author.name`);
      const authorRole = t(`posts.${postKey}.author.role`);
      const category = t(`posts.${postKey}.category`);
      
      // Create the schema data
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": excerpt,
        "datePublished": date,
        "dateModified": date,
        "author": {
          "@type": "Person",
          "name": authorName,
          "jobTitle": authorRole
        },
        "publisher": {
          "@type": "Organization",
          "name": "EGA Marketing Agency",
          "logo": {
            "@type": "ImageObject",
            "url": `${window.location.origin}/assets/Untitled-3-02 (1).png`
          }
        },
        "mainEntityOfPage": window.location.href,
        "articleSection": category
      };

      // Add the schema to the page
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    } catch (error) {
      console.error('Error creating blog post schema:', error);
    }
  }, [t, postId]);

  // This component doesn't render anything visible
  return null;
};

export default BlogPostSchema;
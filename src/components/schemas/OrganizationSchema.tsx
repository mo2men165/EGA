'use client';

import { useEffect } from 'react';

const OrganizationSchema = () => {
  useEffect(() => {
    // Create JSON-LD script in client-side
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "EGA Marketing Agency",
      "url": window.location.href,
      "logo": `${window.location.origin}/assets/Untitled-3-02 (1).png`,
      "sameAs": [
        "https://www.facebook.com/egamarketing",
        "https://www.instagram.com/egamarketing",
        "https://twitter.com/egamarketing"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+20-xxx-xxx-xxxx",
        "contactType": "customer service"
      }
    });
    
    document.head.appendChild(script);
    
    // Clean up function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  
  // This component doesn't render anything visible
  return null;
};

export default OrganizationSchema;
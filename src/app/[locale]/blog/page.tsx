// app/[locale]/blog/page.tsx
'use client';

import React from 'react';
import BlogPage from '@/components/blog/BlogPage';
import BlogSchema from '@/components/schemas/BlogSchema';

export default function BlogListPage() {
  return (
    <>
      <BlogPage />
      <BlogSchema />
    </>
  );
}
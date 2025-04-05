'use client';

import React from 'react';
import BlogPostDetail from '@/components/blog/BlogPostDetail';
import BlogPostSchema from '@/components/schemas/BlogPostSchema';

export default function BlogPostPage() {
  return (
    <>
      <BlogPostDetail />
      <BlogPostSchema />
    </>
  );
}
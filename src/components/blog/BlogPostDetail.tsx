'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const BlogPostDetail: React.FC = () => {
  const t = useTranslations('blogPage');
  const containerRef = useRef<HTMLElement>(null);
  
  // Get the post ID from the URL
  const params = useParams();
  const postId = params?.id ? parseInt(params.id as string) : 1;

  // Gradient colors for different categories
  const gradientColors: Record<string, string> = {
    'SEO Strategies': 'from-violet-500 to-purple-600',
    'SEO': 'from-violet-500 to-purple-600',
    'Social Media Marketing': 'from-lime-500 to-emerald-600',
    'Social Media': 'from-lime-500 to-emerald-600',
    'Digital Advertising': 'from-amber-500 to-orange-600',
    'Analytics': 'from-blue-500 to-indigo-600',
    'Content Marketing': 'from-blue-500 to-cyan-600'
  };

  // Get post data
  const postKey = `post${postId}`;
  const category = t(`posts.${postKey}.category`);
  const title = t(`posts.${postKey}.title`);
  const date = t(`posts.${postKey}.date`);
  const content = t(`posts.${postKey}.content`);
  const authorName = t(`posts.${postKey}.author.name`);
  const authorRole = t(`posts.${postKey}.author.role`);

  // Determine the gradient color based on category
  const gradientColor = gradientColors[category] || 'from-gray-500 to-gray-600';

  return (
    <section ref={containerRef} className="relative overflow-hidden md:pt-46 pt-50 bg-gradient-to-b from-white to-gray-50 py-24 dark:from-gray-900 dark:to-gray-800">
      <div className="relative z-10 container mx-auto px-4">
        {/* Post Header - No animations */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <span className="rounded-full bg-lime-100 px-4 py-2 text-sm font-semibold text-lime-700 dark:bg-lime-900 dark:text-lime-300">
              {category}
            </span>
          </div>

          <h1 className={`mb-6 bg-gradient-to-r ${gradientColor} bg-clip-text leading-relaxed text-4xl font-bold text-transparent md:text-5xl dark:from-lime-400 dark:to-emerald-400`}>
            {title}
          </h1>

          <div className="flex justify-center items-center space-x-4 text-gray-600 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{authorName}</span>
            </div>
          </div>
        </div>

        {/* Post Content - Simple rendering without animations */}
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          {/* Simple paragraph rendering to handle large content */}
          <div className="simple-text-content text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Author Bio - No animations */}
        <div className="mt-16 max-w-4xl mx-auto flex items-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-6">
          <div className="mr-6 h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{authorName}</h3>
            <p className="text-gray-600 dark:text-gray-300">{authorRole}</p>
          </div>
        </div>

        {/* Related Posts / Navigation - No animations */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="flex justify-between">
            {postId > 1 && (
              <Link 
                href={`/blog/${postId - 1}`} 
                className="group inline-flex items-center space-x-2 text-lime-600 dark:text-lime-400 hover:underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span>Previous Post</span>
              </Link>
            )}
            {postId < 4 && (
              <Link 
                href={`/blog/${postId + 1}`} 
                className="group inline-flex items-center space-x-2 text-lime-600 dark:text-lime-400 hover:underline ml-auto"
              >
                <span>Next Post</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostDetail;
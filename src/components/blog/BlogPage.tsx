'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
  };
  image: string;
  color: string;
  bgClass: string;
  tags: string[];
}

const BlogPage: React.FC = () => {
  const t = useTranslations('blogPage');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Generate blog posts from translations
  const blogPosts: BlogPost[] = [1, 2, 3, 4].map((id) => {
    const postKey = `post${id}`;
    return {
      id,
      category: t(`posts.${postKey}.category`),
      date: t(`posts.${postKey}.date`),
      title: t(`posts.${postKey}.title`),
      excerpt: t(`posts.${postKey}.excerpt`),
      content: t(`posts.${postKey}.content`),
      author: {
        name: t(`posts.${postKey}.author.name`),
        role: t(`posts.${postKey}.author.role`)
      },
      image: `/blog-${id}.jpg`,
      color: [
        'from-violet-500 to-purple-600',
        'from-lime-500 to-emerald-600',
        'from-amber-500 to-orange-600',
        'from-blue-500 to-cyan-600'
      ][id - 1],
      bgClass: [
        'bg-violet-500/10',
        'bg-lime-500/10',
        'bg-amber-500/10',
        'bg-blue-500/10'
      ][id - 1],
      tags: ['Digital Marketing', t(`posts.${postKey}.category`)]
    };
  });

  // Categories extracted from blog posts
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Filter posts based on selected category
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <section ref={containerRef} className="relative overflow-hidden pt-46 bg-gradient-to-b from-white to-gray-50 py-24 dark:from-gray-900 dark:to-gray-800">
      {/* Animated background particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-lime-400 opacity-30 dark:bg-lime-600"
          style={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`, 
            width: Math.random() * 10 + 5, 
            height: Math.random() * 10 + 5,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            delay: Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Page Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="mb-4 bg-gradient-to-r from-lime-600 to-emerald-600 leading-relaxed bg-clip-text text-5xl font-bold text-transparent dark:from-lime-400 dark:to-emerald-400">
            {t('title')}
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            {t('description')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center mb-12 flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === null 
                ? 'bg-lime-500 text-white' 
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {t('allCategories')}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-lime-500 text-white' 
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-800"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15,
                  duration: 0.4 
                }
              }}
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${blog.color} opacity-70 transition-opacity duration-500 group-hover:opacity-90 z-10`}></div>
                
                <div className="absolute top-4 left-4 z-20 flex space-x-2">
                  {blog.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-gray-900 shadow-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Blog Content */}
              <div className="flex flex-grow flex-col p-6">
                <div className="mb-2 flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {blog.date}
                </div>
                
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-lime-600 dark:group-hover:text-lime-400">
                  {blog.title}
                </h3>
                
                <p className="mb-4 flex-grow text-gray-600 dark:text-gray-300">
                  {blog.excerpt}
                </p>
                
                {/* Author Info */}
                <div className="mt-auto flex items-center">
                  <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{blog.author.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{blog.author.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Read More Link */}
              <div className="px-6 pb-6">
                <Link href={`/blog/${blog.id}`} target='_blank' className="group inline-flex items-center font-medium text-lime-600 dark:text-lime-400">
                  <span className="relative">
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      {t('readMore')}
                    </span>
                    <motion.span 
                      className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1"
                      initial={false}
                      animate={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      →
                    </motion.span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-lime-600 transition-transform duration-300 group-hover:scale-x-100 dark:bg-lime-400"></span>
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <motion.div 
          className="mt-16 flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-lime-500 hover:text-white transition-all duration-300"
            >
              {page}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPage;
'use client';

import React, { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from '@/i18n/navigation';

const LatestBlogPosts = () => {
  const t = useTranslations('latestBlogPosts');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const router = useRouter();
  
  const blogs = [
    {
      id: 1,
      image: '/assets/blog-1.png', // Replace with your actual image path
      category: t('posts.post1.category'),
      date: t('posts.post1.date'),
      title: t('posts.post1.title'),
      excerpt: t('posts.post1.excerpt'),
      author: {
        name: t('posts.post1.author.name'),
        image: '/author-1.jpg', // Replace with your actual image path
        role: t('posts.post1.author.role')
      },
      color: 'from-lime-500 to-teal-600',
      bgClass: 'bg-lime-500/10',
    },
    {
      id: 2,
      image: '/assets/blog-2.png', // Replace with your actual image path
      category: t('posts.post2.category'),
      date: t('posts.post2.date'),
      title: t('posts.post2.title'),
      excerpt: t('posts.post2.excerpt'),
      author: {
        name: t('posts.post2.author.name'),
        image: '/author-2.jpg', // Replace with your actual image path
        role: t('posts.post2.author.role')
      },
      color: 'from-blue-700 to-teal-600',
      bgClass: 'bg-blue-700/10',
    },
    {
      id: 3,
      image: '/assets/blog-3.png', // Replace with your actual image path
      category: t('posts.post3.category'),
      date: t('posts.post3.date'),
      title: t('posts.post3.title'),
      excerpt: t('posts.post3.excerpt'),
      author: {
        name: t('posts.post3.author.name'),
        image: '/author-3.jpg', // Replace with your actual image path
        role: t('posts.post3.author.role')
      },
      color: 'from-lime-500 to-teal-700',
      bgClass: 'bg-lime-500/10',
    },
    {
      id: 4,
      image: '/assets/blog-4.png', // Replace with your actual image path
      category: t('posts.post4.category'),
      date: t('posts.post4.date'),
      title: t('posts.post4.title'),
      excerpt: t('posts.post4.excerpt'),
      author: {
        name: t('posts.post4.author.name'),
        image: '/author-4.jpg', // Replace with your actual image path
        role: t('posts.post4.author.role')
      },
      color: 'from-blue-700 to-teal-600',
      bgClass: 'bg-blue-700/10',
    },
  ];

  return (
    <section suppressHydrationWarning ref={containerRef} className="relative overflow-hidden bg-gradient-to-b from-[#0a3040] to-gray-700 py-24 dark:from-gray-900 dark:to-[#0a3040]">
      {/* Animated background particles */}
      {[...Array(20)].map((_, i) => {
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const size = Math.random() * 10 + 5;
        const delay = Math.random() * 8;
        const duration = Math.random() * 10 + 15;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-lime-400 opacity-30 dark:bg-lime-500"
            style={{ 
              top, 
              left, 
              width: size, 
              height: size,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
      })}
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header section */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 inline-block"
          >
            <div className="relative inline-flex h-16 w-16 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#0a3040] dark:bg-[#0a3040]"></div>
              <div className="absolute inset-0 rounded-full border-4 border-lime-500 opacity-50"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lime-500 dark:text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
          </motion.div>
          
          <motion.h2 
            className="mb-4 bg-gradient-to-r leading-relaxed from-lime-600 to-emerald-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl dark:from-lime-400 dark:to-emerald-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {t('title')}
          </motion.h2>
          
          <motion.div
            className="mx-auto mb-2 h-1 w-24 rounded-full bg-lime-500"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
          
          <motion.p 
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-200 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {t('description')}
          </motion.p>
        </motion.div>
        
        {/* Blog posts grid - Changed to 2 columns instead of 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#0a3040]/80 shadow-lg dark:bg-[#0a3040]/80 border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15,
                  duration: 0.4 
                }
              }}
            >
              {/* Blog image with hover effect */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0  opacity-70 transition-opacity duration-500 group-hover:opacity-90 z-10`}></div>
                
                <motion.div
                  className="relative h-full w-full"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 1.2, ease: "easeOut" }
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="h-full w-full">
                    {/* Uncomment and use your actual images */}
                    <Image 
                      src={blog.image} 
                      alt={blog.title} 
                      fill
                      style={{ objectFit: 'cover' }} 
                    />
                    
                  </div>
                </motion.div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`rounded-full bg-[#0a3040] px-3 py-1 text-xs font-semibold text-gray-200 shadow-md border border-${index % 2 === 0 ? 'lime' : 'blue'}-500/30`}>
                    {blog.category}
                  </span>
                </div>
              </div>
              
              {/* Blog content */}
              <div className="flex flex-grow flex-col p-6">
                <div className="mb-2 flex items-center text-sm text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {blog.date}
                </div>
                
                <h3 className="mb-3 text-xl font-bold text-white dark:text-white transition-colors duration-300 group-hover:text-lime-500 dark:group-hover:text-lime-400">
                  {blog.title}
                </h3>
                
                <p className="mb-4 flex-grow text-gray-300 dark:text-gray-300">
                  {blog.excerpt}
                </p>
                
                {/* Author info */}
                <div className="mt-auto flex items-center">
                  <div className="mr-3 h-10 w-10 overflow-hidden rounded-full border border-gray-600">
                    <div className="h-full w-full bg-gray-700 flex items-center justify-center">
                      {/* Uncomment and use your actual author images */}
                      {/* <Image 
                        src={blog.author.image} 
                        alt={blog.author.name} 
                        width={40}
                        height={40}
                        style={{ objectFit: 'cover' }} 
                      /> */}
                      
                      {/* Placeholder - remove when you have real images */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-200 dark:text-white">{blog.author.name}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-400">{blog.author.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Read more link with improved hover animations */}
              <div className="px-6 pb-6">
                <div className="overflow-hidden">
                  <Link href={`/blog/${blog.id}`} className="group inline-flex items-center font-medium text-lime-500 dark:text-lime-400">
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
                      <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-lime-500 transition-transform duration-300 group-hover:scale-x-100 dark:bg-lime-400"></span>
                    </span>
                  </Link>
                </div>
              </div>
              
              {/* Decorative corner shapes */}
              <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden">
                <div className={`absolute -top-8 -right-8 h-16 w-16 rotate-45 bg-gradient-to-br ${blog.color} opacity-80`}></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View all blogs button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <motion.button
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-lime-500 to-teal-600 px-8 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href='blog' passHref>
            {t('viewAllButton')}
            </Link>
            <span className="absolute inset-0 -translate-x-full transform bg-white opacity-20 transition-transform duration-500 group-hover:translate-x-full"></span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import Image from 'next/image';
import { fancy, firstChoice } from '../../../public/assets';
import Link from 'next/link';

const ClientTestimonials = () => {
  const t = useTranslations('testimonials');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const testimonials = [
    {
      id: 1,
      name: t('clients.client1.name'),
      position: t('clients.client1.position'),
      company: t('clients.client1.company'),
      quote: t('clients.client1.quote'),
      avatar: '/assets/avatar-male-512.webp', // Placeholder
      rating: 5,
      bgColor: 'bg-lime-500/10',
      accentColor: 'from-lime-500 to-teal-600',
      icon: 'social-media',
      logo: '/assets/avatar-male-512.webp', // Placeholder
    },
    {
      id: 2,
      name: t('clients.client2.name'),
      position: t('clients.client2.position'),
      company: t('clients.client2.company'),
      quote: t('clients.client2.quote'),
      avatar: '/assets/avatar-male-512.webp', // Placeholder
      rating: 5,
      bgColor: 'bg-blue-700/10',
      accentColor: 'from-blue-700 to-teal-600',
      icon: 'e-commerce',
      logo: '/assets/avatar-male-512.webp', // Placeholder
    }
  ];

  // Function to get icon based on service type
  const getIcon = (iconType: any) => {
    switch (iconType) {
      case 'social-media':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        );
      case 'e-commerce':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'branding':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        );
      case 'content':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 0L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        );
    }
  };

  // Render star rating
  const renderStars = (rating: any) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index}
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section suppressHydrationWarning ref={containerRef} className="relative overflow-hidden bg-gradient-to-b from-[#0a3040] to-gray-700 py-24 dark:from-[#0a3040] dark:to-gray-900">
      {/* Animated floating shapes */}
      {[...Array(15)].map((_, i) => {
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const size = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const duration = Math.random() * 15 + 20;
        const rotate = Math.random() * 360;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-lg opacity-20 dark:opacity-10"
            style={{ 
              top, 
              left, 
              width: size, 
              height: size,
              rotate: `${rotate}deg`,
              background: i % 2 === 0 
                ? 'linear-gradient(to right, #84cc16, #0d9488)' 
                : 'linear-gradient(to right, #1d4ed8, #0d9488)'
            }}
            animate={{
              y: [0, -100, 0],
              rotate: [`${rotate}deg`, `${rotate + 180}deg`, `${rotate + 360}deg`],
              opacity: [0.1, 0.2, 0.1]
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </motion.div>
          
          <motion.h2 
            className="mb-4 bg-gradient-to-r leading-relaxed from-lime-500 to-lime-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl dark:from-lime-400 dark:to-emerald-400"
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
        
        {/* Testimonial display */}
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-12">
          {/* Main testimonial display - Left side */}
          <motion.div 
            className="mb-12 lg:mb-0 lg:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative h-full overflow-hidden rounded-2xl bg-[#0a3040] p-1 shadow-xl dark:bg-[#0a3040] border border-gray-700">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`testimonial-${activeIndex}`}
                  className="h-full rounded-xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative z-10 flex h-full flex-col">
                    {/* Testimonial header with company logo */}
                    <div className="mb-8 flex items-center justify-between">
                      <div className={`inline-flex items-center rounded-xl bg-[#0a3040] px-4 py-2 border border-${activeIndex % 2 === 0 ? 'lime' : 'blue'}-500/30`}>
                        <div className={`mr-2 rounded-full bg-gradient-to-r ${testimonials[activeIndex].accentColor} p-2 text-white`}>
                          {getIcon(testimonials[activeIndex].icon)}
                        </div>
                        <span className="font-medium text-gray-200 dark:text-gray-200">{testimonials[activeIndex].company}</span>
                      </div>
                      <div className="flex">
                        {renderStars(testimonials[activeIndex].rating)}
                      </div>
                    </div>
                    
                    {/* Testimonial quote */}
                    <div className="mb-8 flex-grow">
                      <div className="relative">
                        <svg className={`absolute -left-3 -top-3 h-10 w-10 ${activeIndex % 2 === 0 ? 'text-lime-700' : 'text-blue-700'} dark:${activeIndex % 2 === 0 ? 'text-lime-800' : 'text-blue-800'}`} fill="currentColor" viewBox="0 0 32 32">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative pl-6 text-xl font-medium italic text-gray-200 dark:text-gray-200">
                          {testimonials[activeIndex].quote}
                        </p>
                      </div>
                    </div>
                    
                    {/* Client information */}
                    <div className="mt-auto flex items-center">
                      <div>
                        <h4 className="text-lg font-bold text-white dark:text-white">
                          {testimonials[activeIndex].name}
                        </h4>
                        <p className="text-gray-300 dark:text-gray-400">
                          {testimonials[activeIndex].position}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-lime-500/10 opacity-30 dark:bg-lime-500/10"></div>
                  <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-blue-700/10 opacity-30 dark:bg-blue-700/10"></div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
          
          {/* Testimonial selector - Right side */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="space-y-4 sm:space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className={`group cursor-pointer overflow-hidden rounded-xl transition-all duration-300 ${
                    activeIndex === index 
                      ? `bg-gradient-to-r ${testimonial.accentColor} text-white shadow-lg` 
                      : `bg-[#0a3040]/80 border border-${index % 2 === 0 ? 'lime' : 'blue'}-500/30 hover:shadow-lg`
                  }`}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                >
                  <div className="flex items-center p-4">
                    
                    <div>
                      <h4 className={`font-bold ${
                        activeIndex !== index && 'text-gray-200 dark:text-white'
                      }`}>
                        {testimonial.name}
                      </h4>
                      <p className={`text-sm ${
                        activeIndex !== index ? 'text-gray-300 dark:text-gray-300' : 'text-white/90'
                      }`}>
                        {testimonial.company}
                      </p>
                      <div className="mt-1 flex">
                        {activeIndex === index ? (
                          // White stars when active
                          Array.from({ length: 5 }).map((_, i) => (
                            <svg 
                              key={i}
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-4 w-4 text-white"
                              viewBox="0 0 20 20" 
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))
                        ) : (
                          // Yellow stars when inactive
                          Array.from({ length: 5 }).map((_, i) => (
                            <svg 
                              key={i}
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-4 w-4 text-yellow-400"
                              viewBox="0 0 20 20" 
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Indicator for active testimonial */}
                  <div className={`h-1 w-full transform ${
                    activeIndex === index 
                      ? 'bg-white' 
                      : `${index % 2 === 0 ? 'bg-lime-500' : 'bg-blue-500'} scale-x-0 group-hover:scale-x-100`
                  } transition-transform duration-300 ease-in-out`}></div>
                </motion.div>
              ))}
            </div>

            {/* View all testimonials button */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.button
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-lime-500 to-teal-600 px-8 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                
              >
                <Link href='/about' passHref>
                {t('viewAllButton')}
                </Link>
                <span className="absolute inset-0 -translate-x-full transform bg-white opacity-20 transition-transform duration-500 group-hover:translate-x-full"></span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Client logos section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-white dark:text-white">
            {t('trustedByTitle')}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
               <div className="h-full flex justify-center items-center md:gap-36 gap-24 flex-col md:flex-row w-full rounded">
                  <div className="p-4 rounded-xl bg-white/10 backdrop-blur">
                    <Image src={firstChoice} alt="fancy fit logo" width={200} />
                  </div>
                  <div className="p-4 rounded-xl bg-white/10 backdrop-blur">
                    <Image src={fancy} alt="fancy fit logo" width={200} />
                  </div>
               </div>
          </div>
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <h3 className="mb-6 text-2xl font-bold text-white dark:text-white">
            {t('ctaTitle')}
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-gray-200 dark:text-gray-300">
            {t('ctaDescription')}
          </p>
          <motion.button
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-lime-500 to-teal-600 px-8 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href='/contact' passHref>
            {t('ctaButton')}
            </Link>
            <span className="absolute inset-0 -translate-x-full transform bg-white opacity-20 transition-transform duration-500 group-hover:translate-x-full"></span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
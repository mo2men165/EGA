'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';

const CoreValues = () => {
  const t = useTranslations('about');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Core values data
  const values = [
    {
      id: 'innovation',
      title: t('valueTitle1') || 'Innovation',
      description: t('valueDesc1') || 'We embrace new ideas and technologies to create cutting-edge solutions that help our clients stay ahead of the curve.',
      icon: 'bulb',
      color: 'violet',
    },
    {
      id: 'integrity',
      title: t('valueTitle2') || 'Integrity',
      description: t('valueDesc2') || 'We operate with transparency and honesty in all our interactions, building trust and long-lasting relationships.',
      icon: 'shield',
      color: 'emerald',
    },
    {
      id: 'excellence',
      title: t('valueTitle3') || 'Excellence',
      description: t('valueDesc3') || 'We strive for excellence in everything we do, setting high standards and continuously improving our skills and services.',
      icon: 'star',
      color: 'amber',
    },
    {
      id: 'collaboration',
      title: t('valueTitle4') || 'Collaboration',
      description: t('valueDesc4') || 'We work closely with our clients and each other, fostering a culture of teamwork, open communication, and shared success.',
      icon: 'users',
      color: 'blue',
    },
    {
      id: 'adaptability',
      title: t('valueTitle5') || 'Adaptability',
      description: t('valueDesc5') || 'We embrace change and remain flexible, allowing us to respond quickly to new challenges and opportunities.',
      icon: 'refresh',
      color: 'rose',
    },
    {
      id: 'client-focus',
      title: t('valueTitle6') || 'Client Focus',
      description: t('valueDesc6'),
      icon: 'heart',
      color: 'lime',
    },
  ];

  // Function to get the appropriate icon based on the value
  const getIcon = (icon: any) => {
    switch (icon) {
      case 'bulb':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'shield':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'star':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      case 'users':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'refresh':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        );
      case 'heart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
    }
  };

  return (
    <section 
      id="values"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-blue-50 to-white  dark:from-[#0a3040] dark:to-gray-900"
    >
      {/* Decorative background elements */}
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

      <div className="container relative mx-auto px-4 z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('valuesSubtitle') || 'What We Stand For'}
          </motion.span>
          
          <motion.h2 
            className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {t('valuesTitle') || 'Our Core Values'}
          </motion.h2>
          
          <motion.div
            className="mx-auto mb-6 h-1 w-24 rounded-full bg-blue-500"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          
          <motion.p 
            className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {t('valuesDescription') || 'The principles that guide our work and define our culture. These values are the foundation of everything we do and how we interact with our clients and each other.'}
          </motion.p>
        </motion.div>

        {/* Values grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              className={`group relative rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
              whileHover={{ y: -8 }}
            >
              {/* Value icon */}
              <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-${value.color}-100 text-${value.color}-600 dark:bg-${value.color}-900/30 dark:text-${value.color}-400`}>
                {getIcon(value.icon)}
              </div>
              
              {/* Value title */}
              <h3 className={`mb-4 text-xl font-bold text-gray-900 dark:text-white`}>
                {value.title}
              </h3>
              
              {/* Value description */}
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
              
              {/* Animated underline on hover */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-${value.color}-500 transition-all duration-300 group-hover:w-full`}></div>
            </motion.div>
          ))}
        </div>

        {/* Values summary */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <p className="mx-auto max-w-3xl text-lg text-gray-600 italic dark:text-gray-300">
            {t('valuesSummary') || "These values aren't just words on a page—they're embedded in our day-to-day operations and guide every decision we make. As a young agency, we're building our foundation on these principles, ensuring that we grow in the right direction."}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
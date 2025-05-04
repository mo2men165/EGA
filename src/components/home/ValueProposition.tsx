'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import Link from 'next/link';

const ValueProposition = () => {
  const t = useTranslations('valueProposition');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [activeFeature, setActiveFeature] = useState(0);
  const router = useRouter();
  
  const features = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: t('features.strategy.title'),
      description: t('features.strategy.description'),
      color: 'from-lime-500 to-teal-600',
      bgClass: 'bg-lime-500/10',
      stats: [
        { value: '95%', label: t('features.strategy.stats.satisfaction') },
        { value: '40%', label: t('features.strategy.stats.increase') },
      ]
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('features.technology.title'),
      description: t('features.technology.description'),
      color: 'from-blue-700 to-teal-600',
      bgClass: 'bg-blue-700/10',
      stats: [
        { value: '24/7', label: t('features.technology.stats.monitoring') },
        { value: '99.9%', label: t('features.technology.stats.uptime') },
      ]
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      ),
      title: t('features.personalization.title'),
      description: t('features.personalization.description'),
      color: 'from-lime-500 to-teal-700',
      bgClass: 'bg-lime-500/10',
      stats: [
        { value: '85%', label: t('features.personalization.stats.engagement') },
        { value: '3.5x', label: t('features.personalization.stats.conversion') },
      ]
    },
    {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      color: 'from-blue-700 to-teal-600', 
      bgClass: 'bg-blue-700/10',
      stats: [
        { value: '100%', label: t('features.analytics.stats.transparent') },
        { value: '27%', label: t('features.analytics.stats.improvement') },
      ]
    },
  ];
  
  const handleFeatureClick = (index: any) => {
    setActiveFeature(index);
  };

  return (
    <section suppressHydrationWarning ref={containerRef} className="relative overflow-hidden bg-gradient-to-b from-[#0a3040] to-gray-700 py-24 dark:from-[#0a3040] dark:to-gray-900">
      {/* Background particles */}
      {[...Array(20)].map((_, i) => {
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const size = Math.random() * 10 + 5;
        const delay = Math.random() * 8;
        const duration = Math.random() * 10 + 15;
        
        return (
          <motion.div
          suppressHydrationWarning
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
        
        {/* Split screen layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Feature pills and selector - Left side */}
          <motion.div 
            className="mb-12 lg:mb-0 lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className={`group cursor-pointer rounded-xl p-4 shadow-md transition-all duration-300 ${
                    activeFeature === index 
                      ? `bg-gradient-to-r ${feature.color} text-white shadow-lg` 
                      : `bg-[#0a3040]/80 hover:shadow-lg border border-lime-500/30`
                  }`}
                  onClick={() => handleFeatureClick(index)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`rounded-lg p-2 ${
                      activeFeature === index 
                        ? 'bg-white/20' 
                        : 'bg-[#0a3040] dark:bg-[#0a3040] border border-lime-500/50'
                    }`}>
                      <div className={
                        activeFeature === index 
                          ? 'text-white' 
                          : 'text-lime-500 dark:text-lime-400'
                      }>
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${
                        activeFeature !== index && 'text-gray-200 dark:text-white'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`mt-1 text-sm ${
                        activeFeature !== index && 'text-gray-300 dark:text-gray-300'
                      }`}>
                        {feature.description.substring(0, 80)}...
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Feature details - Right side */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="relative h-full overflow-hidden rounded-2xl bg-[#0a3040] p-1 shadow-xl dark:bg-[#0a3040] border border-lime-500/30">
              <AnimatePresence mode="wait">
                {features[activeFeature] && (
                  <motion.div
                    key={`feature-detail-${activeFeature}`}
                    className={`h-full rounded-xl p-8`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative z-10">
                      {/* Feature icon */}
                      <div className={`mb-6 inline-block rounded-xl bg-gradient-to-br ${features[activeFeature].color} p-4 text-white`}>
                        {features[activeFeature].icon}
                      </div>
                      
                      {/* Feature details */}
                      <h3 className="mb-4 text-3xl font-bold text-white dark:text-white">
                        {features[activeFeature].title}
                      </h3>
                      <p className="mb-8 text-lg text-gray-200 dark:text-gray-300">
                        {features[activeFeature].description}
                      </p>
                      
                      {/* Feature stats */}
                      <div className="grid grid-cols-2 gap-4">
                        {features[activeFeature].stats.map((stat, i) => (
                          <div key={i} className="overflow-hidden rounded-lg bg-[#0a3040]/80 p-4 text-center dark:bg-[#0a3040]/80 border border-lime-500/30">
                            <div className="text-3xl font-black text-lime-500 dark:text-lime-400">
                              {stat.value}
                            </div>
                            <div className="mt-1 text-sm font-medium text-gray-200 dark:text-gray-300">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="mt-8 text-center">
                        <motion.button
                          className={`group relative overflow-hidden rounded-xl bg-gradient-to-r ${features[activeFeature].color} px-8 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        
                        >
                          <Link href='/services' passHref>
                          {t('learnMoreButton')}
                          </Link>
                          <span className="absolute inset-0 -translate-x-full transform bg-white opacity-20 transition-transform duration-500 group-hover:translate-x-full"></span>
                        </motion.button>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-lime-500/10 dark:bg-lime-500/10"></div>
                    <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-lime-500/10 dark:bg-lime-500/10"></div>
                    </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
        
        {/* Call to action section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h3 className="mb-6 text-2xl font-bold text-white dark:text-white">
            {t('ctaTitle')}
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-gray-200 dark:text-gray-300">
            {t('ctaDescription')}
          </p>
          <motion.button
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-lime-500 to-teal-600 px-8 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
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

export default ValueProposition;
'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ServicesHero: React.FC = () => {
  const t = useTranslations('servicesPage.hero');

  // Smooth scroll function for navigation
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-b container from-gray-50 via-gray-50 to-white pt-46 py-24 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* More visible and dynamic background shapes */}
        <motion.div 
          className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-lime-500 opacity-20 blur-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [0.8, 1.2, 0.8],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-emerald-500 opacity-20 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.1, 0.25, 0.1],
            scale: [0.9, 1.3, 0.9],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Additional floating elements */}
        <motion.div 
          className="absolute left-0 top-1/3 h-64 w-64 rounded-full bg-blue-400 opacity-10 blur-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            scale: [0.7, 1.1, 0.7],
            x: [0, 40, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Particle-like floating dots */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute h-2 w-2 rounded-full bg-lime-400 dark:bg-lime-500"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0.3 }}
              animate={{ 
                y: [0, Math.random() * 30 - 15, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 3 + Math.random() * 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Enhanced Pre-title with animation */}
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block rounded-full bg-lime-100 px-5 py-2 text-sm font-semibold text-lime-600 dark:bg-lime-900/30 dark:text-lime-400"
              whileHover={{ scale: 1.05, backgroundColor: "#d9f99d" }}
            >
              {t('subtitle')}
            </motion.span>
          </motion.div>
          
          {/* Enhanced Main Title with text effects */}
          <motion.h1 
            className="mb-8 text-center text-4xl font-bold md:text-5xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span 
              className="block text-gray-900 dark:text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              {t('titleLine1')}
            </motion.span>
            <motion.span 
              className="mt-3 block bg-gradient-to-r from-lime-500 via-emerald-500 to-teal-500 leading-relaxed bg-clip-text text-transparent dark:from-lime-400 dark:via-emerald-400 dark:to-teal-300"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {t('titleLine2')}
            </motion.span>
          </motion.h1>
          
          {/* Enhanced Description with better typography */}
          <motion.p 
            className="mb-10 max-w-2xl text-center text-lg leading-relaxed text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('description')}
          </motion.p>
          
          {/* Enhanced CTA Buttons with better hover effects */}
          <motion.div 
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              onClick={() => scrollToSection('services-list')}
              className="rounded-lg bg-gradient-to-r from-lime-500 to-emerald-600 px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:from-lime-600 hover:to-emerald-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t('primaryCta')}
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="rounded-lg border-2 border-gray-300 bg-white/80 backdrop-blur-sm px-8 py-4 text-base font-medium text-gray-700 shadow-lg transition-all hover:bg-white hover:border-lime-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:border-lime-700 dark:focus:ring-offset-gray-900"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t('secondaryCta')}
            </motion.button>
          </motion.div>
        </div>
        
        {/* Enhanced Decorative Icon Grid with staggered animations */}
        <motion.div 
          className="mt-20 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[...Array(5)].map((_, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.8 + (index * 0.1),
                ease: "easeOut" 
              }}
              whileHover={{ 
                y: -12,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
            >
              <motion.div 
                className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:shadow-gray-900/30 dark:hover:bg-gray-700"
                whileHover={{ 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <motion.div 
                  className="text-lime-500"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* You can replace these with your actual service icons */}
                  {index === 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                      <path d="M7 10v4M12 10v4M17 10v4" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  )}
                  {index === 4 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  )}
                </motion.div>
              </motion.div>
              <motion.p 
                className="mt-3 text-center text-sm font-medium text-gray-600 dark:text-gray-400"
                whileHover={{ color: "#65a30d" }}
              >
                {t(`serviceIcons.${index}`)}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: [0.5, 1, 0.5], 
          y: [0, 10, 0] 
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button 
          onClick={() => scrollToSection('services-list')} 
          className="text-gray-500 dark:text-gray-400 focus:outline-none"
          aria-label="Scroll to services"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </button>
      </motion.div>
    </section>
  );
};

export default ServicesHero;
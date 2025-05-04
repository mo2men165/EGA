'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const BrandingHero: React.FC = () => {
  const t = useTranslations('brandingPage.hero');

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
    <section className="relative min-h-[90vh] pt-46 bg-gradient-to-b from-lime-50 via-lime-50 to-white pb-16 md:pb-24 flex items-center dark:from-lime-950 dark:via-gray-900 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -right-20 -top-20 h-64 md:h-96 w-64 md:w-96 rounded-full bg-lime-500 opacity-10 blur-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            scale: [0.8, 1.2, 0.8],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 h-64 md:h-96 w-64 md:w-96 rounded-full bg-teal-600 opacity-10 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            scale: [0.9, 1.3, 0.9],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Particle-like floating elements */}
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
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 w-full">
            {/* Service Category Badge */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="inline-block rounded-full bg-lime-100 px-5 py-2 text-sm font-semibold text-lime-600 dark:bg-lime-900/30 dark:text-lime-400"
                whileHover={{ scale: 1.05, backgroundColor: "#ecfccb" }}
              >
                {t('subtitle')}
              </motion.span>
            </motion.div>
            
            {/* Main Title */}
            <motion.h1 
              className="mb-6 text-3xl font-bold md:text-5xl lg:text-6xl"
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
                className="mt-2 md:mt-3 block bg-gradient-to-r from-lime-500 via-lime-600 to-teal-600 bg-clip-text text-transparent dark:from-lime-400 dark:via-lime-500 dark:to-teal-400"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {t('titleLine2')}
              </motion.span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="mb-8 max-w-xl text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('description')}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('process')}
                className="rounded-lg bg-gradient-to-r from-lime-500 to-teal-600 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium text-white shadow-lg transition-all hover:from-lime-600 hover:to-teal-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href='/contact' passHref>
                {t('primaryCta')}
                </Link>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('pricing')}
                className="rounded-lg border-2 border-gray-300 bg-white/80 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium text-gray-700 shadow-lg transition-all hover:bg-white hover:border-lime-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:border-lime-700 dark:focus:ring-offset-gray-900"
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href='/projects' passHref>
                {t('secondaryCta')}
                </Link>
              </motion.button>
            </motion.div>

            {/* Brand Stats */}
            <motion.div 
              className="mt-8 md:mt-12 grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[0, 1, 2].map((index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                  whileHover={{ y: -5 }}
                >
                  <motion.span
                    className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    {t(`stats.${index}.value`)}
                  </motion.span>
                  <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    {t(`stats.${index}.label`)}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image/Animation - Made responsive */}
          <motion.div 
            className="flex-1 w-full mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
              {/* Brand Identity Visual Concept */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* This would be your actual brand identity showcase */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Logo Showcase */}
                  <motion.div 
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: [0.8, 1.1, 1],
                      opacity: 1,
                    }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  >
                    <div className="w-32 h-32 rounded-full bg-lime-600 flex items-center justify-center shadow-lg">
                      <span className="text-4xl font-bold text-white">B&I</span>
                    </div>
                    <motion.div 
                      className="mt-4 text-lg md:text-xl font-bold text-gray-800 dark:text-white"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      BRAND NAME
                    </motion.div>
                  </motion.div>

                  {/* Brand Elements (Floating around the logo) - Responsive positioning */}
                  {[...Array(5)].map((_, i) => {
                    // Adjust radius based on screen size using responsive values
                    const radiusBase = 120; // Base radius for all screens
                    
                    // Calculate the angle for each element (in radians)
                    const angle = (i * 72) * (Math.PI / 180);
                    
                    // Calculate x and y positions
                    const x = Math.cos(angle) * radiusBase;
                    const y = Math.sin(angle) * radiusBase;
                    
                    return (
                      <motion.div
                        key={i}
                        className="absolute hidden sm:block" // Hide on very small screens
                        style={{ 
                          left: `calc(50% + ${x}px)`, 
                          top: `calc(50% + ${y}px)`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          rotate: [0, 10, 0, -10, 0],
                        }}
                        transition={{ 
                          delay: 0.7 + (i * 0.1), 
                          duration: 0.5,
                          rotate: {
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5
                          }
                        }}
                      >
                        <div className={`w-16 h-16 flex items-center justify-center rounded-lg shadow-md bg-white dark:bg-gray-700 text-lime-600 dark:text-lime-400`}>
                          {/* Different brand elements */}
                          {i === 0 && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                            </svg>
                          )}
                          {i === 1 && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            </svg>
                          )}
                          {i === 2 && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                              <circle cx="12" cy="12" r="10"></circle>
                              <circle cx="12" cy="12" r="6"></circle>
                              <circle cx="12" cy="12" r="2"></circle>
                            </svg>
                          )}
                          {i === 3 && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          )}
                          {i === 4 && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                              <circle cx="8.5" cy="8.5" r="1.5"></circle>
                              <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* Mobile-friendly alternatives for brand elements (for very small screens) */}
                  <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-3 sm:hidden">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-10 h-10 flex items-center justify-center rounded-lg shadow-md bg-white dark:bg-gray-700 text-lime-600 dark:text-lime-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + (i * 0.2), duration: 0.5 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {i === 0 && <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>}
                          {i === 1 && <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>}
                          {i === 2 && <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>}
                        </svg>
                      </motion.div>
                    ))}
                  </div>

                  {/* Brand Color Palette */}
                  <motion.div 
                    className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    {['bg-lime-600', 'bg-lime-500', 'bg-teal-600', 'bg-gray-800', 'bg-gray-200'].map((color, index) => (
                      <motion.div 
                        key={index} 
                        className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${color} shadow-md`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: [0.5, 1, 0.5], 
          y: [0, 10, 0] 
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button 
          onClick={() => scrollToSection('overview')} 
          className="text-gray-500 dark:text-gray-400 focus:outline-none"
          aria-label="Scroll to overview"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            className="md:w-8 md:h-8"
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

export default BrandingHero;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const SoftwareHero: React.FC = () => {
  const t = useTranslations('softwarePage.hero');

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
    <section className="relative min-h-[90vh] pt-46 bg-gradient-to-b from-rose-50 via-rose-50 to-white pb-24 flex items-center dark:from-rose-950 dark:via-gray-900 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-rose-500 opacity-10 blur-3xl"
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
          className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-pink-500 opacity-10 blur-3xl"
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
              className="absolute h-2 w-2 rounded-full bg-rose-400 dark:bg-rose-500"
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
                className="inline-block rounded-full bg-rose-100 px-5 py-2 text-sm font-semibold text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"
                whileHover={{ scale: 1.05 }}
              >
                {t('subtitle')}
              </motion.span>
            </motion.div>
            
            {/* Main Title */}
            <motion.h1 
              className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
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
                className="mt-2 sm:mt-3 block bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 bg-clip-text text-transparent dark:from-rose-400 dark:via-pink-400 dark:to-rose-300"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {t('titleLine2')}
              </motion.span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="mb-8 max-w-xl text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300"
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
                className="rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white shadow-lg transition-all hover:from-rose-600 hover:to-pink-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
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
                className="rounded-lg border-2 border-gray-300 bg-white/80 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-700 shadow-lg transition-all hover:bg-white hover:border-rose-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:border-rose-700 dark:focus:ring-offset-gray-900"
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
              className="mt-8 sm:mt-12 grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3"
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
                    className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    {t(`stats.${index}.value`)}
                  </motion.span>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {t(`stats.${index}.label`)}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image/Animation - Updated for Software & Web Solutions - Now responsive */}
          <motion.div 
            className="flex-1 w-full mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
              {/* Software & Web Solutions Visual */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Browser Window Mockup */}
                <div className="relative w-11/12 sm:w-4/5 h-4/5 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                  {/* Browser Header */}
                  <div className="bg-gray-200 dark:bg-gray-600 h-6 sm:h-8 flex items-center px-2 sm:px-4 space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 sm:ml-4 flex-1 bg-white dark:bg-gray-800 rounded-md h-3 sm:h-5"></div>
                  </div>
                  
                  {/* Browser Content */}
                  <div className="p-2 sm:p-4 h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] flex flex-col">
                    {/* Code Editor Section */}
                    <motion.div 
                      className="flex-1 bg-gray-800 rounded-lg p-2 sm:p-3 text-left mb-2 sm:mb-3 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      {/* Code Lines */}
                      <motion.div 
                        className="font-mono text-[9px] xs:text-[10px] sm:text-xs text-white"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 1, duration: 0.3 }}
                      >
                        <div className="flex">
                          <span className="text-gray-500 w-4 sm:w-6">1</span>
                          <span className="text-rose-400">import</span>
                          <span className="text-white"> React </span>
                          <span className="text-rose-400">from</span>
                          <span className="text-green-400"> 'react'</span><span>;</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-4 sm:w-6">2</span>
                          <span></span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-4 sm:w-6">3</span>
                          <span className="text-rose-400">const</span>
                          <span className="text-blue-400"> App </span>
                          <span className="text-white">= () </span>
                          <span className="text-rose-400">{'=> {'}</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-4 sm:w-6">4</span>
                          <span className="pl-2 sm:pl-4 text-rose-400">return</span>
                          <span className="text-white"> (</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-4 sm:w-6">5</span>
                          <span className="pl-3 sm:pl-6 text-blue-300">{'<div>'}</span>
                        </div>
                        <motion.div 
                          className="flex"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.3, duration: 0.3 }}
                        >
                          <span className="text-gray-500 w-4 sm:w-6">6</span>
                          <span className="pl-4 sm:pl-8 text-blue-300">{'<h1 '}</span>
                          <span className="text-green-300">className</span>
                          <span className="text-white">=</span>
                          <span className="text-yellow-300">"title"</span>
                          <span className="text-blue-300">{'>'}</span>
                          <span className="text-white">Web Solutions</span>
                          <span className="text-blue-300">{'</h1>'}</span>
                        </motion.div>
                        <motion.div 
                          className="flex"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5, duration: 0.3 }}
                        >
                          <span className="text-gray-500 w-4 sm:w-6">7</span>
                          <span className="pl-4 sm:pl-8 text-blue-300">{'<p>'}</span>
                          <span className="text-white">Modern solutions</span>
                          <span className="text-blue-300">{'</p>'}</span>
                        </motion.div>
                        <div className="flex">
                          <span className="text-gray-500 w-4 sm:w-6">8</span>
                          <span className="pl-3 sm:pl-6 text-blue-300">{'</div>'}</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-4 sm:w-6">9</span>
                          <span className="pl-2 sm:pl-4 text-white">);</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-4 sm:w-6">10</span>
                          <span className="text-rose-400">{'}; '}</span>
                        </div>
                      </motion.div>
                    </motion.div>
                    
                    {/* Preview Section */}
                    <motion.div 
                      className="h-1/3 bg-white dark:bg-gray-900 rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      <motion.h3 
                        className="text-base sm:text-lg font-bold text-gray-900 dark:text-white"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.7, duration: 0.3 }}
                      >
                        Web Solutions
                      </motion.h3>
                      <motion.p 
                        className="text-xs sm:text-sm text-gray-600 dark:text-gray-300"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.9, duration: 0.3 }}
                      >
                        Modern solutions for modern problems
                      </motion.p>
                    </motion.div>
                  </div>
                </div>

                {/* Floating Tech Icons - Uncomment if needed, but adjusted for mobile */}
                {/* {[
                  { icon: 'React', angle: 0, distance: 180 },
                  { icon: 'Node', angle: 72, distance: 180 },
                  { icon: 'Database', angle: 144, distance: 180 },
                  { icon: 'Cloud', angle: 216, distance: 180 },
                  { icon: 'Mobile', angle: 288, distance: 180 }
                ].map((item, i) => {
                  const angle = (item.angle) * (Math.PI / 180);
                  // Adjust distance based on screen size
                  const distance = window.innerWidth < 640 ? 120 : 180;
                  const x = Math.cos(angle) * distance;
                  const y = Math.sin(angle) * distance;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute hidden sm:block"
                      style={{ left: 'calc(50% + ' + x + 'px)', top: 'calc(50% + ' + y + 'px)' }}
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
                      <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-lg shadow-md bg-white dark:bg-gray-700 text-rose-600 dark:text-rose-400">
                        {/* Icon code would go here */}
                      {/* </div>  
                    </motion.div>
                  );
                })} */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
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
            className="sm:w-32 sm:h-32"
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

export default SoftwareHero;
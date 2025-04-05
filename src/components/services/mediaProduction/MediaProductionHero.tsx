'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const MediaProductionHero: React.FC = () => {
  const t = useTranslations('mediaProductionPage.hero');

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
    <section className="relative min-h-[90vh] pt-46 bg-gradient-to-b from-lime-50 via-lime-50 to-white pb-24 flex items-center dark:from-lime-950 dark:via-gray-900 dark:to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-lime-500 opacity-10 blur-3xl"
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
          className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-emerald-500 opacity-10 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            scale: [0.9, 1.3, 0.9],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
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
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full">
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
                className="mt-3 block bg-gradient-to-r from-lime-500 via-emerald-500 to-emerald-600 bg-clip-text text-transparent dark:from-lime-400 dark:via-emerald-400 dark:to-emerald-300"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {t('titleLine2')}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="mb-8 max-w-xl text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('description')}
            </motion.p>
            
            <motion.div 
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('process')}
                className="rounded-lg bg-gradient-to-r from-lime-500 to-emerald-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white shadow-lg transition-all hover:from-lime-600 hover:to-emerald-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
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
                className="rounded-lg border-2 border-gray-300 bg-white/80 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-700 shadow-lg transition-all hover:bg-white hover:border-lime-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:border-lime-700 dark:focus:ring-offset-gray-900"
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

          {/* Responsive visualization for media production */}
          <motion.div 
            className="flex-1 w-full mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
              <motion.div 
                className="absolute inset-0 bg-gray-900 rounded-xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Video production scene - with responsive adjustments */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Video camera setup - center aligned on mobile */}
                  <motion.div
                    className="absolute transform scale-75 sm:scale-90 md:scale-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    {/* Tripod */}
                    <motion.div 
                      className="relative"
                      animate={{ rotate: [0, 1, -1, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {/* Camera body */}
                      <motion.div className="w-40 h-24 rounded-md bg-gray-700 shadow-lg relative">
                        {/* Camera lens */}
                        <motion.div 
                          className="absolute -left-8 top-6 w-16 h-12 rounded-full bg-gray-800 border-4 border-gray-600"
                          animate={{ 
                            scaleX: [1, 1.1, 1],
                          }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-lime-500"></div>
                          </div>
                        </motion.div>
                        
                        {/* Camera viewfinder */}
                        <div className="absolute right-2 top-2 w-12 h-8 rounded-sm bg-gray-800"></div>
                        
                        {/* Recording light */}
                        <motion.div 
                          className="absolute right-6 top-12 w-3 h-3 rounded-full bg-red-500"
                          animate={{ 
                            opacity: [1, 0.5, 1],
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        ></motion.div>
                      </motion.div>
                      
                      {/* Tripod legs */}
                      <div className="absolute top-24 left-12 border-l-8 border-l-gray-600 h-48 transform -rotate-12"></div>
                      <div className="absolute top-24 left-20 border-l-8 border-l-gray-600 h-48"></div>
                      <div className="absolute top-24 left-28 border-l-8 border-l-gray-600 h-48 transform rotate-12"></div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Scene elements - hide on small screens */}
                  <motion.div 
                    className="absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 hidden sm:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                  >
                    {/* Studio lights */}
                    <motion.div
                      className="absolute -left-32 sm:-left-48 -top-16"
                      animate={{ 
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="w-24 h-24 rounded-full bg-yellow-100 opacity-20 blur-lg"></div>
                      <div className="w-16 h-16 bg-gray-600 relative">
                        <motion.div 
                          className="absolute -top-2 -left-2 w-20 h-20 rounded-full bg-yellow-300 blur-md opacity-50"
                          animate={{ 
                            opacity: [0.5, 0.7, 0.5],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        ></motion.div>
                      </div>
                      <div className="w-4 h-48 bg-gray-600"></div>
                    </motion.div>
                    
                    <motion.div
                      className="absolute left-32 sm:left-48 -top-16"
                      animate={{ 
                        rotate: [0, -5, 0, 5, 0],
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="w-24 h-24 rounded-full bg-yellow-100 opacity-20 blur-lg"></div>
                      <div className="w-16 h-16 bg-gray-600 relative">
                        <motion.div 
                          className="absolute -top-2 -left-2 w-20 h-20 rounded-full bg-yellow-300 blur-md opacity-50"
                          animate={{ 
                            opacity: [0.5, 0.7, 0.5],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                        ></motion.div>
                      </div>
                      <div className="w-4 h-48 bg-gray-600"></div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Film strip at bottom */}
                  <motion.div 
                    className="absolute bottom-10 h-12 sm:h-16 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    <motion.div 
                      className="flex h-full"
                      animate={{ x: "-20%" }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 12,
                        ease: "linear"
                      }}
                    >
                      {[...Array(12)].map((_, index) => (
                        <div key={index} className="h-full flex-none flex flex-col items-center">
                          <div className="h-full w-16 sm:w-20 bg-gray-800 mx-1 rounded-sm flex items-center justify-center overflow-hidden">
                            <div className={`w-12 sm:w-16 h-8 sm:h-12 rounded-sm ${index % 5 === 0 ? 'bg-lime-600' : index % 5 === 1 ? 'bg-emerald-500' : index % 5 === 2 ? 'bg-teal-500' : index % 5 === 3 ? 'bg-blue-500' : 'bg-indigo-500'}`}></div>
                          </div>
                          <div className="flex w-full justify-between px-3 mt-1">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                  
                  {/* Sound equipment - hidden on smallest screens */}
                  <motion.div 
                    className="absolute right-12 top-1/3 hidden sm:block"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  >
                    <motion.div 
                      className="w-8 h-32 bg-gray-600 rounded-t-lg"
                      animate={{ 
                        rotateZ: [0, 2, 0, -2, 0],
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="w-full h-8 bg-gray-800 rounded-t-lg flex items-center justify-center">
                        <motion.div 
                          className="w-4 h-4 rounded-full bg-lime-500"
                          animate={{ 
                            opacity: [1, 0.6, 1],
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        ></motion.div>
                      </div>
                      <div className="w-4 h-48 bg-gray-600 absolute top-32 left-2"></div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Control panel/slider - smaller and repositioned on mobile */}
                  <motion.div 
                    className="absolute bottom-36 sm:bottom-36 right-6 sm:right-14 transform scale-75 sm:scale-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                  >
                    <div className="w-32 h-16 bg-gray-700 rounded-md p-2">
                      <div className="flex h-3 items-center mb-2">
                        <motion.div 
                          className="w-1 h-1 rounded-full bg-red-500 mr-2"
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        ></motion.div>
                        <div className="h-1 flex-grow bg-gray-600 rounded-full"></div>
                      </div>
                      <div className="flex h-4 items-center mb-2">
                        <div className="w-2 h-2 rounded-full bg-lime-500 mr-2"></div>
                        <div className="h-2 flex-grow bg-gray-600 rounded-full relative">
                          <motion.div 
                            className="absolute h-4 w-4 bg-white rounded-full top-1/2 transform -translate-y-1/2"
                            style={{ left: '30%' }}
                            animate={{ left: ["30%", "70%", "30%"] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                          ></motion.div>
                        </div>
                      </div>
                      <div className="flex h-3 items-center">
                        <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                        <div className="h-1 flex-grow bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Media production logo - responsive positioning */}
                  <motion.div
                    className="absolute bottom-4 sm:bottom-8 left-4 sm:left-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  >
                    <div className="text-sm sm:text-xl font-bold text-lime-500">MEDIA PROD</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

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

export default MediaProductionHero;
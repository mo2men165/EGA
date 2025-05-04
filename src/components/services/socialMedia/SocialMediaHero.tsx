'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const SocialMediaHero: React.FC = () => {
  const t = useTranslations('socialMediaPage.hero');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[90vh] pt-46 bg-gradient-to-b from-blue-50 via-blue-50 to-white pb-24 flex items-center dark:from-blue-950 dark:via-gray-900 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-500 opacity-10 blur-3xl"
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            scale: [0.8, 1.2, 0.8],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500 opacity-10 blur-3xl"
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            scale: [0.9, 1.3, 0.9],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Floating elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-blue-400 dark:bg-blue-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, Math.random() * 30 - 15, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 3 + Math.random() * 5, 
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 w-full">
            <motion.div className="mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <motion.span 
                className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                whileHover={{ scale: 1.05 }}
              >
                {t('subtitle')}
              </motion.span>
            </motion.div>
            
            <motion.h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <motion.span className="block text-gray-900 dark:text-white">
                {t('titleLine1')}
              </motion.span>
              <motion.span className="mt-2 sm:mt-3 block bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-blue-300">
                {t('titleLine2')}
              </motion.span>
            </motion.h1>
            
            <motion.p className="mb-8 max-w-xl text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {t('description')}
            </motion.p>
            
            <motion.div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <motion.button
                onClick={() => scrollToSection('process')}
                className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white shadow-lg hover:from-blue-600 hover:to-cyan-700"
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
                className="rounded-lg border-2 border-gray-300 bg-white/80 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-700 shadow-lg hover:bg-white hover:border-blue-300 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:border-blue-700"
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

            <motion.div className="mt-8 sm:mt-12 grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3">
              {[0, 1, 2].map((index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  <motion.span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {t(`stats.${index}.value`)}
                  </motion.span>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {t(`stats.${index}.label`)}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div className="flex-1 w-full mt-8 md:mt-0">
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
              <motion.div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-2xl">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Social Media Phone Mock-up - Responsive sizing */}
                  <motion.div 
                    className="absolute transform scale-75 sm:scale-90 md:scale-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {/* Phone frame */}
                    <div className="relative w-60 h-[400px] bg-gray-900 rounded-3xl border-4 border-gray-800 shadow-2xl overflow-hidden">
                      {/* Screen content */}
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
                        {/* App header */}
                        <div className="h-12 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4">
                          <div className="w-24 h-6 bg-blue-500 rounded-full" />
                          <div className="w-6 h-6 rounded-full bg-blue-500" />
                        </div>
                        
                        {/* Content feed */}
                        <div className="p-2 space-y-3">
                          {[...Array(4)].map((_, i) => (
                            <motion.div 
                              key={i}
                              className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-3"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7 + (i * 0.2) }}
                            >
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="w-8 h-8 rounded-full bg-blue-200 dark:bg-blue-600" />
                                <div className="flex-1">
                                  <div className="w-20 h-3 bg-gray-300 dark:bg-gray-500 rounded-full" />
                                  <div className="w-12 h-2 bg-gray-200 dark:bg-gray-600 rounded-full mt-1" />
                                </div>
                              </div>
                              <div className="w-full h-24 bg-gray-100 dark:bg-gray-600 rounded-lg mb-2" />
                              <div className="flex justify-between">
                                <div className="flex space-x-3">
                                  <div className="w-6 h-6 rounded-full bg-red-400 dark:bg-red-500" />
                                  <div className="w-6 h-6 rounded-full bg-blue-400 dark:bg-blue-500" />
                                  <div className="w-6 h-6 rounded-full bg-green-400 dark:bg-green-500" />
                                </div>
                                <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-500" />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Phone notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-xl" />
                    </div>
                  </motion.div>
                  
                  {/* Social metrics and engagement floating around - Responsive positioning */}
                  {[
                    { icon: '❤️', label: '+1.2K', color: 'bg-red-500' },
                    { icon: '💬', label: '899', color: 'bg-blue-500' },
                    { icon: '🔁', label: '433', color: 'bg-green-500' },
                    { icon: '📊', label: '+45%', color: 'bg-purple-500' },
                    { icon: '👥', label: '+2K', color: 'bg-yellow-500' },
                  ].map((item, i) => {
                    // Calculate positions with responsive radius
                    const angle = (i * 72) * (Math.PI / 180);
                    const radius = 160; // This will be scaled with the phone
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    return (
                      <motion.div
                        key={i}
                        className="absolute z-10 hidden sm:block" // Hide on smallest screens
                        style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + (i * 0.2) }}
                      >
                        <motion.div 
                          className={`flex items-center space-x-1 px-3 py-2 rounded-lg shadow-lg ${item.color} bg-opacity-90 text-white`}
                          whileHover={{ scale: 1.1 }}
                          animate={{ 
                            y: [0, -8, 0],
                          }}
                          transition={{ 
                            duration: 3 + Math.random() * 2, 
                            repeat: Infinity,
                            delay: Math.random() * 2
                          }}
                        >
                          <span className="text-lg">{item.icon}</span>
                          <span className="text-xs sm:text-sm font-bold">{item.label}</span>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                  
                  {/* Alternate metrics display for small screens */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 sm:hidden">
                    {[
                      { icon: '❤️', color: 'bg-red-500' },
                      { icon: '💬', color: 'bg-blue-500' },
                      { icon: '🔁', color: 'bg-green-500' },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className={`flex items-center justify-center w-8 h-8 rounded-full shadow-md ${item.color} text-white`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + (i * 0.2) }}
                      >
                        <span className="text-sm">{item.icon}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          opacity: [0.5, 1, 0.5], 
          y: [0, 10, 0] 
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
      </motion.div>
    </section>
  );
};

export default SocialMediaHero;
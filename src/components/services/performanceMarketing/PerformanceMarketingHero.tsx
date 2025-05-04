'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const PerformanceMarketingHero: React.FC = () => {
  const t = useTranslations('performanceMarketingPage.hero');

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
          className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-teal-600 opacity-10 blur-3xl"
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
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
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
                className="mt-2 sm:mt-3 block bg-gradient-to-r from-lime-500 to-teal-600 bg-clip-text text-transparent dark:from-lime-400 dark:to-teal-500"
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
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('process')}
                className="rounded-lg bg-gradient-to-r from-lime-500 to-teal-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white shadow-lg transition-all hover:from-lime-600 hover:to-teal-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
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

          <motion.div 
            className="flex-1 w-full mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
              <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Performance Marketing Dashboard Visualization */}
                <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-6">
                  <motion.div 
                    className="w-full h-full bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {/* Dashboard Header */}
                    <div className="bg-lime-500 dark:bg-lime-600 h-8 sm:h-12 w-full flex items-center px-2 sm:px-4">
                      <motion.div 
                        className="h-2 sm:h-3 w-2 sm:w-3 rounded-full bg-red-500 mr-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 }}
                      />
                      <motion.div 
                        className="h-2 sm:h-3 w-2 sm:w-3 rounded-full bg-yellow-500 mr-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 }}
                      />
                      <motion.div 
                        className="h-2 sm:h-3 w-2 sm:w-3 rounded-full bg-green-500"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8 }}
                      />
                      <motion.div 
                        className="text-white text-xs sm:text-base font-medium mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                      >
                        Performance Dashboard
                      </motion.div>
                    </div>
                    
                    {/* Dashboard Content */}
                    <div className="p-2 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 h-[calc(100%-2rem)] sm:h-[calc(100%-3rem)]">
                      {/* Chart 1 - Growth Line Chart */}
                      <motion.div 
                        className="bg-white dark:bg-gray-800 rounded-lg p-2 sm:p-3 shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.0 }}
                      >
                        <div className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-1 sm:mb-2">Conversion Rate</div>
                        <div className="h-16 sm:h-24 flex items-end space-x-1">
                          {[35, 45, 38, 52, 48, 65, 71].map((height, i) => (
                            <motion.div 
                              key={i}
                              className="bg-teal-500 dark:bg-teal-600 rounded-t w-full"
                              style={{ height: `${height}%` }}
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ delay: 1.1 + (i * 0.1), duration: 0.5 }}
                            />
                          ))}
                        </div>
                        <motion.div 
                          className="h-1 w-full bg-lime-100 dark:bg-gray-700 mt-1 rounded-full overflow-hidden"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: 1.8, duration: 0.6 }}
                        >
                          <div className="h-full w-3/4 bg-lime-400 dark:bg-lime-500 rounded-full"></div>
                        </motion.div>
                      </motion.div>
                      
                      {/* Chart 2 - Ad Performance Metrics */}
                      <motion.div 
                        className="bg-white dark:bg-gray-800 rounded-lg p-2 sm:p-3 shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 }}
                      >
                        <div className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-1 sm:mb-2">Ad Performance</div>
                        <div className="space-y-1 sm:space-y-2">
                          {[
                            { label: "CTR", value: 65 },
                            { label: "CPC", value: 40 },
                            { label: "ROAS", value: 85 }
                          ].map((metric, i) => (
                            <motion.div key={i} className="space-y-1">
                              <div className="flex justify-between text-xs">
                                <span>{metric.label}</span>
                                <span>{metric.value}%</span>
                              </div>
                              <motion.div 
                                className="h-1 sm:h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1.3 + (i * 0.2), duration: 0.5 }}
                              >
                                <motion.div 
                                  className="h-full bg-lime-500 dark:bg-lime-600 rounded-full"
                                  style={{ width: `${metric.value}%` }}
                                  initial={{ width: "0%" }}
                                  animate={{ width: `${metric.value}%` }}
                                  transition={{ delay: 1.4 + (i * 0.2), duration: 0.8 }}
                                />
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      
                      {/* Chart 3 - Channel Breakdown */}
                      <motion.div 
                        className="bg-white dark:bg-gray-800 rounded-lg p-2 sm:p-3 shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4 }}
                      >
                        <div className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-1 sm:mb-2">Channel Breakdown</div>
                        <div className="flex items-center justify-center h-16 sm:h-24">
                          <div className="relative h-14 w-14 sm:h-20 sm:w-20">
                            {[
                              { color: "bg-teal-500", percent: 45, delay: 1.6 },
                              { color: "bg-lime-400", percent: 30, delay: 1.7 },
                              { color: "bg-green-300", percent: 15, delay: 1.8 },
                              { color: "bg-teal-300", percent: 10, delay: 1.9 }
                            ].map((slice, i) => (
                              <motion.div
                                key={i}
                                className={`absolute inset-0 ${slice.color} rounded-full`}
                                style={{
                                  clipPath: `polygon(50% 50%, 50% 0%, ${100 - (i * 25)}% 0%, ${50 - (i * 12.5)}% ${50 - (i * 12.5)}%)`
                                }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1, rotate: i * 90 }}
                                transition={{ delay: slice.delay, duration: 0.5 }}
                              />
                            ))}
                            <motion.div 
                              className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 2.0 }}
                            />
                          </div>
                        </div>
                        <div className="flex justify-around text-[9px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1 sm:mt-2">
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }}>
                            <div className="h-2 w-2 bg-teal-500 rounded-full inline-block mr-1"></div>
                            <span>PPC</span>
                          </motion.div>
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
                            <div className="h-2 w-2 bg-lime-400 rounded-full inline-block mr-1"></div>
                            <span>Social</span>
                          </motion.div>
                        </div>
                      </motion.div>
                      
                      {/* Chart 4 - Metrics Grid */}
                      <motion.div 
                        className="bg-white dark:bg-gray-800 rounded-lg p-2 sm:p-3 shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.6 }}
                      >
                        <div className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-1 sm:mb-2">Key Metrics</div>
                        <div className="grid grid-cols-2 gap-1 sm:gap-2">
                          {[
                            { label: "ROI", value: "248%", icon: "↗" },
                            { label: "CPL", value: "$12.40", icon: "↘" },
                            { label: "CAC", value: "$42.30", icon: "↔" },
                            { label: "CLV", value: "$215", icon: "↗" }
                          ].map((metric, i) => (
                            <motion.div 
                              key={i}
                              className="bg-gray-50 dark:bg-gray-700 p-1 sm:p-2 rounded"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.7 + (i * 0.1) }}
                            >
                              <div className="flex justify-between items-center">
                                <span className="text-[9px] sm:text-xs text-gray-500 dark:text-gray-400">{metric.label}</span>
                                <span className="text-lime-500 dark:text-lime-400">{metric.icon}</span>
                              </div>
                              <div className="text-xs sm:text-sm font-medium">{metric.value}</div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Floating Notification */}
                  <motion.div
                    className="absolute top-12 sm:top-16 right-4 sm:right-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 sm:p-3 flex items-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: [0, 1, 1, 0],
                      x: [20, 0, 0, -20]
                    }}
                    transition={{ 
                      delay: 2.5,
                      duration: 4,
                      times: [0, 0.1, 0.9, 1],
                      repeat: Infinity,
                      repeatDelay: 6
                    }}
                  >
                    <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2">
                      <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-[9px] sm:text-xs">
                      <div className="font-medium">Campaign Goal Met!</div>
                      <div className="text-gray-500 dark:text-gray-400">+24% above target</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMarketingHero;
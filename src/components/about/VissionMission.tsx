'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const VisionMission: React.FC = () => {
  const t = useTranslations('about');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      id="vision"
      ref={sectionRef}
      className="relative py-24 bg-white dark:bg-gray-900 overflow-x-hidden"
    >
      {/* Background decoration - constrained within viewport */}
      <div className="absolute inset-0 pointer-events-none max-w-screen mx-auto overflow-hidden">
        <svg 
          className="absolute top-0 right-0 w-80 h-80 -mr-24 -mt-24 text-lime-100 dark:text-lime-900/20" 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="currentColor" d="M42.8,-73.2C54.9,-67.7,63.9,-56.1,69.9,-43.5C75.9,-30.8,78.9,-17.1,79.3,-3.3C79.7,10.4,77.5,24.2,70.8,35.3C64,46.4,52.9,54.8,40.8,61.9C28.8,69,14.4,74.7,0.6,73.8C-13.3,72.9,-26.5,65.3,-39.9,57.5C-53.3,49.7,-66.9,41.8,-73.5,30C-80.2,18.2,-80,2.7,-76.3,-11.1C-72.7,-24.9,-65.7,-37,-55.4,-42.7C-45.2,-48.5,-31.8,-47.9,-20.6,-53.5C-9.5,-59.2,-0.5,-71.1,11.1,-77.1C22.7,-83.1,30.7,-78.7,42.8,-73.2Z" transform="translate(100 100)" />
        </svg>
        <svg 
          className="absolute bottom-0 left-0 w-80 h-80 -ml-24 -mb-24 text-blue-100 dark:text-blue-900/20" 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="currentColor" d="M45.4,-78.2C58.1,-71.3,67.3,-58.3,71.6,-44.2C75.9,-30.1,75.3,-15.1,74.9,-0.2C74.5,14.6,74.4,29.2,68.2,41C62,52.8,49.8,61.8,36.3,70C22.9,78.2,8.2,85.5,-7.4,87.6C-23,89.6,-39.5,86.4,-52.4,77.6C-65.2,68.9,-74.5,54.5,-80.1,39.3C-85.7,24.1,-87.7,8,-85.2,-6.8C-82.7,-21.6,-75.8,-35.2,-66.4,-47.2C-57,-59.1,-45.1,-69.6,-32.1,-76.4C-19.1,-83.3,-4.7,-86.6,9.5,-85.1C23.8,-83.7,32.7,-85.1,45.4,-78.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container relative mx-auto px-4 z-10 max-w-[100vw]">
        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-24 px-4">
          {/* Left Image Area */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md w-full">
              <motion.div
                className="relative z-10 rounded-2xl bg-white p-2 shadow-xl dark:bg-gray-800 overflow-hidden w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image 
                  src="/assets/vision-image.png" 
                  alt="Our Vision"
                  width={500}
                  height={400}
                  className="rounded-xl h-auto w-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
              
              {/* Decoration */}
              <div className="absolute bottom-0 right-0 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-2xl border-2 border-lime-500 -z-10 translate-y-2 translate-x-2"></div>

              {/* Floating element */}
              <motion.div
                className="absolute left-4 bottom-20 z-20 bg-white rounded-xl shadow-lg p-4 dark:bg-gray-800 max-w-[80%]"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-100 text-lime-600 dark:bg-lime-900/30 dark:text-lime-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <p className="font-bold text-gray-900 dark:text-white">{t('visionLabel')}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content Area */}
          <motion.div 
            className="lg:w-1/2 w-full px-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-400"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('visionSubtitle')}
            </motion.span>

            <motion.h2 
              className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {t('visionTitle')}
            </motion.h2>

            <motion.div
              className="mb-6 h-1 w-24 rounded-full bg-lime-500"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>

            <motion.p 
              className="mb-6 text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {t('visionText1')}
            </motion.p>

            <motion.p 
              className="mb-8 text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {t('visionText2')}
            </motion.p>

            {/* Vision points */}
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              {[
                { text: t('visionPoint1'), icon: 'star' },
                { text: t('visionPoint2'), icon: 'handshake' },
                { text: t('visionPoint3'), icon: 'chart' }
              ].map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-600 dark:bg-lime-900/30 dark:text-lime-400">
                    {point.icon === 'star' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    )}
                    {point.icon === 'handshake' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                      </svg>
                    )}
                    {point.icon === 'chart' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{point.text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-center px-4">
          {/* Left Content Area */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('missionSubtitle')}
            </motion.span>

            <motion.h2 
              className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {t('missionTitle')}
            </motion.h2>

            <motion.div
              className="mb-6 h-1 w-24 rounded-full bg-blue-500"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>

            <motion.p 
              className="mb-6 text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {t('missionText1')}
            </motion.p>

            <motion.p 
              className="mb-8 text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {t('missionText2')}
            </motion.p>

            {/* Mission approach */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              {[
                { title: t('approachTitle1'), text: t('approachText1'), icon: 'users' },
                { title: t('approachTitle2'), text: t('approachText2'), icon: 'lightbulb' },
                { title: t('approachTitle3'), text: t('approachText3'), icon: 'shield' },
                { title: t('approachTitle4'), text: t('approachText4'), icon: 'target' }
              ].map((approach, index) => (
                <div key={index} className="rounded-xl bg-white p-4 shadow-md dark:bg-gray-800">
                  <div className="mb-2 flex items-center">
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                      {approach.icon === 'users' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                      {approach.icon === 'lightbulb' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      )}
                      {approach.icon === 'shield' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                      {approach.icon === 'target' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{approach.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{approach.text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Area */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md w-full">
              <motion.div
                className="relative z-10 rounded-2xl bg-white p-2 shadow-xl dark:bg-gray-800 overflow-hidden w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image 
                  src="/assets/mission-image.jpg" 
                  alt="Our Mission"
                  width={500}
                  height={400}
                  className="rounded-xl h-auto w-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
              
              {/* Decoration */}
              <div className="absolute bottom-0 left-0 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-2xl border-2 border-blue-500 -z-10 translate-y-2 -translate-x-2"></div>

              {/* Floating element */}
              <motion.div
                className="absolute right-4 bottom-20 z-20 bg-white rounded-xl shadow-lg p-4 dark:bg-gray-800 max-w-[80%]"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="font-bold text-gray-900 dark:text-white">{t('missionLabel')}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
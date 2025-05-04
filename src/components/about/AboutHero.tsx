'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { logo } from '../../../public/assets';

const AboutHero = () => {
  const t = useTranslations('about');
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.2 });

  return (
    <section 
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-24 pt-50 dark:from-gray-900 dark:to-[#0a3040]"
    >
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
              background: i % 3 === 0 
                ? 'linear-gradient(to right, #60a5fa, #34d399)' 
                : i % 3 === 1 
                  ? 'linear-gradient(to right, #f97316, #ec4899)' 
                  : 'linear-gradient(to right, #8b5cf6, #3b82f6)'
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

      <div className="container w-[95%] relative z-10 mx-auto px-4">
        <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:gap-12">
          {/* Left content area */}
          <motion.div 
            className="mt-12 lg:mt-0 lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.span 
              className="mb-4 inline-block rounded-full bg-lime-100 px-4 py-1 text-sm font-medium text-lime-800 dark:bg-lime-900/30 dark:text-lime-400"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('heroSubtitle') || 'Our Story'}
            </motion.span>

            <motion.h1 
              className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="block">
                {t('heroTitleFirstLine') || 'Transforming Ideas'}
              </span>
              <span className="bg-gradient-to-r from-lime-500 to-emerald-600 bg-clip-text text-transparent dark:from-lime-400 dark:to-emerald-500">
                {t('heroTitleSecondLine') || 'Into Reality'}
              </span>
            </motion.h1>

            <motion.div
              className="mb-8 h-1 w-24 rounded-full bg-lime-500"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>

            <motion.p 
              className="mb-8 text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {t('heroDescription')}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <motion.a 
                href="#vision"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-lime-500 to-emerald-600 px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('heroButtonPrimary')}
                <span className="absolute inset-0 -translate-x-full transform bg-white opacity-20 transition-transform duration-500 group-hover:translate-x-full"></span>
              </motion.a>
              <motion.a 
                href="#contact"
                className="group rounded-xl border-2 border-lime-500 bg-transparent px-6 py-3 font-bold text-lime-600 transition-all duration-300 hover:bg-lime-50 dark:text-lime-400 dark:hover:bg-gray-800/50"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('heroButtonSecondary')}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right image area */}
          <motion.div 
            className="relative lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                className="relative text-center h-full w-full max-w-lg rounded-2xl bg-white p-2 shadow-xl dark:bg-gray-700"
                initial={{ y: 20 }}
                animate={isInView ? { y: 0 } : { y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="overflow-hidden rounded-xl">
                  {/* Replace with your actual image */}
                  <Image
                    src={logo}
                    alt="EGA"
                    width={400}
                    height={400}
                    className="h-auto w-full transform object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Floating decoration elements */}
              <motion.div
                className="absolute -bottom-6 -left-6 z-10 rounded-lg bg-gradient-to-r from-lime-400 to-emerald-500 p-4 shadow-lg dark:from-lime-500 dark:to-emerald-600"
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -20, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-600 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <p className="text-sm font-medium">{t('innovativeText') || 'Innovative'}</p>
                    <p className="text-xl font-bold">{t('solutionsText') || 'Solutions'}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute right-24 top-1/4 z-10 rounded-lg bg-white p-3 shadow-lg dark:bg-gray-800"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="text-gray-900 dark:text-white">
                    <p className="text-sm font-bold">{t('qualityLabel') || 'Quality'}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 right-12 z-10 rounded-lg bg-white p-3 shadow-lg dark:bg-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-gray-900 dark:text-white">
                    <p className="text-sm font-bold">{t('clientFocusedLabel') || 'Client-Focused'}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div 
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {[
            { label: t('statsProjects') || 'Projects', value: '30+', icon: 'folder', color: 'lime' },
            { label: t('statsClients') || 'Happy Clients', value: '25+', icon: 'user', color: 'emerald' },
            { label: t('statsServices') || 'Services', value: '5+', icon: 'chart', color: 'blue' },
            { label: t('statsExpertise') || 'Expertise Areas', value: '10+', icon: 'lightbulb', color: 'purple' },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              whileHover={{ y: -8 }}
            >
              <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-${stat.color}-100 text-${stat.color}-600 dark:bg-${stat.color}-900/30 dark:text-${stat.color}-400`}>
                {stat.icon === 'folder' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                )}
                {stat.icon === 'user' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {stat.icon === 'chart' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                )}
                {stat.icon === 'lightbulb' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )}
              </div>
              <h3 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300">{stat.label}</p>
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-${stat.color}-500 transition-all duration-300 group-hover:w-full`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
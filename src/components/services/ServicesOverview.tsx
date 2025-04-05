'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ServicesOverview: React.FC = () => {
  const t = useTranslations('servicesPage.overview');

  const statItems = [
    {
      value: t('stats.projectsCompleted.value'),
      label: t('stats.projectsCompleted.label'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    },
    {
      value: t('stats.clientsServed.value'),
      label: t('stats.clientsServed.label'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      value: t('stats.satisfaction.value'),
      label: t('stats.satisfaction.label'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>
      )
    },
    {
      value: t('stats.expertiseYears.value'),
      label: t('stats.expertiseYears.label'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    }
  ];

  // Scroll handler for smooth navigation
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900" id="services-overview">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute right-0 top-0 h-64 w-64 text-lime-200 opacity-20 dark:text-lime-700" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M39.9,-51.2C54.3,-39.9,70.2,-31.4,73.4,-19.8C76.6,-8.1,67.1,6.7,59.5,21.9C52,37,46.4,52.5,35.3,62.5C24.3,72.5,7.7,77.1,-6.6,74.1C-20.9,71.1,-32.8,60.6,-41.7,49.1C-50.5,37.7,-56.3,25.3,-61.4,11.3C-66.5,-2.8,-71.1,-18.5,-65.7,-29.8C-60.3,-41.1,-45,-48,-31.4,-59.4C-17.8,-70.8,-5.9,-86.7,3.5,-85.9C12.9,-85.1,25.5,-62.6,39.9,-51.2Z" transform="translate(100 100)" />
        </svg>
        
        <svg className="absolute left-0 bottom-0 h-80 w-80 text-emerald-200 opacity-20 dark:text-emerald-800" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.7,-57.2C59,-47.3,63.6,-29.7,68.3,-11.1C73,7.4,77.8,26.8,70.5,38.5C63.3,50.2,44,54.1,26.8,61C9.6,67.9,-5.5,77.8,-22.3,77.4C-39.2,77,-57.8,66.4,-67.3,50.9C-76.7,35.5,-77,15.3,-73.8,-3C-70.6,-21.3,-63.9,-37.7,-51.5,-47.7C-39.1,-57.8,-21.1,-61.4,-1.8,-59.3C17.4,-57.2,36.4,-67.1,47.7,-57.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left side: Text content */}
          <motion.div 
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.span 
              className="mb-3 inline-block rounded-full bg-lime-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-lime-600 dark:bg-lime-900/30 dark:text-lime-400"
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "#dcfce7" }}
            >
              {t('subtitle')}
            </motion.span>
            
            <motion.h2 
              className="mb-6 text-3xl font-bold text-gray-900 md:text-5xl dark:text-white"
              variants={itemVariants}
            >
              <span className="block">{t('title').split(' ').slice(0, 3).join(' ')}</span>
              <span className="block mt-2 bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent dark:from-lime-400 dark:to-emerald-400">
                {t('title').split(' ').slice(3).join(' ')}
              </span>
            </motion.h2>
            
            <motion.p 
              className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              {t('description1')}
            </motion.p>
            
            <motion.div 
              className="relative mb-10 pl-4 border-l-4 border-lime-500"
              variants={itemVariants}
            >
              <p className="italic text-lg text-gray-700 dark:text-gray-200">
                {t('description2')}
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.button 
                onClick={() => scrollToSection('services-list')}
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-lime-500 to-emerald-600 px-6 py-4 text-base font-medium text-white transition-all hover:from-lime-600 hover:to-emerald-700 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {t('exploreButton')}
                <motion.svg 
                  className="ml-2 h-5 w-5" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </motion.svg>
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right side: Stats */}
          <div>
            <motion.div 
              className="grid grid-cols-2 gap-6 sm:gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
            >
              {statItems.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="rounded-2xl bg-white p-6 shadow-lg transition-all dark:bg-gray-700/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 10 }
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.3 + (index * 0.15) 
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div 
                    className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-lime-400 to-emerald-500 p-3 text-white shadow-md dark:from-lime-500 dark:to-emerald-600"
                    whileHover={{ 
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <motion.h3 
                    className="mb-2 text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.15) }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 font-medium dark:text-gray-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (index * 0.15) }}
                    viewport={{ once: true }}
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
            
            
          </div>
        </div>
      </div>
      
      {/* Added decorative divider */}
      <div className="w-full overflow-hidden mt-16">
        <svg className="w-full h-16 text-gray-50 dark:text-gray-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default ServicesOverview;
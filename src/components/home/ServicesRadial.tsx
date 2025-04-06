'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import Link from 'next/link';

const ServicesRadial: React.FC = () => {
  const t = useTranslations('servicesOverview');
  const [activeService, setActiveService] = useState<number | null>(1); 
  const router = useRouter()
  
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: t('services.branding.title'),
      description: t('services.branding.description'),
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-600 dark:text-purple-400',
      link: '/services/branding'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
          <path d="M7 10v4M12 10v4M17 10v4" />
        </svg>
      ),
      title: t('services.mediaProduction.title'),
      description: t('services.mediaProduction.description'),
      color: 'from-lime-500 to-emerald-600',
      textColor: 'text-lime-600 dark:text-lime-400',
      link: '/services/media-production'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: t('services.softwareWeb.title'),
      description: t('services.softwareWeb.description'),
      color: 'from-rose-500 to-pink-600',
      textColor: 'text-rose-600 dark:text-rose-400',
      link: '/services/web-solutions'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      title: t('services.socialMediaMarketing.title'),
      description: t('services.socialMediaMarketing.description'),
      color: 'from-blue-500 to-cyan-600',
      textColor: 'text-blue-600 dark:text-blue-400',
      link: '/services/social-media'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: t('services.performanceMarketing.title'),
      description: t('services.performanceMarketing.description'),
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-600 dark:text-amber-400',
      link: '/services/performance-marketing'
    },
  ];

  return (
    <section suppressHydrationWarning className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-lime-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t('tagline')}
          </motion.span>
          <motion.h2 
            className="relative mb-6 leading-relaxed bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl dark:from-lime-400 dark:to-emerald-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('title')}
            <motion.span 
              className="absolute -bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 transform rounded-full bg-lime-500"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            ></motion.span>
          </motion.h2>
          <motion.p 
            className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('description')}
          </motion.p>
        </motion.div>
        
        {/* Side-by-side layout */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-16">
          {/* Radial Services - Left Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative h-[400px] w-[400px] mx-auto">
              {/* Center circle */}
              <motion.div 
                className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg dark:bg-gray-800"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20, 
                  delay: 0.2 
                }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 dark:text-white">Our</h3>
                  <p className="text-xl font-bold text-lime-500">Services</p>
                </div>
              </motion.div>
              
              {/* Service nodes arranged in a circle */}
              {services.map((service, index) => {
                const angle = (index * (360 / services.length)) * (Math.PI / 180);
                const radius = 160; // Distance from center
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <React.Fragment key={index}>
                    {/* Connection line */}
                    <motion.div 
                      className={`absolute left-1/2 top-1/2 h-px w-28 -translate-x-[1px] -translate-y-1/2 bg-gray-200 dark:bg-gray-700`}
                      style={{ 
                        transformOrigin: "0 50%",
                        rotate: `${(index * (360 / services.length))}deg`,
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    
                    {/* Service node */}
                    <motion.div
                    suppressHydrationWarning
                      className="absolute left-1/2 top-1/2 z-20"
                      style={{ 
                        x: x,
                        y: y,
                        translateX: "-50%",
                        translateY: "-50%"
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 20, 
                        delay: 0.7 + (index * 0.1)
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`group flex h-16 w-16 sm:h-20 sm:w-20 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 ${activeService === index ? 'ring-2 ring-lime-500 ring-offset-2 dark:ring-offset-gray-900' : ''}`}
                        onClick={() => setActiveService(index)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className={`transition-colors duration-300 ${service.textColor} group-hover:text-lime-500`}>
                          {service.icon}
                        </div>
                      </motion.div>
                    </motion.div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          
          {/* Service Details - Right Side */}
          <div className="lg:w-1/2">
            <AnimatePresence mode="wait">
              {activeService !== null && (
                <motion.div
                  key={`service-details-${activeService}`}
                  className="w-full rounded-2xl p-1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 25 
                  }}
                >
                  <div className={`rounded-2xl bg-gradient-to-br ${services[activeService].color} p-8 text-white shadow-lg min-h-[300px] flex flex-col`}>
                    <div className="mb-6 flex items-center justify-center">
                      <div className="rounded-full bg-white/20 p-4">
                        {services[activeService].icon}
                      </div>
                    </div>
                    <h3 className="mb-4 text-center text-2xl font-bold">
                      {services[activeService].title}
                    </h3>
                    <p className="text-center text-lg text-white/90 flex-grow mb-6">
                      {services[activeService].description}
                    </p>
                    <div className="mt-auto text-center">
                      <button className="rounded-full border border-white/80 px-6 py-2 text-base font-medium transition-colors hover:bg-white hover:text-lime-600 cursor-pointer"
                      onClick={() => router.push(`${services[activeService].link}`)}>
                        <Link href={services[activeService].link} passHref>
                        {t(`learnMore`)}
                        </Link>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/services"
            className="group inline-flex items-center font-medium text-lime-600 transition-all hover:text-lime-700 dark:text-lime-400 dark:hover:text-lime-300"
            whileHover={{ x: 5 }}
          >
            {t('viewAllServices')} 
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesRadial;
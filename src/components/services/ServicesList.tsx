'use client';

import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ServicesList: React.FC = () => {
  const t = useTranslations('servicesPage.servicesList');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>('description');
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Service data with added detailed information
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
      detailedDescription: t('services.branding.detailedDescription'),
      process: [
        t('services.branding.process.0'),
        t('services.branding.process.1'),
        t('services.branding.process.2'),
        t('services.branding.process.3')
      ],
      benefits: [
        t('services.branding.benefits.0'),
        t('services.branding.benefits.1'),
        t('services.branding.benefits.2')
      ],
      metrics: [
        { label: t('services.branding.metrics.0.label'), value: t('services.branding.metrics.0.value') },
        { label: t('services.branding.metrics.1.label'), value: t('services.branding.metrics.1.value') },
        { label: t('services.branding.metrics.2.label'), value: t('services.branding.metrics.2.value') }
      ],
      features: ['services.branding.features.0', 'services.branding.features.1', 'services.branding.features.2', 'services.branding.features.3'],
      color: 'from-purple-500 to-indigo-600',
      lightColor: 'bg-purple-50',
      textColor: 'text-purple-600 dark:text-purple-400',
      darkTextColor: 'text-purple-700',
      borderColor: 'border-purple-200',
      hoverBorderColor: 'hover:border-purple-300'
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
      detailedDescription: t('services.mediaProduction.detailedDescription'),
      process: [
        t('services.mediaProduction.process.0'),
        t('services.mediaProduction.process.1'),
        t('services.mediaProduction.process.2'),
        t('services.mediaProduction.process.3')
      ],
      benefits: [
        t('services.mediaProduction.benefits.0'),
        t('services.mediaProduction.benefits.1'),
        t('services.mediaProduction.benefits.2')
      ],
      metrics: [
        { label: t('services.mediaProduction.metrics.0.label'), value: t('services.mediaProduction.metrics.0.value') },
        { label: t('services.mediaProduction.metrics.1.label'), value: t('services.mediaProduction.metrics.1.value') },
        { label: t('services.mediaProduction.metrics.2.label'), value: t('services.mediaProduction.metrics.2.value') }
      ],
      features: ['services.mediaProduction.features.0', 'services.mediaProduction.features.1', 'services.mediaProduction.features.2', 'services.mediaProduction.features.3'],
      color: 'from-lime-500 to-emerald-600',
      lightColor: 'bg-lime-50',
      textColor: 'text-lime-600 dark:text-lime-400',
      darkTextColor: 'text-lime-700',
      borderColor: 'border-lime-200',
      hoverBorderColor: 'hover:border-lime-300'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: t('services.softwareWeb.title'),
      description: t('services.softwareWeb.description'),
      detailedDescription: t('services.softwareWeb.detailedDescription'),
      process: [
        t('services.softwareWeb.process.0'),
        t('services.softwareWeb.process.1'),
        t('services.softwareWeb.process.2'),
        t('services.softwareWeb.process.3')
      ],
      benefits: [
        t('services.softwareWeb.benefits.0'),
        t('services.softwareWeb.benefits.1'),
        t('services.softwareWeb.benefits.2')
      ],
      metrics: [
        { label: t('services.softwareWeb.metrics.0.label'), value: t('services.softwareWeb.metrics.0.value') },
        { label: t('services.softwareWeb.metrics.1.label'), value: t('services.softwareWeb.metrics.1.value') },
        { label: t('services.softwareWeb.metrics.2.label'), value: t('services.softwareWeb.metrics.2.value') }
      ],
      features: ['services.softwareWeb.features.0', 'services.softwareWeb.features.1', 'services.softwareWeb.features.2', 'services.softwareWeb.features.3'],
      color: 'from-rose-500 to-pink-600',
      lightColor: 'bg-rose-50',
      textColor: 'text-rose-600 dark:text-rose-400',
      darkTextColor: 'text-rose-700',
      borderColor: 'border-rose-200',
      hoverBorderColor: 'hover:border-rose-300'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      title: t('services.socialMediaMarketing.title'),
      description: t('services.socialMediaMarketing.description'),
      detailedDescription: t('services.socialMediaMarketing.detailedDescription'),
      process: [
        t('services.socialMediaMarketing.process.0'),
        t('services.socialMediaMarketing.process.1'),
        t('services.socialMediaMarketing.process.2'),
        t('services.socialMediaMarketing.process.3')
      ],
      benefits: [
        t('services.socialMediaMarketing.benefits.0'),
        t('services.socialMediaMarketing.benefits.1'),
        t('services.socialMediaMarketing.benefits.2')
      ],
      metrics: [
        { label: t('services.socialMediaMarketing.metrics.0.label'), value: t('services.socialMediaMarketing.metrics.0.value') },
        { label: t('services.socialMediaMarketing.metrics.1.label'), value: t('services.socialMediaMarketing.metrics.1.value') },
        { label: t('services.socialMediaMarketing.metrics.2.label'), value: t('services.socialMediaMarketing.metrics.2.value') }
      ],
      features: ['services.socialMediaMarketing.features.0', 'services.socialMediaMarketing.features.1', 'services.socialMediaMarketing.features.2', 'services.socialMediaMarketing.features.3'],
      color: 'from-blue-500 to-cyan-600',
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-600 dark:text-blue-400',
      darkTextColor: 'text-blue-700',
      borderColor: 'border-blue-200',
      hoverBorderColor: 'hover:border-blue-300'
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
      detailedDescription: t('services.performanceMarketing.detailedDescription'),
      process: [
        t('services.performanceMarketing.process.0'),
        t('services.performanceMarketing.process.1'),
        t('services.performanceMarketing.process.2'),
        t('services.performanceMarketing.process.3')
      ],
      benefits: [
        t('services.performanceMarketing.benefits.0'),
        t('services.performanceMarketing.benefits.1'),
        t('services.performanceMarketing.benefits.2')
      ],
      metrics: [
        { label: t('services.performanceMarketing.metrics.0.label'), value: t('services.performanceMarketing.metrics.0.value') },
        { label: t('services.performanceMarketing.metrics.1.label'), value: t('services.performanceMarketing.metrics.1.value') },
        { label: t('services.performanceMarketing.metrics.2.label'), value: t('services.performanceMarketing.metrics.2.value') }
      ],
      features: ['services.performanceMarketing.features.0', 'services.performanceMarketing.features.1', 'services.performanceMarketing.features.2', 'services.performanceMarketing.features.3'],
      color: 'from-amber-500 to-orange-600',
      lightColor: 'bg-amber-50',
      textColor: 'text-amber-600 dark:text-amber-400',
      darkTextColor: 'text-amber-700',
      borderColor: 'border-amber-200',
      hoverBorderColor: 'hover:border-amber-300'
    },
  ];

  const handleCardClick = useCallback((index: number) => {
    // If clicking the same card that's already expanded, collapse it
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      // Reset active tab when expanding a new card
      setActiveTab('description');
      setExpandedCard(index);
      
      // Auto-scroll to expanded card after a small delay for animation to start
      setTimeout(() => {
        cardsRef.current[index]?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 100);
    }
  }, [expandedCard]);

  // Staggered card entrance animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Allow keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(index);
    }
  };

  const handleTabChange = (tab: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveTab(tab);
  };

  // Render detailed content based on active tab
  const renderTabContent = (service: any) => {
    switch (activeTab) {
      case 'description':
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {service.detailedDescription}
            </p>
          </motion.div>
        );
      case 'process':
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <ol className="space-y-4">
              {service.process.map((step: string, idx: number) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex"
                >
                  <div className={`mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${service.color} text-white font-bold text-sm`}>
                    {idx + 1}
                  </div>
                  <div className="pt-1">
                    <p className="text-gray-700 dark:text-gray-300">{step}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        );
      case 'benefits':
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <ul className="space-y-3">
              {service.benefits.map((benefit: string, idx: number) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex items-start"
                >
                  <svg className={`mr-3 mt-1 h-5 w-5 flex-shrink-0 ${service.textColor}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        );
      case 'metrics':
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-4 grid gap-4 sm:grid-cols-3"
          >
            {service.metrics.map((metric: { label: string, value: string }, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * idx }}
                className={`p-4 rounded-lg ${service.lightColor} dark:bg-opacity-10 flex flex-col items-center text-center`}
              >
                <p className={`text-2xl font-bold ${service.textColor}`}>{metric.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" id="services-list">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span 
            className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t('subtitle')}
          </motion.span>
          <motion.h2 
            className="relative mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('title')}
            <motion.span 
              className="absolute -bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-lime-500 to-emerald-500"
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
        
        {/* Services Cards Grid */}
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className={`group relative overflow-hidden rounded-xl border ${service.borderColor} ${service.hoverBorderColor} bg-white p-6 transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 ${
              expandedCard === index 
                ? 'shadow-xl md:col-span-2 lg:col-span-3 transform scale-[1.01] z-10' 
                : 'hover:scale-[1.02]'
            }`}
            variants={cardVariants}
            onClick={() => handleCardClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={0}
            role="button"
            aria-expanded={expandedCard === index}
            aria-controls={`service-content-${index}`}
          >          
              {/* Decorative elements */}
              <div className={`absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-3xl transition-all duration-300 group-hover:opacity-20`}></div>
              <div className="absolute -bottom-24 -left-24 h-40 w-40 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 opacity-30 blur-2xl dark:from-gray-700 dark:to-gray-800 dark:opacity-20"></div>
              
              <AnimatePresence mode="wait">
                {expandedCard === index ? (
                  <motion.div
                    key={`expanded-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col"
                    id={`service-content-${index}`}
                  >
                    <div className="grid gap-8 md:grid-cols-3">
                      <div className="md:col-span-1">
                        <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${service.lightColor} ${service.textColor} shadow-sm dark:bg-opacity-10`}>
                          {service.icon}
                        </div>
                        <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                          {service.title}
                        </h3>
                        <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="flex space-x-2 mb-6">
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedCard(null);
                            }}
                            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {t('collapseButton')}
                          </motion.button>
                          
                          <motion.a
                            href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`inline-flex items-center rounded-lg bg-gradient-to-r ${service.color} px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {t('learnMoreButton')}
                            <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </motion.a>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        {/* Tabbed navigation */}
                        <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
                          <nav className="flex space-x-2">
                            {['description', 'process', 'benefits', 'metrics'].map((tab) => (
                              <button
                                key={tab}
                                onClick={(e) => handleTabChange(tab, e)}
                                className={`px-4 py-2 text-sm font-medium transition-all focus:outline-none ${
                                  activeTab === tab
                                    ? `${service.textColor} border-b-2 border-current`
                                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                                }`}
                              >
                                {t(`tabs.${tab}`)}
                              </button>
                            ))}
                          </nav>
                        </div>
                        
                        {/* Tab content */}
                        <AnimatePresence mode="wait">
                          {renderTabContent(service)}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`collapsed-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-full flex-col"
                  >
                    <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${service.lightColor} ${service.textColor} shadow-sm transition-transform duration-300 group-hover:scale-110 dark:bg-opacity-10`}>
                      {service.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-gray-800 dark:text-white dark:group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
                    <motion.div
                      className={`mt-auto self-start rounded-lg bg-gradient-to-r ${service.color} px-5 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 group-hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t('expandButton')}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;
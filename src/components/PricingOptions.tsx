'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const PricingOptions: React.FC = () => {
  const t = useTranslations('servicesPage.pricing');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

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

  // Pricing plans data
  const pricingPlans = [
    {
      name: t('plans.essential.name'),
      description: t('plans.essential.description'),
      price: billingCycle === 'monthly' ? t('plans.essential.monthlyPrice') : t('plans.essential.yearlyPrice'),
      features: [
        t('plans.essential.features.feature1'),
        t('plans.essential.features.feature2'),
        t('plans.essential.features.feature3'),
        t('plans.essential.features.feature4')
      ],
      cta: t('plans.essential.cta'),
      popular: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      name: t('plans.professional.name'),
      description: t('plans.professional.description'),
      price: billingCycle === 'monthly' ? t('plans.professional.monthlyPrice') : t('plans.professional.yearlyPrice'),
      features: [
        t('plans.professional.features.feature1'),
        t('plans.professional.features.feature2'),
        t('plans.professional.features.feature3'),
        t('plans.professional.features.feature4'),
        t('plans.professional.features.feature5')
      ],
      cta: t('plans.professional.cta'),
      popular: true,
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
      name: t('plans.enterprise.name'),
      description: t('plans.enterprise.description'),
      price: t('plans.enterprise.price'),
      features: [
        t('plans.enterprise.features.feature1'),
        t('plans.enterprise.features.feature2'),
        t('plans.enterprise.features.feature3'),
        t('plans.enterprise.features.feature4'),
        t('plans.enterprise.features.feature5'),
        t('plans.enterprise.features.feature6')
      ],
      cta: t('plans.enterprise.cta'),
      popular: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" id="pricing-options">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute left-0 top-0 h-64 w-64 text-emerald-200 opacity-20 dark:text-emerald-700" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M39.9,-51.2C54.3,-39.9,70.2,-31.4,73.4,-19.8C76.6,-8.1,67.1,6.7,59.5,21.9C52,37,46.4,52.5,35.3,62.5C24.3,72.5,7.7,77.1,-6.6,74.1C-20.9,71.1,-32.8,60.6,-41.7,49.1C-50.5,37.7,-56.3,25.3,-61.4,11.3C-66.5,-2.8,-71.1,-18.5,-65.7,-29.8C-60.3,-41.1,-45,-48,-31.4,-59.4C-17.8,-70.8,-5.9,-86.7,3.5,-85.9C12.9,-85.1,25.5,-62.6,39.9,-51.2Z" transform="translate(100 100)" />
        </svg>
        
        <svg className="absolute right-0 bottom-0 h-80 w-80 text-lime-200 opacity-20 dark:text-lime-800" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.7,-57.2C59,-47.3,63.6,-29.7,68.3,-11.1C73,7.4,77.8,26.8,70.5,38.5C63.3,50.2,44,54.1,26.8,61C9.6,67.9,-5.5,77.8,-22.3,77.4C-39.2,77,-57.8,66.4,-67.3,50.9C-76.7,35.5,-77,15.3,-73.8,-3C-70.6,-21.3,-63.9,-37.7,-51.5,-47.7C-39.1,-57.8,-21.1,-61.4,-1.8,-59.3C17.4,-57.2,36.4,-67.1,47.7,-57.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
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
            <span className="block">{t('title').split(' ').slice(0, 2).join(' ')}</span>
            <span className="block mt-2 bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent dark:from-lime-400 dark:to-emerald-400">
              {t('title').split(' ').slice(2).join(' ')}
            </span>
          </motion.h2>
          
          <motion.p 
            className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300"
            variants={itemVariants}
          >
            {t('description')}
          </motion.p>

          {/* Billing toggle */}
          <motion.div 
            className="mt-8 flex justify-center items-center space-x-4"
            variants={itemVariants}
          >
            <span className={`text-base font-medium ${billingCycle === 'monthly' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              {t('monthlyBilling')}
            </span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${billingCycle === 'yearly' ? 'bg-gradient-to-r from-lime-500 to-emerald-500 dark:from-lime-600 dark:to-emerald-600' : 'bg-gray-300 dark:bg-gray-600'}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-1'}`}/>
            </button>
            <span className={`text-base font-medium ${billingCycle === 'yearly' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              {t('yearlyBilling')}
            </span>
            {billingCycle === 'yearly' && (
              <span className="animate-pulse ml-1 rounded-full bg-lime-100 px-2 py-0.5 text-xs font-semibold text-lime-700 dark:bg-lime-900/50 dark:text-lime-300">
                {t('savingsLabel')}
              </span>
            )}
          </motion.div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`rounded-2xl ${plan.popular ? 'bg-gradient-to-b from-lime-50 to-emerald-50 border-2 border-lime-500 dark:from-lime-900/20 dark:to-emerald-900/20 dark:border-lime-500/50' : 'bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700'} p-8 shadow-lg transition-all relative flex flex-col h-full`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.3 + (index * 0.15)
              }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-full px-4 py-1 text-xs font-bold text-white shadow-md">
                  {t('mostPopular')}
                </div>
              )}

              <div className="mb-6 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-white">{plan.name}</h3>
                  <p className="text-gray-600 text-sm dark:text-gray-300">{plan.description}</p>
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${plan.popular ? 'bg-gradient-to-br from-lime-400 to-emerald-500 text-white' : 'bg-lime-100 text-lime-600 dark:bg-lime-900/30 dark:text-lime-400'}`}>
                  {plan.icon}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  {plan.price !== t('plans.enterprise.price') && (
                    <span className="ml-2 text-gray-600 dark:text-gray-400">/ {billingCycle === 'monthly' ? t('month') : t('year')}</span>
                  )}
                </div>
              </div>

              <div className="mb-8 flex-grow">
                <p className="mb-3 font-medium text-gray-900 dark:text-white">{t('includedFeatures')}:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="mr-3 h-5 w-5 text-emerald-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button 
                className={`rounded-lg ${plan.popular ? 
                  'bg-gradient-to-r from-lime-500 to-emerald-600 text-white shadow-md hover:shadow-xl hover:from-lime-600 hover:to-emerald-700' : 
                  'bg-white text-gray-900 border-2 border-lime-500 hover:bg-lime-50 dark:bg-transparent dark:text-white dark:hover:bg-lime-900/20'} 
                  px-6 py-4 text-base font-medium transition-all focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 w-full text-center`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div 
          className="mt-24 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center dark:text-white">{t('faqTitle')}</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                className="rounded-lg border border-gray-200 p-6 dark:border-gray-700"
                whileHover={{ y: -3 }}
              >
                <h4 className="font-semibold text-gray-900 mb-2 dark:text-white">{t(`faq.q${item}`)}</h4>
                <p className="text-gray-600 dark:text-gray-300">{t(`faq.a${item}`)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative divider */}
      <div className="w-full overflow-hidden mt-16">
        <svg className="w-full h-16 text-white dark:text-gray-800" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default PricingOptions;
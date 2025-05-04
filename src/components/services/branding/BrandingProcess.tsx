'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ProcessSection: React.FC = () => {
  const t = useTranslations('brandingPage.process');

  // Process steps data structure
  const processSteps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ),
      stepNumber: 1,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      stepNumber: 2,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
      stepNumber: 3,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      ),
      stepNumber: 4,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: { 
      scaleY: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 }
    }
  };

  return (
    <section id="process" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block mb-4 px-4 py-1 rounded-full bg-lime-100 text-lime-600 text-sm font-semibold dark:bg-lime-900/30 dark:text-lime-400"
            whileHover={{ scale: 1.05 }}
          >
            {t('subtitle')}
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('title')}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('description')}
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6 mb-16 relative"
              variants={itemVariants}
            >
              {/* Connecting line between steps */}
              {index < processSteps.length - 1 && (
                <motion.div 
                  className="absolute left-8 top-20 w-0.5 h-28 bg-gradient-to-b from-lime-400 to-lime-100 dark:from-lime-500 dark:to-lime-900/40 hidden md:block"
                  variants={lineVariants}
                ></motion.div>
              )}
              
              {/* Step icon */}
              <motion.div
                className="flex-shrink-0 w-16 h-16 bg-lime-100 dark:bg-lime-900/30 rounded-xl flex items-center justify-center relative z-10 text-lime-600 dark:text-lime-400 shadow-md"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                {step.icon}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-lime-600 dark:bg-lime-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
                  {step.stepNumber}
                </div>
              </motion.div>
              
              {/* Step content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {t(`steps.${index}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t(`steps.${index}.description`)}
                </p>
                
                {/* Benefits of this step */}
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 text-sm">
                    {t('keyBenefits')}:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[0, 1, 2, 3].map((benefitIndex) => (
                      <li 
                        key={benefitIndex} 
                        className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                      >
                        <span className="mr-2 text-teal-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </span>
                        {t(`steps.${index}.benefits.${benefitIndex}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-lime-500 to-teal-600 border border-transparent rounded-xl shadow-lg hover:from-lime-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('ctaButton')}
            <svg
              className="ml-2"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.a>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            {t('ctaDescription')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
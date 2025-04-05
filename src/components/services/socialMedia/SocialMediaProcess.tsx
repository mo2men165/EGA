'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const SocialMediaProcess: React.FC = () => {
  const t = useTranslations('socialMediaPage.process');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.8, delay: 0.5 } }
  };

  return (
    <section id="process" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold dark:bg-blue-900/30 dark:text-blue-400"
            whileHover={{ scale: 1.05 }}
          >
            {t('subtitle')}
          </motion.span>
          
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('title')}
          </motion.h2>
          
          <motion.p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
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
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6 mb-16 relative"
              variants={itemVariants}
            >
              {index < 3 && (
                <motion.div 
                  className="absolute left-8 top-20 w-0.5 h-28 bg-gradient-to-b from-blue-400 to-blue-100 dark:from-blue-500 dark:to-blue-900/40 hidden md:block"
                  variants={lineVariants}
                />
              )}
              
              <motion.div
                className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-md"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                {index === 0 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>}
                {index === 1 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>}
                {index === 2 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>}
                {index === 3 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>}
              </motion.div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {t(`steps.${index}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t(`steps.${index}.description`)}
                </p>
                
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 text-sm">
                    {t('keyBenefits')}:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[0, 1, 2].map((benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <span className="mr-2 text-blue-500">✓</span>
                        {t(`steps.${index}.benefits.${benefitIndex}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-600 border border-transparent rounded-xl shadow-lg hover:from-blue-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('ctaButton')}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
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

export default SocialMediaProcess;
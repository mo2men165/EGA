'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const SocialMediaOverview: React.FC = () => {
  const t = useTranslations('socialMediaPage.overview');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="overview" className="py-20 bg-white dark:bg-gray-900">
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
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/20 opacity-50"></div>
              
              <motion.div 
                className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                {index === 0 && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                )}
                {index === 1 && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                )}
                {index === 2 && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="20" x2="12" y2="10"></line>
                    <line x1="18" y1="20" x2="18" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="16"></line>
                  </svg>
                )}
              </motion.div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {t(`cards.${index}.title`)}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t(`cards.${index}.description`)}
              </p>
              
              <ul className="space-y-2">
                {[0, 1, 2].map((pointIndex) => (
                  <li key={pointIndex} className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <span className="mr-2 text-blue-500">•</span>
                    {t(`cards.${index}.points.${pointIndex}`)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        
      </div>
    </section>
  );
};

export default SocialMediaOverview;
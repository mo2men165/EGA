'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

const FaqSection: React.FC = () => {
  const t = useTranslations('mediaProductionPage.faq'); // Updated to mediaProductionPage
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // FAQ data structure
  const faqs = Array.from({ length: 6 }, (_, i) => i);

  // Toggle FAQ item
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: { 
        height: { duration: 0.3 },
        opacity: { duration: 0.25, delay: 0.15 }
      }
    }
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold dark:bg-blue-900/30 dark:text-blue-400"
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
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqs.map((_, index) => (
            <motion.div
              key={index}
              className="mb-4"
              variants={itemVariants}
            >
              <motion.div
                className={`border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden ${
                  openIndex === index 
                    ? 'bg-white dark:bg-gray-700 shadow-lg' 
                    : 'bg-gray-100 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700/80'
                }`}
                whileHover={{ 
                  scale: openIndex === index ? 1 : 1.01, 
                  transition: { duration: 0.2 }
                }}
              >
                <button
                  className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t(`questions.${index}.question`)}
                  </h3>
                  <div className={`flex-shrink-0 ml-4 w-6 h-6 rounded-full flex items-center justify-center border transition-colors duration-300 ${
                    openIndex === index 
                      ? 'bg-blue-500 dark:bg-blue-400 text-white border-blue-500 dark:border-blue-400' 
                      : 'bg-white dark:bg-gray-600 text-gray-500 dark:text-gray-300 border-gray-300 dark:border-gray-600'
                  }`}>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                    >
                      {openIndex === index ? (
                        <polyline points="18 15 12 9 6 15"></polyline>
                      ) : (
                        <polyline points="6 9 12 15 18 9"></polyline>
                      )}
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-gray-600 dark:text-gray-300">
                          {t(`questions.${index}.answer`)}
                        </p>
                        
                        {/* Related links if available */}
                        {t(`questions.${index}.hasLinks`) === 'true' && (
                          <div className="mt-4">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                              {t('relatedResources')}:
                            </p>
                            <ul className="space-y-1">
                              {[0, 1].map((linkIndex) => (
                                <li key={linkIndex}>
                                  <a 
                                    href={t(`questions.${index}.links.${linkIndex}.url`)}
                                    className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
                                  >
                                    <svg 
                                      xmlns="http://www.w3.org/2000/svg" 
                                      width="14" 
                                      height="14" 
                                      viewBox="0 0 24 24" 
                                      fill="none" 
                                      stroke="currentColor" 
                                      strokeWidth="2" 
                                      strokeLinecap="round" 
                                      strokeLinejoin="round"
                                      className="mr-1"
                                    >
                                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                      <polyline points="15 3 21 3 21 9"></polyline>
                                      <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                    {t(`questions.${index}.links.${linkIndex}.text`)}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Contact prompt */}
        <motion.div
          className="mt-12 max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
            {t('stillHaveQuestions')}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t('contactPrompt')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-teal-600 border border-transparent rounded-xl shadow-lg hover:from-blue-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              {t('contactButton')}
            </motion.a>
            
            <motion.a
              href={t('scheduleLinkUrl')}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="mr-2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {t('scheduleButton')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
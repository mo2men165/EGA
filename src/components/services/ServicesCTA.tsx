'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ServicesCTA: React.FC = () => {
  const t = useTranslations('servicesPage.cta');

  return (
    <section className="relative py-20 overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-br from-lime-500/20 to-emerald-600/20 dark:from-lime-900/30 dark:to-emerald-900/30"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute -right-16 -top-16 text-lime-500/20 dark:text-lime-400/10" width="256" height="256" viewBox="0 0 256 256" fill="currentColor">
          <circle cx="128" cy="128" r="128" />
        </svg>
        <svg className="absolute -bottom-16 -left-16 text-emerald-500/20 dark:text-emerald-400/10" width="256" height="256" viewBox="0 0 256 256" fill="currentColor">
          <circle cx="128" cy="128" r="128" />
        </svg>
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800 sm:p-12">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('title')}
            </motion.h2>
            <motion.p 
              className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {t('description')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid gap-6 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Contact Form */}
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('form.nameLabel')}
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder={t('form.namePlaceholder')}
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder-gray-400 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-400 dark:focus:ring-lime-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('form.emailLabel')}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder={t('form.emailPlaceholder')}
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder-gray-400 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-400 dark:focus:ring-lime-400"
                />
              </div>
              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('form.serviceLabel')}
                </label>
                <select
                  id="service"
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-lime-400 dark:focus:ring-lime-400"
                >
                  <option value="">{t('form.servicePlaceholder')}</option>
                  <option value="branding">{t('form.serviceOptions.branding')}</option>
                  <option value="media-production">{t('form.serviceOptions.mediaProduction')}</option>
                  <option value="software-web">{t('form.serviceOptions.softwareWeb')}</option>
                  <option value="social-media">{t('form.serviceOptions.socialMedia')}</option>
                  <option value="performance-marketing">{t('form.serviceOptions.performanceMarketing')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('form.messageLabel')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={t('form.messagePlaceholder')}
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder-gray-400 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-400 dark:focus:ring-lime-400"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-lime-500 to-emerald-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:from-lime-600 hover:to-emerald-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('form.submitButton')}
              </motion.button>
            </form>
            
            {/* Contact Information */}
            <div className="flex flex-col justify-between space-y-6 rounded-lg bg-gray-50 p-6 dark:bg-gray-700">
              <div>
                <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
                  {t('contactInfo.title')}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="mr-3 h-6 w-6 text-lime-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{t('contactInfo.phone')}</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-3 h-6 w-6 text-lime-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{t('contactInfo.email')}</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-3 h-6 w-6 text-lime-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{t('contactInfo.address')}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-3 font-medium text-gray-900 dark:text-white">
                  {t('contactInfo.socialTitle')}
                </h4>
                <div className="flex space-x-4">
                  <motion.a href="#" className="text-gray-600 transition-colors hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400" whileHover={{ y: -3 }}>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </motion.a>
                  <motion.a href="#" className="text-gray-600 transition-colors hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400" whileHover={{ y: -3 }}>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </motion.a>
                  <motion.a href="#" className="text-gray-600 transition-colors hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400" whileHover={{ y: -3 }}>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </motion.a>
                  <motion.a href="#" className="text-gray-600 transition-colors hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400" whileHover={{ y: -3 }}>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                    </svg>
                  </motion.a>
                </div>
              </div>
              
              <div>
                <h4 className="mb-3 font-medium text-gray-900 dark:text-white">
                  {t('contactInfo.hoursTitle')}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('contactInfo.hours')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
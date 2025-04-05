'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MapPin, Mail, Phone, Clock, CheckCircle, Send, AlertCircle, Users, BookOpen, Briefcase, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
  const t = useTranslations('contactPage');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [activeTab, setActiveTab] = useState('form');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({ submitted: true, success: false, message: t('sendingMessage') || 'Sending your message...' });
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus({ 
        submitted: true, 
        success: true, 
        message: t('successMessage') || 'Your message has been sent successfully! We will get back to you soon.'
      });
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  // FAQ data
  const faqs = [
    {
      question: t('faqQuestion1') || 'What are your business hours?',
      answer: t('faqAnswer1') || 'We are open Monday through Friday from 9 AM to 6 PM. On weekends, we are available by appointment only.'
    },
    {
      question: t('faqQuestion2') || 'How quickly can I expect a response?',
      answer: t('faqAnswer2') || 'We aim to respond to all inquiries within 24 hours during business days.'
    },
    {
      question: t('faqQuestion3') || 'Do you offer virtual consultations?',
      answer: t('faqAnswer3') || 'Yes, we offer virtual consultations via Zoom, Google Meet, or Microsoft Teams. Please specify your preference when scheduling.'
    },
    {
      question: t('faqQuestion4') || 'What information should I include in my message?',
      answer: t('faqAnswer4') || 'Please include your name, preferred contact method, and a detailed description of your needs or questions. The more details you provide, the better we can assist you.'
    }
  ];

  // Services data
  const services = [
    {
      icon: <Globe className="h-12 w-12 mb-4 text-lime-500 dark:text-lime-400" />,
      title: t('serviceTitle1') || 'Digital Marketing',
      description: t('serviceDescription1') || 'Comprehensive digital marketing strategies tailored to your business goals and target audience.'
    },
    {
      icon: <Briefcase className="h-12 w-12 mb-4 text-lime-500 dark:text-lime-400" />,
      title: t('serviceTitle2') || 'Web Development',
      description: t('serviceDescription2') || 'Custom website development with responsive design and seamless user experience.'
    },
    {
      icon: <BookOpen className="h-12 w-12 mb-4 text-lime-500 dark:text-lime-400" />,
      title: t('serviceTitle3') || 'Content Creation',
      description: t('serviceDescription3') || 'Engaging content creation that resonates with your audience and drives conversion.'
    }
  ];

  return (
    <section ref={containerRef} className="relative overflow-hidden pt-46 bg-gradient-to-b from-white to-gray-50 py-16 dark:from-gray-900 dark:to-gray-800">
      {/* Animated background particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-lime-400 opacity-20 dark:bg-lime-600"
          style={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`, 
            width: Math.random() * 20 + 5, 
            height: Math.random() * 20 + 5,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            delay: Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Page Header with breadcrumbs */}
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
            <a href="/" className="hover:text-lime-600 dark:hover:text-lime-400">{t('home') || 'Home'}</a>
            <span className="mx-2">/</span>
            <span className="text-lime-600 dark:text-lime-400">{t('title')}</span>
          </div>
          
          <h1 className="mb-4 bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-5xl font-bold text-transparent dark:from-lime-400 dark:to-emerald-400">
            {t('title')}
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            {t('description')}
          </p>
        </motion.div>

        {/* Main content area */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left side - Contact options and info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('howCanWeHelp') || 'How Can We Help?'}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 text-lime-500 dark:text-lime-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{t('phoneContact')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t('phoneNumber')}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('phoneAvailability') || 'Available Mon-Fri, 9AM-6PM'}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 text-lime-500 dark:text-lime-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{t('emailContact')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t('emailAddress')}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('emailResponse') || 'We\'ll respond within 24 hours'}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-lime-500 dark:text-lime-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{t('addressContact')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t('officeAddress')}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('addressInfo') || 'Open for in-person meetings'}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 text-lime-500 dark:text-lime-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{t('businessHours') || 'Business Hours'}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t('weekdayHours') || 'Monday - Friday: 9AM - 6PM'}</p>
                    <p className="text-gray-600 dark:text-gray-300">{t('saturdayHours') || 'Saturday: By appointment'}</p>
                    <p className="text-gray-600 dark:text-gray-300">{t('sundayHours') || 'Sunday: Closed'}</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{t('connectWithUs') || 'Connect With Us'}</h3>
                <div className="flex space-x-4">
                  <a href="#" aria-label="Facebook" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-lime-100 dark:hover:bg-lime-900 transition-colors">
                    <svg className="h-5 w-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-lime-100 dark:hover:bg-lime-900 transition-colors">
                    <svg className="h-5 w-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-lime-100 dark:hover:bg-lime-900 transition-colors">
                    <svg className="h-5 w-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-lime-100 dark:hover:bg-lime-900 transition-colors">
                    <svg className="h-5 w-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('faqTitle') || 'Frequently Asked Questions'}</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact form and map */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Tabs for Form and Map */}
            <div className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                <button 
                  className={`flex-1 py-4 px-6 text-center focus:outline-none ${
                    activeTab === 'form' 
                      ? 'text-lime-600 dark:text-lime-400 border-b-2 border-lime-500 dark:border-lime-400 font-medium' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-lime-600 dark:hover:text-lime-400'
                  }`}
                  onClick={() => setActiveTab('form')}
                >
                  {t('contactForm') || 'Contact Form'}
                </button>
                <button 
                  className={`flex-1 py-4 px-6 text-center focus:outline-none ${
                    activeTab === 'map' 
                      ? 'text-lime-600 dark:text-lime-400 border-b-2 border-lime-500 dark:border-lime-400 font-medium' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-lime-600 dark:hover:text-lime-400'
                  }`}
                  onClick={() => setActiveTab('map')}
                >
                  {t('findUs') || 'Find Us'}
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'form' ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
                >
                  {formStatus.submitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      {formStatus.success ? (
                        <>
                          <CheckCircle className="h-16 w-16 text-lime-500 dark:text-lime-400 mx-auto mb-6" />
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('messageSent') || 'Message Sent!'}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-8">{formStatus.message}</p>
                          <button 
                            onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}
                            className="inline-flex items-center px-6 py-3 bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition-colors duration-300 dark:bg-lime-600 dark:hover:bg-lime-500"
                          >
                            <Mail className="h-5 w-5 mr-2" />
                            {t('sendAnother') || 'Send Another Message'}
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-lime-500 dark:border-lime-400 mx-auto mb-6"></div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('sending') || 'Sending...'}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{formStatus.message}</p>
                        </>
                      )}
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('sendUsMessage') || 'Send Us a Message'}</h2>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                              {t('nameLabel')} <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              placeholder={t('namePlaceholder') || "Your full name"}
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                              {t('emailLabel')} <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              placeholder={t('emailPlaceholder') || "your.email@example.com"}
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                              {t('phoneLabel')}
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              placeholder={t('phonePlaceholder') || "+1 (123) 456-7890"}
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                              {t('subjectLabel') || 'Subject'} <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            >
                              <option value="">{t('selectSubject') || 'Select a subject'}</option>
                              <option value="General Inquiry">{t('generalInquiry') || 'General Inquiry'}</option>
                              <option value="Support Request">{t('supportRequest') || 'Support Request'}</option>
                              <option value="Partnership">{t('partnership') || 'Partnership Opportunity'}</option>
                              <option value="Feedback">{t('feedback') || 'Feedback'}</option>
                              <option value="Other">{t('other') || 'Other'}</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                            {t('messageLabel')} <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder={t('messagePlaceholder') || "How can we help you today?"}
                          ></textarea>
                        </div>

                        <div className="flex items-start">
                          <input
                            id="privacy"
                            type="checkbox"
                            required
                            className="h-4 w-4 mt-1 border-gray-300 rounded text-lime-600 focus:ring-lime-500"
                          />
                          <label htmlFor="privacy" className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                            {t('privacyConsent') || 'I agree with the'} <a href="#" className="text-lime-600 dark:text-lime-400 hover:underline">{t('privacyPolicy') || 'privacy policy'}</a> {t('andConsent') || 'and consent to the processing of my personal data.'}
                          </label>
                        </div>

                        <button
                          type="submit"
                          className="w-full inline-flex justify-center items-center bg-lime-500 text-white py-3 px-6 rounded-lg hover:bg-lime-600 transition-colors duration-300 dark:bg-lime-600 dark:hover:bg-lime-500"
                        >
                          <Send className="h-5 w-5 mr-2" />
                          {t('submitButton')}
                        </button>
                      </form>
                    </>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="map"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('visitOffice') || 'Visit Our Office'}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{t('officeDescription') || 'We\'re conveniently located in the 6th of October. Feel free to stop by during business hours!'}</p>
                  </div>
                  
                  <div className="aspect-video w-full">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d275.6411435131699!2d30.93762870989682!3d29.967543314082263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU4JzAzLjQiTiAzMMKwNTYnMTYuMSJF!5e0!3m2!1sen!2seg!4v1743264052089!5m2!1sen!2seg" 
                      width="100%" 
                      height="450" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                      title="Office Location"
                    ></iframe>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Our Services Section */}
      <motion.div 
        className="relative z-10 mt-24 container mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('ourServices') || 'Our Services'}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t('servicesDescription') || 'We offer a wide range of digital marketing services to help your business grow and succeed in the digital landscape.'}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div 
        className="relative z-10 mt-24 container mx-auto px-4 pb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('whyChooseUs') || 'Why Choose Us'}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t('whyChooseUsDescription') || 'We pride ourselves on delivering exceptional results through our unique approach and expertise.'}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <div className="bg-lime-100 dark:bg-lime-900 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Users className="h-7 w-7 text-lime-600 dark:text-lime-400" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">{t('experiencedTeam') || 'Experienced Team'}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('experiencedTeamDescription') || 'Our team consists of industry experts with years of experience in digital marketing.'}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <div className="bg-lime-100 dark:bg-lime-900 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-lime-600 dark:text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">{t('provenResults') || 'Proven Results'}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('provenResultsDescription') || 'We have a track record of delivering measurable results for our clients.'}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <div className="bg-lime-100 dark:bg-lime-900 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-lime-600 dark:text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">{t('fastTurnaround') || 'Fast Turnaround'}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('fastTurnaroundDescription') || 'We work efficiently to deliver projects on time without compromising quality.'}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <div className="bg-lime-100 dark:bg-lime-900 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-lime-600 dark:text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">{t('affordablePricing') || 'Affordable Pricing'}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('affordablePricingDescription') || 'We offer competitive pricing with flexible packages to suit businesses of all sizes.'}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
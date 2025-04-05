'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedProjects = () => {
  const t = useTranslations('projectsPage.featured');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  // Featured projects data
  const projects = [
    {
      id: 'fancy-rebrand',
      title: 'Brand Redesign & Identity Refresh',
      subtitle: 'Men\'s Fashion Transformation',
      client: 'Fancy',
      description: 'A complete brand overhaul for this classic men\'s fashion retailer, creating a modern yet timeless visual identity that appeals to both traditional customers and a new generation of fashion-conscious men.',
      challenges: 'Fancy needed to modernize their brand while retaining the classic elegance their loyal customers appreciated. The challenge was maintaining brand recognition while positioning them for future growth.',
      solutions: 'We created a refreshed visual identity with a modernized logo, refined color palette, and versatile branding system that works across digital and physical touchpoints.',
      results: [
        { metric: 'Brand Recall', value: '+72%' },
        { metric: 'New Customer Acquisition', value: '+45%' },
        { metric: 'Social Media Engagement', value: '+156%' }
      ],
      services: ['Brand Strategy', 'Visual Identity', 'Packaging Design', 'Style Guide Development'],
      mainImage: '/assets/fancy2.png',
      color: 'from-violet-500 to-purple-600',
      bgColor: 'bg-violet-500/10',
      textColor: 'text-violet-500'
    },
    {
      id: 'first-choice',
      title: 'Digital Marketing & Export Growth',
      subtitle: 'Fresh Produce Global Expansion',
      client: 'First Choice',
      description: 'A comprehensive digital marketing strategy for First Choice, a leading exporter of fresh fruits and vegetables, to expand their global presence and connect with international buyers.',
      challenges: 'First Choice needed to showcase their product quality and reliability to potential international buyers while navigating the complexities of multi-market communications.',
      solutions: 'We developed a digital strategy emphasizing product quality, sustainable farming practices, and reliable export capabilities through targeted content and virtual showcases.',
      results: [
        { metric: 'Export Market Growth', value: '+43%' },
        { metric: 'Lead Generation', value: '+87%' },
        { metric: 'International Conversions', value: '+65%' }
      ],
      services: ['Digital Strategy', 'Content Marketing', 'International SEO', 'Virtual Trade Shows'],
      mainImage: '/assets/first choice2.png',
      color: 'from-lime-500 to-emerald-600',
      bgColor: 'bg-lime-500/10',
      textColor: 'text-lime-600'
    }
  ];

  return (
    <section 
      ref={containerRef}
      id='featured-projects'
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            className="inline-block px-4 py-1 mb-4 text-sm font-medium text-lime-800 bg-lime-100 rounded-full dark:bg-lime-900/30 dark:text-lime-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('subheading')}
          </motion.span>
          
          <motion.h2 
            className="mb-6 text-4xl font-bold bg-gradient-to-r from-lime-500 to-emerald-600 bg-clip-text text-transparent md:text-5xl dark:from-lime-500 dark:to-emerald-600"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {t('title')}
          </motion.h2>
          
          <motion.div
            className="h-1 w-24 bg-lime-500 mx-auto mb-2 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
          
          <motion.p 
            className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {t('description')}
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.5 + (index * 0.1) }}
              className="relative"
            >
              {/* Project Header */}
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.6 + (index * 0.1) }}
              >
                <span className={`inline-block px-4 py-1 mb-2 text-sm font-medium rounded-full ${project.bgColor} ${project.textColor}`}>
                  {project.client}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-xl text-gray-600 dark:text-gray-300">{project.subtitle}</p>
              </motion.div>
              
              <div className={`relative overflow-hidden rounded-3xl shadow-xl ${project.bgColor}`}>
                <div className="flex flex-col lg:flex-row">
                  {/* Project Image */}
                  <div className="relative lg:w-1/2">
                    <div className="relative aspect-video md:aspect-auto h-full overflow-hidden">
                      <Image
                        src={project.mainImage}
                        alt={`${project.client} Project`}
                        width={900}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Decorative elements */}
                      <motion.div 
                        className={`absolute -left-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-r ${project.color} opacity-30 blur-2xl`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      ></motion.div>
                      <motion.div 
                        className={`absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-r ${project.color} opacity-30 blur-2xl`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      ></motion.div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 lg:w-1/2 lg:p-10 xl:p-12">
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">The Challenge</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {project.challenges}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Our Solution</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {project.solutions}
                      </p>
                    </div>

                    {/* Results grid */}
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">Key Results</h4>
                    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      {project.results.map((result, i) => (
                        <motion.div 
                          key={i}
                          className="bg-white p-4 rounded-xl shadow-md dark:bg-gray-800"
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{result.metric}</p>
                          <p className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                            {result.value}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3">Services Provided</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service, i) => (
                          <span 
                            key={i} 
                            className="bg-white/40 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:bg-gray-700/40 dark:text-gray-300"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative border */}
                <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${project.color}`}></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <motion.h3
            className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('readyToStart')}
          </motion.h3>
          
          <motion.p
            className="max-w-2xl mx-auto mb-8 text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('ctaDescription')}
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/contact" className="inline-flex items-center px-8 py-4 font-bold text-white bg-gradient-to-r from-lime-500 to-emerald-600 rounded-xl shadow-lg transition-all hover:shadow-xl group">
              {t('contactButton')}
              <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
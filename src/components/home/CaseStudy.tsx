'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

const CaseStudyHighlights = () => {
  const t = useTranslations('caseStudies');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Case studies data
  const caseStudies = [
    {
      id: 'fancy-rebrand',
      title: t('cases.case1.title'),
      client: t('cases.case1.client'),
      industry: t('cases.case1.industry'),
      description: t('cases.case1.description'),
      results: [
        { metric: t('cases.case1.results.metric1.name'), value: t('cases.case1.results.metric1.value') },
        { metric: t('cases.case1.results.metric2.name'), value: t('cases.case1.results.metric2.value') },
        { metric: t('cases.case1.results.metric3.name'), value: t('cases.case1.results.metric3.value') }
      ],
      image: '/assets/fancy2.png',
      color: 'from-violet-500 to-purple-600',
      bgColor: 'bg-violet-500/10',
      accent: 'violet',
    },
    {
      id: 'first-choice',
      title: t('cases.case2.title'),
      client: t('cases.case2.client'),
      industry: t('cases.case2.industry'),
      description: t('cases.case2.description'),
      results: [
        { metric: t('cases.case2.results.metric1.name'), value: t('cases.case2.results.metric1.value') },
        { metric: t('cases.case2.results.metric2.name'), value: t('cases.case2.results.metric2.value') },
        { metric: t('cases.case2.results.metric3.name'), value: t('cases.case2.results.metric3.value') }
      ],
      image: '/assets/first choice2.png',
      color: 'from-lime-500 to-emerald-600',
      bgColor: 'bg-lime-500/10',
      accent: 'lime',
    },
  ];

  return (
    <section 
      suppressHydrationWarning
      ref={containerRef} 
      className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-24 dark:from-gray-800 dark:to-gray-900"
    >
      {/* Animated floating shapes */}
      {[...Array(15)].map((_, i) => {
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const size = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const duration = Math.random() * 15 + 20;
        const rotate = Math.random() * 360;
        
        return (
          <motion.div
          suppressHydrationWarning
            key={i}
            className="absolute rounded-lg opacity-20 dark:opacity-10"
            style={{ 
              top, 
              left, 
              width: size, 
              height: size,
              rotate: `${rotate}deg`,
              background: i % 3 === 0 
                ? 'linear-gradient(to right, #60a5fa, #34d399)' 
                : i % 3 === 1 
                  ? 'linear-gradient(to right, #f97316, #ec4899)' 
                  : 'linear-gradient(to right, #8b5cf6, #3b82f6)'
            }}
            animate={{
              y: [0, -100, 0],
              rotate: [`${rotate}deg`, `${rotate + 180}deg`, `${rotate + 360}deg`],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
      })}

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            className="mb-4 inline-block rounded-full bg-lime-100 px-4 py-1 text-sm font-medium text-lime-800 dark:bg-lime-900/30 dark:text-lime-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('subheading')}
          </motion.span>
          
          <motion.h2 
            className="mb-6 bg-gradient-to-r leading-relaxed from-lime-500 to-emerald-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl dark:from-lime-500 dark:to-emerald-600"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {t('title')}
          </motion.h2>
          
          <motion.div
            className="mx-auto mb-2 h-1 w-24 rounded-full bg-lime-500"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
          
          <motion.p 
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {t('description')}
          </motion.p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.5 + (index * 0.1) }}
            >
              <div className={`relative overflow-hidden rounded-3xl shadow-xl ${study.bgColor}`}>
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="relative lg:w-7/12 xl:w-1/2">
                    <div className="relative aspect-video h-full overflow-hidden md:aspect-auto">
                      {/* Placeholder for image */}
                      <Image src={study.image} alt='Fancy Case Study' height={300} width={900} className='h-full w-full' />
                      
                      {/* Decorative elements */}
                      <motion.div 
                        className={`absolute -left-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-r ${study.color} opacity-30 blur-2xl`}
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
                        className={`absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-r ${study.color} opacity-30 blur-2xl`}
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

                    {/* Client badge */}
                    <div className="absolute bottom-4 left-4 z-10 rounded-xl bg-white px-3 py-2 shadow-lg backdrop-blur-sm dark:bg-gray-800">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${study.color} text-white`}>
                          <span className="text-sm font-bold">{study.client.substring(0, 2)}</span>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{t('clientLabel')}</p>
                          <p className="font-medium text-gray-900 dark:text-white">{study.client}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:w-5/12 xl:w-1/2 lg:p-10 xl:p-12">
                    <div className="mb-2 inline-flex items-center rounded-lg bg-white px-3 py-1 text-sm dark:bg-gray-800">
                      <span className={`mr-2 h-2 w-2 rounded-full bg-${study.accent}-500`}></span>
                      <span className="font-medium text-gray-800 dark:text-gray-200">{study.industry}</span>
                    </div>
                    
                    <h3 className={`mb-4 mt-3 text-3xl font-bold text-gray-900 lg:text-4xl dark:text-white`}>
                      {study.title}
                    </h3>
                    
                    <p className="mb-8 text-gray-600 dark:text-gray-300">
                      {study.description}
                    </p>

                    {/* Results grid */}
                    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      {study.results.map((result, i) => (
                        <motion.div 
                          key={i}
                          className="rounded-xl bg-white p-4 shadow-md dark:bg-gray-800"
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">{result.metric}</p>
                          <p className={`text-2xl font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                            {result.value}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link href={`/projects`} className={`group inline-flex items-center rounded-xl bg-gradient-to-r ${study.color} px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl`}>
                        {t('viewCaseButton')}
                        <svg className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative border */}
                <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${study.color}`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all case studies button */}
        {/* <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/case-studies" className="group relative inline-flex items-center overflow-hidden rounded-xl bg-lime-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:bg-lime-700 hover:shadow-xl">
              {t('viewAllButton')}
              <svg className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <span className="absolute inset-0 -translate-x-full transform bg-white opacity-20 transition-transform duration-500 group-hover:translate-x-full"></span>
            </Link>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default CaseStudyHighlights;
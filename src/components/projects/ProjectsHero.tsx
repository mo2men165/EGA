'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { fancy2, firstChoice2 } from '../../../public/assets';
import Link from 'next/link';

const ProjectsHero = () => {
  const t = useTranslations('projectsPage.hero');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-emerald-900 pt-46 py-32"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-full w-full">
          {[...Array(20)].map((_, i) => {
            const top = `${Math.random() * 100}%`;
            const left = `${Math.random() * 100}%`;
            const size = Math.random() * 300 + 50;
            const delay = Math.random() * 5;
            const duration = Math.random() * 20 + 10;
            
            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-lime-300 mix-blend-overlay"
                style={{ 
                  top, 
                  left, 
                  width: size, 
                  height: size,
                  opacity: 0.07
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  x: [0, Math.random() * 100 - 50, 0],
                  y: [0, Math.random() * 100 - 50, 0],
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
        </div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            className="text-center"
            style={{ y, opacity }}
          >
            <motion.span 
              className="mb-4 inline-block rounded-full bg-lime-500/20 px-4 py-1 text-sm font-medium text-lime-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              {t('subheading')}
            </motion.span>
            
            <motion.h1 
              className="mb-6 text-4xl font-bold text-white md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="block">{t('titleFirstLine')}</span>
              <span className="mt-2 block bg-gradient-to-r from-lime-400 to-emerald-300 leading-relaxed bg-clip-text text-transparent">
                {t('titleSecondLine')}
              </span>
            </motion.h1>
            
            <motion.p 
              className="mx-auto mb-10 max-w-2xl text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('description')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-gradient-to-r from-lime-500 to-emerald-600 px-8 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl"
              >
                <Link href="#featured-projects" passHref>
                  {t('primaryButton')}
                </Link>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl border border-lime-400/30 bg-white/10 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <Link href="/about" passHref>
                {t('secondaryButton')}
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Dual Project Preview */}
          <motion.div
            className="mt-16 w-full max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Fancy Project Preview */}
              <motion.div 
                className="w-full md:w-1/2"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 p-1 backdrop-blur-sm">
                  <div className="rounded-lg bg-gray-900/80 p-4 shadow-2xl">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                      <Image 
                        src={fancy2}
                        alt="Fancy Brand"
                        width={600}
                        height={450}
                        className="h-full w-full object-cover"
                        priority
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      <div className="absolute bottom-0 left-0 w-full p-4">
                        <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-white bg-violet-500/30 rounded-full backdrop-blur-sm">
                          Brand Redesign
                        </span>
                        <h3 className="text-lg font-bold text-white">Fancy</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* First Choice Project Preview */}
              <motion.div 
                className="w-full md:w-1/2"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-xl bg-gradient-to-br from-lime-500/20 to-emerald-600/20 p-1 backdrop-blur-sm">
                  <div className="rounded-lg bg-gray-900/80 p-4 shadow-2xl">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                      <Image
                        src={firstChoice2}
                        alt="First Choice"
                        width={600}
                        height={450}
                        className="h-full w-full object-cover"
                        priority
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      <div className="absolute bottom-0 left-0 w-full p-4">
                        <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-white bg-lime-500/30 rounded-full backdrop-blur-sm">
                          Digital Marketing
                        </span>
                        <h3 className="text-lg font-bold text-white">First Choice</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="flex justify-center mt-10">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 font-medium text-white bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm transition-all flex items-center"
              >
                <span>{t('scrollForDetails')}</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
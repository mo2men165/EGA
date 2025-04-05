'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const TeamIntroduction = () => {
  const t = useTranslations('team');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Team members data
  const teamMembers = [
    {
      id: 'ahmad-hassan',
      name: t('members.member1.name'),
      role: t('members.member1.role'),
      bio: t('members.member1.bio'),
      expertise: [
        t('members.member1.expertise.skill1'),
        t('members.member1.expertise.skill2'),
        t('members.member1.expertise.skill3')
      ],
      image: '/team/ahmad-hassan.jpg',
      color: 'from-violet-500 to-purple-600',
      bgColor: 'bg-violet-500/10',
      accent: 'violet',
      social: {
        linkedin: 'https://linkedin.com/in/ahmad-hassan',
        twitter: 'https://twitter.com/ahmad_hassan',
      }
    },
    {
      id: 'layla-ibrahim',
      name: t('members.member2.name'),
      role: t('members.member2.role'),
      bio: t('members.member2.bio'),
      expertise: [
        t('members.member2.expertise.skill1'),
        t('members.member2.expertise.skill2'),
        t('members.member2.expertise.skill3')
      ],
      image: '/team/layla-ibrahim.jpg',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-500/10',
      accent: 'blue',
      social: {
        linkedin: 'https://linkedin.com/in/layla-ibrahim',
        twitter: 'https://twitter.com/layla_ibrahim',
      }
    },
    {
      id: 'omar-khalid',
      name: t('members.member3.name'),
      role: t('members.member3.role'),
      bio: t('members.member3.bio'),
      expertise: [
        t('members.member3.expertise.skill1'),
        t('members.member3.expertise.skill2'),
        t('members.member3.expertise.skill3')
      ],
      image: '/team/omar-khalid.jpg',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-500/10',
      accent: 'amber',
      social: {
        linkedin: 'https://linkedin.com/in/omar-khalid',
        twitter: 'https://twitter.com/omar_khalid',
      }
    },
    {
      id: 'fatima-ali',
      name: t('members.member4.name'),
      role: t('members.member4.role'),
      bio: t('members.member4.bio'),
      expertise: [
        t('members.member4.expertise.skill1'),
        t('members.member4.expertise.skill2'),
        t('members.member4.expertise.skill3')
      ],
      image: '/team/fatima-ali.jpg',
      color: 'from-lime-500 to-emerald-600',
      bgColor: 'bg-lime-500/10',
      accent: 'lime',
      social: {
        linkedin: 'https://linkedin.com/in/fatima-ali',
        twitter: 'https://twitter.com/fatima_ali',
      }
    }
  ];

  return (
    <section 
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
            className="mb-6 bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl dark:from-lime-400 dark:to-emerald-400"
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

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${member.bgColor}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: 0.3 + (index * 0.1) }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Image container with gradient overlay */}
              <div className="relative aspect-square overflow-hidden">
                {/* Placeholder for image */}
                <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">{member.name} {t('imagePlaceholder')}</span>
                  </div>
                </div>
                
                {/* Gradient overlay that reveals on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80`}></div>
                
                {/* Social media icons */}
                <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <motion.a 
                    href={member.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-800 transition-transform duration-300 hover:scale-110 dark:bg-gray-800 dark:text-white"
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href={member.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-800 transition-transform duration-300 hover:scale-110 dark:bg-gray-800 dark:text-white"
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-3 flex items-center">
                  <motion.span 
                    className={`mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r ${member.color} text-xs font-bold text-white`}
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  >
                    {member.name.substring(0, 1)}
                  </motion.span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                    <p className={`text-sm font-medium text-${member.accent}-600 dark:text-${member.accent}-400`}>{member.role}</p>
                  </div>
                </div>
                
                <p className="mb-4 text-gray-600 dark:text-gray-300">{member.bio}</p>
                
                {/* Expertise tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {member.expertise.map((skill, i) => (
                    <span 
                      key={i} 
                      className={`inline-block rounded-full bg-${member.accent}-100 px-3 py-1 text-xs font-medium text-${member.accent}-800 dark:bg-${member.accent}-900/30 dark:text-${member.accent}-300`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Bottom border */}
              <div className={`absolute bottom-0 left-0 h-1 w-full transform bg-gradient-to-r ${member.color} transition-transform duration-300 group-hover:translate-x-0`} style={{ transform: 'translateX(-100%)' }}></div>
            </motion.div>
          ))}
        </div>
        
        {/* View full team button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/team" className="group relative inline-flex items-center overflow-hidden rounded-xl bg-lime-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:bg-lime-700 hover:shadow-xl">
              {t('viewTeamButton')}
              <svg className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <span className="absolute inset-0 -translate-x-full transform bg-white opacity-20 transition-transform duration-500 group-hover:translate-x-full"></span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamIntroduction;
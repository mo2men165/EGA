'use client';

import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

type Particle = {
  id: number;
  size: number;
  position: {
    x: string; // x is a percentage string
    y: string; // y is a percentage string
  };
  color: string;
};

// Particle component for background effect
const Particle: React.FC<{
  size: number;
  position: { x: string; y: string };
  color: string;
}> = ({ size, position, color }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color}`}
      style={{
        width: size,
        height: size,
        left: position.x,
        top: position.y,
      }}
      animate={{
        y: [position.y, `calc(${position.y} - 100px)`, position.y],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2 + Math.random() * 2, // Reduced duration
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
};

// Enhanced counter with 3D effects and particles
const Counter: React.FC<{
  end: number;
  duration?: number;
  label: string;
  icon: ReactNode;
  color: string;
  percentageStat?: boolean;
}> = ({ end, duration = 2, label, icon, color, percentageStat }) => {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();
  
  // Reset and animate counter when it comes into view
  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }
    
    let startTime: number | null = null;
    let animationFrame: number;
    
    const updateCount = (timestamp: number): void => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function for more dynamic counting
      const eased = easeOutExpo(percentage);
      setCount(Math.floor(eased * end));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    controls.start("visible");
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView, controls]);
  
  // Easing function for smoother animation
  const easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  };
  
  return (
    <motion.div 
      ref={ref}
      className="group relative flex flex-col items-center"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 }
      }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      {/* 3D Card Effect */}
      <div className={`absolute -inset-4 -z-10 rounded-2xl ${color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70`} />
      <div className="relative flex h-full flex-col items-center justify-center rounded-xl bg-white p-6 shadow-lg transition-all duration-300 group-hover:shadow-xl">
        {/* Animated icon */}
        <motion.div 
          className="mb-3 text-lime-500"
          animate={{ rotate: isInView ? [0, 10, -10, 0] : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {icon}
        </motion.div>
        
        {/* Counter with highlight effect */}
        <div className="relative text-4xl font-black text-gray-800 md:text-5xl">
          <span>{count}</span>
          <motion.span 
            className="ml-1 text-lime-500"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {percentageStat ? '% +' : '+'}
          </motion.span>
          
          {/* Pulsing highlight */}
          <AnimatePresence>
            {isInView && (
              <motion.div 
                className="absolute inset-0 -z-10 rounded-full bg-lime-100 opacity-0"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 0.7 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, repeat: 0 }}
              />
            )}
          </AnimatePresence>
        </div>
        
        <div className="mt-2 text-sm font-semibold uppercase tracking-widest text-gray-600">{label}</div>
      </div>
    </motion.div>
  );
};

const CTASection: React.FC = () => {
  const t = useTranslations('cta');
  const [isRtl, setIsRtl] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [particles, setParticles] = useState<Array<Particle>>([]);
  const controls = useAnimation();

  useEffect(() => {
    // Create the particles array
    const particlesArray: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 10, // Increased size
      position: { 
        x: `${Math.random() * 100}%`, 
        y: `${Math.random() * 100}%`, 
      },
      color: i % 2 === 0 ? "bg-lime-300" : "bg-lime-500",
    }));

    // Set the particles state
    setParticles(particlesArray);
  }, []);

  // Trigger controls animation when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div suppressHydrationWarning ref={ref} className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-28 dark:from-gray-800 dark:to-gray-900 sm:py-36">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-20" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(132, 204, 22, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(132, 204, 22, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            size={particle.size}
            position={particle.position}
            color={particle.color}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="overflow-hidden rounded-3xl bg-white/80 shadow-2xl backdrop-blur-md lg:rounded-[2.5rem]"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          {/* Glass effect container */}
          <div className="relative p-8 lg:p-16">
            {/* Decorative elements */}
            <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-lime-400 opacity-20 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-lime-600 opacity-20 blur-3xl" />
            
            {/* Heading section */}
            <div className="relative text-center">
              <motion.span 
                className="mb-6 inline-block rounded-full bg-lime-100 px-4 py-1 text-sm font-semibold text-lime-700"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                {t('subtitle')}
              </motion.span>
              
              <motion.h2 
                className="bg-gradient-to-r my-6 from-lime-600 to-lime-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t('title')}
              </motion.h2>
            </div>
            
            {/* Stats with enhanced 3D hover effects */}
            <motion.div 
              className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.6, staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              <Counter 
                end={25} 
                label={t('clientsLabel')} 
                color="bg-lime-500/10"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                }
              />
              <Counter 
                end={30}
                label={t('projectsLabel')} 
                color="bg-lime-500/10"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                }
              />
              <Counter 
                end={6}
                label={t('countriesLabel')} 
                color="bg-lime-500/10"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
              <Counter 
                end={98}
                label={t('satisfactionLabel')}
                color="bg-lime-500/10" 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                }
                percentageStat={true}
              />
            </motion.div>
            
            {/* CTA Buttons with advanced animation effects */}
            <motion.div 
              className="flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-x-8 sm:space-y-0"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ 
                flexDirection: isRtl ? 'row-reverse' : 'row',
                gap: '2rem'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link href="/contact">
                  <button className="group cursor-pointer relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-lime-500 to-emerald-600 px-10 py-4 text-center text-lg font-bold text-white shadow-lg transition duration-300 hover:shadow-xl sm:w-auto">
                    <span className="relative z-10">{t('contactButton')}</span>
                    {/* Shine effect */}
                    <span className="absolute inset-0 -z-0 translate-x-[150%] skew-x-[20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-[-150%]"></span>
                  </button>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link href="/services">
                  <button className="group relative cursor-pointer w-full overflow-hidden rounded-xl border-2 border-lime-500 bg-transparent px-10 py-4 text-center text-lg font-bold text-lime-600 transition duration-300 hover:border-lime-600 hover:text-lime-700 sm:w-auto">
                    <span className="relative z-10">{t('learnMoreButton')}</span>
                    {/* Hover fill effect */}
                    <span className="absolute bottom-0 left-0 right-0 -z-0 h-0 bg-lime-100 transition-all duration-300 group-hover:h-full"></span>
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
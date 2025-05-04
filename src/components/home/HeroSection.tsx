'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { logo } from '../../../public/assets';
import { useRouter } from '@/i18n/navigation';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const t = useTranslations('hero');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Characters for the matrix effect
    const characters = '01100101010111001010'.split('');
    
    // Columns based on screen width
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to store the current y position of each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -canvas.height;
    }
    
    // Drawing the characters
    const draw = () => {
      // Semi-transparent black background to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set color and font
      ctx.fillStyle = '#84cc16';
      ctx.font = `${fontSize}px monospace`;
      
      // Looping over drops
      for (let i = 0; i < drops.length; i++) {
        // Generate random character
        const text = characters[Math.floor(Math.random() * characters.length)];
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Send the drop back to the top after it reaches the screen bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
          drops[i] = 0;
        }
        
        // Move drops down
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div suppressHydrationWarning className="relative h-screen w-full overflow-hidden bg-blue-400 pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-lime-950 opacity-80"></div>
      
      {/* Matrix rain canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-40"
      />
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(132, 204, 22, 0.15) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="mb-6 flex justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image 
                    src={logo} 
                    alt="EGA Marketing Agency Logo" 
                    width={120} 
                    height={60}
                    className="h-auto"
                  />
                </motion.div>
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {t('titleLine1')}
                </motion.span>
                <motion.span
                  className="block text-lime-500"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {t('titleLine2')}
                </motion.span>
              </h1>
              <motion.p
                className="mb-8 max-w-lg text-lg text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {t('description')}
              </motion.p>
              <motion.div
                className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.button
                  className="rounded-md bg-lime-500 px-8 py-3 text-lg font-semibold text-black transition duration-300 hover:bg-lime-400 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  
                >
                  <Link href='/contact' passHref >
                  {t('getStarted')}
                  </Link>
                </motion.button>
                <motion.button
                  className="rounded-md border border-lime-500 bg-transparent px-8 py-3 text-lg font-semibold text-lime-500 transition duration-300 hover:bg-lime-500/10 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  
                >
                  <Link href='/services' passHref >
                  {t('ourServices')}
                  </Link>
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Digital Code Terminal Visualization */}
              <div className="relative h-96 w-full">
                {/* Terminal container */}
                <motion.div
                  className="absolute left-1/2 top-1/2 h-72 w-80 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-md border border-lime-500/30 bg-black/60"
                  initial={{ boxShadow: "0 0 10px rgba(132, 204, 22, 0.2)" }}
                  animate={{ 
                    boxShadow: ["0 0 10px rgba(132, 204, 22, 0.2)", "0 0 20px rgba(132, 204, 22, 0.4)", "0 0 10px rgba(132, 204, 22, 0.2)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {/* Terminal header */}
                  <div className="flex h-8 w-full items-center bg-lime-900/40 px-4">
                    <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-xs text-lime-500">EGA_Terminal</div>
                  </div>
                  
                  {/* Terminal content */}
                  <div className="p-4">
                    <motion.div
                      className="text-xs text-lime-500"
                      initial={{ opacity: 1 }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        &gt; Initializing EGA Marketing System...
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                      >
                        &gt; Loading digital marketing modules...
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2 }}
                      >
                        &gt; Activating social media protocols...
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 3 }}
                      >
                        &gt; Algorithm optimization complete.
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 4 }}
                      >
                        &gt; Welcome to EGA Marketing Agency.
                      </motion.div>
                      <motion.div className="mt-4">
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 5 }}
                        >
                          &gt; Rendering brand logo...
                        </motion.span>
                      </motion.div>
                      <motion.div
                        className="mt-4 flex justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 6 }}
                      >
                        <motion.div className="text-center">
                          <div className="flex justify-center">
                            {['E', 'G', 'A'].map((letter, index) => (
                              <motion.span
                                key={`ascii-${letter}`}
                                className="mx-1 font-mono text-3xl text-lime-500"
                                initial={{ opacity: 0 }}
                                animate={{ 
                                  opacity: 1,
                                  textShadow: ["0 0 5px #84cc16", "0 0 15px #84cc16", "0 0 5px #84cc16"]
                                }}
                                transition={{ 
                                  opacity: { duration: 0.5, delay: 6 + index * 0.5 },
                                  textShadow: { duration: 2, repeat: Infinity, delay: index * 0.3 }
                                }}
                              >
                                {letter}
                              </motion.span>
                            ))}
                          </div>
                          <motion.div 
                            className="mt-2 text-xs uppercase text-lime-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 8 }}
                          >
                            MARKETING AGENCY
                          </motion.div>
                        </motion.div>
                      </motion.div>
                      <motion.div
                        className="mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 9 }}
                      >
                        &gt; Ready for your business growth...
                      </motion.div>
                      <motion.div className="mt-2 flex">
                        <motion.span 
                          className="text-lime-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 10 }}
                        >
                          &gt;
                        </motion.span>
                        <motion.span
                          className="ml-2 h-4 w-2 bg-lime-500"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Data flow animations */}
                {Array.from({ length: 6 }).map((_, i) => {
                  const delay = i * 0.5;
                  return (
                    <motion.div
                      key={`data-stream-${i}`}
                      className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 transform"
                      style={{
                        border: '1px solid rgba(132, 204, 22, 0.1)',
                        borderRadius: '50%',
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [0, 1],
                        opacity: [0, 0.2, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: delay,
                      }}
                    />
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
        <div className="flex flex-col items-center">
          <p className="mb-2 text-sm text-gray-400">{t('scrollText')}</p>
          <motion.div 
            className="h-12 w-6 rounded-full border border-gray-400 p-1"
            animate={{ boxShadow: ['0 0 0px #84cc16', '0 0 8px #84cc16', '0 0 0px #84cc16'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="h-2 ml-0.75 w-2 rounded-full bg-lime-500"
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
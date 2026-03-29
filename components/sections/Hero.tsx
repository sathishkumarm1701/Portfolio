'use client';

import { memo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiZap, FiTarget } from 'react-icons/fi';
import { containerVariants, itemVariants } from '@/lib/animations';

const Hero = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame for better performance
    const frame = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const stats = [
    { icon: FiCode, label: '3+ Years', value: 'Experience' },
    { icon: FiZap, label: '30%', value: 'Performance Boost' },
    { icon: FiTarget, label: '1M+', value: 'Users Impacted' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto text-center z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
      >
        {/* Premium Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-block"
        >
          <motion.div
            className="px-6 py-3 rounded-full glass text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 border border-purple-500/30 backdrop-blur-md"
            whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.6)' }}
            aria-label="Premium React Native Developer Badge"
          >
            ✨ Premium React Native Developer
          </motion.div>
        </motion.div>

        {/* Main Title with Premium Animation */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4 leading-tight">
            <span className="block mb-2">
              <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sathish Kumar M
              </span>
            </span>
          </h1>
          <motion.p
            className="text-2xl sm:text-3xl text-slate-300 font-light tracking-wide"
            variants={itemVariants}
          >
            React Native Developer | OTT & Fire TV Specialist
          </motion.p>
        </motion.div>

        {/* Premium Tagline */}
        <motion.div variants={itemVariants} className="mb-12 max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
            Chennai-based React Native developer crafting <span className="text-purple-400 font-semibold">high-performance streaming experiences</span> that serve <span className="text-purple-400 font-semibold">millions of users</span> worldwide. 
            <br />
            <span className="text-slate-400 text-base mt-4 block">Proven track record: 30% performance improvements, 40% seek optimization, Amazon collaboration.</span>
          </p>
        </motion.div>

        {/* Premium Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="glass p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Icon className="text-purple-400 text-2xl mx-auto mb-2" />
                <div className="text-sm text-slate-400">{stat.label}</div>
                <div className="text-lg font-bold text-purple-300">{stat.value}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Premium CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 border-2 border-purple-500 rounded-lg font-bold text-purple-300 hover:bg-purple-500/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-slate-400 text-sm flex flex-col items-center gap-2">
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;

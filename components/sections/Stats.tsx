'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { containerVariants, itemVariants } from '@/lib/animations';

const Stats = memo(() => {
  // Start with target values as fallback for slow connections
  const targets = { experience: 3, projects: 4, users: 1, performance: 40 };
  
  const [counts, setCounts] = useState(targets);

  useEffect(() => {
    // Only animate if user prefers motion (accessibility)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    // Start from 0 for animation
    setCounts({
      experience: 0,
      projects: 0,
      users: 0,
      performance: 0,
    });

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        experience: Math.floor(targets.experience * progress * 10) / 10,
        projects: Math.floor(targets.projects * progress),
        users: Math.floor(targets.users * progress * 10) / 10,
        performance: Math.floor(targets.performance * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(targets);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [targets]);

  const stats = [
    {
      value: `${counts.experience}+`,
      label: 'Years Experience',
      icon: '📅',
      color: 'from-blue-500 to-blue-600',
    },
    {
      value: `${counts.projects}`,
      label: 'Projects Delivered',
      icon: '🚀',
      color: 'from-purple-500 to-purple-600',
    },
    {
      value: `${counts.users}M+`,
      label: 'Users Reached',
      icon: '👥',
      color: 'from-pink-500 to-pink-600',
    },
    {
      value: `${counts.performance}%`,
      label: 'Performance Boost',
      icon: '⚡',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-xl blur-xl transition-opacity duration-300"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  '--tw-gradient-stops': `rgb(59, 130, 246), rgb(139, 92, 246)`,
                } as any}
              />
              <div className="relative glass p-8 rounded-xl hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <p className="text-slate-300 text-sm font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Stats.displayName = 'Stats';

export default Stats;

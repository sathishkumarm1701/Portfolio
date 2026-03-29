'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiUsers, FiAward, FiZap } from 'react-icons/fi';
import { containerVariants, itemVariants } from '@/lib/animations';

const Achievements = memo(() => {
  const achievements = [
    {
      icon: FiTrendingUp,
      title: '30% Performance Improvement',
      description: 'Optimized app performance through code splitting, lazy loading, and bundle optimization techniques.',
    },
    {
      icon: FiZap,
      title: '40% Seek Performance Boost',
      description: 'Enhanced video seeking experience using Shaka Player optimization and advanced caching strategies.',
    },
    {
      icon: FiUsers,
      title: '1M+ Users Reached',
      description: 'Built and maintained applications serving millions of users across OTT and Fire TV platforms.',
    },
    {
      icon: FiAward,
      title: 'Amazon Collaboration',
      description: 'Worked directly with Amazon engineers to optimize streaming experiences for Fire TV ecosystem.',
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
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Key Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass p-8 rounded-lg hover:border-blue-500/50 transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors flex-shrink-0">
                      <Icon className="text-blue-400 text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Achievements.displayName = 'Achievements';

export default Achievements;

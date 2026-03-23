'use client';

import { motion } from 'framer-motion';
import { FiCode, FiTv, FiZap, FiDatabase } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: FiCode,
      skills: ['React Native', 'React.js', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
      title: 'Streaming & TV',
      icon: FiTv,
      skills: ['Fire TV', 'Kepler SDK', 'Shaka Player', 'HLS/DASH', 'OTT Platforms', 'SpatialNavigation'],
    },
    {
      title: 'State Management',
      icon: FiDatabase,
      skills: ['Redux Toolkit', 'Redux Saga', 'Context API', 'Zustand'],
    },
    {
      title: 'Performance',
      icon: FiZap,
      skills: ['Code Splitting', 'Lazy Loading', 'Caching', 'Bundle Optimization', 'Memory Management'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass p-6 rounded-lg hover:border-blue-500/50 transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                      <Icon className="text-blue-400 text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>

                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skillIndex}
                        className="text-slate-300 text-sm flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

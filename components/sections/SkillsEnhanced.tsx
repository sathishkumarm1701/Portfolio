'use client';

import { motion } from 'framer-motion';
import { FiCode, FiTv, FiZap, FiDatabase } from 'react-icons/fi';

const SkillsEnhanced = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: FiCode,
      skills: [
        { name: 'React Native', level: 95 },
        { name: 'React.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
      ],
    },
    {
      title: 'Streaming & TV',
      icon: FiTv,
      skills: [
        { name: 'Fire TV', level: 93 },
        { name: 'Kepler SDK', level: 90 },
        { name: 'Shaka Player', level: 92 },
        { name: 'HLS/DASH', level: 88 },
      ],
    },
    {
      title: 'State Management',
      icon: FiDatabase,
      skills: [
        { name: 'Redux Toolkit', level: 94 },
        { name: 'Redux Saga', level: 91 },
        { name: 'Context API', level: 85 },
        { name: 'Zustand', level: 80 },
      ],
    },
    {
      title: 'Performance',
      icon: FiZap,
      skills: [
        { name: 'Code Splitting', level: 90 },
        { name: 'Lazy Loading', level: 92 },
        { name: 'Caching', level: 88 },
        { name: 'Optimization', level: 91 },
      ],
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass p-8 rounded-lg hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <Icon className="text-blue-400 text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-300 font-medium">{skill.name}</span>
                          <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsEnhanced;

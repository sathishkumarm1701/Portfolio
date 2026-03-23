'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      year: '2024 - Present',
      title: 'Software Developer',
      company: 'Sun TV Network',
      description: 'Leading development of SunNXT streaming platform',
      highlights: [
        '30% performance improvement',
        'Fire TV optimization',
        'Amazon collaboration',
      ],
    },
    {
      year: '2022 - 2024',
      title: 'React.js Developer',
      company: 'SAG Corps Technologies',
      description: 'Built scalable web and mobile applications',
      highlights: [
        'OrderFlow OMS development',
        'Real-time tracking systems',
        'Redux state management',
      ],
    },
    {
      year: '2020 - 2021',
      title: 'Full Stack Developer',
      company: 'Freelance',
      description: 'Developed various web and mobile applications',
      highlights: [
        'Jogado App development',
        'Responsive web design',
        'Backend API implementation',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Career Journey</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          {/* Interactive Timeline */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() => setActiveIndex(index)}
                className="cursor-pointer"
              >
                <div className={`glass p-6 rounded-lg transition-all duration-300 ${
                  activeIndex === index
                    ? 'border-blue-500/50 scale-105'
                    : 'border-slate-700/50 hover:border-blue-500/30'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeIndex === index
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                        : 'bg-slate-700'
                    }`}>
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <span className="text-sm text-blue-400 font-medium">{exp.year}</span>
                      </div>
                      <p className="text-slate-400 mb-2">{exp.company}</p>
                      <p className="text-slate-300 mb-4">{exp.description}</p>
                      
                      {/* Expandable highlights */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: activeIndex === index ? 1 : 0,
                          height: activeIndex === index ? 'auto' : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 pt-4 border-t border-slate-700">
                          {exp.highlights.map((highlight, hIndex) => (
                            <motion.div
                              key={hIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: hIndex * 0.1 }}
                              className="flex items-center gap-2 text-slate-300"
                            >
                              <span className="text-blue-400">✓</span>
                              <span>{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;

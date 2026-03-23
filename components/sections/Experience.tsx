'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'Sun TV Network',
      position: 'Software Developer',
      period: '2024 - Present',
      description: 'Leading development of SunNXT streaming platform for millions of users',
      achievements: [
        'Optimized app performance by 30% through code splitting and lazy loading',
        'Implemented Fire TV support reaching 500K+ users',
        'Collaborated with Amazon engineers on streaming optimization',
      ],
    },
    {
      company: 'SAG Corps Technologies',
      position: 'React.js Developer',
      period: '2022 - 2024',
      description: 'Developed and maintained multiple web applications',
      achievements: [
        'Built OrderFlow OMS with real-time updates',
        'Improved performance using advanced React patterns',
        'Implemented Redux for complex state management',
      ],
    },
    {
      company: 'Freelance',
      position: 'Full Stack Developer',
      period: '2020 - 2021',
      description: 'Developed various web and mobile applications',
      achievements: [
        'Created Jogado App for sports streaming',
        'Built responsive web applications with React.js',
        'Implemented backend APIs with Node.js and Express',
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
              <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline dot and line */}
                <div className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-dark-900" />
                  {index !== experiences.length - 1 && (
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-blue-500 to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="ml-20 glass p-6 rounded-lg hover:border-blue-500/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    <span className="text-sm text-blue-400 font-medium">{exp.period}</span>
                  </div>

                  <p className="text-slate-400 mb-4">{exp.company}</p>
                  <p className="text-slate-300 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-slate-300 text-sm flex items-start gap-3">
                        <span className="text-blue-400 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

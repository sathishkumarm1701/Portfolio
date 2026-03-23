'use client';

import { motion } from 'framer-motion';

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const highlights = [
    { label: '3+', value: 'Years Experience' },
    { label: '30%', value: 'Performance Improvement' },
    { label: '40%', value: 'Seek Performance Boost' },
    { label: '1M+', value: 'Users Reached' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate React Native developer with 3+ years of experience building high-performance streaming applications. My expertise spans OTT platforms, Amazon Fire TV optimization, and performance engineering.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                I've had the privilege of collaborating with Amazon engineers to optimize streaming experiences for millions of users. My focus is on creating seamless, performant applications that scale effortlessly.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="glass p-4 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold gradient-text">{item.label}</div>
                    <div className="text-sm text-slate-400">{item.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image/Visual */}
            <motion.div
              variants={itemVariants}
              className="relative h-96 rounded-lg overflow-hidden glass p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-slate-300 font-semibold">Building the Future</p>
                  <p className="text-slate-400 text-sm mt-2">of Streaming Technology</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

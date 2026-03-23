'use client';

import { motion } from 'framer-motion';
import { FiTv, FiSmartphone } from 'react-icons/fi';

const DeviceShowcaseSection = () => {
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
      transition: { duration: 0.6 },
    },
  };

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
              <span className="gradient-text">Multi-Platform Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
            <p className="text-slate-300 max-w-2xl mx-auto">
              Specialized in building high-performance applications for Fire TV, mobile devices, and web platforms
            </p>
          </motion.div>

          {/* Devices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Fire TV */}
            <motion.div
              variants={itemVariants}
              className="glass p-8 rounded-lg hover:border-blue-500/50 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 h-64 rounded-lg overflow-hidden bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center border border-blue-500/20">
                <div className="text-center">
                  <FiTv className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                  <p className="text-slate-300 font-semibold">Fire TV Device</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fire TV Optimization</h3>
              <p className="text-slate-300 mb-4">
                Expert in optimizing applications for Amazon Fire TV ecosystem with focus on performance and user experience.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Kepler SDK Integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Remote Control Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Performance Tuning
                </li>
              </ul>
            </motion.div>

            {/* Mobile */}
            <motion.div
              variants={itemVariants}
              className="glass p-8 rounded-lg hover:border-blue-500/50 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 h-64 rounded-lg overflow-hidden bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center border border-blue-500/20">
                <div className="text-center">
                  <FiSmartphone className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                  <p className="text-slate-300 font-semibold">Mobile Device</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mobile Development</h3>
              <p className="text-slate-300 mb-4">
                Building cross-platform mobile applications with React Native for iOS and Android with seamless performance.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  React Native Expertise
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Native Module Integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  App Store Optimization
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeviceShowcaseSection;

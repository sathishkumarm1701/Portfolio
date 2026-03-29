'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { containerVariants, itemVariants } from '@/lib/animations';

const Certifications = memo(() => {
  const certifications = [
    {
      title: 'React Native: The Practical Guide',
      issuer: 'Udemy',
      date: 'Completed 2024',
      credentialId: 'UC-70d1192f-bfec-4c94-b20b-dc535f6bfd92',
      credentialUrl: 'https://www.udemy.com/certificate/UC-70d1192f-bfec-4c94-b20b-dc535f6bfd92/',
      description: 'Comprehensive React Native course covering mobile app development, state management, and performance optimization.',
      skills: ['React Native', 'Mobile Development', 'JavaScript', 'State Management'],
      icon: '📱',
    },
    {
      title: 'JavaScript Fundamentals',
      issuer: 'Udemy',
      date: 'Completed 2023',
      credentialId: 'UC-xxxxx-xxxxx',
      credentialUrl: '#',
      description: 'Core JavaScript concepts, ES6+, async programming, and best practices.',
      skills: ['JavaScript', 'ES6+', 'Async Programming'],
      icon: '⚡',
    },
    {
      title: 'React.js Advanced Patterns',
      issuer: 'Udemy',
      date: 'Completed 2023',
      credentialId: 'UC-yyyyy-yyyyy',
      credentialUrl: '#',
      description: 'Advanced React patterns, hooks, performance optimization, and state management.',
      skills: ['React.js', 'Hooks', 'Performance', 'Redux'],
      icon: '⚛️',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
              <span className="gradient-text">Certifications & Credentials</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <div className="text-5xl mb-4">{cert.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>

                {/* Issuer & Date */}
                <div className="flex items-center gap-2 mb-3">
                  <FiAward className="text-blue-400" size={16} />
                  <span className="text-sm text-slate-300">
                    {cert.issuer} • {cert.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-xs text-slate-400 mb-2 font-semibold">Skills Covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential Link */}
                {cert.credentialUrl !== '#' && (
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    whileHover={{ x: 5 }}
                  >
                    View Credential
                    <FiExternalLink size={14} />
                  </motion.a>
                )}

                {/* Credential ID */}
                <p className="text-xs text-slate-500 mt-3 break-all">
                  ID: {cert.credentialId}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 glass rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-slate-300 mb-4">
              I'm committed to continuous learning and staying updated with the latest technologies. 
              I regularly take online courses, participate in tech communities, and explore new frameworks and tools.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-blue-400 font-semibold mb-2">Current Focus</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Advanced React Native Patterns</li>
                  <li>• Fire TV Optimization</li>
                  <li>• Performance Engineering</li>
                </ul>
              </div>
              <div>
                <p className="text-blue-400 font-semibold mb-2">Platforms</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Udemy</li>
                  <li>• Coursera</li>
                  <li>• Official Documentation</li>
                </ul>
              </div>
              <div>
                <p className="text-blue-400 font-semibold mb-2">Community</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Tech Meetups</li>
                  <li>• Open Source</li>
                  <li>• Developer Communities</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

Certifications.displayName = 'Certifications';

export default Certifications;

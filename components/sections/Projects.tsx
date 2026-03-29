'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { containerVariants, itemVariants } from '@/lib/animations';

const Projects = memo(() => {
  const projects = [
    {
      title: 'SunNXT',
      description: 'Premium OTT streaming platform with millions of users. Optimized for Fire TV and mobile devices with advanced video streaming capabilities.',
      tech: ['React Native', 'Fire TV', 'Redux Toolkit', 'Shaka Player', 'SpatialNavigation', 'Axios', 'WebView'],
      achievements: [
        '30% performance improvement',
        '500K+ Fire TV users',
        'Amazon collaboration',
      ],
      link: 'https://www.sunnxt.com',
      image: '/sunnxt-showcase.svg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with actual video
      featured: true,
    },
    {
      title: 'OrderFlow OMS',
      description: 'Order Management System with real-time updates and analytics dashboard. Built for scalability and performance.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Socket.io'],
      achievements: [
        'Real-time order tracking',
        'Advanced analytics',
        'Scalable architecture',
      ],
      link: 'https://simpleoms.in',
      image: '/orderflow-showcase.svg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      title: 'Jogado App',
      description: 'Stadium seat booking application with interactive stadium selection and real-time seat availability. Seamless booking experience for sports events.',
      tech: ['React Native', 'Firebase', 'Redux Saga', 'Real-time Updates'],
      achievements: [
        'Interactive stadium selection',
        'Real-time seat availability',
        'Seamless booking flow',
      ],
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;

'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiLinkedin } from 'react-icons/fi';

const PremiumCTA = () => {
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

  const actions = [
    {
      icon: FiDownload,
      label: 'Download Resume',
      href: '/resume.pdf',
      color: 'from-blue-500 to-blue-600',
      description: 'PDF • 2 Pages',
    },
    {
      icon: FiMail,
      label: 'Email Me',
      href: 'mailto:sathishm1701@gmail.com',
      color: 'from-purple-500 to-purple-600',
      description: 'sathishm1701@gmail.com',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/sathish-kumar-m-453464265/',
      color: 'from-indigo-500 to-indigo-600',
      description: 'Connect with me',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Ready to Work Together?</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Let's discuss how I can help you build exceptional streaming experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.a
                  key={index}
                  href={action.href}
                  target={action.href.startsWith('http') ? '_blank' : undefined}
                  rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${action.color} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-opacity duration-300`} />
                  <div className="relative glass p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group-hover:scale-105">
                    <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${action.color} mb-4`}>
                      <Icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{action.label}</h3>
                    <p className="text-slate-400 text-sm">{action.description}</p>
                    <div className="mt-4 text-purple-400 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                      Get Started →
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumCTA;

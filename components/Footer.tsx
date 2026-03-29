'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const Footer = () => {

  const socialLinks = [
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sathish-kumar-m-453464265/', label: 'LinkedIn' },
    { icon: FiGithub, href: 'https://github.com/sathishkumarm1701', label: 'GitHub' },
    { icon: FiMail, href: 'mailto:sathishm1701@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">SK</h3>
            <p className="text-slate-200 text-sm">
              Building high-performance streaming experiences
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-slate-50 mb-3">Quick Links</h4>
            <ul className="space-y-1 text-sm text-slate-200">
              <li>
                <Link href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-slate-50 mb-3">Resume</h4>
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-white text-sm font-medium hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload size={16} />
              Download
            </motion.a>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 py-4 border-t border-slate-700">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-slate-300 hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <link.icon size={24} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-slate-400 text-sm pt-4">
          <p>© 2026 Sathish Kumar M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

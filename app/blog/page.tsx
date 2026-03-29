'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import Blog from '@/components/sections/Blog';

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link href="/">
          <motion.button
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
            whileHover={{ x: -5 }}
          >
            <FiArrowLeft size={20} />
            Back to Home
          </motion.button>
        </Link>
      </div>

      {/* Blog Section */}
      <Blog />
    </div>
  );
}

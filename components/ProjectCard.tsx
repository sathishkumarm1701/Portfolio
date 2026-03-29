'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiPlay, FiX } from 'react-icons/fi';
import ReactPlayer from 'react-player';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  achievements: string[];
  link?: string;
  github?: string;
  videoUrl?: string;
  image?: string;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  tech,
  achievements,
  link,
  github,
  videoUrl,
  image,
  featured,
}: ProjectCardProps) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <motion.div
        className={`glass rounded-lg overflow-hidden group hover:border-blue-500/50 transition-all duration-300 ${
          featured ? 'lg:col-span-2' : ''
        }`}
        whileHover={{ y: -5 }}
      >
        {/* Image or Video Preview */}
        {image || videoUrl ? (
          <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
            {image && (
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
              />
            )}
            {videoUrl && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  onClick={() => setShowVideo(true)}
                  aria-label={`Play video for ${title}`}
                  className="p-4 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiPlay size={24} className="text-white" />
                </motion.button>
              </div>
            )}
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ) : null}

        {/* Project Header */}
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <div className="flex gap-2">
              {link && (
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${title} project`}
                  className="p-2 bg-blue-500/20 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink size={20} />
                </motion.a>
              )}
              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} on GitHub`}
                  className="p-2 bg-blue-500/20 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub size={20} />
                </motion.a>
              )}
            </div>
          </div>

          <p className="text-slate-300 mb-6 leading-relaxed">{description}</p>

          {/* Tech Stack */}
          <div className="mb-6">
            <p className="text-sm text-slate-400 mb-3 font-semibold">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((t, idx) => (
                <motion.span
                  key={idx}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <p className="text-sm text-slate-400 mb-3 font-semibold">Key Achievements</p>
            <ul className="space-y-2">
              {achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  className="text-slate-300 text-sm flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                aria-label="Close video player"
                className="absolute top-4 right-4 p-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors z-10"
              >
                <FiX size={24} className="text-white" />
              </button>

              <div className="aspect-video">
                <ReactPlayer
                  url={videoUrl}
                  playing
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;

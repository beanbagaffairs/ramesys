'use client';

import { motion } from "motion/react";

export const BenefitsBanner = () => {
  return (
    <div
      className="w-full rounded-full bg-linear-to-r from-purple-900/20 via-purple-800/30 to-violet-900/20 px-6 py-4 shadow-lg"
      style={{ boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
    >
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-check-icon lucide-check text-purple-700"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            >
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <path d="M20 6 9 17l-5-5" />
            </motion.svg>
          <span className="text-md font-semibold text-white gradient-text">
            No Page Builders
          </span>
        </motion.div>
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradient2)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-check-icon lucide-check text-purple-700"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
            >
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <path d="M20 6 9 17l-5-5" />
            </motion.svg>
          <span className="text-md font-semibold text-white gradient-text">
            Clean Codebase
          </span>
        </motion.div>
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradient3)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-check-icon lucide-check text-purple-700"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
            >
              <defs>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <path d="M20 6 9 17l-5-5" />
            </motion.svg>
          <span className="text-md font-semibold text-white gradient-text">
            Future-Ready Systems
          </span>
        </motion.div>
      </div>
    </div>
  );
};

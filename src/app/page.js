"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToLeft } from '@/components/layout/ToLeft';
import { ToRight } from '@/components/layout/ToRight';
import { ScaleUp } from '@/components/layout/ScaleUp';

export default function IntroPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for 2.5 seconds then trigger the split animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-black text-secondary">
      <AnimatePresence>
        {loading && (
          <ScaleUp>
            <ToLeft delay={1}>
              SETH
            </ToLeft>
            <ToRight delay={1.25}>
              ARVIN
            </ToRight>
            <ToLeft delay={1.75}>
              GRIPON
            </ToLeft>
          </ScaleUp>
        )}
      </AnimatePresence>

      {/* Main Content (visible after split) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: loading ? 0 : 1, scale: loading ? 0.8 : 1 }}
        transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center bg-white"
      >
        <div className="text-center px-8">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: loading ? 30 : 0, opacity: loading ? 0 : 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-6xl font-bold text-gray-900 mb-6"
          >
            Welcome to Seth's World
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: loading ? 30 : 0, opacity: loading ? 0 : 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-xl text-gray-600 mb-8"
          >
            Tanginamo
          </motion.p>

          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: loading ? 30 : 0, opacity: loading ? 0 : 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Try me bitch
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
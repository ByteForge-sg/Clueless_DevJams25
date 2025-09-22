// src/components/IntroPage.js
import React from "react";
import { motion } from "framer-motion";

export default function IntroPage({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-300 to-pink-200">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 text-center text-white drop-shadow-lg"
      >
        Welcome to Outfit Generator
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-lg md:text-xl mb-8 text-center text-white"
      >
        Mix & match your wardrobe, create outfits instantly, and share with friends!
      </motion.p>

      {/* Get Started Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="px-8 py-4 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
      >
        Get Started
      </motion.button>

      {/* Optional Footer / Backend Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="mt-10 text-white text-sm"
      >
        Powered by Outfit Generator Backend
      </motion.div>
    </div>
  );
}
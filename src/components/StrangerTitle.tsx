import React from 'react';
import { motion } from 'framer-motion';

export const StrangerTitle: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 relative">
      <motion.div
        initial={{ scale: 2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
         {/* Using arbitrary tailwind values for text-stroke and specific shadows since standard tailwind doesn't cover them all perfectly without config extension */}
         {/* Mobile responsive text sizes */}
        <h1 
          className="text-5xl md:text-8xl lg:text-9xl font-black text-transparent tracking-tighter uppercase font-serif [text-shadow:0_0_10px_#ff0000,0_0_20px_#ff0000,0_0_40px_#aa0000,inset_0_0_20px_rgba(0,0,0,0.5)] [-webkit-text-stroke:2px_#ff1111]"
        >
          Stranger Things
        </h1>
        {/* The horizontal bars */}
        <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 2, duration: 1 }}
            className="h-1 md:h-2 bg-red-600 shadow-[0_0_15px_#ff0000] mt-[-5px] md:mt-[-20px] mx-auto opacity-80" 
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="mt-4 md:mt-8 text-center"
      >
        <h2 className="text-red-400/80 font-mono tracking-[0.2em] text-xs md:text-sm uppercase mb-2">
          2026 Edition
        </h2>
        <h2 
            className="text-3xl md:text-5xl font-black text-transparent tracking-widest uppercase font-serif [text-shadow:0_0_10px_#ff0000,0_0_20px_#aa0000] [-webkit-text-stroke:1px_#ff2a2a] animate-pulse"
            style={{ fontFamily: '"Merriweather", serif' }}
        >
          I Love You Gulumulu
        </h2>
      </motion.div>
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Bike } from 'lucide-react';

export const BikeParade: React.FC = () => {
  return (
    <div className="w-full h-32 relative overflow-hidden my-12 opacity-80 pointer-events-none">
      {/* The Road */}
      <div className="absolute bottom-0 w-full h-1 bg-red-900/50 box-shadow-[0_0_10px_#f00]"></div>
      
      {/* Bikes */}
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: "-50vw" }}
        transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear",
            delay: 2
        }}
        className="absolute bottom-1 flex gap-8 items-end"
      >
        {[0, 1, 2, 3].map((i) => (
            <div key={i} className="relative">
                <Bike className="text-red-900 fill-black w-12 h-12 md:w-16 md:h-16 transform -scale-x-100" />
                {/* Wheels glow */}
                <div className="absolute bottom-1 left-1 w-4 h-4 bg-red-500/20 rounded-full blur-[2px] animate-pulse"></div>
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-red-500/20 rounded-full blur-[2px] animate-pulse"></div>
                 {/* Flashlight beam */}
                <div className="absolute top-4 left-[-40px] w-24 h-12 bg-gradient-to-l from-yellow-200/10 to-transparent transform -rotate-12 clip-path-triangle"></div>
            </div>
        ))}
      </motion.div>

       <style>{`
        .clip-path-triangle {
            clip-path: polygon(100% 40%, 0 0, 0 100%);
        }
      `}</style>
    </div>
  );
};

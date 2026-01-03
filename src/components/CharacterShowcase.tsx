import React from 'react';
import { motion } from 'framer-motion';

import elevenImg from '../assets/characters/eleven.png';
import mikeImg from '../assets/characters/mike.png';
import dustinImg from '../assets/characters/dustin.png';
import lucasImg from '../assets/characters/lucas.png';
import willImg from '../assets/characters/will.png';
import maxImg from '../assets/characters/max.png';

const CHARACTERS = [
  { name: "Eleven", role: " The Mage", trait: "Telekinetic", image: elevenImg },
  { name: "Mike", role: "The Paladin", trait: "Leader", image: mikeImg },
  { name: "Dustin", role: "The Bard", trait: "Tech Whiz", image: dustinImg },
  { name: "Lucas", role: "The Ranger", trait: "Skeptic", image: lucasImg },
  { name: "Will", role: "The Cleric", trait: "Survivor", image: willImg },
  { name: "Max", role: "The Zoomer", trait: "Skater", image: maxImg },
];

export const CharacterShowcase: React.FC = () => {
  return (
    <div className="w-full py-16">
       <h3 className="text-2xl md:text-4xl font-black text-center text-transparent stroke-red tracking-widest uppercase mb-12 font-serif"
            style={{ 
                fontFamily: '"Merriweather", serif',
                WebkitTextStroke: '1px #ff2a2a',
                textShadow: '0 0 15px rgba(255, 0, 0, 0.5)'
            }}
       >
         The Party
       </h3>

       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 max-w-[1600px] mx-auto">
          {CHARACTERS.map((char, index) => (
             <motion.div 
                key={char.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-80 bg-black border border-red-900/40 rounded-lg overflow-hidden hover:border-red-500 transition-colors cursor-pointer shadow-[0_0_20px_rgba(200,0,0,0.1)]"
             >
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-transparent to-transparent opacity-60 z-10 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Character Image */}
                <img 
                    src={char.image} 
                    alt={char.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter sepia-[0.5] contrast-125 group-hover:sepia-0"
                />

                <div className="absolute bottom-0 w-full p-4 border-t border-red-900/30 bg-black/80 z-20 backdrop-blur-sm">
                    <div className="text-red-500 font-bold uppercase tracking-wider text-sm">{char.name}</div>
                    <div className="text-red-400/60 text-xs font-mono">{char.role}</div>
                </div>
             </motion.div>
          ))}
       </div>
    </div>
  );
};

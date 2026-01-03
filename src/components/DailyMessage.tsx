import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const MESSAGES = [
  "You are arguably the best thing that ever happened to me.",
  "My heart beats in 8-bit whenever I see you.",
  "In a world full of Demogorgons, you're my Eleven.",
  "I'd bike to the Upside Down and back for you.",
  "You're stranger than fiction, in the best way possible.",
  "Friends don't lie, and I'm not lying when I say I love you.",
  "Every day with you is a new season of happiness.",
  "You light up my world like the Christmas lights on the wall.",
  "I promise to never be a mouth-breather around you.",
  "You're my favorite mystery to solve.",
  "Keeping the door open 3 inches just for you.",
  "You turn my world upside down (in a good way).",
  "I'm stuck in the Upside Down of your love.",
  "You're the D&D party member I'd never sacrifice.",
  "Mornings are for coffee and contemplation... of how cute you are.",
  "If you were a waffle, I'd never let go.",
  "You are 011 out of 10.",
  "I love you more than Dustin loves chocolate pudding.",
  "Together we can fight any Mind Flayer.",
  "You're cooler than Steve Harrington's hair.",
  "My love for you grows like the vines in the tunnels.",
  "You are the soundtrack to my 80s movie life.",
  "Let's make a promise to never grow up.",
  "You're the only 10 I see.",
  "I'd share my Eggos with you.",
  "You make every day feel like a cinematic adventure.",
  "I'm totally tubu-love with you.",
  "You're the max to my Lucas.",
  "Even a shadow monster couldn't scare me away from you.",
  "You're prettier than Nancy Wheeler.",
  "I'll be your Hopper if you'll be my Jo.",
  // Use modulo for infinite
];

export const DailyMessage: React.FC = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
  
  const message = useMemo(() => {
    // Deterministic selection based on day of year
    return MESSAGES[dayOfYear % MESSAGES.length];
  }, [dayOfYear]);
  
  const dateStr = today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="relative w-full max-w-xl mx-auto p-8 rounded-lg border-4 border-double border-red-900/50 bg-[#1a0505] shadow-[0_0_50px_rgba(200,0,0,0.1)] overflow-hidden group">
        {/* Background texture - Wall like */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] mix-blend-overlay"></div>
        
        {/* Christmas Lights TOP */}
        <div className="absolute top-0 left-0 right-0 flex justify-around -mt-3 opacity-80">
            {['red', 'green', 'yellow', 'blue', 'red', 'green'].map((color, i) => (
                <div key={i} className={`w-4 h-6 rounded-b-full shadow-[0_0_10px_${color}] ${color === 'red' ? 'bg-red-500' : color === 'green' ? 'bg-green-500' : color === 'yellow' ? 'bg-yellow-400' : 'bg-blue-500'} animate-pulse`} style={{ animationDelay: `${i * 0.5}s` }}></div>
            ))}
        </div>

      <div className="flex justify-between items-end mb-6 border-b border-red-900/30 pb-2 relative z-10">
         <span className="uppercase text-xs tracking-[0.3em] text-red-700/70 font-serif">Hawkins Lab Record</span>
         <span className="text-xs font-mono text-red-500/50">{dateStr}</span>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="min-h-[120px] flex items-center justify-center text-center relative z-10"
      >
        <p className="text-2xl md:text-3xl font-bold leading-relaxed font-serif text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          "{message}"
        </p>
      </motion.div>
    </div>
  );
};

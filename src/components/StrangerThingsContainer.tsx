import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StrangerTitle } from './StrangerTitle';
import { DailyMessage } from './DailyMessage';
import { Calendar2026 } from './Calendar2026';
import { TodoList } from './TodoList';

export const StrangerThingsContainer: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ff2a2a] overflow-hidden relative font-sans w-full">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black z-10"></div>
      
      {/* Red Fog / Glow */}
      <div className="fixed top-0 left-0 right-0 h-64 bg-red-900/10 blur-[100px] pointer-events-none"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 py-8 flex flex-col items-center w-full h-full">
        
        <StrangerTitle />

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-full mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Messages & Calendar */}
          <div className="lg:col-span-7 space-y-8">
            <DailyMessage />
            <div className="glass-panel p-6 rounded-xl border border-red-900/30 bg-black/40 backdrop-blur-sm shadow-[0_0_30px_rgba(200,0,0,0.05)]">
             <Calendar2026 onSelectDate={setSelectedDate} selectedDate={selectedDate} />
            </div>
          </div>

          {/* Right Column: Todo List */}
          <div className="lg:col-span-5 h-[600px] lg:h-auto lg:self-stretch">
             <TodoList selectedDate={selectedDate} />
          </div>

        </motion.div>
      </div>

      {/* Floating Particles (Dust Motes) */}
      <DustMotes />
    </div>
  );
};

const DustMotes = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-red-500/20 rounded-full blur-[1px]"
          style={{
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

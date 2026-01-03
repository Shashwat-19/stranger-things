import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

interface CalendarProps {
  onSelectDate: (date: Date | null) => void;
  selectedDate: Date | null;
}

export const Calendar2026: React.FC<CalendarProps> = ({ onSelectDate, selectedDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  // Default to 2026 as requested
  const YEAR = 2026;

  const daysInMonth = new Date(YEAR, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(YEAR, currentMonth, 1).getDay(); // 0 is Sunday

  const handlePrev = () => setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1));
  const handleNext = () => setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1));

  // Generate days array
  const days = [];
  // Fill empty slots
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  // Fill days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const today = new Date();
  
  // Helper to check if a day is selected
  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return selectedDate.getDate() === day && 
           selectedDate.getMonth() === currentMonth && 
           selectedDate.getFullYear() === YEAR;
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(YEAR, currentMonth, day);
    // Toggle selection if clicking same date? Or always select. Let's toggle for now to allow "General" view (null)
    if (isSelected(day)) {
        onSelectDate(null);
    } else {
        onSelectDate(newDate);
    }
  };

  const isCurrentMonth = today.getMonth() === currentMonth && today.getFullYear() === YEAR;

  return (
    <div className="text-red-500 font-serif w-full">
      <div className="flex items-center justify-between mb-6 border-b-2 border-red-900 pb-4">
        <button onClick={handlePrev} className="hover:text-red-300 transition-colors" aria-label="Previous Month">
            <ChevronLeft size={32} />
        </button>
        <div className="text-center">
            <h3 className="text-2xl font-black uppercase tracking-widest text-[#ff2a2a] drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]">
                {MONTHS[currentMonth]}
            </h3>
            <span className="text-sm font-mono text-red-500/60 uppercase tracking-[0.5em]">{YEAR}</span>
        </div>
        <button onClick={handleNext} className="hover:text-red-300 transition-colors" aria-label="Next Month">
            <ChevronRight size={32} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center mb-2 font-mono text-xs text-red-400/70">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
            <div key={d} className="py-1">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => {
            const isToday = isCurrentMonth && day === today.getDate();
            const selected = day ? isSelected(day) : false;
            
            return (
                <div 
                    key={index} 
                    onClick={() => day && handleDateClick(day)}
                    className={`
                        aspect-square flex items-center justify-center rounded-sm text-lg relative transition-all duration-300
                        ${day ? 'cursor-pointer' : ''}
                        ${selected ? 'bg-red-600 text-black font-bold shadow-[0_0_15px_#ff0000] scale-110 z-10' : 'hover:bg-red-900/30'}
                        ${!selected && isToday ? 'border border-red-500 text-red-300' : ''}
                    `}
                >
                    {day}
                    {/* Selection indicator DOT if todo exists? (Maybe later) */}
                </div>
            );
        })}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-[10px] font-mono text-red-900/50 uppercase">Hawkins Lab • Dept of Energy</p>
      </div>
    </div>
  );
};

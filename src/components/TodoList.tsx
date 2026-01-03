import React, { useState, useEffect } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TodoListProps {
  selectedDate: Date | null;
}

interface Todos {
  [key: string]: string[];
}

export const TodoList: React.FC<TodoListProps> = ({ selectedDate }) => {
  const [todos, setTodos] = useState<Todos>({});
  const [inputValue, setInputValue] = useState('');
  
  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('stranger-todos');
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  // Save to local storage whenever todos change
  useEffect(() => {
    localStorage.setItem('stranger-todos', JSON.stringify(todos));
  }, [todos]);

  const dateKey = selectedDate 
    ? selectedDate.toISOString().split('T')[0] 
    : 'general';

  const handleAdd = () => {
    if (!inputValue.trim()) return;
    
    setTodos(prev => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), inputValue]
    }));
    setInputValue('');
  };

  const handleRemove = (index: number) => {
    setTodos(prev => ({
      ...prev,
      [dateKey]: prev[dateKey].filter((_, i) => i !== index)
    }));
  };

  const displayDate = selectedDate 
    ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
    : "General Notes / Any Time";

  return (
    <div className="h-full bg-black/60 border border-red-900/50 rounded-xl p-6 backdrop-blur-md flex flex-col font-mono relative overflow-hidden">
      {/* Decorative top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-red-500 uppercase tracking-widest mb-1 shadow-red-glow">
          {selectedDate ? 'Mission Log' : 'General Archive'}
        </h3>
        <p className="text-xs text-red-400/60 uppercase tracking-widest border-b border-red-900/30 pb-2">
          {displayDate}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2 custom-scrollbar">
        <AnimatePresence>
          {(todos[dateKey] || []).length === 0 && (
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-center text-red-900/40 italic text-sm mt-10"
            >
                No entries found in this sector.
            </motion.div>
          )}
          {(todos[dateKey] || []).map((todo, index) => (
            <motion.div
              key={`${dateKey}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="group flex items-center justify-between bg-red-900/10 border border-red-500/20 p-3 rounded hover:bg-red-900/20 transition-colors"
            >
              <span className="text-red-100/90 text-sm">{todo}</span>
              <button 
                onClick={() => handleRemove(index)}
                className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-400 transition-opacity"
                aria-label="Remove todo"
              >
                <Trash2 size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex gap-2 items-center mt-auto border-t border-red-900/30 pt-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="New entry..."
          className="flex-1 bg-black/50 border border-red-900/50 rounded px-3 py-2 text-sm text-red-100 focus:outline-none focus:border-red-500/80 transition-colors placeholder:text-red-900/50"
        />
        <button
          onClick={handleAdd}
          disabled={!inputValue.trim()}
          className="bg-red-900/30 hover:bg-red-900/50 border border-red-500/30 text-red-500 p-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Add todo"
        >
          <Plus size={18} />
        </button>
      </div>

      <style>{`
        .shadow-red-glow {
            text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(50, 0, 0, 0.2);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(200, 0, 0, 0.4);
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
};

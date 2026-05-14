'use client';

import { motion } from 'framer-motion';

export function ScenePipeline({ elapsed }: { elapsed: number; isPlaying: boolean }) {
  const columns = ['TODO', 'IN PROGRESS', 'REVIEW'];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* 0.0s: Heading */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={elapsed >= 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        className="mb-12 text-center"
      >
        <h3 className="text-xl md:text-2xl font-noto-serif text-bone">Pipeline</h3>
      </motion.div>

      {/* Kanban Grid */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-4xl h-80">
        {columns.map((col, colIdx) => (
          <div
            key={col}
            className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-4 relative"
          >
            <div className="text-[10px] font-bold tracking-[0.2em] text-bone/30 uppercase mb-2">{col}</div>
            
            <div className="flex-1 flex flex-col gap-4">
              {/* Card 1 Position Logic */}
              <div className="h-28 relative">
                {((colIdx === 0 && elapsed >= 1500 && elapsed < 3500) || 
                  (colIdx === 1 && elapsed >= 3500 && elapsed < 5500) || 
                  (colIdx === 2 && elapsed >= 5500)) && (
                  <motion.div
                    layoutId="card-1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className={`absolute inset-0 p-4 rounded-xl shadow-2xl flex flex-col justify-between ${
                      colIdx === 2 ? 'bg-brass border border-brass' : 'bg-white/10 border border-white/20'
                    }`}
                  >
                    <div className={`w-10 h-2 rounded mb-3 ${colIdx === 2 ? 'bg-white/40' : 'bg-brass/40'}`}></div>
                    <div className="space-y-2">
                      <div className={`h-2 w-full rounded ${colIdx === 2 ? 'bg-white/60' : 'bg-bone/20'}`}></div>
                      <div className={`h-2 w-2/3 rounded ${colIdx === 2 ? 'bg-white/40' : 'bg-bone/10'}`}></div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Card 2 Position Logic */}
              <div className="h-28 relative">
                {((colIdx === 0 && elapsed >= 1700 && elapsed < 4500) || 
                  (colIdx === 1 && elapsed >= 4500)) && (
                  <motion.div
                    layoutId="card-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="absolute inset-0 bg-white/10 border border-white/20 p-4 rounded-xl shadow-lg flex flex-col justify-between"
                  >
                    <div className="w-10 h-2 bg-blue-400/30 rounded mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-bone/20 rounded"></div>
                      <div className="h-2 w-1/2 bg-bone/10 rounded"></div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 6.5s: Highlight Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={elapsed >= 6500 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mt-12 bg-brass/10 border border-brass/20 px-8 py-4 rounded-full"
      >
        <span className="text-brass font-bold text-sm tracking-wide">
          ドラッグ＆ドロップで案件の進捗を一画面で
        </span>
      </motion.div>
    </div>
  );
}

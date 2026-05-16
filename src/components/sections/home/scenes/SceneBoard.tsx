'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function SceneBoard({ elapsed }: { elapsed: number; isPlaying: boolean }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* 0.0s: Heading */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={elapsed >= 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        className="mb-6 text-center"
      >
        <h3 className="text-xl md:text-2xl font-noto-serif text-bone">Client Board</h3>
      </motion.div>

      {/* 0.5s: Chat Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={elapsed >= 500 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg bg-bone/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md shadow-2xl h-[340px] flex flex-col gap-4 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-2">
          <div className="w-8 h-8 rounded-full bg-brass/40 flex items-center justify-center text-[10px] font-bold text-brass">CL</div>
          <div className="h-2.5 w-32 bg-bone/20 rounded"></div>
        </div>

        <div className="flex-1 flex flex-col gap-4 pr-2">
          {/* 1.0s: Msg 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={elapsed >= 1000 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="flex gap-3 max-w-[80%]"
          >
            <div className="w-6 h-6 rounded-full bg-bone/20 shrink-0"></div>
            <div className="flex flex-col gap-2">
              <div className="bg-bone/10 p-3 rounded-2xl rounded-tl-none">
                <div className="h-2 w-48 bg-bone/40 rounded mb-2"></div>
                <div className="h-2 w-32 bg-bone/20 rounded"></div>
              </div>
              
              {/* 1.5s: Images */}
              <div className="flex gap-2">
                {[1, 2].map(i => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={elapsed >= 1500 + i * 100 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-12 bg-bone/10 rounded-lg border border-white/5 flex items-center justify-center text-[8px] text-bone/30 uppercase font-mono"
                  >
                    IMG
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 2.5s: Msg 2 (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={elapsed >= 2500 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
            className="flex gap-3 flex-row-reverse self-end max-w-[80%]"
          >
            <div className="w-6 h-6 rounded-full bg-brass shrink-0"></div>
            <div className="bg-brass/20 p-3 rounded-2xl rounded-tr-none border border-brass/30">
              <div className="h-2 w-40 bg-bone/60 rounded mb-2"></div>
              <div className="h-2 w-24 bg-bone/40 rounded"></div>
            </div>
          </motion.div>

          {/* 3.5s: Typing indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={elapsed >= 3500 && elapsed < 4500 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex gap-3 max-w-[80%] items-center"
          >
            <div className="w-6 h-6 rounded-full bg-bone/20 shrink-0"></div>
            <div className="flex gap-1">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.2 }}
                  className="w-1.5 h-1.5 bg-bone/40 rounded-full"
                />
              ))}
            </div>
          </motion.div>

          {/* 4.5s: Msg 3 (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={elapsed >= 4500 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="flex gap-3 max-w-[80%]"
          >
            <div className="w-6 h-6 rounded-full bg-bone/20 shrink-0"></div>
            <div className="bg-bone/10 p-3 rounded-2xl rounded-tl-none">
              <div className="h-2 w-36 bg-bone/40 rounded"></div>
            </div>
          </motion.div>

          {/* 5.5s: Msg 4 (Right) + Check */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={elapsed >= 5500 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
            className="flex gap-3 flex-row-reverse self-end max-w-[80%]"
          >
            <div className="w-6 h-6 rounded-full bg-brass shrink-0"></div>
            <div className="flex flex-col items-end gap-2">
              <div className="bg-brass/20 p-3 rounded-2xl rounded-tr-none border border-brass/30 flex items-center gap-2">
                <div className="h-2 w-32 bg-bone/60 rounded"></div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={elapsed >= 5900 ? { scale: 1 } : { scale: 0 }}
                  transition={{ type: 'spring' }}
                  className="w-4 h-4 bg-success rounded-full flex items-center justify-center"
                >
                  <Check size={10} className="text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* 6.5s: Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={elapsed >= 6500 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mt-8 bg-brass/10 border border-brass/20 px-6 py-3 rounded-full"
      >
        <span className="text-brass font-bold text-sm">
          Every back-and-forth, in one window
        </span>
      </motion.div>
    </div>
  );
}

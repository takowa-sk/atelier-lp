'use client';

import { motion } from 'framer-motion';
import { Layout, MessageSquare, FileText } from 'lucide-react';

export function SceneIntro({ elapsed }: { elapsed: number; isPlaying: boolean }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background elements */}
      <motion.div 
        animate={{ opacity: elapsed > 0 ? 0.1 : 0 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#B27C4E_0%,transparent 70%)]"
      />

      {/* 0.0s: Logo - Pushed to top */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={elapsed >= 0 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mt-12 md:mt-16 z-10"
      >
        <h1 className="text-8xl md:text-[140px] font-noto-serif font-black text-brass tracking-tighter leading-none">
          Atelier
        </h1>
      </motion.div>

      {/* Spacer to avoid the central play button area */}
      <div className="flex-1 min-h-[160px]"></div>

      {/* 0.8s: Tagline - Pushed to bottom half */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={elapsed >= 800 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-2xl md:text-4xl font-noto-serif text-bone mb-12 max-w-4xl px-6 leading-tight z-10 font-light"
      >
        制作と対話を、<br className="md:hidden" />ひとつの滑らかな体験に。
      </motion.p>

      {/* 2.0s: Icons & 4.0s: Labels - At the very bottom */}
      <div className="flex gap-16 md:gap-32 z-10 mb-12">
        {[
          { icon: Layout, label: 'Pipeline', delay: 2000 },
          { icon: MessageSquare, label: 'Client Board', delay: 2200 },
          { icon: FileText, label: 'Invoicing', delay: 2400 },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={elapsed >= item.delay ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="w-12 h-12 md:w-16 md:h-16 bg-brass/20 rounded-2xl flex items-center justify-center border border-brass/30"
            >
              <item.icon className="text-brass w-6 h-6 md:w-8 md:h-8" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={elapsed >= 4000 ? { opacity: 0.6 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-bone"
            >
              {item.label}
            </motion.span>
          </div>
        ))}
      </div>

      {/* 5.5s: Pulse Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={elapsed >= 5500 && elapsed < 7000 ? { opacity: [0, 1, 0.5, 1, 0] } : { opacity: 0 }}
        transition={{ duration: 1.5, times: [0, 0.2, 0.5, 0.8, 1] }}
        className="absolute bottom-12 text-bone-sub/50 text-[10px] uppercase tracking-[0.3em]"
      >
        プロダクトツアーを開始します
      </motion.div>
    </div>
  );
}

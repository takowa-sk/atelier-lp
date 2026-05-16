'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Play, Pause, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { SceneIntro } from './scenes/SceneIntro';
import { ScenePipeline } from './scenes/ScenePipeline';
import { SceneBoard } from './scenes/SceneBoard';
import { SceneInvoicing } from './scenes/SceneInvoicing';

const chapters = [
  { id: 'intro', title: 'Introduction', description: 'The shape of Atelier.', duration: 7000, component: SceneIntro },
  { id: 'pipeline', title: 'Pipeline', description: 'Track every project, end to end.', duration: 8000, component: ScenePipeline },
  { id: 'board', title: 'Client Board', description: 'Share work. Get sign-off.', duration: 8000, component: SceneBoard },
  { id: 'invoicing', title: 'Invoicing', description: 'Invoices that follow your work.', duration: 8000, component: SceneInvoicing },
];

export function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [elapsed, setElapsed] = useState(0); // ms
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance logic: Centralized timer
  useEffect(() => {
    if (isPlaying) {
      const interval = 100;
      timerRef.current = setInterval(() => {
        setElapsed(prev => {
          const chapter = chapters[currentIdx];
          if (!chapter) return 0;
          
          const next = prev + interval;
          
          if (next >= chapter.duration) {
            const nextIdx = currentIdx + 1;
            if (nextIdx < chapters.length) {
              // Move to next chapter (fixed increment to prevent double-jump)
              setCurrentIdx(nextIdx);
              return 0;
            } else {
              // Last chapter reached: Stop
              setIsPlaying(false);
              return chapter.duration; // Stay at 100%
            }
          }
          return next;
        });
      }, interval);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIdx]);

  const seekTo = (index: number) => {
    // When seeking, we must reset both index and elapsed in one go
    // to avoid the timer using the old index with the new elapsed value
    setIsPlaying(false);
    setTimeout(() => {
      setCurrentIdx(index);
      setElapsed(0);
      setIsPlaying(true);
    }, 0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const currentChapter = chapters[currentIdx];
  const progressPercent = (elapsed / currentChapter.duration) * 100;

  return (
    <Section id="demo" className="bg-bone-sub/10 py-24 md:py-32 overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.4em] uppercase text-brass mb-4"
          >
            Product Tour
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate font-noto-serif text-2xl md:text-3xl"
          >
            The Atelier workflow, in 30 seconds.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Player Area */}
          <div className="relative aspect-video bg-forest rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] border-4 border-bone group ring-1 ring-white/5">
            {/* Scene Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* 
                  We pass isPlaying to the component if needed, 
                  but for this design we rely on unmount/remount 
                  via key={currentIdx} and internal CSS/Motion delays.
                */}
                <currentChapter.component elapsed={elapsed} isPlaying={isPlaying} />
              </motion.div>
            </AnimatePresence>

            {/* Play/Pause Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
              <button 
                onClick={togglePlay}
                className="w-20 h-20 md:w-24 md:h-24 bg-brass text-forest rounded-full flex items-center justify-center shadow-2xl transform transition-all hover:scale-110 active:scale-95"
              >
                {isPlaying ? <Pause size={40} fill="currentColor" /> : <Play size={40} fill="currentColor" className="ml-2" />}
              </button>
            </div>

            {/* Progress Bar Container */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 backdrop-blur-sm">
              <motion.div 
                className="h-full bg-brass shadow-[0_0_15px_rgba(178,124,78,0.8)]"
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>
          </div>

          {/* Chapter Grid */}
          <div className="mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {chapters.map((chap, i) => (
                <button
                  key={chap.id}
                  onClick={() => seekTo(i)}
                  className={`relative p-6 rounded-2xl border text-left transition-all duration-500 overflow-hidden group ${
                    currentIdx === i 
                      ? 'bg-forest border-forest shadow-2xl scale-[1.02] z-10' 
                      : 'bg-white border-line hover:border-brass/30 hover:bg-bone/5'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className={`font-mono text-[10px] font-bold tracking-widest ${currentIdx === i ? 'text-brass' : 'text-slate-sub'}`}>
                      0{i + 1}
                    </span>
                    <ChevronRight size={14} className={`${currentIdx === i ? 'text-brass' : 'text-line'} group-hover:translate-x-1 transition-transform`} />
                  </div>
                  <h4 className={`font-bold text-base mb-2 ${currentIdx === i ? 'text-bone' : 'text-forest'}`}>
                    {chap.title}
                  </h4>
                  <p className={`text-[12px] leading-relaxed ${currentIdx === i ? 'text-bone-sub/50' : 'text-slate-sub'}`}>
                    {chap.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

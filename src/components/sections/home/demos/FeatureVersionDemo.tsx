'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

interface Version {
  id: string;
  time: string;
  title: string;
  approval: string;
  status: 'Approved' | 'Under Review' | 'Submitted';
  file: string;
}

const versions: Version[] = [
  { id: 'v3.0', time: '2 hours ago', title: 'Final Deliverables', approval: 'Approved by Dr. Aoba', status: 'Approved', file: 'preview_v3.png' },
  { id: 'v2.0', time: 'Yesterday', title: 'Revised Design', approval: 'Pending review', status: 'Under Review', file: 'preview_v2.png' },
  { id: 'v1.0', time: 'Oct 12', title: 'First Draft', approval: 'Draft shared', status: 'Submitted', file: 'draft_v1.png' },
];

export function FeatureVersionDemo() {
  const [selectedId, setSelectedId] = useState(versions[0].id);
  const current = versions.find(v => v.id === selectedId) || versions[0];

  return (
    <div className="max-w-4xl mx-auto bg-bone border border-line rounded-xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Version List */}
        <div className="w-full md:w-64 flex flex-col gap-2 border-b md:border-b-0 md:border-r border-line pb-6 md:pb-0 md:pr-6">
          <div className="text-xs font-bold uppercase text-slate-sub mb-2 px-2">Versions</div>
          {versions.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelectedId(v.id)}
              aria-current={selectedId === v.id ? 'true' : undefined}
              className={`p-3 rounded-lg border transition-all text-left relative group ${
                selectedId === v.id 
                  ? 'bg-forest text-bone border-forest shadow-md' 
                  : 'hover:bg-bone-sub border-transparent text-slate'
              }`}
            >
              <div className="font-mono text-sm font-bold">{v.id} {v.id === 'v3.0' && '(Current)'}</div>
              <div className={`text-xs mt-1 ${selectedId === v.id ? 'text-bone-sub/70' : 'text-slate-sub'}`}>{v.time}</div>
              {v.status === 'Approved' && (
                <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                  selectedId === v.id ? 'bg-brass' : 'bg-success/20 group-hover:bg-success/30'
                }`}>
                  <Check size={12} className={selectedId === v.id ? 'text-bone' : 'text-success'} strokeWidth={3} />
                </div>
              )}
            </button>
          ))}
        </div>
        
        <div className="flex-1 flex flex-col min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-xl text-forest">{current.title}</h3>
                  <p className="text-sm text-slate-sub">{current.approval}</p>
                </div>
                <div className={`px-3 py-1 text-xs font-bold rounded-full border ${
                  current.status === 'Approved' ? 'bg-success/10 text-success border-success/20' :
                  current.status === 'Under Review' ? 'bg-brass/10 text-brass border-brass/20' :
                  'bg-slate/10 text-slate-sub border-slate/20'
                }`}>
                  {current.status}
                </div>
              </div>
              
              <div className="flex-1 aspect-video bg-bone-sub border border-line rounded-lg flex items-center justify-center text-slate-sub relative overflow-hidden group shadow-inner">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(var(--color-line) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                
                <div className="relative z-10 text-center">
                  <div className="bg-white px-6 py-3 border border-line rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500">
                    <span className="font-mono text-sm font-bold text-forest">{current.file}</span>
                  </div>
                  <div className="mt-4 text-[10px] uppercase tracking-widest text-slate-sub opacity-50">Preview Mode</div>
                </div>
                
                {current.status === 'Approved' && (
                  <div className="absolute top-4 right-4 rotate-12 bg-success/10 border-2 border-success/40 text-success font-black px-4 py-1 rounded text-xl opacity-20 pointer-events-none uppercase tracking-tighter">
                    Approved
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}


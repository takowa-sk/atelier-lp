'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { Check } from 'lucide-react';

export function SceneInvoicing({ elapsed }: { elapsed: number; isPlaying: boolean }) {
  const subtotalValue = useMotionValue(0);
  const totalValue = useMotionValue(0);
  
  const subtotal = useTransform(subtotalValue, (latest) => 
    `¥${Math.floor(latest).toLocaleString()}`
  );
  const total = useTransform(totalValue, (latest) => 
    `¥${Math.floor(latest).toLocaleString()}`
  );

  useEffect(() => {
    // Sync numerical animations with elapsed time
    if (elapsed >= 4000) {
      animate(subtotalValue, 230000, { duration: 1, ease: "easeOut" });
    } else {
      subtotalValue.set(0);
    }

    if (elapsed >= 5500) {
      animate(totalValue, 253000, { duration: 1, ease: "easeOut" });
    } else {
      totalValue.set(0);
    }
  }, [elapsed, subtotalValue, totalValue]);

  const getStatus = () => {
    if (elapsed >= 7200) return 'Paid';
    if (elapsed >= 6500) return 'Sent';
    return 'Draft';
  };
  
  const status = getStatus();

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* 0.0s: Heading */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={elapsed >= 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        className="mb-6 text-center"
      >
        <h3 className="text-xl md:text-2xl font-noto-serif text-bone">Invoicing</h3>
      </motion.div>

      {/* 0.5s: Invoice Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={elapsed >= 500 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm bg-bone rounded-xl shadow-2xl p-6 text-forest overflow-hidden flex flex-col relative"
      >
        {/* 1.0s: Header */}
        <div className="flex justify-between items-start mb-8 border-b border-forest/10 pb-4">
          <motion.div initial={{ opacity: 0 }} animate={elapsed >= 1000 ? { opacity: 1 } : { opacity: 0 }}>
            <div className="text-xl font-noto-serif font-bold tracking-tight text-forest">Atelier.</div>
            <div className="text-[8px] font-bold uppercase tracking-[0.2em] opacity-40">Creative Studio</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={elapsed >= 1200 ? { opacity: 1 } : { opacity: 0 }} className="text-right">
            <div className="text-[8px] font-bold uppercase tracking-widest opacity-40">Invoice No.</div>
            <div className="text-[10px] font-mono font-bold">INV-2026-0142</div>
            <div className="text-[8px] opacity-40 mt-1">May 14, 2026</div>
          </motion.div>
        </div>

        {/* 1.5s: Bill To */}
        <motion.div initial={{ opacity: 0 }} animate={elapsed >= 1500 ? { opacity: 1 } : { opacity: 0 }} className="mb-6">
          <div className="text-[8px] font-bold uppercase tracking-widest opacity-40 mb-1">Bill To:</div>
          <div className="text-sm font-bold">Oasis Cafe</div>
        </motion.div>

        {/* 2.0s: Line Items */}
        <div className="space-y-3 mb-8 flex-1">
          {[
            { label: 'Logo design package', price: '¥150,000', delay: 2000 },
            { label: 'Brand guidelines', price: '¥80,000', delay: 2400 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={elapsed >= item.delay ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4 }}
              className="flex justify-between items-center text-[11px]"
            >
              <div className="opacity-70">{item.label}</div>
              <div className="font-mono font-bold">{item.price}</div>
            </motion.div>
          ))}
        </div>

        {/* 4.0s: Totals */}
        <div className="border-t border-forest/20 pt-4 space-y-2">
          <motion.div initial={{ opacity: 0 }} animate={elapsed >= 4000 ? { opacity: 1 } : { opacity: 0 }} className="flex justify-between items-center text-[10px]">
            <div className="opacity-40">Subtotal</div>
            <motion.div className="font-mono">{subtotal}</motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={elapsed >= 5000 ? { opacity: 1 } : { opacity: 0 }} className="flex justify-between items-center text-[10px]">
            <div className="opacity-40 text-[9px]">Consumption Tax (10%)</div>
            <div className="font-mono">¥23,000</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={elapsed >= 5500 ? { opacity: 1 } : { opacity: 0 }} className="flex justify-between items-center border-t border-forest/10 pt-2">
            <div className="text-xs font-bold uppercase tracking-widest text-brass">Total</div>
            <motion.div className="text-lg font-black font-mono text-brass">{total}</motion.div>
          </motion.div>
        </div>

        {/* 6.5s: Status Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: status === 'Paid' || status === 'Sent' ? 0.6 : 0,
            scale: status === 'Paid' ? [1, 1.1, 1] : 1
          }}
          transition={{ duration: 0.3 }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 px-6 py-2 rounded-lg font-black text-2xl uppercase tracking-tighter z-20 rotate-[-15deg] pointer-events-none transition-all duration-300 ${
            status === 'Draft' ? 'border-slate-300 text-slate-300' :
            status === 'Sent' ? 'border-amber-400 text-amber-400' :
            'border-success text-success'
          }`}
        >
          {status === 'Paid' ? (
            <div className="flex items-center gap-2">
              Paid <Check size={24} strokeWidth={4} />
            </div>
          ) : status}
        </motion.div>
      </motion.div>

      {/* 7.5s: Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={elapsed >= 7500 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mt-8 bg-brass/10 border border-brass/20 px-6 py-3 rounded-full"
      >
        <span className="text-brass font-bold text-sm">
          Finish the work. The invoice writes itself.
        </span>
      </motion.div>
    </div>
  );
}

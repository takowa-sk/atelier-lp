'use client';

import React from 'react';
import { Pause } from 'lucide-react';

const RecentProjectRow = ({ 
  icon, 
  name, 
  time, 
  isActive 
}: { 
  icon: string, 
  name: string, 
  time: string, 
  isActive?: boolean 
}) => (
  <div className={`flex items-center justify-between py-3 px-4 rounded-md transition-colors ${
    isActive ? 'bg-bone-sub border-l-2 border-forest shadow-sm' : 'hover:bg-bone-sub/50'
  }`}>
    <div className="flex items-center gap-2">
      <span className={`text-[10px] ${icon === '●' ? 'text-forest' : 'text-brass'}`}>{icon}</span>
      <span className={`text-sm font-medium ${isActive ? 'text-forest' : 'text-slate'}`}>{name}</span>
    </div>
    <span className="text-xs font-mono text-slate-sub">{time}</span>
  </div>
);

const WeeklyBarRow = ({ 
  name, 
  time, 
  percent, 
  isRetainer 
}: { 
  name: string, 
  time: string, 
  percent: string, 
  isRetainer: boolean 
}) => (
  <div className="flex items-center gap-4 py-2">
    <span className="w-24 text-xs font-medium text-forest truncate shrink-0">{name}</span>
    <div className="flex-1 bg-bone-sub h-2 rounded-full overflow-hidden shadow-inner">
      <div 
        className={`h-full rounded-full ${isRetainer ? 'bg-forest' : 'bg-brass'} transition-all duration-1000`}
        style={{ width: percent }}
      />
    </div>
    <span className="w-12 text-xs font-mono font-bold text-forest text-right shrink-0">{time}</span>
  </div>
);

const LogEntry = ({ 
  time, 
  project, 
  content, 
  duration, 
  isNow 
}: { 
  time: string, 
  project: string, 
  content: string, 
  duration: string, 
  isNow?: boolean 
}) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 py-4 border-b border-bone-sub last:border-0 items-center group">
    <span className="text-sm font-mono text-forest-sub">{time}</span>
    <span className="text-sm font-bold text-forest">{project}</span>
    <span className="text-sm text-slate group-hover:text-forest transition-colors">{content}</span>
    <div className="flex items-center justify-end gap-2 text-sm font-mono font-bold text-forest">
      {duration}
      {isNow && (
        <span className="flex items-center gap-1.5 text-[10px] text-brass uppercase tracking-widest font-bold">
          <span className="w-2 h-2 rounded-full bg-brass animate-pulse shadow-[0_0_8px_rgba(178,124,78,0.5)]" />
          now
        </span>
      )}
    </div>
  </div>
);

export const TimeTracker = () => {
  return (
    <div className="w-full bg-bone rounded-3xl overflow-hidden shadow-2xl border border-line">
      {/* URL Bar Style Header */}
      <div className="bg-white/40 backdrop-blur-sm border-b border-line px-4 py-3 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-[7px] h-[7px] rounded-full bg-[#FF5F57]" />
          <div className="w-[7px] h-[7px] rounded-full bg-[#FEBC2E]" />
          <div className="w-[7px] h-[7px] rounded-full bg-[#28C840]" />
        </div>
        
        <div className="bg-bone-sub/80 px-6 py-1 rounded-md border border-line/30 shadow-inner">
          <span className="text-slate-sub font-mono text-[11px] tracking-tight">
            atelier.studio/time
          </span>
        </div>
        
        <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center text-[10px] text-bone font-bold shadow-sm">
          T
        </div>
      </div>
      
      {/* Timer Region */}
      <div className="flex flex-col items-center py-12 md:py-16 bg-white/20">
        <div className="flex items-baseline gap-1 text-6xl md:text-8xl font-mono font-bold text-forest tabular-nums tracking-tighter">
          <span>00</span>
          <span className="animate-pulse opacity-50">:</span>
          <span>42</span>
          <span className="animate-pulse opacity-50">:</span>
          <span>18</span>
        </div>
        <div className="flex items-center gap-2 mt-6 mb-8 text-forest font-medium">
          <span className="text-forest">●</span>
          <span>Yamada Holdings — maintenance & improvements</span>
        </div>
        <button className="bg-forest text-bone px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-forest-sub transition-colors shadow-lg shadow-forest/20">
          <Pause size={18} fill="currentColor" /> Pause
        </button>
      </div>
      
      {/* Stats Region */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-y border-line">
        {/* Recent Projects */}
        <div className="p-8 border-b lg:border-b-0 lg:border-r border-line">
          <p className="text-brass text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Recent projects
          </p>
          <div className="space-y-1">
            <RecentProjectRow icon="●" name="Yamada Holdings" time="1h 57m" isActive />
            <RecentProjectRow icon="─" name="T Trading LP" time="1h 45m" />
            <RecentProjectRow icon="─" name="K Inc." time="0h 0m" />
            <RecentProjectRow icon="─" name="S Corporation" time="0h 0m" />
            <RecentProjectRow icon="─" name="Hayashi Studio" time="0h 0m" />
          </div>
        </div>

        {/* Weekly Stats */}
        <div className="p-8 bg-bone/30">
          <p className="text-brass text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            This week
          </p>
          <div className="space-y-2">
            <WeeklyBarRow name="Yamada H." time="18.5h" percent="100%" isRetainer={true} />
            <WeeklyBarRow name="T Trading LP" time="14.2h" percent="77%" isRetainer={false} />
            <WeeklyBarRow name="S Corporation" time="11.0h" percent="59%" isRetainer={true} />
            <WeeklyBarRow name="K Inc." time="7.5h" percent="41%" isRetainer={false} />
            <WeeklyBarRow name="Hayashi S." time="5.8h" percent="31%" isRetainer={false} />
          </div>
        </div>
      </div>

      {/* Log Region */}
      <div className="p-8 md:p-10">
        <p className="text-brass text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
          Today&apos;s log
        </p>
        <div className="space-y-0">
          <LogEntry time="09:15 - 10:30" project="Yamada Holdings" content="Maintenance work" duration="1h 15m" />
          <LogEntry time="11:00 - 12:45" project="T Trading LP" content="Header implementation" duration="1h 45m" />
          <LogEntry time="14:00 - now" project="Yamada Holdings" content="Bug fixes" duration="42m" isNow={true} />
        </div>
      </div>
    </div>
  );
};

export default TimeTracker;

'use client';

import React from 'react';

const ProjectRow = ({ 
  icon, 
  name, 
  left, 
  width, 
  isRetainer 
}: { 
  icon: string, 
  name: string, 
  left: string, 
  width: string, 
  isRetainer?: boolean 
}) => (
  <div className="flex items-center h-10 border-b border-bone-sub group hover:bg-bone-sub/30 transition-colors">
    {/* Left Column: Project Name */}
    <div className="w-[140px] md:w-[200px] shrink-0 border-r border-bone-sub px-4 flex items-center gap-2 sticky left-0 bg-bone/90 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none z-10">
      <span className={`text-[10px] ${isRetainer ? 'text-forest' : 'text-brass'}`}>
        {icon}
      </span>
      <span className="text-forest text-xs font-medium truncate group-hover:text-brass transition-colors">
        {name}
      </span>
    </div>
    
    {/* Right Column: Timeline Canvas */}
    <div className="flex-1 relative h-full">
      <div 
        className={`absolute top-1/2 -translate-y-1/2 h-3 rounded-sm shadow-sm ${isRetainer ? 'bg-forest' : 'bg-brass'} transition-all duration-1000`}
        style={{ left, width }}
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center px-2">
          <span className="text-[8px] text-bone font-bold uppercase tracking-tighter truncate">{name}</span>
        </div>
      </div>
    </div>
  </div>
);

export const PipelineTimeline = () => {
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
            atelier.studio/pipeline
          </span>
        </div>
        
        <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center text-[10px] text-bone font-bold shadow-sm">
          T
        </div>
      </div>
      
      {/* Page Header */}
      <div className="px-6 md:px-8 py-5 border-b border-line bg-bone/50 flex justify-between items-end">
        <h3 className="font-noto-serif text-xl font-black text-forest tracking-tighter">
          Pipeline
        </h3>
        <span className="text-slate-sub text-sm font-medium">
          May 2026 / <span className="text-forest font-mono font-bold">10</span> 件
        </span>
      </div>
      
      {/* Timeline Layout */}
      <div className="overflow-x-auto">
        <div className="min-w-[700px] md:min-w-full relative">
          
          {/* Timeline Header (Date Markers) */}
          <div className="flex h-10 border-b border-line bg-bone-sub/20">
            <div className="w-[140px] md:w-[200px] shrink-0 border-r border-line" />
            <div className="flex-1 relative">
              {/* Date Markers */}
              {[
                { date: '1', left: '0%' },
                { date: '8', left: '22%' },
                { date: '15', left: '45%' },
                { date: '22', left: '68%' },
                { date: '29', left: '92%' }
              ].map((m) => (
                <div key={m.date} className="absolute h-full flex flex-col items-center" style={{ left: m.left }}>
                  <div className="h-full border-l border-bone-sub border-dashed" />
                  <span className="absolute -bottom-0 text-[9px] font-mono font-bold text-brass tracking-widest">{m.date}</span>
                </div>
              ))}
              
              {/* Current Week Highlight (13-19) */}
              <div 
                className="absolute h-full bg-forest-sub opacity-[0.08] z-0" 
                style={{ left: '38%', width: '22%' }} 
              />
            </div>
          </div>
          
          {/* Rows */}
          <div className="bg-bone">
            {/* Retainers */}
            <ProjectRow icon="●" name="S 株式会社 - 月次保守" left="0%" width="100%" isRetainer />
            <ProjectRow icon="●" name="Yamada Holdings - 保守 + 改善" left="0%" width="100%" isRetainer />
            <ProjectRow icon="●" name="Mori Foundation - サイト運用" left="0%" width="100%" isRetainer />
            <ProjectRow icon="●" name="Aoyama Group - 月次レポーティング" left="0%" width="100%" isRetainer />
            
            {/* Divider */}
            <div className="h-2 bg-bone-sub/30 border-b border-bone-sub" />
            
            {/* Single Projects */}
            <ProjectRow icon="─" name="T 商事 - LP 開発" left="0%" width="32%" />
            <ProjectRow icon="─" name="Hayashi Studio - ブランドサイト" left="10%" width="45%" />
            <ProjectRow icon="─" name="K Inc. - リニューアル" left="26%" width="45%" />
            <ProjectRow icon="─" name="Nishikawa Corp - EC 構築" left="39%" width="42%" />
            <ProjectRow icon="─" name="Kobayashi Tech - 採用 LP" left="48%" width="39%" />
            <ProjectRow icon="─" name="Tanaka Co. - WordPress 移行" left="61%" width="36%" />
          </div>
          
          {/* Today vertical line (May 14) */}
          <div className="absolute top-10 bottom-0 w-px bg-forest z-20 pointer-events-none" style={{ left: 'calc(200px + 42%)' }}>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-forest" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipelineTimeline;

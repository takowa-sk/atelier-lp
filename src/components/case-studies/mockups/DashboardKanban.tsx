'use client';

import React from 'react';

type CardProps = {
  client: string;
  tag: string;
  progress: number;
  deadline: string;
  unread?: number;
};

const KanbanCard = ({ client, tag, progress, deadline, unread }: CardProps) => (
  <div className="bg-bone border-l-2 border-forest rounded-lg p-3 shadow-sm space-y-3">
    <div className="flex justify-between items-start">
      <span className="bg-brass text-bone text-[10px] font-mono uppercase px-2 py-0.5 rounded-sm tracking-wider">
        {tag}
      </span>
      {unread && unread > 0 ? (
        <div className="bg-brass text-bone text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
          {unread}
        </div>
      ) : null}
    </div>
    
    <h4 className="text-forest font-medium text-sm leading-tight">
      {client}
    </h4>
    
    <div className="space-y-1.5">
      <div className="w-full bg-bone-sub h-1 rounded-full overflow-hidden">
        <div 
          className="bg-forest h-full rounded-full transition-all duration-1000" 
          style={{ width: `${progress}%` }} 
        />
      </div>
      <div className="text-slate-sub text-[10px] font-medium uppercase tracking-tight">
        {deadline}
      </div>
    </div>
  </div>
);

const ColumnHeader = ({ title, count }: { title: string; count: number }) => (
  <div className="mb-4 px-2 flex justify-between items-end">
    <span className="text-brass text-xs font-bold uppercase tracking-[0.2em]">
      {title}
    </span>
    <span className="text-forest font-mono text-sm font-bold">
      ({count})
    </span>
  </div>
);

export const DashboardKanban = () => {
  return (
    <div className="w-full bg-bone-sub rounded-3xl overflow-hidden shadow-2xl border border-line">
      {/* URL Bar Style Header */}
      <div className="bg-white/40 backdrop-blur-sm border-b border-line px-4 py-3 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-[7px] h-[7px] rounded-full bg-[#FF5F57]" />
          <div className="w-[7px] h-[7px] rounded-full bg-[#FEBC2E]" />
          <div className="w-[7px] h-[7px] rounded-full bg-[#28C840]" />
        </div>
        
        <div className="bg-bone-sub/80 px-6 py-1 rounded-md border border-line/30 shadow-inner">
          <span className="text-slate-sub font-mono text-[11px] tracking-tight">
            atelier.studio/dashboard
          </span>
        </div>
        
        <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center text-[10px] text-bone font-bold shadow-sm">
          S
        </div>
      </div>
      
      {/* Mockup Dashboard Content */}
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-noto-serif text-2xl font-black text-forest tracking-tighter">
            Dashboard
          </h3>
          <span className="text-slate-sub text-sm font-medium">
            8 件のアクティブ案件
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 overflow-x-auto min-w-[700px] md:min-w-0">
          {/* Column 1: ヒアリング */}
          <div className="flex flex-col gap-3">
            <ColumnHeader title="ヒアリング" count={2} />
            <KanbanCard client="Yamamoto & Co." tag="branding" progress={20} deadline="残り 14 日" />
            <KanbanCard client="Atelier Plus" tag="logo" progress={10} deadline="残り 21 日" />
          </div>
          
          {/* Column 2: 制作中 */}
          <div className="flex flex-col gap-3">
            <ColumnHeader title="制作中" count={3} />
            <KanbanCard client="Aoba Dental Clinic" tag="branding" progress={65} deadline="残り 5 日" unread={3} />
            <KanbanCard client="Tech Studio K" tag="web" progress={80} deadline="残り 3 日" unread={1} />
            <KanbanCard client="Studio Murakami" tag="package" progress={50} deadline="残り 8 日" />
          </div>
          
          {/* Column 3: 確認中 */}
          <div className="flex flex-col gap-3">
            <ColumnHeader title="確認中" count={2} />
            <KanbanCard client="Kotori Bakery" tag="package" progress={90} deadline="残り 2 日" unread={2} />
            <KanbanCard client="Hokuyo Books" tag="logo" progress={95} deadline="残り 1 日" unread={5} />
          </div>
          
          {/* Column 4: 検収済 */}
          <div className="flex flex-col gap-3">
            <ColumnHeader title="検収済" count={1} />
            <KanbanCard client="M Corporation" tag="web" progress={100} deadline="完了" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardKanban;

'use client';

import React from 'react';

const KPICard = ({ label, value, sub }: { label: string, value: string, sub: React.ReactNode }) => (
  <div className="bg-bone-sub/50 p-6 rounded-xl border border-line/30 shadow-sm">
    <p className="text-brass text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{label}</p>
    <p className="text-3xl font-mono font-bold text-forest tabular-nums">{value}</p>
    <p className="text-xs text-slate-sub mt-1">{sub}</p>
  </div>
);

const AllocationRow = ({ name, hours, percent, isRetainer }: { name: string, hours: string, percent: string, isRetainer: boolean }) => (
  <div className="flex items-center gap-4 py-2">
    <span className="w-28 text-[11px] font-medium text-forest truncate shrink-0">{name}</span>
    <div className="flex-1 bg-bone-sub h-1.5 rounded-full overflow-hidden shadow-inner">
      <div 
        className={`h-full rounded-full ${isRetainer ? 'bg-forest' : 'bg-brass'}`}
        style={{ width: percent }}
      />
    </div>
    <span className="w-10 text-[11px] font-mono font-bold text-forest text-right shrink-0">{hours}</span>
  </div>
);

const TableRow = ({ name, monthly, cumulative, status }: { name: string, monthly: string, cumulative: string, status: 'Active' | 'In Progress' }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 py-3 border-b border-bone-sub last:border-0 items-center hover:bg-bone-sub/20 transition-colors px-2">
    <span className="text-sm font-bold text-forest">{name}</span>
    <span className="text-sm font-mono text-forest md:text-right">{monthly}</span>
    <span className="text-sm font-mono text-slate-sub md:text-right">{cumulative}</span>
    <div className="flex justify-start md:justify-end">
      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1.5 ${
        status === 'Active' ? 'bg-forest text-bone' : 'bg-brass text-bone'
      }`}>
        <span className="font-mono text-[8px]">{status === 'Active' ? '●' : '⏸'}</span>
        {status}
      </span>
    </div>
  </div>
);

export const MonthlyReport = () => {
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
            atelier.studio/report/2026-05
          </span>
        </div>
        
        <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center text-[10px] text-bone font-bold shadow-sm">
          T
        </div>
      </div>
      
      {/* Page Header */}
      <div className="px-6 md:px-8 py-5 border-b border-line bg-bone/50 flex justify-between items-end">
        <h3 className="font-noto-serif text-xl font-black text-forest tracking-tighter">
          Monthly Report
        </h3>
        <span className="text-slate-sub font-mono text-sm font-medium">
          May 2026
        </span>
      </div>
      
      {/* KPI Cards */}
      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard 
          label="総工数" 
          value="168h" 
          sub={<span>先月比 <span className="text-brass font-bold">+12%</span></span>} 
        />
        <KPICard 
          label="アクティブ案件" 
          value="10" 
          sub="Retainer 4 / Single 6" 
        />
        <KPICard 
          label="請求予定額" 
          value="¥1,840,000" 
          sub={<span>先月比 <span className="text-brass font-bold">+8%</span></span>} 
        />
      </div>
      
      {/* Charts Region */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-y border-line">
        {/* Left: Allocation */}
        <div className="p-8 border-b lg:border-b-0 lg:border-r border-line bg-white/10">
          <p className="text-brass text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            案件別工数配分
          </p>
          <div className="space-y-0.5">
            <AllocationRow name="S 株式会社" hours="44h" percent="100%" isRetainer />
            <AllocationRow name="Yamada Holdings" hours="32h" percent="73%" isRetainer />
            <AllocationRow name="Mori Foundation" hours="28h" percent="64%" isRetainer />
            <AllocationRow name="Aoyama Group" hours="24h" percent="55%" isRetainer />
            <AllocationRow name="T 商事" hours="18h" percent="41%" isRetainer={false} />
            <AllocationRow name="K Inc." hours="12h" percent="27%" isRetainer={false} />
            <AllocationRow name="Hayashi S." hours="4h" percent="9%" isRetainer={false} />
            <AllocationRow name="Nishikawa C." hours="3h" percent="7%" isRetainer={false} />
            <AllocationRow name="Kobayashi T." hours="2h" percent="5%" isRetainer={false} />
            <AllocationRow name="Tanaka Co." hours="1h" percent="3%" isRetainer={false} />
          </div>
        </div>
        
        {/* Right: Trend Line Chart */}
        <div className="p-8 bg-bone/30">
          <p className="text-brass text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            週次工数推移
          </p>
          <div className="relative h-[200px] w-full">
            <svg viewBox="0 0 400 200" preserveAspectRatio="none" className="w-full h-full">
              {/* Grid lines */}
              <line x1="0" y1="40" x2="400" y2="40" stroke="var(--color-bone-sub)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="90" x2="400" y2="90" stroke="var(--color-bone-sub)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="140" x2="400" y2="140" stroke="var(--color-bone-sub)" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* Line chart (Scale: 50h = y0) */}
              {/* Data: 38, 45, 42, 28, 15 -> Y: 200 - (val/50 * 150 + 20) */}
              <polyline
                fill="none"
                stroke="var(--color-forest)"
                strokeWidth="3"
                points="40,86 120,65 200,74 280,116 360,155"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              
              {/* Markers */}
              {[
                { x: 40, y: 86, h: '38h' },
                { x: 120, y: 65, h: '45h', now: true },
                { x: 200, y: 74, h: '42h' },
                { x: 280, y: 116, h: '28h' },
                { x: 360, y: 155, h: '15h' }
              ].map((p, i) => (
                <g key={i}>
                  <circle 
                    cx={p.x} 
                    cy={p.y} 
                    r={p.now ? 5 : 4} 
                    fill={p.now ? 'var(--color-brass)' : 'var(--color-forest)'} 
                    className={p.now ? 'shadow-lg' : ''}
                  />
                  <text 
                    x={p.x} 
                    y={p.y - 12} 
                    textAnchor="middle" 
                    className="text-[10px] font-mono font-bold fill-forest"
                  >
                    {p.h}
                  </text>
                  {p.now && (
                    <text x={p.x} y={p.y + 18} textAnchor="middle" className="text-[8px] font-bold fill-brass uppercase tracking-widest">Now</text>
                  )}
                </g>
              ))}
            </svg>
            <div className="absolute bottom-0 w-full flex justify-between px-6 md:px-10 text-[9px] font-mono font-bold text-slate-sub uppercase tracking-widest">
              <span>W1</span>
              <span>W2</span>
              <span>W3</span>
              <span>W4</span>
              <span>W5</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Table Region */}
      <div className="p-8 md:p-10">
        <p className="text-brass text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
          案件詳細
        </p>
        <div className="hidden md:grid grid-cols-4 px-2 py-2 text-[10px] font-bold text-brass uppercase tracking-widest border-b border-line">
          <span>案件名</span>
          <span className="text-right">今月</span>
          <span className="text-right">累計</span>
          <span className="text-right">ステータス</span>
        </div>
        <div className="space-y-0">
          <TableRow name="S 株式会社 - 月次保守" monthly="44h" cumulative="176h" status="Active" />
          <TableRow name="Yamada Holdings - 保守 + 改善" monthly="32h" cumulative="192h" status="Active" />
          <TableRow name="Mori Foundation - サイト運用" monthly="28h" cumulative="84h" status="Active" />
          <TableRow name="Aoyama Group - 月次レポーティング" monthly="24h" cumulative="72h" status="Active" />
          <TableRow name="T 商事 - LP 開発" monthly="18h" cumulative="18h" status="In Progress" />
          <TableRow name="K Inc. - リニューアル" monthly="12h" cumulative="12h" status="In Progress" />
          <TableRow name="Hayashi Studio - ブランドサイト" monthly="4h" cumulative="4h" status="In Progress" />
          <TableRow name="Nishikawa Corp - EC 構築" monthly="3h" cumulative="3h" status="In Progress" />
          <TableRow name="Kobayashi Tech - 採用 LP" monthly="2h" cumulative="2h" status="In Progress" />
          <TableRow name="Tanaka Co. - WordPress 移行" monthly="1h" cumulative="1h" status="In Progress" />
        </div>
      </div>
    </div>
  );
};

export default MonthlyReport;

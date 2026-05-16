'use client';

import React from 'react';

const VersionTab = ({ label, isActive, isCurrent }: { label: string, isActive?: boolean, isCurrent?: boolean }) => (
  <div className={`px-3 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-2 ${
    isActive ? 'bg-forest text-bone shadow-sm' : 'bg-bone-sub text-slate-sub hover:text-slate'
  }`}>
    {label}
    {isCurrent && (
      <span className="text-[8px] bg-brass text-bone px-1 rounded-sm uppercase tracking-tighter">current</span>
    )}
  </div>
);

const CommentBalloon = ({ 
  text, 
  author, 
  time, 
  isApproved, 
  top 
}: { 
  text: string, 
  author: string, 
  time: string, 
  isApproved?: boolean, 
  top: string 
}) => (
  <div 
    className={`lg:absolute lg:right-[-260px] w-full lg:w-[240px] p-4 rounded-xl shadow-xl border relative mb-4 lg:mb-0 transition-transform hover:scale-105 z-30 ${
      isApproved ? 'bg-forest text-bone border-forest' : 'bg-bone-sub/90 backdrop-blur-sm text-forest border-forest-sub'
    }`}
    style={{ top: typeof window !== 'undefined' && window.innerWidth >= 1024 ? top : 'auto' }}
  >
    <div className="flex items-center gap-2 mb-2">
      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold shadow-sm ${isApproved ? 'bg-bone text-forest' : 'bg-forest text-bone'}`}>
        K
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold leading-tight">{author}</span>
        <span className={`text-[8px] font-mono opacity-60`}>{time}</span>
      </div>
      {isApproved && <span className="ml-auto text-xs">✓</span>}
    </div>
    <p className="text-xs leading-relaxed font-medium">{text}</p>
    <div className={`mt-3 pt-2 border-t text-[9px] font-bold uppercase tracking-widest flex gap-3 ${isApproved ? 'border-bone/20 text-bone/60' : 'border-forest/10 text-forest-sub'}`}>
      <span>Reply</span>
      <span>Resolve</span>
    </div>
    
    {/* Arrow (Desktop only) */}
    <div className={`hidden lg:block absolute left-[-8px] top-4 w-4 h-4 rotate-45 border-l border-b ${isApproved ? 'bg-forest border-forest' : 'bg-bone-sub border-forest-sub'}`} />
  </div>
);

const DiffLine = ({ 
  num, 
  text, 
  type
}: { 
  num: number, 
  text: React.ReactNode, 
  type?: 'added' | 'removed' | 'normal'
}) => (
  <div className={`flex gap-3 px-2 py-0.5 leading-relaxed font-noto-serif text-sm transition-colors ${
    type === 'removed' ? 'bg-bone-sub/50' : type === 'added' ? 'bg-forest/[0.08]' : 'hover:bg-bone-sub/10'
  }`}>
    <span className="w-4 text-[10px] font-mono text-slate-sub tabular-nums mt-1 text-right shrink-0">{num}</span>
    <span className="w-3 text-[10px] font-mono font-bold shrink-0 mt-1">
      {type === 'removed' ? '−' : type === 'added' ? '+' : ' '}
    </span>
    <p className={`${
      type === 'removed' ? 'text-slate-sub line-through decoration-slate-sub/40' : 
      type === 'added' ? 'text-forest font-medium' : 'text-slate'
    }`}>
      {text}
    </p>
  </div>
);

export const VersionDiff = () => {
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
            atelier.studio/articles/spring-architecture/diff
          </span>
        </div>
        
        <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center text-[10px] text-bone font-bold shadow-sm">
          N
        </div>
      </div>
      
      {/* Article Header */}
      <div className="px-6 md:px-8 py-5 border-b border-line bg-bone/50 flex flex-col gap-1">
        <h3 className="font-noto-serif text-xl font-black text-forest tracking-tighter">
          Spring Architecture Feature, Part 2
        </h3>
        <p className="text-slate-sub text-sm font-medium">
          Casa Brutus / Editor: Misa Kimura
        </p>
      </div>
      
      {/* Version Bar */}
      <div className="px-6 py-3 flex items-center justify-between border-b border-line bg-white/10">
        <div className="flex gap-2">
          <VersionTab label="v1" />
          <VersionTab label="v2" />
          <VersionTab label="v3" isActive />
          <VersionTab label="v4" isActive isCurrent />
        </div>
        <span className="text-brass text-[10px] font-bold uppercase tracking-[0.2em] hidden sm:block">
          Comparing v3 ⇄ v4
        </span>
      </div>
      
      {/* Diff Layout */}
      <div className="relative p-0 md:p-4 lg:mr-[280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-bone-sub border border-bone-sub rounded-xl overflow-hidden relative">
          
          {/* Left Column (v3) */}
          <div className="bg-bone overflow-hidden">
            <div className="bg-bone-sub/30 px-4 py-2 border-b border-bone-sub flex items-center justify-between">
              <span className="text-xs font-bold text-forest">Version 3 (May 12)</span>
            </div>
            <div className="py-6 min-h-[500px]">
              {/* Block 1 */}
              <DiffLine num={1} text="The architecture of Kyoto transcends eras," />
              <DiffLine num={2} text="standing for centuries on the same ground." />
              <DiffLine num={3} text="Machiya. Temples. Shrines." />
              <DiffLine num={4} text={<span>Each carries its own face,<br/>drawing visitors in.</span>} />

              <div className="h-6" />

              {/* Block 2 */}
              <DiffLine num={5} text="Walk through Gion and you'll find streets lined with latticed doors." />
              <DiffLine num={6} text="These machiya were once the homes of traditional Kyoto life." />
              <DiffLine num={7} text="Today, many have become cafes and shops." />

              <div className="h-6" />

              {/* Block 3 */}
              <DiffLine num={8} text={'The architect Kengo Kuma once said, "Japanese architecture is a'} />
              <DiffLine num={9} text={'dialogue with materials." Looking at the buildings of Kyoto,'} />
              <DiffLine num={10} text="you understand exactly what he meant." />
            </div>
          </div>
          
          {/* Right Column (v4) */}
          <div className="bg-bone overflow-hidden relative">
            <div className="bg-bone-sub/30 px-4 py-2 border-b border-bone-sub flex items-center justify-between">
              <span className="text-xs font-bold text-forest flex items-center gap-2">
                Version 4 (May 14)
                <span className="text-[8px] bg-brass text-bone px-1 rounded-sm uppercase tracking-tighter">current</span>
              </span>
            </div>
            <div className="py-6 min-h-[500px] relative">
              {/* Block 1 */}
              <DiffLine num={1} type="added" text={<span>The architecture of Kyoto, <span className="bg-forest/20 px-0.5 rounded-sm">after a thousand years,</span></span>} />
              <DiffLine num={2} type="added" text="still holds its form." />
              <DiffLine num={3} text="Machiya. Temples. Shrines." />
              <DiffLine num={4} text={<span>Each carries its own <span className="bg-forest/20 px-0.5 rounded-sm">story,</span> drawing visitors in.</span>} />

              <div className="h-6" />

              {/* Block 2 */}
              <DiffLine num={5} text={<span>Walk through Gion and you&apos;ll find <span className="bg-forest/20 px-0.5 rounded-sm">narrow lanes</span> lined with latticed doors.</span>} />
              <DiffLine num={6} type="added" text={<span>These machiya were <span className="bg-forest/20 px-0.5 rounded-sm">once</span> the homes of traditional</span>} />
              <DiffLine num={7} type="added" text={<span>Kyoto life. <span className="bg-forest/20 px-0.5 rounded-sm">Today, many have transformed into cafes</span></span>} />
              <DiffLine num={8} type="added" text="and shops." />

              <div className="h-6" />

              {/* Block 3 */}
              <DiffLine num={9} type="added" text={<span>{'The architect Kengo Kuma once said, "Japanese architecture, '}<span className="bg-forest/20 px-0.5 rounded-sm">at its core,</span></span>} />
              <DiffLine num={10} type="added" text={<span><span className="bg-forest/20 px-0.5 rounded-sm">is a dialogue with materials.&quot;</span>{' Watching the buildings of Kyoto,'}</span>} />
              <DiffLine num={11} type="added" text={<span><span className="bg-forest/20 px-0.5 rounded-sm">you feel</span> the <span className="bg-forest/20 px-0.5 rounded-sm">weight of those words.</span></span>} />

              {/* Comments (Desktop Absolute) */}
              <CommentBalloon
                top="40px"
                author="Misa Kimura"
                time="2 hours ago"
                text="This phrasing is a bit wordy"
              />
              <CommentBalloon
                top="180px"
                author="Misa Kimura"
                time="1 hour ago"
                text="Could we add some specific data here?"
              />
              <CommentBalloon
                top="320px"
                author="Misa Kimura"
                time="30 minutes ago"
                text="Much improved overall ✓"
                isApproved
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Comments (visible only on small screens) */}
      <div className="lg:hidden p-6 bg-bone-sub/30 border-t border-line space-y-4">
        <p className="text-brass text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Notes & comments</p>
        <CommentBalloon top="0" author="Misa Kimura" time="2 hours ago" text="This phrasing is a bit wordy" />
        <CommentBalloon top="0" author="Misa Kimura" time="1 hour ago" text="Could we add some specific data here?" />
        <CommentBalloon top="0" author="Misa Kimura" time="30 minutes ago" text="Much improved overall ✓" isApproved />
      </div>
    </div>
  );
};

export default VersionDiff;

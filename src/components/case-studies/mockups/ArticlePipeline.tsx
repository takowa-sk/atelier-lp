'use client';

import React from 'react';
import { ChevronDown, Plus } from 'lucide-react';

const StageBadge = ({ stage }: { stage: '執筆中' | '初稿' | '差し戻し' | '確定' }) => {
  const styles = {
    '執筆中': 'bg-bone-sub text-slate',
    '初稿': 'bg-brass text-bone',
    '差し戻し': 'bg-forest-sub text-bone',
    '確定': 'bg-forest text-bone',
  };
  return (
    <span className={`text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-sm tracking-wider whitespace-nowrap ${styles[stage]}`}>
      {stage}
    </span>
  );
};

const ArticleRow = ({ 
  title, 
  media, 
  stage, 
  deadline, 
  words, 
  updated 
}: { 
  title: string, 
  media: string, 
  stage: '執筆中' | '初稿' | '差し戻し' | '確定', 
  deadline: string, 
  words: string, 
  updated: string 
}) => (
  <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 py-3 border-b border-bone-sub last:border-0 items-center hover:bg-bone-sub/20 transition-colors px-2">
    <span className="col-span-1 md:col-span-1 text-sm font-bold text-forest truncate" title={title}>{title}</span>
    <span className="hidden md:block text-sm text-slate-sub italic font-noto-serif truncate">{media}</span>
    <div className="flex justify-start md:justify-center">
      <StageBadge stage={stage} />
    </div>
    <span className="text-xs font-mono text-slate-sub md:text-center">{deadline}</span>
    <span className="hidden md:block text-xs font-mono text-slate text-right tabular-nums">{words}</span>
    <span className="text-[10px] md:text-xs text-slate-sub text-right whitespace-nowrap">{updated}</span>
  </div>
);

export const ArticlePipeline = () => {
  const articles: Array<React.ComponentProps<typeof ArticleRow>> = [
    { title: "春の建築特集（第 2 部）", media: "Casa Brutus", stage: "差し戻し", deadline: "5/20", words: "3,200", updated: "2 時間前" },
    { title: "東京の小さなコーヒー", media: "Brutus", stage: "初稿", deadline: "5/25", words: "5,000", updated: "昨日" },
    { title: "京都、暮らしの中の手仕事", media: "&Premium", stage: "執筆中", deadline: "5/28", words: "4,500", updated: "30 分前" },
    { title: "北欧デザインの再評価", media: "Casa Brutus", stage: "確定", deadline: "5/15", words: "2,800", updated: "3 日前" },
    { title: "食卓の革新者たち", media: "料理通信", stage: "差し戻し", deadline: "5/22", words: "3,500", updated: "5 時間前" },
    { title: "鎌倉の本屋探訪", media: "BRUTUS", stage: "執筆中", deadline: "6/2", words: "4,200", updated: "1 時間前" },
    { title: "日本酒の新しい風", media: "料理通信", stage: "確定", deadline: "5/18", words: "3,800", updated: "4 日前" },
    { title: "パリ、私の街角", media: "&Premium", stage: "初稿", deadline: "5/30", words: "6,000", updated: "昨日" },
    { title: "古道具屋という生き方", media: "Casa Brutus", stage: "執筆中", deadline: "6/5", words: "4,000", updated: "4 時間前" },
    { title: "写真家・川内倫子論", media: "アサヒカメラ", stage: "差し戻し", deadline: "5/23", words: "5,500", updated: "6 時間前" },
    { title: "民藝の現在地", media: "&Premium", stage: "確定", deadline: "5/17", words: "3,200", updated: "5 日前" },
    { title: "銭湯文化の再生", media: "BRUTUS", stage: "初稿", deadline: "5/27", words: "3,800", updated: "2 日前" },
    { title: "地方都市のリノベ", media: "住む。", stage: "執筆中", deadline: "6/10", words: "4,800", updated: "10 分前" },
    { title: "茶道と現代生活", media: "&Premium", stage: "差し戻し", deadline: "5/24", words: "3,500", updated: "7 時間前" },
    { title: "日本のサウナ・ルネサンス", media: "料理通信", stage: "確定", deadline: "5/16", words: "2,500", updated: "1 週間前" },
  ];

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
            atelier.studio/articles
          </span>
        </div>
        
        <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center text-[10px] text-bone font-bold shadow-sm">
          N
        </div>
      </div>
      
      {/* Page Header */}
      <div className="px-6 md:px-8 py-5 border-b border-line bg-bone/50 flex justify-between items-end">
        <h3 className="font-noto-serif text-xl font-black text-forest tracking-tighter">
          Articles
        </h3>
        <span className="text-slate-sub text-sm font-medium">
          <span className="text-forest font-mono font-bold mr-1">15</span>
          件 / 5 媒体
        </span>
      </div>
      
      {/* Filter Bar */}
      <div className="px-6 py-4 flex flex-wrap gap-3 items-center border-b border-line bg-white/10">
        <button className="flex items-center gap-1 bg-bone-sub text-forest text-sm px-3 py-1.5 rounded-md border border-line/30 shadow-sm hover:bg-line transition-colors">
          媒体 <ChevronDown className="w-3 h-3 text-slate-sub" /> すべて
        </button>
        <button className="flex items-center gap-1 bg-bone-sub text-forest text-sm px-3 py-1.5 rounded-md border border-line/30 shadow-sm hover:bg-line transition-colors">
          ステージ <ChevronDown className="w-3 h-3 text-slate-sub" /> すべて
        </button>
        <button className="flex items-center gap-1 bg-bone-sub text-forest text-sm px-3 py-1.5 rounded-md border border-line/30 shadow-sm hover:bg-line transition-colors">
          月 <ChevronDown className="w-3 h-3 text-forest" /> 5 月
        </button>
        <div className="flex-1" />
        <button className="flex items-center gap-1.5 bg-forest text-bone text-sm px-4 py-1.5 rounded-full font-bold shadow-lg shadow-forest/20 hover:bg-forest-sub transition-all">
          <Plus size={16} strokeWidth={3} /> 新規記事
        </button>
      </div>
      
      {/* Article List Table */}
      <div className="p-4 md:p-6">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 px-2 py-2 text-[10px] font-bold text-brass uppercase tracking-[0.2em] border-b border-line bg-bone-sub/20 rounded-t-lg">
          <span className="col-span-1 md:col-span-1">タイトル</span>
          <span className="hidden md:block">媒体</span>
          <span className="text-center">ステージ</span>
          <span className="md:text-center">締切</span>
          <span className="hidden md:block text-right">字数</span>
          <span className="text-right">最終更新</span>
        </div>
        <div className="space-y-0">
          {articles.map((article, idx) => (
            <ArticleRow key={idx} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePipeline;

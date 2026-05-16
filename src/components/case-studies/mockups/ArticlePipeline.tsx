'use client';

import React from 'react';
import { ChevronDown, Plus } from 'lucide-react';

const StageBadge = ({ stage }: { stage: 'Writing' | 'First Draft' | 'Revisions' | 'Final' }) => {
  const styles = {
    'Writing': 'bg-bone-sub text-slate',
    'First Draft': 'bg-brass text-bone',
    'Revisions': 'bg-forest-sub text-bone',
    'Final': 'bg-forest text-bone',
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
  stage: 'Writing' | 'First Draft' | 'Revisions' | 'Final',
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
    { title: "Spring Architecture Feature, Part 2", media: "Casa Brutus", stage: "Revisions", deadline: "5/20", words: "3,200", updated: "2 hours ago" },
    { title: "Small Coffee Spots of Tokyo", media: "Brutus", stage: "First Draft", deadline: "5/25", words: "5,000", updated: "Yesterday" },
    { title: "Kyoto: Craft in Everyday Life", media: "&Premium", stage: "Writing", deadline: "5/28", words: "4,500", updated: "30 minutes ago" },
    { title: "Reconsidering Nordic Design", media: "Casa Brutus", stage: "Final", deadline: "5/15", words: "2,800", updated: "3 days ago" },
    { title: "Innovators at the Table", media: "Ryori Tsushin", stage: "Revisions", deadline: "5/22", words: "3,500", updated: "5 hours ago" },
    { title: "Bookshops of Kamakura", media: "BRUTUS", stage: "Writing", deadline: "6/2", words: "4,200", updated: "1 hour ago" },
    { title: "The New Wave of Sake", media: "Ryori Tsushin", stage: "Final", deadline: "5/18", words: "3,800", updated: "4 days ago" },
    { title: "Paris, My Street Corner", media: "&Premium", stage: "First Draft", deadline: "5/30", words: "6,000", updated: "Yesterday" },
    { title: "The Life of an Antique Dealer", media: "Casa Brutus", stage: "Writing", deadline: "6/5", words: "4,000", updated: "4 hours ago" },
    { title: "On the Photography of Rinko Kawauchi", media: "Asahi Camera", stage: "Revisions", deadline: "5/23", words: "5,500", updated: "6 hours ago" },
    { title: "Mingei Today", media: "&Premium", stage: "Final", deadline: "5/17", words: "3,200", updated: "5 days ago" },
    { title: "The Revival of Sentō Culture", media: "BRUTUS", stage: "First Draft", deadline: "5/27", words: "3,800", updated: "2 days ago" },
    { title: "Renovating Regional Cities", media: "Sumu", stage: "Writing", deadline: "6/10", words: "4,800", updated: "10 minutes ago" },
    { title: "Tea Ceremony in Modern Life", media: "&Premium", stage: "Revisions", deadline: "5/24", words: "3,500", updated: "7 hours ago" },
    { title: "Japan's Sauna Renaissance", media: "Ryori Tsushin", stage: "Final", deadline: "5/16", words: "2,500", updated: "1 week ago" },
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
          articles / 5 publications
        </span>
      </div>

      {/* Filter Bar */}
      <div className="px-6 py-4 flex flex-wrap gap-3 items-center border-b border-line bg-white/10">
        <button className="flex items-center gap-1 bg-bone-sub text-forest text-sm px-3 py-1.5 rounded-md border border-line/30 shadow-sm hover:bg-line transition-colors">
          Publication <ChevronDown className="w-3 h-3 text-slate-sub" /> All
        </button>
        <button className="flex items-center gap-1 bg-bone-sub text-forest text-sm px-3 py-1.5 rounded-md border border-line/30 shadow-sm hover:bg-line transition-colors">
          Stage <ChevronDown className="w-3 h-3 text-slate-sub" /> All
        </button>
        <button className="flex items-center gap-1 bg-bone-sub text-forest text-sm px-3 py-1.5 rounded-md border border-line/30 shadow-sm hover:bg-line transition-colors">
          Month <ChevronDown className="w-3 h-3 text-forest" /> May
        </button>
        <div className="flex-1" />
        <button className="flex items-center gap-1.5 bg-forest text-bone text-sm px-4 py-1.5 rounded-full font-bold shadow-lg shadow-forest/20 hover:bg-forest-sub transition-all">
          <Plus size={16} strokeWidth={3} /> New article
        </button>
      </div>

      {/* Article List Table */}
      <div className="p-4 md:p-6">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 px-2 py-2 text-[10px] font-bold text-brass uppercase tracking-[0.2em] border-b border-line bg-bone-sub/20 rounded-t-lg">
          <span className="col-span-1 md:col-span-1">Title</span>
          <span className="hidden md:block">Publication</span>
          <span className="text-center">Stage</span>
          <span className="md:text-center">Due</span>
          <span className="hidden md:block text-right">Words</span>
          <span className="text-right">Updated</span>
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

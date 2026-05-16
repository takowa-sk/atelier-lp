'use client';

import React from 'react';
import Link from 'next/link';
import { getNextCase, getPrevCase, type CaseStudy } from '@/lib/case-studies';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Props = {
  currentSlug: string;
};

const NavCard = ({ study, type }: { study: CaseStudy, type: 'prev' | 'next' }) => (
  <Link 
    href={`/case-studies/${study.slug}`}
    className={`group flex flex-col p-6 md:p-8 border border-bone-sub rounded-2xl transition-all hover:bg-bone-sub/20 hover:border-forest-sub/30 ${
      type === 'prev' ? 'items-start text-left' : 'items-end text-right'
    }`}
  >
    <span className="text-brass text-[10px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2 group-hover:gap-3 transition-all">
      {type === 'prev' ? <><ArrowLeft size={12} /> Previous</> : <>Next <ArrowRight size={12} /></>}
    </span>
    <p className="text-forest font-mono text-sm font-bold mb-1">Case {study.caseNumber}</p>
    <p className="text-slate-sub text-xs mb-2">{study.category}</p>
    <p className="text-forest text-sm font-medium font-noto-serif truncate w-full max-w-[200px] md:max-w-[300px]">
      {study.title.substring(0, 16)}...
    </p>
  </Link>
);

export const CaseNavigation = ({ currentSlug }: Props) => {
  const prevCase = getPrevCase(currentSlug);
  const nextCase = getNextCase(currentSlug);

  return (
    <div className="bg-bone border-t border-bone-sub mt-32 py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <NavCard study={prevCase} type="prev" />
          <NavCard study={nextCase} type="next" />
        </div>
        
        <div className="mt-16 flex justify-center">
          <Link 
            href="/case-studies"
            className="text-slate-sub text-sm font-medium hover:text-forest transition-colors flex items-center gap-2"
          >
            Back to In Practice <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

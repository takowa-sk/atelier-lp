'use client';

import React from 'react';
import { Check, Mail, Download, ArrowRight } from 'lucide-react';

const DeliveredRow = ({ title, date, words, amount }: { title: string, date: string, words: string, amount: string }) => (
  <div className="flex items-start gap-3 py-3 border-b border-bone-sub last:border-0 group hover:bg-bone-sub/20 transition-colors px-2">
    <div className="w-4 h-4 rounded bg-forest flex items-center justify-center shrink-0 mt-1 shadow-sm">
      <Check size={12} className="text-bone" strokeWidth={4} />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-bold text-forest truncate group-hover:text-brass transition-colors">{title}</p>
      <div className="flex gap-3 mt-1 text-[10px] font-mono text-slate-sub">
        <span>{date}</span>
        <span>{words} 字</span>
        <span className="text-forest font-bold">{amount}</span>
      </div>
    </div>
  </div>
);

const InvoiceItem = ({ title, words, amount }: { title: string, words: string, amount: string }) => (
  <div className="grid grid-cols-6 gap-4 py-2 border-b border-bone-sub/50 last:border-0 text-sm">
    <span className="col-span-3 text-forest truncate">{title}</span>
    <span className="col-span-1 text-right font-mono text-slate-sub text-xs">{words}</span>
    <span className="col-span-2 text-right font-mono text-forest font-bold tabular-nums">{amount}</span>
  </div>
);

export const BatchInvoice = () => {
  const articles = [
    { title: "春の建築特集（第 2 部）", date: "4/22", words: "3,200", amount: "¥64,000" },
    { title: "北欧デザインの再評価", date: "4/18", words: "2,800", amount: "¥56,000" },
    { title: "古道具屋という生き方", date: "4/15", words: "4,000", amount: "¥80,000" },
    { title: "鎌倉の本屋探訪", date: "4/10", words: "4,200", amount: "¥84,000" },
    { title: "茶道と現代生活", date: "4/05", words: "3,500", amount: "¥70,000" },
    { title: "食卓の革新者たち", date: "4/01", words: "3,500", amount: "¥70,000" },
    { title: "写真家・川内倫子論", date: "3/28", words: "5,500", amount: "¥110,000" },
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
            atelier.studio/invoice/batch
          </span>
        </div>
        
        <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center text-[10px] text-bone font-bold shadow-sm">
          N
        </div>
      </div>
      
      {/* Page Header */}
      <div className="px-6 md:px-8 py-5 border-b border-line bg-bone/50 flex justify-between items-end">
        <h3 className="font-noto-serif text-xl font-black text-forest tracking-tighter">
          Batch Invoicing
        </h3>
        <span className="text-slate-sub text-sm font-medium">
          <span className="text-forest font-mono font-bold mr-1">14</span>
          件納品済
        </span>
      </div>
      
      {/* Media Tabs */}
      <div className="px-6 py-3 flex gap-2 border-b border-line bg-white/10 overflow-x-auto whitespace-nowrap">
        <button className="bg-forest text-bone px-4 py-2 rounded-md font-bold text-sm shadow-md flex items-center gap-2">
          Casa Brutus <span className="text-brass font-mono">7</span>
        </button>
        <button className="bg-bone-sub text-slate px-4 py-2 rounded-md font-medium text-sm hover:bg-line transition-colors flex items-center gap-2">
          &Premium <span className="text-slate-sub font-mono">4</span>
        </button>
        <button className="bg-bone-sub text-slate px-4 py-2 rounded-md font-medium text-sm hover:bg-line transition-colors flex items-center gap-2">
          料理通信 <span className="text-slate-sub font-mono">3</span>
        </button>
      </div>
      
      {/* Main Content: 2 Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] min-h-[600px]">
        
        {/* Left Column: Delivered Articles */}
        <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-line">
          <div className="mb-6 flex justify-between items-end">
            <p className="text-brass text-[10px] font-bold uppercase tracking-[0.2em]">
              Casa Brutus の納品済記事
            </p>
            <div className="flex items-center gap-2 text-forest font-bold text-sm">
              <div className="w-4 h-4 rounded bg-forest flex items-center justify-center">
                <Check size={12} className="text-bone" strokeWidth={4} />
              </div>
              全選択 (7/7)
            </div>
          </div>
          
          <div className="space-y-0">
            {articles.map((art, idx) => (
              <DeliveredRow key={idx} {...art} />
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-forest-sub/10 rounded-xl border border-forest-sub/20">
            <p className="text-brass text-[9px] font-bold uppercase tracking-[0.2em] mb-2">ステータス更新プレビュー</p>
            <div className="flex items-center gap-4 text-forest text-sm font-bold">
              <span>納品済</span>
              <ArrowRight size={14} className="text-brass" strokeWidth={3} />
              <span>請求済 (7 件)</span>
            </div>
          </div>
        </div>
        
        {/* Right Column: Invoice Preview */}
        <div className="p-6 md:p-10 bg-bone/30">
          <div className="bg-white p-8 md:p-12 shadow-2xl border border-line rounded-sm relative max-w-[540px] mx-auto">
            {/* Invoice Header */}
            <div className="flex justify-between items-start mb-12">
              <h4 className="font-noto-serif text-3xl font-black text-forest tracking-tighter">
                INVOICE
              </h4>
              <span className="bg-brass text-bone text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-[0.2em] shadow-sm">
                Draft
              </span>
            </div>
            
            {/* Recipient */}
            <div className="mb-12">
              <p className="text-forest font-bold text-lg mb-1">株式会社マガジンハウス 御中</p>
              <div className="h-px bg-forest-sub/30 w-1/3" />
              <div className="mt-4 space-y-1 text-slate-sub font-mono text-[11px]">
                <p>発行日：2026.05.14</p>
                <p>請求番号：INV-26-0537</p>
              </div>
            </div>
            
            {/* Items Table */}
            <div className="mb-8">
              <div className="grid grid-cols-6 gap-4 px-2 py-2 text-[10px] font-bold text-brass uppercase tracking-widest border-b border-line bg-bone-sub/30">
                <span className="col-span-3">案件名</span>
                <span className="col-span-1 text-right">字数</span>
                <span className="col-span-2 text-right">金額</span>
              </div>
              <div className="space-y-0">
                {articles.map((art, idx) => (
                  <InvoiceItem key={idx} title={art.title} words={art.words.replace(',', '')} amount={art.amount} />
                ))}
              </div>
            </div>
            
            {/* Totals */}
            <div className="flex flex-col items-end gap-2 mb-12 border-t border-line pt-6">
              <div className="flex justify-between w-48 text-sm">
                <span className="text-slate">小計</span>
                <span className="font-mono text-slate">¥534,000</span>
              </div>
              <div className="flex justify-between w-48 text-xs text-slate-sub">
                <span>消費税 (10%)</span>
                <span className="font-mono">¥53,400</span>
              </div>
              <div className="h-px bg-bone-sub w-48 my-1" />
              <div className="flex justify-between w-48 text-xl font-bold text-forest">
                <span>合計</span>
                <span className="font-mono">¥587,400</span>
              </div>
            </div>
            
            {/* Bank Info */}
            <div className="p-4 bg-bone-sub/20 rounded-md border border-line/30 space-y-1 text-[10px] text-slate-sub">
              <p>振込先：みずほ銀行 / 渋谷支店 / 普通 1234567 / ナカムラケイスケ</p>
              <p className="font-mono">振込期限：2026.06.14</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-10 flex justify-center gap-4">
            <button className="flex items-center gap-2 bg-bone-sub text-forest px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-line transition-all border border-line/50">
              <Download size={18} /> PDF として保存
            </button>
            <button className="flex items-center gap-2 bg-forest text-bone px-6 py-2.5 rounded-full font-bold text-sm shadow-xl hover:bg-forest-sub transition-all shadow-forest/20">
              <Mail size={18} /> メールで送信
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchInvoice;

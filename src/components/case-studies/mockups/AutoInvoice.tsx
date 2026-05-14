'use client';

import React from 'react';
import { Check, Download, Mail } from 'lucide-react';

const CaseRow = ({ badge, client, project, amount }: { badge: string, client: string, project: string, amount: string }) => (
  <div className="flex items-center gap-4 py-4 border-b border-bone-sub last:border-0 group">
    <div className="w-5 h-5 rounded-sm border-2 border-forest flex items-center justify-center bg-forest text-bone shadow-sm shrink-0">
      <Check size={14} strokeWidth={3} />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-1">
        <span className="bg-brass text-bone text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-sm tracking-wider">
          {badge}
        </span>
        <h4 className="text-forest font-bold text-sm truncate">{client}</h4>
      </div>
      <p className="text-slate-sub text-[10px] truncate">{project}</p>
    </div>
    <div className="text-forest font-mono text-xs font-bold whitespace-nowrap">
      {amount}
    </div>
  </div>
);

const InvoiceTableItem = ({ id, project, price }: { id: number, project: string, price: string }) => (
  <div className="flex items-center py-2 text-[11px] border-b border-bone-sub/50">
    <span className="w-6 text-slate-sub font-mono">{id}</span>
    <span className="flex-1 text-forest font-medium">{project}</span>
    <span className="w-24 text-right text-slate-sub font-mono">{price}</span>
    <span className="w-24 text-right text-forest font-mono font-bold">{price}</span>
  </div>
);

export const AutoInvoice = () => {
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
            atelier.studio/invoice/new
          </span>
        </div>
        
        <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center text-[10px] text-bone font-bold shadow-sm">
          S
        </div>
      </div>
      
      {/* Page Header */}
      <div className="px-6 md:px-8 py-5 border-b border-line bg-bone/50 flex justify-between items-end">
        <h3 className="font-noto-serif text-xl font-black text-forest tracking-tighter">
          Invoice Generator
        </h3>
        <span className="text-slate-sub text-sm font-medium">
          <span className="text-forest font-mono font-bold mr-1">4</span>
          件選択中
        </span>
      </div>
      
      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left Column: Projects */}
        <div className="w-full lg:w-[38%] border-r border-line p-6 bg-white/10">
          <p className="text-brass text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            検収済案件
          </p>
          <div className="space-y-0">
            <CaseRow badge="BRANDING" client="Aoba Dental Clinic" project="Brand Identity" amount="¥480,000" />
            <CaseRow badge="PACKAGE" client="Kotori Bakery" project="Logo + Package" amount="¥280,000" />
            <CaseRow badge="VISUAL ID" client="Tech Studio K" project="Visual Identity" amount="¥520,000" />
            <CaseRow badge="ANNUAL RPT" client="M Corporation" project="Annual Report Design" amount="¥360,000" />
          </div>
        </div>
        
        {/* Right Column: Preview */}
        <div className="flex-1 p-8 md:p-10 bg-bone/30">
          <div className="bg-white p-8 rounded-xl shadow-xl border border-line/50 max-w-2xl mx-auto">
            {/* Invoice Header */}
            <div className="flex justify-between items-start mb-10">
              <div>
                <h4 className="font-noto-serif text-2xl font-black text-forest tracking-tighter uppercase mb-1">
                  INVOICE
                </h4>
                <div className="h-1 w-12 bg-brass/30" />
              </div>
              <span className="bg-brass text-bone text-[10px] font-bold px-3 py-1 rounded-sm tracking-[0.2em] uppercase">
                Draft
              </span>
            </div>
            
            {/* Billing Info */}
            <div className="mb-10">
              <p className="text-forest font-bold text-lg mb-4">株式会社 ABC 御中</p>
              <div className="space-y-1">
                <p className="text-slate-sub text-xs">
                  発行日：<span className="font-mono ml-2">2026.05.14</span>
                </p>
                <p className="text-slate-sub text-xs">
                  請求番号：<span className="font-mono ml-2">INV-2026-0042</span>
                </p>
              </div>
            </div>
            
            {/* Line Items Table */}
            <div className="border border-bone-sub rounded-lg overflow-hidden shadow-sm mb-8">
              <div className="bg-bone-sub px-4 py-2 flex text-[10px] font-bold text-brass uppercase tracking-widest border-b border-bone-sub">
                <span className="w-6">#</span>
                <span className="flex-1">案件</span>
                <span className="w-24 text-right">単価</span>
                <span className="w-24 text-right">計</span>
              </div>
              <div className="px-4 bg-white">
                <InvoiceTableItem id={1} project="Aoba Dental Clinic - Brand Identity" price="¥480,000" />
                <InvoiceTableItem id={2} project="Kotori Bakery - Logo + Package" price="¥280,000" />
                <InvoiceTableItem id={3} project="Tech Studio K - Visual Identity" price="¥520,000" />
                <InvoiceTableItem id={4} project="M Corporation - Annual Report" price="¥360,000" />
              </div>
            </div>
            
            {/* Calculation */}
            <div className="flex flex-col items-end space-y-2 mb-10 pr-4">
              <div className="flex gap-8 text-xs text-slate font-medium">
                <span>小計</span>
                <span className="font-mono w-24 text-right">¥1,640,000</span>
              </div>
              <div className="flex gap-8 text-xs text-slate-sub">
                <span>消費税 (10%)</span>
                <span className="font-mono w-24 text-right">¥164,000</span>
              </div>
              <div className="h-px w-48 bg-bone-sub my-2" />
              <div className="flex gap-8 text-lg font-bold text-forest">
                <span className="font-noto-serif">合計</span>
                <span className="font-mono w-32 text-right">¥1,804,000</span>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex justify-center md:justify-end gap-3 mt-12">
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-line bg-bone-sub text-forest text-sm font-bold hover:bg-line transition-colors">
                <Download size={16} /> PDF として保存
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-forest text-bone text-sm font-bold hover:bg-forest-sub transition-colors shadow-lg shadow-forest/20">
                <Mail size={16} /> メールで送信
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoInvoice;

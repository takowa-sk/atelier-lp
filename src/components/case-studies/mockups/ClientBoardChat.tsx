'use client';

import React from 'react';
import { Image as ImageIcon, Send } from 'lucide-react';

const Avatar = ({ name, color, textColor = 'text-bone' }: { name: string, color: string, textColor?: string }) => (
  <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-xs font-bold ${textColor} shadow-sm shrink-0`}>
    {name}
  </div>
);

const Message = ({ 
  isClient, 
  text, 
  time, 
  hasAttachments, 
  isApproved 
}: { 
  isClient?: boolean, 
  text: string, 
  time: string, 
  hasAttachments?: boolean,
  isApproved?: boolean
}) => (
  <div className={`flex flex-col ${isClient ? 'items-end' : 'items-start'} space-y-1`}>
    <div className={`flex items-end gap-2 ${isClient ? 'flex-row-reverse' : 'flex-row'}`}>
      <Avatar 
        name={isClient ? 'A' : 'S'} 
        color={isClient ? 'bg-forest-sub' : 'bg-bone-sub'} 
        textColor={isClient ? 'text-bone' : 'text-forest'} 
      />
      <div className={`max-w-[80%] md:max-w-[60%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
        isClient 
          ? 'bg-forest text-bone rounded-bl-sm' 
          : 'bg-bone-sub text-forest rounded-br-sm border border-line/30'
      }`}>
        {text}
        {isApproved && (
          <div className="mt-2 flex justify-end">
            <span className="bg-brass text-bone text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              ✓ Approved
            </span>
          </div>
        )}
      </div>
      <span className="text-[10px] font-mono text-slate-sub pb-1">{time}</span>
    </div>
    
    {hasAttachments && (
      <div className="ml-10 mt-2 flex gap-2">
        {[1, 2].map((i) => (
          <div key={i} className="w-20 h-20 bg-bone-sub border border-line rounded-lg flex items-center justify-center text-forest/20 shadow-inner">
            <ImageIcon size={24} />
          </div>
        ))}
      </div>
    )}
  </div>
);

export const ClientBoardChat = () => {
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
            atelier.studio/board/aoba-dental
          </span>
        </div>
        
        <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center text-[10px] text-bone font-bold shadow-sm">
          S
        </div>
      </div>
      
      {/* Project Header */}
      <div className="px-6 md:px-8 py-6 border-b border-line bg-bone/50">
        <h3 className="font-noto-serif text-xl md:text-2xl font-black text-forest tracking-tighter">
          Aoba Dental Clinic | Brand Identity
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-slate-sub text-xs font-medium uppercase tracking-widest">Active / 8 messages</span>
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="p-6 md:p-10 space-y-8 min-h-[500px] flex flex-col">
        <Message 
          time="14:23" 
          text="初稿をアップロードしました。トーン＆マナーをご確認ください。" 
          hasAttachments 
        />
        
        <Message 
          isClient 
          time="14:35" 
          text="拝見しました。コンセプトの方向性 OK です。ロゴマークの傾斜角度を 3 度ほど立てていただけますか。" 
        />
        
        <Message 
          time="16:12" 
          text="了解しました、修正版を本日中にお戻しします。" 
        />
        
        <Message 
          isClient 
          time="18:47" 
          text="完璧です。承認します。" 
          isApproved 
        />
        
        {/* Spacer to push input to bottom if needed */}
        <div className="flex-1" />
      </div>
      
      {/* Input Footer */}
      <div className="p-4 md:p-6 border-t border-line bg-white/30 backdrop-blur-sm flex items-center gap-4">
        <div className="flex-1 bg-bone-sub border border-line/50 rounded-full py-3 px-6 text-sm text-slate-sub font-medium shadow-inner">
          メッセージを入力…
        </div>
        <button className="bg-forest text-bone px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-forest-sub transition-colors shadow-lg">
          Send <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default ClientBoardChat;

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  sender: 'Ren Nakano' | 'Dr. Aoba';
  text: string;
  time: string;
  isOwner: boolean;
  hasImages?: boolean;
}

const initialMessages: Message[] = [
  { id: 1, sender: 'Ren Nakano', time: '10:42 AM', text: '初稿をアップロードしました。トーン＆マナーのご確認をお願いします。', isOwner: true, hasImages: true },
  { id: 2, sender: 'Dr. Aoba', time: '11:15 AM', text: '確認しました。とても良いですね！2枚目の色味をもう少し明るくできますか？', isOwner: false },
];

const cannedResponses = [
  "ありがとうございます！確認しますね。",
  "すごく良いですね、このまま進めてください。",
  "もう少しだけトーンを暖かくできますか？",
  "素晴らしい！承認です。次のフェーズへ。",
];

export function FeatureBoardDemo() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputText.trim() || isTyping) return;

    const newMessage: Message = {
      id: Date.now(),
      sender: 'Ren Nakano',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: inputText,
      isOwner: true,
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');

    // Trigger auto-reply
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        const reply: Message = {
          id: Date.now() + 1,
          sender: 'Dr. Aoba',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: cannedResponses[Math.floor(Math.random() * cannedResponses.length)],
          isOwner: false,
        };
        setIsTyping(false);
        setMessages(prev => [...prev, reply]);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="bg-bone-sub border border-line rounded-xl p-4 md:p-6 shadow-xl max-w-md mx-auto lg:mx-0 flex flex-col h-[400px]">
      <div className="flex items-center gap-3 border-b border-line pb-4 mb-4 shrink-0">
        <div className="w-8 h-8 rounded-full bg-brass text-bone flex items-center justify-center text-xs font-bold shadow-sm">
          CL
        </div>
        <div>
          <div className="text-sm font-bold">Client Review Board</div>
          <div className="text-xs text-slate-sub">Aoba Dental Clinic</div>
        </div>
        <button 
          onClick={() => setMessages(initialMessages)}
          className="ml-auto text-[10px] text-brass hover:underline"
        >
          Reset
        </button>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar mb-4"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div 
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex flex-col ${msg.isOwner ? 'items-end ml-8' : 'items-start mr-8'}`}
            >
              <div className={`p-3 rounded-xl shadow-sm ${
                msg.isOwner 
                  ? 'bg-white border border-line rounded-tr-sm' 
                  : 'bg-forest text-bone rounded-tl-sm'
              }`}>
                <div className={`text-[10px] font-bold mb-1 flex gap-2 ${msg.isOwner ? 'text-slate-sub' : 'text-bone-sub/60'}`}>
                  {msg.sender} <span className="font-normal">{msg.time}</span>
                </div>
                <div className="text-sm leading-relaxed">{msg.text}</div>
                {msg.hasImages && (
                  <div className="mt-2 flex gap-2">
                    <div className="w-16 h-12 bg-forest/10 rounded flex items-center justify-center text-[10px] text-forest border border-forest/20">IMG</div>
                    <div className="w-16 h-12 bg-forest/10 rounded flex items-center justify-center text-[10px] text-forest border border-forest/20">IMG</div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-1 bg-forest/5 p-3 rounded-xl rounded-tl-sm w-16"
            >
              <div className="w-1.5 h-1.5 bg-forest/40 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-1.5 h-1.5 bg-forest/40 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-1.5 h-1.5 bg-forest/40 rounded-full animate-bounce"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="flex gap-2 shrink-0">
        <input 
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder={isTyping ? "Waiting for reply..." : "Reply..."}
          disabled={isTyping}
          className="flex-1 bg-white border border-line rounded px-3 py-2 text-sm focus:outline-none focus:border-brass transition-colors shadow-inner disabled:bg-bone-sub"
        />
        <button 
          onClick={handleSend}
          disabled={!inputText.trim() || isTyping}
          className={`bg-forest text-bone px-4 rounded flex items-center justify-center text-xs font-medium transition-all shadow-sm active:scale-95 ${
            !inputText.trim() || isTyping ? 'opacity-50 cursor-not-allowed' : 'hover:bg-forest-sub'
          }`}
        >
          Send
        </button>
      </div>
    </div>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';

// Mock Data
const initialPipeline = {
  inProgress: [
    { id: '1', client: 'Aoba Dental Clinic', title: 'Brand Identity Design', tag: 'Branding' },
    { id: '2', client: 'Kotori Bakery', title: 'Corporate Site Renewal', tag: 'Web' },
  ],
  review: [
    { id: '3', client: 'Tech Startup Inc.', title: 'Pitch Deck Design', tag: 'Presentation', notifications: 2 },
  ],
};

const initialMessages = [
  { id: 1, sender: 'Ren Nakano', time: '10:42 AM', text: 'Just uploaded the first draft. Would love your thoughts on the tone and direction.', isOwner: true, hasImages: true },
  { id: 2, sender: 'Dr. Aoba', time: '11:15 AM', text: 'Just reviewed it. Looking great! Could we lighten the colors a bit on the second one?', isOwner: false },
];

const versions = [
  { id: 'v3.0', time: '2 hours ago', status: 'Approved', file: 'preview_v3.png', approvedBy: 'Dr. Aoba' },
  { id: 'v2.0', time: 'Yesterday', status: 'Changes Requested', file: 'preview_v2_feedback.png', approvedBy: null },
  { id: 'v1.0', time: 'Oct 12', status: 'Draft', file: 'concept_v1.png', approvedBy: null },
];

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState(0);

  // Tab 0 State
  const [pipeline, setPipeline] = useState(initialPipeline);
  const moveCard = (cardId: string, from: 'inProgress' | 'review') => {
    const to = from === 'inProgress' ? 'review' : 'inProgress';
    const card = pipeline[from].find(c => c.id === cardId);
    if (!card) return;
    setPipeline({
      ...pipeline,
      [from]: pipeline[from].filter(c => c.id !== cardId),
      [to]: [...pipeline[to], card],
    });
  };

  // Tab 1 State
  const [messages, setMessages] = useState(initialMessages);
  const [reply, setReply] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!reply.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: 'Ren Nakano', time: 'Just now', text: reply, isOwner: true, hasImages: false }]);
    setReply('');
  };

  useEffect(() => {
    if (activeTab === 1 && chatEndRef.current) {
      const container = chatEndRef.current.parentElement;
      if (container) {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  }, [messages, activeTab]);

  // Tab 2 State
  const [activeVersion, setActiveVersion] = useState(versions[0].id);
  const currentVersionData = versions.find(v => v.id === activeVersion);

  return (
    <div className="w-full">
      {/* Demo Window Shell */}
      <div className="max-w-5xl mx-auto mb-16 relative group perspective-1000">
        <div className="absolute -inset-1 bg-gradient-to-r from-brass/20 via-forest-sub/40 to-brass/20 rounded-2xl blur-lg opacity-80"></div>
        
        <div className="relative bg-[#F5F2EB] rounded-2xl border-2 border-bone/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-700 ease-out">
          
          {/* Mac Window Header */}
          <div className="h-12 bg-white/80 backdrop-blur-md border-b border-[#E5E2DA] flex items-center px-6 gap-3 z-20 relative">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-inner"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-inner"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-inner"></div>
            </div>
            <div className="mx-auto bg-[#EBE7DF] px-4 py-1 rounded-md text-[10px] font-mono text-[#6A6C70] border border-[#DCD8CE] shadow-sm flex items-center gap-2">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              atelier.studio/demo
            </div>
          </div>

          {/* Interactive Canvas */}
          <div className="h-[500px] overflow-hidden relative bg-[#F5F2EB] text-[#2C2D30]">
            
            {/* TAB 0: Pipeline */}
            <div className={`absolute inset-0 transition-all duration-500 p-8 ${activeTab === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="flex gap-6 h-full">
                {/* Column: In Progress */}
                <div className="w-80 flex flex-col bg-[#EBE7DF]/50 rounded-xl p-4 border border-[#E5E2DA]">
                  <div className="flex items-center justify-between mb-4 px-2">
                    <span className="text-xs font-bold tracking-wider uppercase">In Progress</span>
                    <span className="bg-[#1F3A2E] text-[#F5F2EB] px-2 py-0.5 rounded-full text-[10px] font-mono">{pipeline.inProgress.length}</span>
                  </div>
                  <div className="flex flex-col gap-3 overflow-y-auto pb-4">
                    {pipeline.inProgress.map(card => (
                      <div key={card.id} onClick={() => moveCard(card.id, 'inProgress')} className="bg-white p-4 rounded-xl border border-[#E5E2DA] shadow-sm cursor-pointer hover:border-[#B27C4E] hover:shadow-md transition-all group transform hover:-translate-y-1">
                        <span className="text-[9px] font-bold text-[#B27C4E] uppercase tracking-wider bg-[#B27C4E]/10 px-2 py-1 rounded mb-3 inline-block">{card.tag}</span>
                        <h4 className="font-bold text-sm mb-1">{card.client}</h4>
                        <p className="text-xs text-[#6A6C70]">{card.title}</p>
                        <div className="mt-3 text-[10px] text-[#6A6C70] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to move to Review →
                        </div>
                      </div>
                    ))}
                    {pipeline.inProgress.length === 0 && (
                      <div className="text-center p-8 text-[#6A6C70] text-sm border-2 border-dashed border-[#DCD8CE] rounded-xl">No tasks yet</div>
                    )}
                  </div>
                </div>

                {/* Column: Review */}
                <div className="w-80 flex flex-col bg-[#EBE7DF]/30 rounded-xl p-4 border border-[#E5E2DA]">
                  <div className="flex items-center justify-between mb-4 px-2">
                    <span className="text-xs font-bold tracking-wider uppercase">Review</span>
                    <span className="bg-[#B27C4E] text-[#F5F2EB] px-2 py-0.5 rounded-full text-[10px] font-mono">{pipeline.review.length}</span>
                  </div>
                  <div className="flex flex-col gap-3 overflow-y-auto pb-4">
                    {pipeline.review.map(card => (
                      <div key={card.id} onClick={() => moveCard(card.id, 'review')} className="bg-white p-4 rounded-xl border border-[#B27C4E]/30 shadow-[0_4px_15px_-5px_rgba(178,124,78,0.2)] cursor-pointer hover:border-[#1F3A2E] transition-all relative group transform hover:-translate-y-1">
                        {card.notifications && (
                          <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#D32F2F] text-white text-[10px] font-bold rounded-full border-2 border-white flex items-center justify-center animate-bounce">{card.notifications}</div>
                        )}
                        <span className="text-[9px] font-bold text-[#1F3A2E] uppercase tracking-wider bg-[#1F3A2E]/10 px-2 py-1 rounded mb-3 inline-block">{card.tag}</span>
                        <h4 className="font-bold text-sm mb-1">{card.client}</h4>
                        <p className="text-xs text-[#6A6C70] mb-3">{card.title}</p>
                        {card.notifications && (
                          <div className="text-[10px] text-[#B27C4E] font-medium flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            {card.notifications} Unread Client Comments
                          </div>
                        )}
                        <div className="mt-3 text-[10px] text-[#6A6C70] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          ← Click to move back
                        </div>
                      </div>
                    ))}
                    {pipeline.review.length === 0 && (
                      <div className="text-center p-8 text-[#6A6C70] text-sm border-2 border-dashed border-[#DCD8CE] rounded-xl">No tasks yet</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* TAB 1: Client Board */}
            <div className={`absolute inset-0 transition-all duration-500 p-8 flex items-center justify-center ${activeTab === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="w-full max-w-md bg-[#EBE7DF] border border-[#DCD8CE] rounded-2xl p-4 shadow-xl flex flex-col h-[400px]">
                <div className="flex items-center gap-3 border-b border-[#DCD8CE] pb-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#B27C4E] text-[#F5F2EB] flex items-center justify-center text-sm font-bold shadow-inner">CL</div>
                  <div>
                    <div className="text-sm font-bold">Client Review Board</div>
                    <div className="text-xs text-[#6A6C70]">Aoba Dental Clinic</div>
                  </div>
                </div>
                
                <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                  {messages.map(msg => (
                    <div key={msg.id} className={`flex flex-col ${msg.isOwner ? 'ml-6 items-end' : 'mr-6 items-start'}`}>
                      <div className={`p-3 rounded-xl shadow-sm ${msg.isOwner ? 'bg-white border border-[#E5E2DA] rounded-tr-sm' : 'bg-[#1F3A2E] text-white rounded-tl-sm'}`}>
                        <div className="text-[10px] font-bold mb-1 opacity-70 flex gap-2">
                          {msg.sender} <span className="font-normal">{msg.time}</span>
                        </div>
                        <div className="text-sm leading-relaxed">{msg.text}</div>
                        {msg.hasImages && (
                          <div className="mt-3 flex gap-2">
                            <div className="w-16 h-12 bg-[#EBE7DF] rounded-md flex items-center justify-center text-[10px] text-[#6A6C70] border border-[#DCD8CE]">IMG</div>
                            <div className="w-16 h-12 bg-[#EBE7DF] rounded-md flex items-center justify-center text-[10px] text-[#6A6C70] border border-[#DCD8CE]">IMG</div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
                
                <div className="mt-4 pt-3 border-t border-[#DCD8CE] flex gap-2">
                  <input 
                    type="text" 
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type a reply..." 
                    className="flex-1 bg-white border border-[#DCD8CE] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#B27C4E] shadow-inner"
                  />
                  <button onClick={handleSend} className="bg-[#1F3A2E] text-[#F5F2EB] px-4 rounded-lg text-sm font-medium hover:bg-[#2A4B3C] transition-colors shadow-sm active:scale-95">Send</button>
                </div>
              </div>
            </div>

            {/* TAB 2: Version Management */}
            <div className={`absolute inset-0 transition-all duration-500 p-8 flex items-center justify-center ${activeTab === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="w-full max-w-3xl bg-[#F5F2EB] border border-[#DCD8CE] rounded-2xl shadow-xl flex overflow-hidden h-[400px]">
                {/* Sidebar */}
                <div className="w-64 bg-[#EBE7DF]/50 border-r border-[#DCD8CE] p-4 flex flex-col gap-2">
                  <div className="text-xs font-bold tracking-widest uppercase text-[#6A6C70] mb-2 px-2">Versions</div>
                  {versions.map(v => (
                    <div 
                      key={v.id} 
                      onClick={() => setActiveVersion(v.id)}
                      className={`p-3 rounded-xl cursor-pointer transition-all ${activeVersion === v.id ? 'bg-[#1F3A2E] text-white shadow-md' : 'hover:bg-white text-[#2C2D30]'}`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="font-mono text-sm font-bold">{v.id} {v.id === 'v3.0' && '(Current)'}</div>
                        {v.status === 'Approved' && <div className="w-4 h-4 rounded-full bg-[#B27C4E] flex items-center justify-center"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>}
                      </div>
                      <div className={`text-xs mt-1 ${activeVersion === v.id ? 'text-white/70' : 'text-[#6A6C70]'}`}>{v.time}</div>
                    </div>
                  ))}
                </div>
                
                {/* Main Content */}
                <div className="flex-1 p-6 bg-white flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold mb-1">Final Deliverables</h3>
                      {currentVersionData?.approvedBy ? (
                        <p className="text-sm text-[#6A6C70]">Approved by {currentVersionData.approvedBy}</p>
                      ) : (
                        <p className="text-sm text-[#6A6C70]">Pending approval</p>
                      )}
                    </div>
                    {currentVersionData?.status === 'Approved' ? (
                      <span className="bg-[#EBE7DF] text-[#1F3A2E] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#27C93F]"></span> Approved</span>
                    ) : (
                      <span className="bg-[#EBE7DF] text-[#6A6C70] px-3 py-1 rounded-full text-xs font-bold">Reviewing</span>
                    )}
                  </div>
                  
                  <div className="flex-1 border border-[#E5E2DA] rounded-xl bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-[#F5F2EB] relative overflow-hidden flex items-center justify-center group">
                    <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay"></div>
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#DCD8CE 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    
                    <div className="bg-white px-6 py-3 rounded-lg shadow-lg border border-[#E5E2DA] font-mono text-sm font-bold text-[#1F3A2E] z-10 transform group-hover:scale-110 transition-transform cursor-pointer">
                      {currentVersionData?.file}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Chapter Controls */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-sm font-bold tracking-widest uppercase text-brass mb-8 text-center">Interactive chapters</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Pipeline', desc: 'Click a card to move it' },
            { title: 'Client Board', desc: 'Send a reply' },
            { title: 'Version History', desc: 'Switch versions' }
          ].map((chap, i) => (
            <div 
              key={i} 
              onClick={() => setActiveTab(i)}
              className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${activeTab === i ? 'bg-forest-sub/60 border-brass shadow-[0_0_20px_rgba(178,124,78,0.3)] transform -translate-y-1' : 'bg-forest-sub/40 border-bone/20 shadow-md hover:border-brass/50 hover:bg-forest-sub/50'}`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeTab === i ? 'bg-brass text-forest' : 'bg-bone/10 text-bone'}`}>{i + 1}</div>
                {activeTab === i && <span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brass opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-brass"></span></span>}
              </div>
              <h4 className={`font-bold transition-colors ${activeTab === i ? 'text-brass' : 'text-bone'}`}>{chap.title}</h4>
              <p className="text-sm text-bone-sub/70 mt-1">{chap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

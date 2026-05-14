'use client';

import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
interface CardData {
  id: string;
  client: string;
  title: string;
  tag: string;
  progress: number;
  notifications?: number;
  columnId: string;
}

// --- Internal Card UI Component ---
const CardInner = ({ card }: { card: CardData }) => (
  <div className={`bg-white p-5 rounded-xl border ${card.columnId === 'review' ? 'border-brass/30 shadow-[0_4px_20px_-5px_rgba(178,124,78,0.2)]' : 'border-line shadow-sm'} group relative transition-shadow hover:shadow-md cursor-grab active:cursor-grabbing`}>
    {card.notifications && (
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-error rounded-full border-2 border-white animate-bounce flex items-center justify-center text-[8px] text-white font-bold">
        {card.notifications}
      </div>
    )}
    <div className="flex justify-between items-start mb-3">
      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${
        card.tag === 'Branding' ? 'text-brass bg-brass/10' : 
        card.tag === 'Web' ? 'text-forest bg-forest/10' : 
        'text-slate bg-slate/10'
      }`}>
        {card.tag}
      </span>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
        card.columnId === 'review' ? 'bg-brass text-bone' : 'bg-forest-sub text-bone'
      }`}>
        {card.client.charAt(0)}
      </div>
    </div>
    <h4 className="font-bold text-sm mb-1 group-hover:text-forest transition-colors">{card.client}</h4>
    <p className="text-xs text-slate-sub mb-4 line-clamp-1">{card.title}</p>
    
    <div className="w-full bg-bone-sub h-1.5 rounded-full overflow-hidden flex">
      <div 
        className={`h-full rounded-full transition-all duration-1000 ${
          card.columnId === 'review' ? 'bg-success w-[90%]' : 'bg-gradient-to-r from-forest to-brass'
        }`}
        style={{ width: card.columnId === 'review' ? '90%' : `${card.progress}%` }}
      ></div>
      {card.columnId === 'review' && <div className="bg-warning w-[10%] h-full opacity-50"></div>}
    </div>

    {card.columnId === 'review' && card.notifications && (
      <div className="mt-3 text-[10px] text-brass font-medium flex items-center gap-1">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        {card.notifications} Unread Client Comments
      </div>
    )}
  </div>
);

// --- Sortable Wrapper ---
const SortableCard = ({ card, isOverlay = false }: { card: CardData; isOverlay?: boolean }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  if (isOverlay) return <div className="w-full"><CardInner card={card} /></div>;

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <CardInner card={card} />
    </div>
  );
};

// --- Demo Component ---
export function FeaturePipelineDemo() {
  const initialCards: CardData[] = [
    { id: 'card-1', client: 'Aoba Dental Clinic', title: 'Brand Identity Design', tag: 'Branding', progress: 60, columnId: 'inProgress' },
    { id: 'card-2', client: 'Kotori Bakery', title: 'Corporate Site Renewal', tag: 'Web', progress: 30, columnId: 'inProgress' },
    { id: 'card-3', client: 'Tech Startup Inc.', title: 'Series A Pitch Deck', tag: 'Presentation', progress: 90, notifications: 2, columnId: 'review' },
  ];

  const [cards, setCards] = useState<CardData[]>(initialCards);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const getCardsByColumn = (columnId: string) => cards.filter(c => c.columnId === columnId);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    const activeCard = cards.find(c => c.id === activeId);
    if (!activeCard) return;

    // Determine if we are hovering over a column or another card
    const isOverAColumn = ['inProgress', 'review'].includes(overId);
    const overCard = cards.find(c => c.id === overId);
    const targetColumn = isOverAColumn ? overId : overCard?.columnId;

    if (targetColumn && activeCard.columnId !== targetColumn) {
      setCards(prev => prev.map(c => c.id === activeId ? { ...c, columnId: targetColumn } : c));
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      const activeIndex = cards.findIndex(c => c.id === active.id);
      const overIndex = cards.findIndex(c => c.id === over.id);
      
      if (activeIndex !== -1 && overIndex !== -1) {
        setCards(prev => arrayMove(prev, activeIndex, overIndex));
      }
    }
    setActiveId(null);
  };

  const resetDemo = () => setCards(initialCards);

  return (
    <div className="w-full h-full max-h-[500px] bg-bone text-slate rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] flex gap-4 overflow-hidden border border-bone-sub relative">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {/* App Header */}
        <div className="absolute top-0 inset-x-0 h-12 bg-white/80 backdrop-blur-md border-b border-line flex items-center px-6 gap-2 z-20">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <div className="mx-auto bg-bone-sub px-4 py-1 rounded-md text-[10px] font-mono text-slate-sub border border-line">
            atelier.studio/board
          </div>
          <button 
            onClick={resetDemo}
            className="text-[10px] font-bold text-brass hover:text-forest transition-colors flex items-center gap-1"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
            Reset
          </button>
        </div>

        {/* Columns */}
        <div className="flex flex-1 pt-12 overflow-x-auto">
          {['inProgress', 'review'].map(colId => (
            <div key={colId} className={`w-[280px] shrink-0 flex flex-col gap-4 p-4 ${colId === 'inProgress' ? 'bg-bone-sub/30 border-r border-line/50' : 'bg-bone-sub/10'}`}>
              <div className="flex items-center justify-between px-2 mb-2">
                <span className="text-xs font-bold tracking-wider uppercase text-slate">
                  {colId === 'inProgress' ? 'In Progress' : 'Review'}
                </span>
                <AnimatePresence mode="popLayout">
                  <motion.span 
                    key={getCardsByColumn(colId).length}
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono shadow-sm ${colId === 'inProgress' ? 'bg-forest text-bone' : 'bg-brass text-bone'}`}
                  >
                    {getCardsByColumn(colId).length}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="flex flex-col gap-3 min-h-[300px]">
                <SortableContext id={colId} items={getCardsByColumn(colId).map(c => c.id)} strategy={verticalListSortingStrategy}>
                  {getCardsByColumn(colId).map(card => (
                    <SortableCard key={card.id} card={card} />
                  ))}
                  {getCardsByColumn(colId).length === 0 && (
                    <div className="flex-1 border-2 border-dashed border-line rounded-xl flex items-center justify-center p-8 text-slate-sub/40 italic text-xs text-center">
                      Drop cards here
                    </div>
                  )}
                </SortableContext>
              </div>
            </div>
          ))}
        </div>

        <DragOverlay dropAnimation={{
          sideEffects: defaultDropAnimationSideEffects({
            styles: {
              active: {
                opacity: '0.4',
              },
            },
          }),
        }}>
          {activeId ? (
            <SortableCard card={cards.find(c => c.id === activeId)!} isOverlay />
          ) : null}
        </DragOverlay>
      </DndContext>
      
      {/* Fade out edge effect */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bone to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}

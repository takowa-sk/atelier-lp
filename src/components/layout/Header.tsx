'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bone/80 backdrop-blur-md border-b border-line">
      <Container className="h-16 flex items-center justify-between">
        <Link href="/" onClick={close} className="font-noto-serif font-bold text-xl tracking-tight text-forest">
          Atelier.
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/#features" className="text-slate hover:text-forest transition-colors">Features</Link>
          <Link href="/pricing" className="text-slate hover:text-forest transition-colors">Pricing</Link>
          <Link href="/case-studies" className="text-slate hover:text-forest transition-colors">In Practice</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-slate hover:text-forest">
            Log in
          </Link>
          <Button asChild variant="default" size="sm">
            <Link href="/signup">Sign up</Link>
          </Button>
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="md:hidden -mr-2 p-2 text-forest hover:text-brass transition-colors"
          >
            {isOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div id="mobile-nav" className="md:hidden border-t border-line bg-bone/95 backdrop-blur-md">
          <Container className="py-4 flex flex-col">
            <Link
              href="/#features"
              onClick={close}
              className="py-3 text-base font-medium text-slate hover:text-forest transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              onClick={close}
              className="py-3 text-base font-medium text-slate hover:text-forest transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/case-studies"
              onClick={close}
              className="py-3 text-base font-medium text-slate hover:text-forest transition-colors"
            >
              In Practice
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}

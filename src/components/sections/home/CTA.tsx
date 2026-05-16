import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function CTA() {
  return (
    <Section className="bg-forest border-t border-forest-sub relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-10">
        <svg viewBox="0 0 1000 1000" className="w-full h-full max-w-[1200px] text-bone" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="500" cy="500" r="400" />
          <circle cx="500" cy="500" r="300" />
          <circle cx="500" cy="500" r="200" />
        </svg>
      </div>

      <Container className="relative z-10 text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-noto-serif mb-6 text-bone">
          Better tools. Better work.
        </h2>
        <p className="text-lg text-bone-sub/80 mb-10 leading-relaxed max-w-xl mx-auto">
          Scattered messages. Lost files. Forgotten invoices.
          Let them go—and get back to making.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="bg-brass text-bone hover:bg-brass/90 border-none">
            <Link href="/signup">Try free for 14 days</Link>
          </Button>
        </div>
        <p className="mt-6 text-xs text-bone-sub/50">
          No credit card required.
        </p>
      </Container>
    </Section>
  );
}

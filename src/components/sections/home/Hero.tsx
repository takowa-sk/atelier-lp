import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
      {/* Abstract SVG Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30">
        <svg viewBox="0 0 1000 1000" className="w-full h-full max-w-[1200px] text-forest-sub" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="500" cy="500" r="400" />
          <circle cx="500" cy="500" r="300" strokeDasharray="4 4" />
          <circle cx="500" cy="500" r="200" />
          <line x1="100" y1="500" x2="900" y2="500" />
          <line x1="500" y1="100" x2="500" y2="900" />
        </svg>
      </div>

      <Container className="relative z-10 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-[72px] leading-tight md:leading-[1.1] mb-8 font-noto-serif text-forest">
          Every back-and-forth with your client—
          <span className="text-forest">in one place.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-sub mb-12 max-w-2xl mx-auto leading-relaxed">
          A client work OS for independent creators. Projects, deliverables, and conversations—in one place.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/signup">Get started free</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white hover:bg-bone-sub border-line">
            <Link href="/demo">See it in action</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

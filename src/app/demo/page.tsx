import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { InteractiveDemo } from './InteractiveDemo';

export const metadata: Metadata = {
  title: 'Interactive Demo',
  description: 'Atelier のプロダクトデモを操作して体験してください。',
};

export default function DemoPage() {
  return (
    <main className="bg-forest min-h-screen text-bone pt-24 pb-32 overflow-hidden relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-forest-sub/30 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brass/10 blur-[100px] rounded-full pointer-events-none translate-y-1/3"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-brass/10 border border-brass/20 text-brass text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(178,124,78,0.2)]">
            Interactive Tour
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-noto-serif mb-6 leading-tight tracking-tight">
            さあ、実際に触ってみてください。
          </h1>
          <p className="text-bone-sub/80 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Atelier の中核となる 3 つの機能を、そのままブラウザ上で体験できます。
          </p>
        </div>

        {/* Interactive Demo Component */}
        <InteractiveDemo />
        
        {/* CTA */}
        <div className="mt-32 text-center relative z-20">
          <h2 className="text-3xl font-noto-serif mb-8">すべての機能が、14 日間無料。</h2>
          <Button asChild size="lg" variant="secondary" className="bg-bone text-forest hover:bg-bone-sub px-12 h-14 text-lg shadow-xl">
            <Link href="/signup">無料で始める</Link>
          </Button>
          <p className="text-bone-sub/50 mt-4 text-sm">クレジットカード不要。いつでもキャンセル可能。</p>
        </div>
      </Container>
    </main>
  );
}

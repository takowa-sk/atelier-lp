import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FeaturePipelineDemo } from './demos/FeaturePipelineDemo';

export function FeaturePipeline() {
  return (
    <Section className="relative overflow-hidden bg-forest text-bone py-32 lg:py-48 z-0">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-forest-sub/30 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brass/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="max-w-xl relative">
            <div className="absolute -left-8 -top-8 w-16 h-16 border-t-2 border-l-2 border-brass/20 rounded-tl-3xl opacity-50 hidden md:block"></div>
            <span className="inline-block py-1 px-3 rounded-full bg-brass/10 border border-brass/20 text-brass text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(178,124,78,0.2)]">
              01. Pipeline
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-noto-serif mb-8 text-bone leading-[1.1] tracking-tight">
              Know exactly where every project stands.
            </h2>
            <p className="text-bone-sub/80 text-lg md:text-xl leading-relaxed mb-10 font-light">
              Accept, build, deliver, approve, invoice.
              Every project is a card. Every stage is visible.
              What needs to ship this week is obvious.
            </p>
            <div className="flex gap-6 items-center text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brass animate-pulse"></div>
                <span className="text-bone-sub">Real-time sync</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <span className="text-bone-sub">Auto-updating status</span>
              </div>
            </div>
          </div>
          
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
            {/* 3D-like Mockup Container */}
            <div className="absolute inset-0 bg-gradient-to-br from-bone/10 to-transparent rounded-3xl transform rotate-3 scale-105 border border-white/5 backdrop-blur-sm -z-10 shadow-2xl"></div>
            
            <FeaturePipelineDemo />
          </div>
        </div>
      </Container>
    </Section>
  );
}

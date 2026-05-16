import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const steps = [
  { id: '01', title: 'Quote & Accept', desc: 'Accept a project, get a dedicated board. Every assumption, in writing.' },
  { id: '02', title: 'Build & Share', desc: 'Ship versions, gather feedback. Every revision lives in one place.' },
  { id: '03', title: 'Approve', desc: 'One click from your client. Clear sign-off, no ambiguity.' },
  { id: '04', title: 'Invoice', desc: 'Status-linked invoicing. Track when payment is due, automatically.' },
];

export function WorkflowViz() {
  return (
    <Section className="relative bg-forest text-bone overflow-hidden py-32 lg:py-48 z-0">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-forest-sub/40 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brass/10 blur-[100px] rounded-full pointer-events-none -z-10 translate-y-1/2"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

      <Container className="relative z-10">
        <div className="text-center mb-24 lg:mb-32">
          <span className="inline-block py-1 px-3 rounded-full bg-brass/10 border border-brass/20 text-brass text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(178,124,78,0.2)]">
            Workflow
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-noto-serif mb-6 text-bone tracking-tight leading-tight">
            Glide from start to invoice.
          </h2>
          <p className="text-lg md:text-xl text-bone-sub/70 max-w-2xl mx-auto leading-relaxed">
            From accept to invoice—every step on a single, connected line.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Timeline Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-forest-sub via-brass/50 to-forest-sub -translate-y-1/2 z-0" />
          
          {/* Timeline Line (Mobile) */}
          <div className="md:hidden absolute top-[5%] bottom-[5%] left-10 w-[2px] bg-gradient-to-b from-forest-sub via-brass/50 to-forest-sub z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="group relative flex md:flex-col items-start md:items-center text-left md:text-center">
                {/* Step Node */}
                <div className="relative shrink-0 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-forest-sub/30 border border-bone/10 backdrop-blur-md shadow-2xl mb-0 md:mb-8 mr-6 md:mr-0 transition-all duration-500 group-hover:bg-forest-sub/60 group-hover:border-brass/30 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="font-mono text-2xl text-brass font-bold tracking-tighter drop-shadow-[0_0_8px_rgba(178,124,78,0.5)]">
                    {step.id}
                  </span>
                </div>
                
                {/* Step Content */}
                <div className="flex-1 mt-2 md:mt-0 transition-all duration-500 group-hover:translate-x-2 md:group-hover:translate-x-0 md:group-hover:-translate-y-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-bone group-hover:text-brass transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-bone-sub/60 leading-relaxed group-hover:text-bone-sub/90 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

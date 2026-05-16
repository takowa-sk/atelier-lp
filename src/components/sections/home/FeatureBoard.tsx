import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

import { FeatureBoardDemo } from './demos/FeatureBoardDemo';

export function FeatureBoard() {
  return (
    <Section className="bg-bone border-b border-line">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <FeatureBoardDemo />
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-brass font-mono text-sm block mb-4">02. Client Board</span>
            <h2 className="text-3xl md:text-4xl font-noto-serif mb-6 text-forest">
              A shared board. No more crossed wires.
            </h2>
            <p className="text-slate-sub text-lg leading-relaxed mb-8">
              The ZIP file you emailed. The feedback that scrolled off in chat.
              With Atelier, the work and the conversation live together.
              Your client opens one link—no login needed.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';


import { FeatureVersionDemo } from './demos/FeatureVersionDemo';

export function FeatureVersion() {
  return (
    <Section className="bg-bone-sub/30">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brass font-mono text-sm block mb-4">03. Version Control</span>
          <h2 className="text-3xl md:text-4xl font-noto-serif mb-6 text-forest">
            One latest version. Always.
          </h2>
          <p className="text-slate-sub text-lg leading-relaxed">
            No more file_final_v2.
            Every revision, tracked visually, side by side.
          </p>
        </div>
        
        <FeatureVersionDemo />
      </Container>
    </Section>
  );
}

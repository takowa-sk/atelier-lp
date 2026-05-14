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
            「最新版」は常に一つだけ。
          </h2>
          <p className="text-slate-sub text-lg leading-relaxed">
            ファイル名に _final_v2 をつけるのはもう終わりにしましょう。
            バージョンごとの変更履歴を視覚的に管理します。
          </p>
        </div>
        
        <FeatureVersionDemo />
      </Container>
    </Section>
  );
}

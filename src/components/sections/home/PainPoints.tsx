import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { MessageSquare, FileWarning, Wallet } from 'lucide-react';

const pains = [
  {
    icon: MessageSquare,
    title: '散らばるコミュニケーション',
    description: 'メール、Slack、Chatwork — クライアントとのやり取りはなぜ毎回別の場所に散らばるのか。',
  },
  {
    icon: FileWarning,
    title: 'バージョン管理の崩壊',
    description: '「最新版どれだっけ」が、毎回 30 分を奪う。フィードバックの反映漏れが信用問題に直結。',
  },
  {
    icon: Wallet,
    title: '見えない入金サイクル',
    description: '検収済みなのか、入金はいつなのか、すべてが見えない。請求書の発行も月末の苦行に。',
  },
];

export function PainPoints() {
  return (
    <Section className="bg-bone-sub/50 border-y border-line">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-noto-serif mb-4 text-forest">
            ひとりの仕事は、作る以外のことで消耗している。
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, i) => (
            <div key={i} className="bg-bone border border-line rounded-lg p-8">
              <div className="w-12 h-12 bg-forest/5 rounded-md flex items-center justify-center mb-6 text-forest">
                <pain.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-3">{pain.title}</h3>
              <p className="text-slate-sub leading-relaxed text-sm">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

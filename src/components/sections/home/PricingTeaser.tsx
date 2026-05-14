import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Solo',
    price: 'Free',
    description: 'まずは一つずつ、確実な進行を。',
    features: ['同時 5 案件まで', '基本機能フルアクセス', 'クライアント招待 1 名/案件'],
    cta: '無料で始める',
    highlighted: false,
  },
  {
    name: 'Plus',
    price: '¥980',
    period: '/ 月',
    description: '本格的なクライアントワークに。',
    features: ['無制限の案件数', 'クライアント共有ボード', 'バージョン管理無制限', '請求書自動生成'],
    cta: '14 日間トライアル',
    highlighted: true,
  },
  {
    name: 'Studio',
    price: '¥2,800',
    period: '/ 月',
    description: 'チームを組む、スモールビジネスへ。',
    features: ['Plus の全機能', 'チームメンバー追加 3 名', 'API アクセス', '月次レポート'],
    cta: '14 日間トライアル',
    highlighted: false,
  }
];

export function PricingTeaser() {
  return (
    <Section className="bg-bone-sub border-t border-line pb-0">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-noto-serif mb-4 text-forest">
            シンプルな料金体系。
          </h2>
          <p className="text-slate-sub">
            年払いで 2 ヶ月分無料。いつでもキャンセル可能です。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-end pb-32">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`rounded-2xl p-8 border ${
                tier.highlighted 
                  ? 'bg-forest text-bone border-forest shadow-2xl relative -translate-y-4' 
                  : 'bg-bone text-slate border-line shadow-sm'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brass text-bone text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Recommended
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <p className={`text-sm mb-6 ${tier.highlighted ? 'text-bone-sub/80' : 'text-slate-sub'}`}>
                {tier.description}
              </p>
              <div className="mb-8">
                <span className="text-4xl font-noto-serif font-bold">{tier.price}</span>
                {tier.period && <span className={`text-sm ${tier.highlighted ? 'text-bone-sub/70' : 'text-slate-sub'}`}>{tier.period}</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <Check size={16} className={tier.highlighted ? 'text-brass' : 'text-forest'} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button 
                asChild
                variant={tier.highlighted ? 'secondary' : 'outline'} 
                className={`w-full ${tier.highlighted ? 'bg-bone text-forest hover:bg-bone-sub' : 'bg-transparent'}`}
              >
                <Link href="/signup">{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 pb-24">
          <Link href="/pricing" className="text-forest font-bold hover:text-brass transition-colors underline underline-offset-4">
            料金プランの詳細を見る
          </Link>
        </div>
      </Container>
    </Section>
  );
}

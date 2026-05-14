import { Metadata } from 'next';
import { siteInfo } from '@/lib/site';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Check, Minus } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Pricing',
  description: '個人クリエイターが続けられる価格設定。Solo は無料、Plus は月額 980 円から。',
};

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

const features = [
  { name: 'アクティブ案件数', solo: '5 件', plus: '無制限', studio: '無制限' },
  { name: 'クライアント招待', solo: '1 名/案件', plus: '無制限', studio: '無制限' },
  { name: '制作物バージョン管理', solo: '直近 3 つ', plus: '無制限', studio: '無制限' },
  { name: '請求書自動生成', solo: false, plus: true, studio: true },
  { name: 'チームメンバー', solo: false, plus: false, studio: '3 名まで' },
  { name: 'API アクセス', solo: false, plus: false, studio: true },
  { name: '優先サポート', solo: false, plus: false, studio: true },
];

const faqs = [
  { q: '途中でプランを変更できますか？', a: 'はい、いつでもアップグレードもダウングレードもできます。' },
  { q: '解約はいつでもできますか？', a: 'いつでも解約できます。違約金等の発生は一切ありません。' },
  { q: '支払い方法は何がありますか？', a: '各種クレジットカード（Visa, Mastercard, Amex, JCB）に対応しています。銀行振込は Studio プランの年払いのみ、別途ご相談ください。' },
  { q: '解約後のデータはどうなりますか？', a: '解約後 30 日間はデータが保持され、再契約時に復元できます。その後は安全に削除されます。' },
  { q: '法人契約はできますか？', a: 'はい、できます。全プランで法人名義での領収書・請求書の発行に対応しています。' },
  { q: 'インボイス制度に対応していますか？', a: 'はい、適格請求書発行事業者の登録番号を記載した請求書を発行できます。' },
];

export default function PricingPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteInfo.url },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: `${siteInfo.url}/pricing` },
    ],
  };

  return (
    <>
      <Script id="breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
      {/* Hero */}
      <Section className="pt-32 pb-16 bg-bone">
        <Container className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-noto-serif text-forest mb-6">
            個人のための、続けられる料金体系。
          </h1>
          <p className="text-lg text-slate-sub leading-relaxed">
            機能制限で縛るのではなく、あなたの事業規模に合わせて拡張できる料金体系です。年払いで 2 ヶ月分が無料になります。
          </p>
        </Container>
      </Section>

      {/* Tiers */}
      <Section className="pt-0 pb-24 bg-bone">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
              <div 
                key={i} 
                className={`rounded-2xl p-8 border ${
                  tier.highlighted 
                    ? 'bg-forest text-bone border-forest shadow-2xl relative md:-translate-y-4' 
                    : 'bg-bone-sub text-slate border-line shadow-sm'
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
                  className={`w-full ${tier.highlighted ? 'bg-bone text-forest hover:bg-bone-sub' : 'bg-transparent border-slate-sub'}`}
                >
                  <Link href="/signup">{tier.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-sm text-slate-sub">
            <p>14 日間の無料トライアル。クレジットカードの登録は不要です。</p>
          </div>
        </Container>
      </Section>

      {/* Feature Matrix */}
      <Section className="bg-bone-sub py-24 border-y border-line">
        <Container className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-noto-serif text-center mb-12">機能比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="py-4 border-b-2 border-forest w-1/3 text-sm text-slate-sub font-normal">機能</th>
                  <th className="py-4 border-b-2 border-forest w-1/5 text-center font-bold">Solo</th>
                  <th className="py-4 border-b-2 border-forest w-1/5 text-center font-bold text-forest">Plus</th>
                  <th className="py-4 border-b-2 border-forest w-1/5 text-center font-bold">Studio</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {features.map((f, i) => (
                  <tr key={i} className="border-b border-line hover:bg-bone transition-colors">
                    <td className="py-4 font-medium">{f.name}</td>
                    <td className="py-4 text-center">
                      {typeof f.solo === 'boolean' ? (f.solo ? <Check size={16} className="mx-auto text-forest" /> : <Minus size={16} className="mx-auto text-line" />) : f.solo}
                    </td>
                    <td className="py-4 text-center">
                      {typeof f.plus === 'boolean' ? (f.plus ? <Check size={16} className="mx-auto text-forest" /> : <Minus size={16} className="mx-auto text-line" />) : f.plus}
                    </td>
                    <td className="py-4 text-center">
                      {typeof f.studio === 'boolean' ? (f.studio ? <Check size={16} className="mx-auto text-forest" /> : <Minus size={16} className="mx-auto text-line" />) : f.studio}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-bone py-24">
        <Container className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-noto-serif text-center mb-16">よくあるご質問</h2>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-line pb-6">
                <h3 className="font-bold text-lg mb-3 flex items-start gap-4">
                  <span className="text-brass font-mono">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-slate-sub pl-9 leading-relaxed text-sm">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Bottom */}
      <Section className="bg-forest text-bone py-24 border-t border-forest-sub">
        <Container className="text-center max-w-2xl">
          <h2 className="text-3xl font-noto-serif mb-6">まだ迷っていますか？</h2>
          <p className="text-bone-sub/80 mb-10 leading-relaxed">
            まずは完全無料の Solo プランからお試しください。クレジットカードの登録は不要で、すぐに案件管理を始められます。
          </p>
          <Button asChild variant="secondary" size="lg" className="bg-brass text-bone hover:bg-brass/90 border-none">
            <Link href="/signup">Solo プラン（無料）で始める</Link>
          </Button>
        </Container>
      </Section>
    </>
  );
}

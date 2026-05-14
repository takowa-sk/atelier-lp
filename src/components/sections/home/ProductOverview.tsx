import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { LayoutDashboard, Users, History, Receipt, Archive } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: '案件パイプライン',
    description: '受注から請求まで。ステージごとの進捗をカードで視覚的に把握。',
  },
  {
    icon: Users,
    title: 'クライアント共有ボード',
    description: '専用リンクを渡すだけ。フィードバックも承認もここで完結。',
  },
  {
    icon: History,
    title: '制作物バージョン管理',
    description: '過去の修正履歴を視覚的に並べて比較。コメント付きで履歴を残す。',
  },
  {
    icon: Receipt,
    title: '請求・入金フロー',
    description: 'ステータス連動で請求書を自動生成。入金タイミングも予測・可視化。',
  },
  {
    icon: Archive,
    title: '制作物アーカイブ',
    description: '終わった案件は資産になる。検索可能なポートフォリオ兼保管庫。',
  },
];

export function ProductOverview() {
  return (
    <Section id="features">
      <Container>
        <div className="mb-16 md:w-1/2">
          <span className="text-brass text-sm font-bold tracking-widest uppercase block mb-4">Core Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-noto-serif text-forest">
            すべての仕事を、一つの滑らかな線に乗せる。
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="group border border-line rounded-xl p-8 hover:bg-forest hover:text-bone transition-colors duration-300">
              <feature.icon className="w-8 h-8 text-forest group-hover:text-brass mb-6 transition-colors" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3 group-hover:text-bone transition-colors duration-300">{feature.title}</h3>
              <p className="text-slate-sub group-hover:text-bone-sub/80 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

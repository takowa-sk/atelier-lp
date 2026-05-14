export type CaseSection = {
  id: string         // mockup の識別子。例: 'dashboard-kanban'
  context: string    // 2-3 行の context 文章
}

export type CaseStudy = {
  slug: string
  caseNumber: '01' | '02' | '03'
  category: string  // 英語表記
  title: string
  persona: string
  result: string
  sections: CaseSection[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'branding-designer',
    caseNumber: '01',
    category: 'Branding Designer',
    title: '「8 件のブランディング案件を、ひとりで回す。」',
    persona: '鈴木 さやか / 30 代、フリーランスのブランディングデザイナー。ロゴ、アイデンティティ、パッケージ。',
    result: '請求書発行までの時間が、月 6 時間 → 0 分へ。',
    sections: [
      {
        id: 'dashboard-kanban',
        context: 'ロゴ、ガイドライン、パッケージ、Web。ひとつのクライアントから派生する制作物は多岐にわたります。Atelier では、案件ごとではなく、制作物ごとに進捗を管理します。',
      },
      {
        id: 'client-board-chat',
        context: 'クライアントとの往復は、メールでも Slack でもなく、案件専用のボードで完結します。提案、フィードバック、承認、すべてが一つのタイムラインに並びます。',
      },
      {
        id: 'auto-invoice',
        context: '検収済の制作物が、自動的に請求書化されます。複数案件を選択して、一括で発行もできます。',
      },
    ],
  },
  {
    slug: 'web-engineer',
    caseNumber: '02',
    category: 'Web Engineer',
    title: '「4 つの retainer を、混ぜずに走らせる。」',
    persona: '高橋 拓海 / 20 代、フリーランスの Web エンジニア。長期保守 retainer と単発開発を並行。',
    result: '月次レポート作成が 3 時間 → 自動生成へ。',
    sections: [
      {
        id: 'pipeline-timeline',
        context: '長期 retainer と短期案件は、性質が違います。月次の安定収入を支える retainer ほど、進捗の見える化が重要になります。',
      },
      {
        id: 'time-tracker',
        context: '工数の記録は、開発を中断せずに行えるよう、最小操作で完結します。プロジェクト切替時にタイマーが自動的に切り替わります。',
      },
      {
        id: 'monthly-report',
        context: '月末の請求と、ステークホルダーへの進捗報告。両方とも、データをまたぐ手作業なしで生成されます。',
      },
    ],
  },
  {
    slug: 'writer',
    caseNumber: '03',
    category: 'Writer & Editor',
    title: '「月 15 本の記事を、改稿サイクルごと束ねる。」',
    persona: '中村 圭介 / 40 代、フリーランスのライター・編集者。雑誌・Web 媒体、短期多発案件 + 改稿サイクル。',
    result: '最新版を探す時間が、月 4 時間 → 0 分へ。',
    sections: [
      {
        id: 'article-pipeline',
        context: '15 本の記事が、それぞれ異なるステージにあります。執筆中、初稿提出、編集者からの差し戻し、最終確認。全体を一覧で見渡せることが、ライターの強みになります。',
      },
      {
        id: 'version-diff',
        context: '編集者からの差し戻しは、文章のどこを直すかが命です。バージョン間の差分が、コメント付きで横並びになります。',
      },
      {
        id: 'batch-invoice',
        context: '月末、納品済みの記事を媒体ごとに集計して、まとめて請求書を発行します。各案件の状態は自動で「請求済」に更新されます。',
      },
    ],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}

export function getNextCase(currentSlug: string): CaseStudy {
  const currentIndex = caseStudies.findIndex((c) => c.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % caseStudies.length;
  return caseStudies[nextIndex];
}

export function getPrevCase(currentSlug: string): CaseStudy {
  const currentIndex = caseStudies.findIndex((c) => c.slug === currentSlug);
  const prevIndex = (currentIndex - 1 + caseStudies.length) % caseStudies.length;
  return caseStudies[prevIndex];
}

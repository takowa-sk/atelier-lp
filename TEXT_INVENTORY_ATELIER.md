# Atelier 文章 inventory

**抽出日**：2026.05.16
**ソース**：`src/` 配下の全 page.tsx / component / lib（原文ママ、判定なし）
**目的**：英訳作業のための日本語文章一覧

各項目は「ファイル：行番号」を併記。記号 `→` の右はソース上の値。
将来英語化する場合の対象は、引用符「」で囲まれた日本語のみ。

---

## グローバル（src/lib/site.ts）

### siteInfo

- **name**：「Atelier」
- **company**：「Atelier Inc.」
- **founder**：「Ren Nakano」
- **founded**：「2023」
- **location**：「Yoyogi-Uehara, Shibuya, Tokyo」
- **url**：「https://atelier-lp.vercel.app」
- **tagline**（日本語）：「クライアントワークの、すべての往復を一つの画面に。」
- **taglineEn**（既に英語）：「Every back-and-forth with your client, in one place.」
- **subCopy**（日本語）：「個人クリエイターのための、案件・制作物・コミュニケーションを一元化するクライアントワーク OS。」

---

## ルート metadata（src/app/layout.tsx）

### title

- **template**：「%s | Atelier」（siteInfo.name 参照）
- **default**：「Atelier - クライアントワークの、すべての往復を一つの画面に。」（siteInfo.tagline 参照）

### description

「個人クリエイターのための、案件・制作物・コミュニケーションを一元化するクライアントワーク OS。」（siteInfo.subCopy 参照）

### JSON-LD (Organization)

- **name**：「Atelier Inc.」
- **founder.name**：「Ren Nakano」

### lang

「ja」

---

## ヘッダー（src/components/layout/Header.tsx）

- **ロゴ**：「Atelier.」
- **PC ナビ**：
  - 「Features」 → `/#features`
  - 「Pricing」 → `/pricing`
  - 「In Practice」 → `/case-studies`
- **アクション**：
  - 「Log in」 → `/login`
  - 「Sign up」 → `/signup`
- **モバイル：ハンバーガー aria-label**：「メニューを開く」/「メニューを閉じる」
- **モバイルナビ**：PC と同じ 3 項目（Features / Pricing / In Practice）

---

## フッター（src/components/layout/Footer.tsx）

- **ロゴ**：「Atelier.」
- **タグライン**：「個人クリエイターのための、クライアントワーク OS。」

### Product

- 見出し：「Product」
- 「Features」 / 「Pricing」 / 「Log in」

### Company

- 見出し：「Company」
- 「In Practice」 / 「Twitter」 / 「Contact」

### Legal

- 見出し：「Legal」
- 「Privacy Policy」 / 「Terms of Service」

### 下段

- **copyright**：「© 2026 Atelier Inc. All rights reserved.」
- **クラフトステートメント**（イタリック）：「Crafted for independent creators.」

---

## /（Home）

ホームの構成：Hero → VideoDemo → PainPoints → ProductOverview → FeaturePipeline → FeatureBoard → FeatureVersion → WorkflowViz → Testimonials → PricingTeaser → CTA

### Hero（src/components/sections/home/Hero.tsx）

- **h1（2 行）**：
  「クライアントワークの、」  
  「すべての往復を一つの画面に。」
- **lead**：「個人クリエイターのための、案件・制作物・コミュニケーションを一元化するクライアントワーク OS。」
- **CTA**：
  - 「無料で始める」 → `/signup`
  - 「デモを見る」 → `/demo`

### VideoDemo（src/components/sections/home/VideoDemo.tsx）

- **section id**：`demo`
- **eyebrow**：「Product Tour」
- **見出し**：「Atelier のワークフローを 30 秒で体験。」

#### チャプター 4 件

| id | title | description |
|---|---|---|
| intro | Introduction | Atelier のコンセプトと全体像 |
| pipeline | Pipeline | 案件のステータス管理と進行 |
| board | Client Board | 専用ボードでの共有と検収 |
| invoicing | Invoicing | ステータス連動の自動請求 |

### VideoDemo シーン（src/components/sections/home/scenes/）

#### SceneIntro.tsx

- **タイトル（巨大表示）**：「Atelier」
- **タグライン**：「制作と対話を、ひとつの滑らかな体験に。」
- **アイコンラベル 3 件**：「Pipeline」/「Client Board」/「Invoicing」
- **pulse cue**：「プロダクトツアーを開始します」

#### ScenePipeline.tsx

- **見出し**：「Pipeline」
- **カラムラベル**：「TODO」/「IN PROGRESS」/「REVIEW」
- **highlight text**：「ドラッグ＆ドロップで案件の進捗を一画面で」

#### SceneBoard.tsx

- **見出し**：「Client Board」
- **highlight**：「クライアントとの往復、すべて一画面で完結」

#### SceneInvoicing.tsx

- **見出し**：「Invoicing」
- **invoice 表記**：「Atelier.」 /「Creative Studio」/「Invoice No.」/「INV-2026-0142」/「2026.05.14」
- **Bill To**：「Bill To:」/「オアシス・カフェ 様」
- **ライン項目 2 件**：
  - 「ロゴデザイン一式」 — 「¥150,000」
  - 「ブランドガイドライン策定」 — 「¥80,000」
- **集計**：「Subtotal」/「Consumption Tax (10%) ¥23,000」/「Total」
- **status badge**：「Draft」/「Sent」/「Paid」（時系列遷移）
- **highlight**：「案件完了と同時に、請求書が自動生成」

### PainPoints（src/components/sections/home/PainPoints.tsx）

- **h2**：「ひとりの仕事は、作る以外のことで消耗している。」

#### 3 カード

**散らばるコミュニケーション**
「メール、Slack、Chatwork — クライアントとのやり取りはなぜ毎回別の場所に散らばるのか。」

**バージョン管理の崩壊**
「「最新版どれだっけ」が、毎回 30 分を奪う。フィードバックの反映漏れが信用問題に直結。」

**見えない入金サイクル**
「検収済みなのか、入金はいつなのか、すべてが見えない。請求書の発行も月末の苦行に。」

### ProductOverview（src/components/sections/home/ProductOverview.tsx）

- **section id**：`features`
- **eyebrow**：「Core Capabilities」
- **h2**：「すべての仕事を、一つの滑らかな線に乗せる。」

#### 5 機能カード

**案件パイプライン**
「受注から請求まで。ステージごとの進捗をカードで視覚的に把握。」

**クライアント共有ボード**
「専用リンクを渡すだけ。フィードバックも承認もここで完結。」

**制作物バージョン管理**
「過去の修正履歴を視覚的に並べて比較。コメント付きで履歴を残す。」

**請求・入金フロー**
「ステータス連動で請求書を自動生成。入金タイミングも予測・可視化。」

**制作物アーカイブ**
「終わった案件は資産になる。検索可能なポートフォリオ兼保管庫。」

### FeaturePipeline（src/components/sections/home/FeaturePipeline.tsx）

- **eyebrow**：「01. Pipeline」
- **h2**：「進捗の解像度を劇的に上げる。」
- **lead**：
  「受注から制作、納品、検収、そして請求まで。  
  すべての案件をカード化し、現在のステータスを俯瞰できます。  
  「今週なにを終わらせるべきか」が、直感的に分かります。」
- **メタラベル**：
  - 「リアルタイム同期」
  - 「自動ステータス更新」

### FeaturePipelineDemo（src/components/sections/home/demos/FeaturePipelineDemo.tsx）

- **URL bar**：「atelier.studio/board」
- **reset button**：「Reset」
- **カラム名**：「In Progress」/「Review」
- **empty state**：「Drop cards here」
- **初期カード 3 件**：
  - 「Aoba Dental Clinic」/「Brand Identity Design」/「Branding」
  - 「Kotori Bakery」/「Corporate Site Renewal」/「Web」
  - 「Tech Startup Inc.」/「Series A Pitch Deck」/「Presentation」
- **カード補足表示**：「Unread Client Comments」

### FeatureBoard（src/components/sections/home/FeatureBoard.tsx）

- **eyebrow**：「02. Client Board」
- **h2**：「すれ違いをなくす、専用のレビューボード。」
- **lead**：
  「メールで送った ZIP ファイル。チャットで流れてしまった修正指示。  
  Atelier の共有ボードなら、制作物とコミュニケーションが常にセットに。  
  クライアントは専用リンクを開くだけで、ログイン不要で確認できます。」

### FeatureBoardDemo（src/components/sections/home/demos/FeatureBoardDemo.tsx）

- **header title**：「Client Review Board」
- **header subtitle**：「Aoba Dental Clinic」
- **reset**：「Reset」
- **初期メッセージ 2 件**：
  - Ren Nakano（10:42 AM）：「初稿をアップロードしました。トーン＆マナーのご確認をお願いします。」
  - Dr. Aoba（11:15 AM）：「確認しました。とても良いですね！2枚目の色味をもう少し明るくできますか？」
- **自動返信候補 4 件**：
  - 「ありがとうございます！確認しますね。」
  - 「すごく良いですね、このまま進めてください。」
  - 「もう少しだけトーンを暖かくできますか？」
  - 「素晴らしい！承認です。次のフェーズへ。」
- **入力 placeholder**：「Reply...」/「Waiting for reply...」（送信中）
- **送信ボタン**：「Send」

### FeatureVersion（src/components/sections/home/FeatureVersion.tsx）

- **eyebrow**：「03. Version Control」
- **h2**：「「最新版」は常に一つだけ。」
- **lead**：
  「ファイル名に _final_v2 をつけるのはもう終わりにしましょう。  
  バージョンごとの変更履歴を視覚的に管理します。」

### FeatureVersionDemo（src/components/sections/home/demos/FeatureVersionDemo.tsx）

- **sidebar 見出し**：「Versions」
- **バージョン 3 件**：
  - v3.0 / 2 hours ago / 「Final Deliverables」 / approval：「Approved by Dr. Aoba」 / status：「Approved」 / file：「preview_v3.png」
  - v2.0 / Yesterday / 「Revised Design」 / approval：「Pending review」 / status：「Under Review」 / file：「preview_v2.png」
  - v1.0 / Oct 12 / 「First Draft」 / approval：「Draft shared」 / status：「Submitted」 / file：「draft_v1.png」
- **current 表記**：「(Current)」
- **preview label**：「Preview Mode」
- **承認スタンプ**：「Approved」

### WorkflowViz（src/components/sections/home/WorkflowViz.tsx）

- **eyebrow**：「Workflow」
- **h2**：「流れるように、終わる。」
- **lead**：「受注から請求まで。分断されていたプロセスが、ひとつの滑らかな線として繋がります。」

#### 4 ステップ

**01 見積・受注**
「案件化と同時に専用ボードを生成。すべての前提条件をクリアに。」

**02 制作・共有**
「バージョン管理付きで制作物を提出。修正の往復も一元化。」

**03 検収**
「クライアントがワンクリックで承認。迷いのない完了フロー。」

**04 請求**
「ステータス連動で請求書を発行。入金予定日も自動トラッキング。」

### Testimonials（src/components/sections/home/Testimonials.tsx）

- **h2**：「独立したプロフェッショナルのために。」

#### 3 件

**Y. Tanaka / Freelance Designer**
「複数のクライアントと同時に進行していても、どの案件がどの状態か一目でわかる。もうスプレッドシートには戻れません。」

**S. Ito / Web Engineer**
「修正依頼がチャットのログに埋もれることがなくなりました。制作物のバージョン管理が視覚的で、クライアントの反応も良いです。」

**M. Sato / Illustrator**
「検収から請求書発行までがスムーズ。確定申告の時、過去の案件をアーカイブからすぐに引っ張り出せるのが本当に助かります。」

### PricingTeaser（src/components/sections/home/PricingTeaser.tsx）

- **h2**：「シンプルな料金体系。」
- **lead**：「年払いで 2 ヶ月分無料。いつでもキャンセル可能です。」
- **下部リンク**：「料金プランの詳細を見る」

#### 3 プラン

**Solo / Free**
- description：「まずは一つずつ、確実な進行を。」
- features：「同時 5 案件まで」/「基本機能フルアクセス」/「クライアント招待 1 名/案件」
- cta：「無料で始める」

**Plus / ¥980 / 月**（Recommended）
- description：「本格的なクライアントワークに。」
- features：「無制限の案件数」/「クライアント共有ボード」/「バージョン管理無制限」/「請求書自動生成」
- cta：「14 日間トライアル」
- badge：「Recommended」

**Studio / ¥2,800 / 月**
- description：「チームを組む、スモールビジネスへ。」
- features：「Plus の全機能」/「チームメンバー追加 3 名」/「API アクセス」/「月次レポート」
- cta：「14 日間トライアル」

### CTA（src/components/sections/home/CTA.tsx）

- **h2**：「仕事の品質は、道具で変わる。」
- **lead**：
  「散らかった連絡、見失うファイル、忘れる請求。  
  それらを手放して、本来の「作る」時間に集中しませんか。」
- **CTA**：「14 日間無料で試す」 → `/signup`
- **補足**：「クレジットカードは不要です。」

---

## /demo（src/app/demo/page.tsx）

### Metadata

- **title**：「Interactive Demo」
- **description**：「Atelier のプロダクトデモを操作して体験してください。」

### Hero

- **eyebrow**：「Interactive Tour」
- **h1**：「さあ、実際に触ってみてください。」
- **lead**：「Atelier の中核となる 3 つの機能を、そのままブラウザ上で体験できます。」

### Bottom CTA

- **h2**：「すべての機能が、14 日間無料。」
- **CTA**：「無料で始める」
- **補足**：「クレジットカード不要。いつでもキャンセル可能。」

### InteractiveDemo（src/app/demo/InteractiveDemo.tsx）

- **URL bar**：「atelier.studio/demo」

#### Pipeline タブ初期データ

- inProgress 2 件：
  - 「Aoba Dental Clinic」/「Brand Identity Design」/「Branding」
  - 「Kotori Bakery」/「Corporate Site Renewal」/「Web」
- review 1 件：
  - 「Tech Startup Inc.」/「Pitch Deck Design」/「Presentation」/通知 2

#### Pipeline タブ UI

- カラム：「In Progress」/「Review」
- カードホバー hint：「クリックでレビューへ移動 →」/「← クリックで戻す」
- empty：「タスクがありません」
- review カード補足：「Unread Client Comments」

#### Client Board タブ

- header：「Client Review Board」/「Aoba Dental Clinic」
- 初期メッセージ：
  - Ren Nakano（10:42 AM）：「初稿をアップロードしました。トーン＆マナーのご確認をお願いします。」
  - Dr. Aoba（11:15 AM）：「確認しました。とても良いですね！2枚目の色味をもう少し明るくできますか？」
- input placeholder：「Type a reply...」
- 送信ボタン：「Send」

#### Version 管理タブ

- sidebar 見出し：「Versions」
- バージョン 3 件：
  - v3.0 / 2 hours ago / 「Approved」 / file：「preview_v3.png」 / approvedBy：「Dr. Aoba」
  - v2.0 / Yesterday / 「Changes Requested」 / file：「preview_v2_feedback.png」
  - v1.0 / Oct 12 / 「Draft」 / file：「concept_v1.png」
- メインタイトル：「Final Deliverables」
- 承認表示：「Approved by Dr. Aoba」/「Pending approval」
- status：「Approved」/「Reviewing」

#### Chapter Controls（下部）

- 見出し：「Interactive Chapters」
- 3 タブ：
  - Pipeline / 「カードをクリックして移動」
  - Client Board / 「チャットに返信を送信」
  - Version History / 「バージョンを切り替え」

---

## /pricing（src/app/pricing/page.tsx）

### Metadata

- **title**：「Pricing」
- **description**：「個人クリエイターが続けられる料金体系。Solo は無料、Plus は月額 980 円から。」

### Hero

- **h1**：「個人のための、続けられる料金体系。」
- **lead**：「機能制限で縛るのではなく、あなたの事業規模に合わせて拡張できる料金体系です。年払いで 2 ヶ月分が無料になります。」

### Tiers（PricingTeaser と同一の 3 プラン）

Solo / Plus / Studio — 表記は PricingTeaser セクション参照。  
※下部補足：「14 日間の無料トライアル。クレジットカードの登録は不要です。」

### 機能比較表

- **見出し**：「機能比較」
- **header**：「機能」/「Solo」/「Plus」/「Studio」

| 機能 | Solo | Plus | Studio |
|---|---|---|---|
| アクティブ案件数 | 5 件 | 無制限 | 無制限 |
| クライアント招待 | 1 名/案件 | 無制限 | 無制限 |
| 制作物バージョン管理 | 直近 3 つ | 無制限 | 無制限 |
| 請求書自動生成 | × | ✓ | ✓ |
| チームメンバー | × | × | 3 名まで |
| API アクセス | × | × | ✓ |
| 優先サポート | × | × | ✓ |

### FAQ

- **見出し**：「よくあるご質問」

**Q. 途中でプランを変更できますか？**
A. 「はい、いつでもアップグレードもダウングレードもできます。」

**Q. 解約はいつでもできますか？**
A. 「いつでも解約できます。違約金等の発生は一切ありません。」

**Q. 支払い方法は何がありますか？**
A. 「各種クレジットカード（Visa, Mastercard, Amex, JCB）に対応しています。銀行振込は Studio プランの年払いのみ、別途ご相談ください。」

**Q. 解約後のデータはどうなりますか？**
A. 「解約後 30 日間はデータが保持され、再契約時に復元できます。その後は安全に削除されます。」

**Q. 法人契約はできますか？**
A. 「はい、できます。全プランで法人名義での領収書・請求書の発行に対応しています。」

**Q. インボイス制度に対応していますか？**
A. 「はい、適格請求書発行事業者の登録番号を記載した請求書を発行できます。」

### Bottom CTA

- **h2**：「まだ迷っていますか？」
- **lead**：「まずは完全無料の Solo プランからお試しください。クレジットカードの登録は不要で、すぐに案件管理を始められます。」
- **CTA**：「Solo プラン（無料）で始める」

---

## /case-studies（src/app/case-studies/page.tsx）

### Metadata

- **title**：「In Practice」
- **description**：「3 人のクリエイターが、Atelier をどう使っているか。9 つの UI シーンで、案件管理から請求発行までを辿ります。」

### Hero

- **h1**：「In Practice」
- **lead**：
  「3 人のクリエイターが、Atelier をどう使っているか。  
  9 つの UI シーンで、案件管理から請求発行までを辿ります。」

### カードに表示される項目

- 「Case 01」/「Case 02」/「Case 03」 ラベル
- title / persona（要約）
- 「Result」ラベル + 結果文

---

## /case-studies/[slug]（src/app/case-studies/[slug]/page.tsx + lib/case-studies.ts）

### Metadata（generateMetadata）

- **title**：「Case 01：Branding Designer」等（caseNumber + category）
- **description**：「フリーランスのブランディングデザイナー、鈴木 さやかの Atelier 活用事例。請求書発行までの時間が、月 6 時間 → 0 分へ。」 のような構造（persona 抽出 + result 結合）

### Page 共通

- **eyebrow**：「Case 01 / Branding Designer」（caseNumber + category）
- **Result ラベル**：「Result」

### caseStudies 3 件（src/lib/case-studies.ts）

#### Case 01 — slug：`branding-designer`

- **category**：「Branding Designer」（英語、変更不要かもしれない）
- **title**：「「8 件のブランディング案件を、ひとりで回す。」」
- **persona**：「鈴木 さやか / 30 代、フリーランスのブランディングデザイナー。ロゴ、アイデンティティ、パッケージ。」
- **result**：「請求書発行までの時間が、月 6 時間 → 0 分へ。」

**sections 3 件（id / context）**

- `dashboard-kanban` ：「ロゴ、ガイドライン、パッケージ、Web。ひとつのクライアントから派生する制作物は多岐にわたります。Atelier では、案件ごとではなく、制作物ごとに進捗を管理します。」
- `client-board-chat` ：「クライアントとの往復は、メールでも Slack でもなく、案件専用のボードで完結します。提案、フィードバック、承認、すべてが一つのタイムラインに並びます。」
- `auto-invoice` ：「検収済の制作物が、自動的に請求書化されます。複数案件を選択して、一括で発行もできます。」

#### Case 02 — slug：`web-engineer`

- **category**：「Web Engineer」
- **title**：「「4 つの retainer を、混ぜずに走らせる。」」
- **persona**：「高橋 拓海 / 20 代、フリーランスの Web エンジニア。長期保守 retainer と単発開発を並行。」
- **result**：「月次レポート作成が 3 時間 → 自動生成へ。」

**sections 3 件**

- `pipeline-timeline` ：「長期 retainer と短期案件は、性質が違います。月次の安定収入を支える retainer ほど、進捗の見える化が重要になります。」
- `time-tracker` ：「工数の記録は、開発を中断せずに行えるよう、最小操作で完結します。プロジェクト切替時にタイマーが自動的に切り替わります。」
- `monthly-report` ：「月末の請求と、ステークホルダーへの進捗報告。両方とも、データをまたぐ手作業なしで生成されます。」

#### Case 03 — slug：`writer`

- **category**：「Writer & Editor」
- **title**：「「月 15 本の記事を、改稿サイクルごと束ねる。」」
- **persona**：「中村 圭介 / 40 代、フリーランスのライター・編集者。雑誌・Web 媒体、短期多発案件 + 改稿サイクル。」
- **result**：「最新版を探す時間が、月 4 時間 → 0 分へ。」

**sections 3 件**

- `article-pipeline` ：「15 本の記事が、それぞれ異なるステージにあります。執筆中、初稿提出、編集者からの差し戻し、最終確認。全体を一覧で見渡せることが、ライターの強みになります。」
- `version-diff` ：「編集者からの差し戻しは、文章のどこを直すかが命です。バージョン間の差分が、コメント付きで横並びになります。」
- `batch-invoice` ：「月末、納品済みの記事を媒体ごとに集計して、まとめて請求書を発行します。各案件の状態は自動で「請求済」に更新されます。」

### CaseNavigation（src/components/case-studies/CaseNavigation.tsx）

- ラベル：「Previous」/「Next」
- 戻るリンク：「In Practice 一覧へ」

---

## 9 つの mockup（src/components/case-studies/mockups/）

各 mockup は UI 画面の再現。URL bar / Mac ウィンドウ装飾は共通装飾なので省略可。日本語テキストのみ列挙。

### DashboardKanban.tsx（Case 01-1）

- **page title**：「Dashboard」
- **副情報**：「8 件のアクティブ案件」
- **カラム名（count 付き）**：「ヒアリング (2)」/「制作中 (3)」/「確認中 (2)」/「検収済 (1)」
- **deadline 表記**：「残り 14 日」/「残り 21 日」/「残り 5 日」/「残り 3 日」/「残り 8 日」/「残り 2 日」/「残り 1 日」/「完了」
- **カード 8 件**（クライアント名は英字、tag は英字）：
  - Yamamoto & Co. / branding
  - Atelier Plus / logo
  - Aoba Dental Clinic / branding（未読 3）
  - Tech Studio K / web（未読 1）
  - Studio Murakami / package
  - Kotori Bakery / package（未読 2）
  - Hokuyo Books / logo（未読 5）
  - M Corporation / web

### ClientBoardChat.tsx（Case 01-2）

- **page title**：「Aoba Dental Clinic | Brand Identity」
- **status**：「Active / 8 messages」
- **メッセージ 4 件**：
  - 14:23（owner）：「初稿をアップロードしました。トーン＆マナーをご確認ください。」
  - 14:35（client）：「拝見しました。コンセプトの方向性 OK です。ロゴマークの傾斜角度を 3 度ほど立てていただけますか。」
  - 16:12（owner）：「了解しました、修正版を本日中にお戻しします。」
  - 18:47（client）：「完璧です。承認します。」 + 「✓ Approved」バッジ
- **input placeholder**：「メッセージを入力…」
- **送信ボタン**：「Send」

### AutoInvoice.tsx（Case 01-3）

- **page title**：「Invoice Generator」
- **副情報**：「4 件選択中」
- **左カラム見出し**：「検収済案件」
- **検収済案件 4 件**：
  - BRANDING / Aoba Dental Clinic / Brand Identity / ¥480,000
  - PACKAGE / Kotori Bakery / Logo + Package / ¥280,000
  - VISUAL ID / Tech Studio K / Visual Identity / ¥520,000
  - ANNUAL RPT / M Corporation / Annual Report Design / ¥360,000
- **インボイス見出し**：「INVOICE」
- **status badge**：「Draft」
- **billing**：「株式会社 ABC 御中」/「発行日：2026.05.14」/「請求番号：INV-2026-0042」
- **表 header**：「#」/「案件」/「単価」/「計」
- **集計**：「小計 ¥1,640,000」/「消費税 (10%) ¥164,000」/「合計 ¥1,804,000」
- **ボタン**：「PDF として保存」/「メールで送信」

### PipelineTimeline.tsx（Case 02-1）

- **page title**：「Pipeline」
- **副情報**：「May 2026 / 10 件」
- **プロジェクト名 10 件**：
  - retainer 4 件：「S 株式会社 - 月次保守」/「Yamada Holdings - 保守 + 改善」/「Mori Foundation - サイト運用」/「Aoyama Group - 月次レポーティング」
  - single 6 件：「T 商事 - LP 開発」/「Hayashi Studio - ブランドサイト」/「K Inc. - リニューアル」/「Nishikawa Corp - EC 構築」/「Kobayashi Tech - 採用 LP」/「Tanaka Co. - WordPress 移行」

### TimeTracker.tsx（Case 02-2）

- **URL bar**：「atelier.studio/time」
- **Timer 中央表示**：「00:42:18」/「Yamada Holdings - 保守 + 改善」/ ボタン「Pause」
- **左パネル見出し**：「最近の案件」
  - Yamada Holdings / 1h 57m（active）
  - T 商事 LP / 1h 45m
  - K Inc. / 0h 0m
  - S 株式会社 / 0h 0m
  - Hayashi Studio / 0h 0m
- **右パネル見出し**：「今週の累計」
  - Yamada H. / 18.5h
  - T 商事 LP / 14.2h
  - S 株式会社 / 11.0h
  - K Inc. / 7.5h
  - Hayashi S. / 5.8h
- **下部見出し**：「今日のログ」
  - 09:15 - 10:30 / Yamada Holdings / 「メンテナンス対応」 / 1h 15m
  - 11:00 - 12:45 / T 商事 LP / 「ヘッダー実装」 / 1h 45m
  - 14:00 - now / Yamada Holdings / 「バグ修正」 / 42m（now）

### MonthlyReport.tsx（Case 02-3）

- **page title**：「Monthly Report」
- **副情報**：「May 2026」
- **KPI 3 件**：
  - 「総工数」/ 168h / 「先月比 +12%」
  - 「アクティブ案件」/ 10 / 「Retainer 4 / Single 6」
  - 「請求予定額」/ ¥1,840,000 / 「先月比 +8%」
- **左チャート見出し**：「案件別工数配分」
- **右チャート見出し**：「週次工数推移」（W1 - W5）
- **テーブル見出し**：「案件詳細」 / header：「案件名」「今月」「累計」「ステータス」
- **status**：「Active」/「In Progress」
- **テーブル 10 行**（PipelineTimeline と同名のプロジェクト）

### ArticlePipeline.tsx（Case 03-1）

- **page title**：「Articles」
- **副情報**：「15 件 / 5 媒体」
- **filter button**：「媒体」/「ステージ」/「月」 + 「すべて」/「5 月」
- **新規ボタン**：「新規記事」
- **table header**：「タイトル」/「媒体」/「ステージ」/「締切」/「字数」/「最終更新」
- **stage 4 種**：「執筆中」/「初稿」/「差し戻し」/「確定」
- **記事 15 件**（title / media）：
  - 春の建築特集（第 2 部） / Casa Brutus
  - 東京の小さなコーヒー / Brutus
  - 京都、暮らしの中の手仕事 / &Premium
  - 北欧デザインの再評価 / Casa Brutus
  - 食卓の革新者たち / 料理通信
  - 鎌倉の本屋探訪 / BRUTUS
  - 日本酒の新しい風 / 料理通信
  - パリ、私の街角 / &Premium
  - 古道具屋という生き方 / Casa Brutus
  - 写真家・川内倫子論 / アサヒカメラ
  - 民藝の現在地 / &Premium
  - 銭湯文化の再生 / BRUTUS
  - 地方都市のリノベ / 住む。
  - 茶道と現代生活 / &Premium
  - 日本のサウナ・ルネサンス / 料理通信
- **更新時刻表記**：「2 時間前」/「昨日」/「30 分前」/「3 日前」/「5 時間前」/「1 時間前」/「4 日前」/「4 時間前」/「6 時間前」/「5 日前」/「2 日前」/「10 分前」/「7 時間前」/「1 週間前」

### VersionDiff.tsx（Case 03-2）

- **article title**：「春の建築特集（第 2 部）」
- **副情報**：「Casa Brutus / 編集者：木村 美佐」
- **version tabs**：「v1」/「v2」/「v3」/「v4」（current）
- **比較表示**：「v3 ⇄ v4 比較中」
- **左カラム header**：「Version 3 (May 12)」
- **右カラム header**：「Version 4 (May 14)」 + 「current」バッジ

#### v3 の本文（左カラム、各行は別の DiffLine）

1. 「京都の建築物は時代を超え、」
2. 「何百年もの間そこに立っている。」
3. 「町家、寺院、神社。」
4. 「それぞれが独自の表情を持ち、訪れる者を魅了する。」
5. 「たとえば祇園を歩けば、格子戸の続く道並みに出会う。」
6. 「これらの町家は、京都の伝統的な暮らしの場所だった。」
7. 「今では、多くがカフェやショップに姿を変えている。」
8. 「建築家・隈研吾はかつて「日本の建築は素材との」
9. 「対話だ」と語った。京都の建築物を見ていると、」
10. 「その言葉の意味がよく分かる。」

#### v4 の本文（右カラム、added 行は + マーク）

1. （+）「京都の建築物は、千年の時を経てなお、」
2. （+）「その姿を留めている。」
3. 「町家、寺院、神社。」
4. 「それぞれが固有の物語を抱え、訪れる者を惹きつける。」
5. 「たとえば祇園を歩けば、格子戸の続く小径に出会う。」
6. （+）「これらの町家は、かつて京都の伝統的な暮らしの」
7. （+）「場所だった。現在、その多くがカフェやショップ」
8. （+）「へと姿を変えている。」
9. （+）「建築家・隈研吾はかつて「日本の建築とは、」
10. （+）「素材との対話である」と語った。京都の建築物を」
11. （+）「眺めていると、その言葉の重みが伝わってくる。」

#### コメントバブル 3 件（編集者）

- 木村 美佐 / 2 時間前 ：「ここの表現は冗長です」
- 木村 美佐 / 1 時間前 ：「もう少し具体的なデータを」
- 木村 美佐 / 30 分前 ：「全体的に良くなりました ✓」（approved）

- **モバイル用見出し**：「注釈・コメント」
- **アクションラベル**：「Reply」/「Resolve」

### BatchInvoice.tsx（Case 03-3）

- **page title**：「Batch Invoicing」
- **副情報**：「14 件納品済」
- **媒体タブ 3 件**：「Casa Brutus (7)」/「&Premium (4)」/「料理通信 (3)」
- **左カラム見出し**：「Casa Brutus の納品済記事」
- **全選択ラベル**：「全選択 (7/7)」
- **status preview**：「ステータス更新プレビュー」 / 「納品済 → 請求済 (7 件)」
- **納品済記事 7 件**：
  - 春の建築特集（第 2 部） / 4/22 / 3,200 字 / ¥64,000
  - 北欧デザインの再評価 / 4/18 / 2,800 字 / ¥56,000
  - 古道具屋という生き方 / 4/15 / 4,000 字 / ¥80,000
  - 鎌倉の本屋探訪 / 4/10 / 4,200 字 / ¥84,000
  - 茶道と現代生活 / 4/05 / 3,500 字 / ¥70,000
  - 食卓の革新者たち / 4/01 / 3,500 字 / ¥70,000
  - 写真家・川内倫子論 / 3/28 / 5,500 字 / ¥110,000
- **インボイス見出し**：「INVOICE」 + 「Draft」バッジ
- **billing**：「株式会社マガジンハウス 御中」/「発行日：2026.05.14」/「請求番号：INV-26-0537」
- **table header**：「案件名」/「字数」/「金額」
- **集計**：「小計 ¥534,000」/「消費税 (10%) ¥53,400」/「合計 ¥587,400」
- **bank info**：「振込先：みずほ銀行 / 渋谷支店 / 普通 1234567 / ナカムラケイスケ」/「振込期限：2026.06.14」
- **ボタン**：「PDF として保存」/「メールで送信」

---

## /signup（src/app/signup/）

### Metadata（signup/layout.tsx）

- **title**：「無料で始める」
- **description**：「Solo プラン無料、14 日間トライアル付き。クレジットカード不要で、すぐに案件管理を始められます。」
- **og:description**：「Solo プラン無料、14 日間トライアル付き。クレジットカード不要。」

### Form（signup/page.tsx）

- **ロゴ**：「Atelier.」
- **h1**：「無料で始める」
- **lead**：「14 日間の無料トライアル。クレジットカードは不要です。」
- **label**：
  - 「Email address」（placeholder：「hello@example.com」）
  - 「Password」（placeholder：「••••••••」）
  - 「Confirm Password」（placeholder：「••••••••」）
- **inline validation**：
  - email OK 表示：「OK」
  - password confirm error：「パスワードが一致しません。」
- **terms checkbox**：「<利用規約> および <プライバシーポリシー> に同意します。」
- **submit**：「アカウントを作成」
- **区切り文**：「または、別の方法で登録」
- **OAuth ボタン**：「Google」/「GitHub」
- **下部リンク**：「すでにアカウントをお持ちの方は ログイン」

### 右カラム visual

- 「Atelier Solo」
- 「Free forever」
- 機能 3 件：
  - 「同時 5 案件まで」
  - 「クライアント共有ボード」
  - 「直近 3 つのバージョン管理」

---

## /login（src/app/login/）

### Metadata（login/layout.tsx）

- **title**：「ログイン」
- **description**：「Atelier アカウントにログイン。」

### Form（login/page.tsx）

- **ロゴ**：「Atelier.」
- **h1**：「おかえりなさい」
- **lead**：「ログインして、続きを始めましょう。」
- **label**：
  - 「Email address」（placeholder：「hello@example.com」）
  - 「Password」（placeholder：「••••••••」）
- **forgot link**：「パスワードを忘れた方」
- **remember checkbox**：「ログイン状態を保持する」
- **submit**：「ログイン」
- **区切り文**：「または、別の方法でログイン」
- **OAuth ボタン**：「Google」/「GitHub」
- **下部リンク**：「アカウントをお持ちでない方は 新規登録」

### 右カラム visual

- **見出し**：「散らかった連絡、見失うファイル。それらを手放す時間です。」
- **lead**：「Atelier は、個人クリエイターが本来の「作る」時間に集中するためのクライアントワーク OS です。」
- **下部メタ**：「© 2026 Atelier Inc.」/「atelier.studio」

---

## /not-found（src/app/not-found.tsx）

- **h1**：「404」
- **h2**：「お探しのページは見つかりませんでした」
- **lead**：「移動または削除された可能性があります。URL をご確認いただくか、ホームへお戻りください。」
- **ボタン**：「ホームへ戻る」

---

## /error（src/app/error.tsx）

- **h1**：「500」
- **h2**：「予期しないエラーが発生しました」
- **lead**：「ご不便をおかけして申し訳ありません。システムに一時的な問題が発生している可能性があります。」
- **ボタン**：「再読み込み」/「ホームへ戻る」

---

## /global-error（src/app/global-error.tsx）

- **h1**：「Fatal Error」（英語のみ）
- **lead**：「システムに深刻なエラーが発生しました。時間を置いて再度お試しください。」
- **ボタン**：「再読み込み」

---

## OG 画像（src/app/opengraph-image.tsx）

画像中に描画される文字：

- 「Atelier.」（メイン、大文字）
- 「Every back-and-forth with your client, in one place.」（taglineEn、既に英語）

---

## メタ情報

- 抽出ルート数：8（`/`、`/demo`、`/pricing`、`/case-studies`、`/case-studies/[slug]` × 3、`/signup`、`/login`）+ ステータス系 3（`/not-found`、`/error`、`/global-error`）
- ホーム section 数：11（Hero / VideoDemo / PainPoints / ProductOverview / FeaturePipeline / FeatureBoard / FeatureVersion / WorkflowViz / Testimonials / PricingTeaser / CTA）
- VideoDemo シーン：4（Intro / Pipeline / Board / Invoicing）
- ホームデモ：3（Pipeline / Board / Version）
- ケーススタディ：3 件（合計 sections 9 件）
- ケーススタディ mockup：8 種類（DashboardKanban / ClientBoardChat / AutoInvoice / PipelineTimeline / TimeTracker / MonthlyReport / ArticlePipeline / VersionDiff / BatchInvoice ※9 種だが auto-invoice と batch-invoice は別物）
- 料金プラン：3 種（Solo / Plus / Studio）
- 料金 FAQ：6 件
- 機能比較表：7 行
- 案件カード（mockup 内）：合計 30+ 件（多くは英字名）
- 既に英字表記の要素：「Features」「Pricing」「In Practice」「Log in」「Sign up」「Atelier」など多数（変更不要の可能性あり）
- 英訳対象の日本語コピー（概算）：
  - メタディスクリプション：8 件
  - 主要見出し / h1 / h2：約 25 件
  - 本文段落：約 30 件
  - CTA 文言：約 15 件
  - フォーム label / placeholder / validation：約 12 件
  - mockup 内日本語：約 80 件（プロジェクト名・コラム表記・記事タイトル含む）

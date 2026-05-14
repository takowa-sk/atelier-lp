import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteInfo } from '@/lib/site';
import { getCaseStudyBySlug, caseStudies } from '@/lib/case-studies';
import { DashboardKanban } from '@/components/case-studies/mockups/DashboardKanban';
import { ClientBoardChat } from '@/components/case-studies/mockups/ClientBoardChat';
import { AutoInvoice } from '@/components/case-studies/mockups/AutoInvoice';
import { PipelineTimeline } from '@/components/case-studies/mockups/PipelineTimeline';
import { TimeTracker } from '@/components/case-studies/mockups/TimeTracker';
import { MonthlyReport } from '@/components/case-studies/mockups/MonthlyReport';
import { ArticlePipeline } from '@/components/case-studies/mockups/ArticlePipeline';
import { VersionDiff } from '@/components/case-studies/mockups/VersionDiff';
import { BatchInvoice } from '@/components/case-studies/mockups/BatchInvoice';
import { CaseNavigation } from '@/components/case-studies/CaseNavigation';
import { MockupScaler } from '@/components/case-studies/MockupScaler';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) return {};
  
  return {
    title: `Case ${caseStudy.caseNumber}：${caseStudy.category} | Atelier`,
    description: `${caseStudy.persona}が Atelier を使う実例。${caseStudy.result}`,
    openGraph: {
      title: `Case ${caseStudy.caseNumber}：${caseStudy.category}`,
      description: `${caseStudy.persona}が Atelier を使う実例。`,
      url: `/case-studies/${caseStudy.slug}`,
    },
  };
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

function renderMockup(id: string) {
  switch (id) {
    case 'dashboard-kanban':
      return (
        <MockupScaler baseWidth={1100} baseHeight={720}>
          <DashboardKanban />
        </MockupScaler>
      );
    case 'client-board-chat':
      return (
        <MockupScaler baseWidth={720} baseHeight={760}>
          <ClientBoardChat />
        </MockupScaler>
      );
    case 'auto-invoice':
      return (
        <MockupScaler baseWidth={1000} baseHeight={760}>
          <AutoInvoice />
        </MockupScaler>
      );
    case 'pipeline-timeline':
      return (
        <MockupScaler baseWidth={1200} baseHeight={580}>
          <PipelineTimeline />
        </MockupScaler>
      );
    case 'time-tracker':
      return (
        <MockupScaler baseWidth={960} baseHeight={760}>
          <TimeTracker />
        </MockupScaler>
      );
    case 'monthly-report':
      return (
        <MockupScaler baseWidth={1024} baseHeight={840}>
          <MonthlyReport />
        </MockupScaler>
      );
    case 'article-pipeline':
      return (
        <MockupScaler baseWidth={960} baseHeight={1000}>
          <ArticlePipeline />
        </MockupScaler>
      );
    case 'version-diff':
      return (
        <MockupScaler baseWidth={1280} baseHeight={760}>
          <VersionDiff />
        </MockupScaler>
      );
    case 'batch-invoice':
      return (
        <MockupScaler baseWidth={1000} baseHeight={760}>
          <BatchInvoice />
        </MockupScaler>
      );
    default:
      return null;
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteInfo.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'In Practice',
        item: `${siteInfo.url}/case-studies`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Case ${caseStudy.caseNumber}：${caseStudy.category}`,
        item: `${siteInfo.url}/case-studies/${caseStudy.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="py-24 md:py-32 pt-32 pb-24 bg-bone">
        <div className="mx-auto w-full px-6 md:px-12 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brass mb-4">
            Case {caseStudy.caseNumber} / {caseStudy.category}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-noto-serif text-forest mb-8 font-black tracking-tighter leading-tight">
            {caseStudy.title}
          </h1>
          <p className="text-lg text-slate-sub font-noto-serif mb-12 max-w-2xl">
            {caseStudy.persona}
          </p>
          
          <div className="bg-forest text-bone p-8 md:p-10 rounded-3xl border border-forest-sub inline-block shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass mb-3">Result</p>
            <p className="text-2xl md:text-3xl font-bold font-noto-serif leading-tight">
              {caseStudy.result}
            </p>
          </div>
        </div>
      </section>

      <div className="pb-32 bg-bone">
        {caseStudy.sections.map((section) => (
          <section key={section.id} id={section.id} className="mt-24 md:mt-32">
            <div className="w-full px-6 md:px-12 max-w-4xl mx-auto">
              <p className="text-base md:text-lg leading-loose text-slate font-medium">
                {section.context}
              </p>
            </div>
            
            <div className="w-full px-6 md:px-12 mt-12 max-w-6xl mx-auto">
              <div className="px-4 md:px-0">
                {renderMockup(section.id)}
              </div>
            </div>
          </section>
        ))}
        
        <CaseNavigation currentSlug={slug} />
      </div>
    </>
  );
}

import { Metadata } from 'next';
import { siteInfo } from '@/lib/site';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import Script from 'next/script';
import { caseStudies } from '@/lib/case-studies';
import { LayoutDashboard } from 'lucide-react';

export const metadata: Metadata = {
  title: 'In Practice',
  description: '3 人のクリエイターが、Atelier をどう使っているか。9 つの UI シーンで、案件管理から請求発行までを辿ります。',
};

export default function CaseStudiesPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteInfo.url },
      { '@type': 'ListItem', position: 2, name: 'In Practice', item: `${siteInfo.url}/case-studies` },
    ],
  };

  return (
    <>
      <Script id="breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
      {/* Hero */}
      <Section className="pt-32 pb-16 bg-bone">
        <Container className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-noto-serif text-forest mb-6 font-black tracking-tighter">
            In Practice
          </h1>
          <p className="text-lg md:text-xl text-slate-sub leading-relaxed max-w-2xl mx-auto font-noto-serif">
            3 人のクリエイターが、Atelier をどう使っているか。<br className="hidden md:block" />
            9 つの UI シーンで、案件管理から請求発行までを辿ります。
          </p>
        </Container>
      </Section>

      {/* Case Studies Grid */}
      <Section className="py-24 bg-bone">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link 
                key={study.slug} 
                href={`/case-studies/${study.slug}`}
                className="group flex flex-col h-full bg-bone-sub border border-line rounded-3xl p-8 hover:border-brass/50 transition-colors shadow-sm hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 text-forest group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                  <LayoutDashboard size={120} />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-brass mb-4">
                      Case {study.caseNumber}
                    </p>
                    <h2 className="text-2xl font-noto-serif font-bold text-forest mb-4 leading-tight group-hover:text-brass transition-colors h-20 line-clamp-2">
                      {study.title}
                    </h2>
                    <p className="text-sm text-slate-sub mb-8 line-clamp-2 h-10">
                      {study.persona}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="bg-forest text-bone p-4 rounded-2xl border border-forest-sub h-24 flex flex-col justify-center">
                      <p className="text-xs font-bold uppercase tracking-widest text-brass mb-1">Result</p>
                      <p className="text-sm font-bold leading-tight">
                        {study.result}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

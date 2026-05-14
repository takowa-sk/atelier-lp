import { Hero } from '@/components/sections/home/Hero';
import { VideoDemo } from '@/components/sections/home/VideoDemo';
import { PainPoints } from '@/components/sections/home/PainPoints';
import { ProductOverview } from '@/components/sections/home/ProductOverview';
import { FeaturePipeline } from '@/components/sections/home/FeaturePipeline';
import { FeatureBoard } from '@/components/sections/home/FeatureBoard';
import { FeatureVersion } from '@/components/sections/home/FeatureVersion';
import { WorkflowViz } from '@/components/sections/home/WorkflowViz';
import { Testimonials } from '@/components/sections/home/Testimonials';
import { PricingTeaser } from '@/components/sections/home/PricingTeaser';
import { CTA } from '@/components/sections/home/CTA';
import { siteInfo } from '@/lib/site';
import Script from 'next/script';

export default function Home() {
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteInfo.name,
    operatingSystem: 'Web',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'JPY',
    },
    description: siteInfo.subCopy,
  };

  return (
    <>
      <Script id="product-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Hero />
      <VideoDemo />
      <PainPoints />
      <ProductOverview />
      <FeaturePipeline />
      <FeatureBoard />
      <FeatureVersion />
      <WorkflowViz />
      <Testimonials />
      <PricingTeaser />
      <CTA />
    </>
  );
}

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
  description: 'Pricing built for the long run. Solo is free, Plus starts at ¥980/month.',
};

const tiers = [
  {
    name: 'Solo',
    price: 'Free',
    description: 'Start with one project at a time.',
    features: ['Up to 5 active projects', 'Full access to core features', '1 client invite per project'],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Plus',
    price: '¥980',
    period: '/ month',
    description: 'Built for serious client work.',
    features: ['Unlimited projects', 'Client shared boards', 'Unlimited version history', 'Automatic invoicing'],
    cta: 'Start 14-day trial',
    highlighted: true,
  },
  {
    name: 'Studio',
    price: '¥2,800',
    period: '/ month',
    description: "When you're building a team.",
    features: ['Everything in Plus', 'Up to 3 team members', 'API access', 'Monthly reports'],
    cta: 'Start 14-day trial',
    highlighted: false,
  }
];

const features = [
  { name: 'Active projects', solo: '5', plus: 'Unlimited', studio: 'Unlimited' },
  { name: 'Client invites', solo: '1 per project', plus: 'Unlimited', studio: 'Unlimited' },
  { name: 'Version history', solo: 'Last 3', plus: 'Unlimited', studio: 'Unlimited' },
  { name: 'Automatic invoicing', solo: false, plus: true, studio: true },
  { name: 'Team members', solo: false, plus: false, studio: 'Up to 3' },
  { name: 'API access', solo: false, plus: false, studio: true },
  { name: 'Priority support', solo: false, plus: false, studio: true },
];

const faqs = [
  { q: 'Can I change plans later?', a: 'Yes—upgrade or downgrade anytime.' },
  { q: 'Can I cancel anytime?', a: 'Yes. No cancellation fees, no questions.' },
  { q: 'What payment methods do you accept?', a: 'Credit cards: Visa, Mastercard, Amex, JCB. Bank transfer is available for Studio annual plans on request.' },
  { q: 'What happens to my data after I cancel?', a: 'Your data is held for 30 days—restored if you come back, securely deleted after.' },
  { q: 'Can I subscribe as a company?', a: 'Yes. All plans support company-name receipts and invoices.' },
  { q: "Do you support Japan's qualified invoice system?", a: 'Yes—our invoices include our qualified invoice issuer registration number.' },
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
            Pricing built for the long run.
          </h1>
          <p className="text-lg text-slate-sub leading-relaxed">
            No feature handcuffs. Pricing grows with your work. Pay annually and get two months free.
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
            <p>14-day free trial. No credit card required.</p>
          </div>
        </Container>
      </Section>

      {/* Feature Matrix */}
      <Section className="bg-bone-sub py-24 border-y border-line">
        <Container className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-noto-serif text-center mb-12">Compare features</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="py-4 border-b-2 border-forest w-1/3 text-sm text-slate-sub font-normal">Feature</th>
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
          <h2 className="text-2xl md:text-3xl font-noto-serif text-center mb-16">Common questions</h2>
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
          <h2 className="text-3xl font-noto-serif mb-6">Still deciding?</h2>
          <p className="text-bone-sub/80 mb-10 leading-relaxed">
            Start with Solo—free, no card required. You&apos;ll be running your first project in minutes.
          </p>
          <Button asChild variant="secondary" size="lg" className="bg-brass text-bone hover:bg-brass/90 border-none">
            <Link href="/signup">Start with Solo (free)</Link>
          </Button>
        </Container>
      </Section>
    </>
  );
}

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';
import Link from 'next/link';

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

export function PricingTeaser() {
  return (
    <Section className="bg-bone-sub border-t border-line pb-0">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-noto-serif mb-4 text-forest">
            Simple pricing.
          </h2>
          <p className="text-slate-sub">
            Two months free on annual. Cancel anytime.
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
            See full pricing
          </Link>
        </div>
      </Container>
    </Section>
  );
}

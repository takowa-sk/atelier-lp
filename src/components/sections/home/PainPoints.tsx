import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { MessageSquare, FileWarning, Wallet } from 'lucide-react';

const pains = [
  {
    icon: MessageSquare,
    title: 'Scattered conversations',
    description: 'Email. Slack. Chatwork. Why does every client end up in a different place?',
  },
  {
    icon: FileWarning,
    title: 'Version chaos',
    description: '"Which one was the latest?" costs you 30 minutes every time. Missed feedback chips away at trust.',
  },
  {
    icon: Wallet,
    title: 'Invisible cash flow',
    description: 'Did they approve it? When does the money land? Invoicing turns into a month-end grind.',
  },
];

export function PainPoints() {
  return (
    <Section className="bg-bone-sub/50 border-y border-line">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-noto-serif mb-4 text-forest">
            Working solo, the busywork wins.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, i) => (
            <div key={i} className="bg-bone border border-line rounded-lg p-8">
              <div className="w-12 h-12 bg-forest/5 rounded-md flex items-center justify-center mb-6 text-forest">
                <pain.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-3">{pain.title}</h3>
              <p className="text-slate-sub leading-relaxed text-sm">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

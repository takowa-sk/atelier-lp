import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { LayoutDashboard, Users, History, Receipt, Archive } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Project pipeline',
    description: 'From accept to invoice. Every project is a card. Every stage, at a glance.',
  },
  {
    icon: Users,
    title: 'Client board',
    description: 'Send one link. Feedback and sign-off both happen here.',
  },
  {
    icon: History,
    title: 'Version control',
    description: 'Every revision, side by side. Comments stay with the version.',
  },
  {
    icon: Receipt,
    title: 'Invoicing & payments',
    description: 'Invoices that follow project status. Know when payment lands.',
  },
  {
    icon: Archive,
    title: 'Project archive',
    description: 'Finished projects become a library. Searchable, browsable, yours.',
  },
];

export function ProductOverview() {
  return (
    <Section id="features">
      <Container>
        <div className="mb-16 md:w-1/2">
          <span className="text-brass text-sm font-bold tracking-widest uppercase block mb-4">Core capabilities</span>
          <h2 className="text-3xl md:text-4xl font-noto-serif text-forest">
            Every project, on one clean line.
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

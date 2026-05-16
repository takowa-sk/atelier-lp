import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const testimonials = [
  {
    quote: "Even with several clients running at once, I can see exactly where each project stands. I'm never going back to spreadsheets.",
    name: "Y. Tanaka",
    role: "Freelance Designer",
    initials: "YT"
  },
  {
    quote: "Revision requests don't get buried in chat anymore. The visual version control is something my clients actually notice.",
    name: "S. Ito",
    role: "Web Engineer",
    initials: "SI"
  },
  {
    quote: "Sign-off to invoice is smooth. And come tax season, pulling old projects from the archive is a lifesaver.",
    name: "M. Sato",
    role: "Illustrator",
    initials: "MS"
  }
];

export function Testimonials() {
  return (
    <Section className="bg-bone">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-noto-serif mb-4 text-forest">
            Made for independent professionals.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-bone-sub/50 border border-line rounded-xl p-8 flex flex-col">
              <p className="text-slate flex-grow mb-8 leading-relaxed">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-forest text-bone flex items-center justify-center font-mono text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-sm text-forest">{t.name}</div>
                  <div className="text-xs text-slate-sub">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

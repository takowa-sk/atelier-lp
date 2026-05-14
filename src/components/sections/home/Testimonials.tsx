import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const testimonials = [
  {
    quote: "複数のクライアントと同時に進行していても、どの案件がどの状態か一目でわかる。もうスプレッドシートには戻れません。",
    name: "Y. Tanaka",
    role: "Freelance Designer",
    initials: "YT"
  },
  {
    quote: "修正依頼がチャットのログに埋もれることがなくなりました。制作物のバージョン管理が視覚的で、クライアントの反応も良いです。",
    name: "S. Ito",
    role: "Web Engineer",
    initials: "SI"
  },
  {
    quote: "検収から請求書発行までがスムーズ。確定申告の時、過去の案件をアーカイブからすぐに引っ張り出せるのが本当に助かります。",
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
            独立したプロフェッショナルのために。
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

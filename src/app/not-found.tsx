import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Section className="flex-grow flex items-center justify-center pt-32">
      <Container className="text-center max-w-lg">
        <h1 className="text-6xl md:text-8xl font-noto-serif text-forest mb-6 tracking-tighter">404</h1>
        <h2 className="text-2xl font-bold mb-4">お探しのページは見つかりませんでした</h2>
        <p className="text-slate-sub mb-10 leading-relaxed">
          移動または削除された可能性があります。URL をご確認いただくか、ホームへお戻りください。
        </p>
        <Button asChild variant="default" size="lg">
          <Link href="/">ホームへ戻る</Link>
        </Button>
      </Container>
    </Section>
  );
}

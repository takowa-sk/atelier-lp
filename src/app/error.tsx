'use client';

import { useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section className="flex-grow flex items-center justify-center pt-32">
      <Container className="text-center max-w-lg">
        <h1 className="text-6xl md:text-8xl font-noto-serif text-error mb-6 tracking-tighter">500</h1>
        <h2 className="text-2xl font-bold mb-4">予期しないエラーが発生しました</h2>
        <p className="text-slate-sub mb-10 leading-relaxed">
          ご不便をおかけして申し訳ありません。システムに一時的な問題が発生している可能性があります。
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button onClick={() => reset()} variant="outline" size="lg">
            再読み込み
          </Button>
          <Button asChild variant="default" size="lg">
            <Link href="/">ホームへ戻る</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

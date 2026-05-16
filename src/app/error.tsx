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
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        <p className="text-slate-sub mb-10 leading-relaxed">
          Sorry about that. There might be a temporary issue on our end.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button onClick={() => reset()} variant="outline" size="lg">
            Reload
          </Button>
          <Button asChild variant="default" size="lg">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

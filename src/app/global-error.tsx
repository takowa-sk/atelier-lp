'use client';

import { sansFont, sansJpFont, monoFont } from '@/lib/fonts';
import './globals.css';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className={`${sansFont.variable} ${sansJpFont.variable} ${monoFont.variable}`}>
      <body className="bg-bone text-slate font-inter antialiased min-h-screen flex flex-col items-center justify-center">
        <div className="text-center max-w-lg px-6">
          <h1 className="text-4xl font-noto-serif text-error mb-4">Critical error</h1>
          <p className="text-slate-sub mb-8">
            A serious error occurred. Please try again in a moment.
            <span className="hidden">{error.message}</span>
          </p>
          <button
            onClick={() => reset()}
            className="bg-forest text-bone px-6 py-3 rounded-md hover:bg-forest-sub transition-colors font-medium text-sm"
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}

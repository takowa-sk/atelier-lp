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
    <html lang="ja" className={`${sansFont.variable} ${sansJpFont.variable} ${monoFont.variable}`}>
      <body className="bg-bone text-slate font-inter antialiased min-h-screen flex flex-col items-center justify-center">
        <div className="text-center max-w-lg px-6">
          <h1 className="text-4xl font-noto-serif text-error mb-4">Fatal Error</h1>
          <p className="text-slate-sub mb-8">
            システムに深刻なエラーが発生しました。時間を置いて再度お試しください。
            <span className="hidden">{error.message}</span>
          </p>
          <button
            onClick={() => reset()}
            className="bg-forest text-bone px-6 py-3 rounded-md hover:bg-forest-sub transition-colors font-medium text-sm"
          >
            再読み込み
          </button>
        </div>
      </body>
    </html>
  );
}

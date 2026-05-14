import { Plus_Jakarta_Sans, Zen_Kaku_Gothic_New, JetBrains_Mono } from 'next/font/google';

export const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-base',
});

export const sansJpFont = Zen_Kaku_Gothic_New({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-jp',
});

export const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono-base',
});

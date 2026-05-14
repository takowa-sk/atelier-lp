import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ログイン',
  description: 'Atelier アカウントにログイン。',
  openGraph: {
    title: 'ログイン',
    description: 'Atelier アカウントにログイン。',
  },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

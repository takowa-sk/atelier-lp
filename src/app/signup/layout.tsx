import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '無料で始める',
  description: 'Solo プラン無料、14 日間トライアル付き。クレジットカード不要で、すぐに案件管理を始められます。',
  openGraph: {
    title: '無料で始める',
    description: 'Solo プラン無料、14 日間トライアル付き。クレジットカード不要。',
  },
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

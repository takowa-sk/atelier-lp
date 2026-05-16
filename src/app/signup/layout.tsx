import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get started free',
  description: 'Solo plan free, with a 14-day trial. No card required—start running projects today.',
  openGraph: {
    title: 'Get started free',
    description: 'Solo plan free, with a 14-day trial. No card required.',
  },
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

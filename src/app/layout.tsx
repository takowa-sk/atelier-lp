import type { Metadata } from 'next';
import { sansFont, sansJpFont, monoFont } from '@/lib/fonts';
import './globals.css';
import { siteInfo } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteInfo.name}`,
    default: `${siteInfo.name} - ${siteInfo.tagline}`,
  },
  description: siteInfo.subCopy,
  metadataBase: new URL(siteInfo.url),
};

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteInfo.company,
    url: siteInfo.url,
    logo: `${siteInfo.url}/icon.png`,
    foundingDate: siteInfo.founded,
    founder: {
      '@type': 'Person',
      name: siteInfo.founder,
    },
  };

  return (
    <html lang="en" className={`${sansFont.variable} ${sansJpFont.variable} ${monoFont.variable}`}>
      <body className="bg-bone text-slate font-inter antialiased min-h-screen flex flex-col">
        <Script id="org-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

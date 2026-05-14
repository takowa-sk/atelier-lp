import { ImageResponse } from 'next/og';
import { siteInfo } from '@/lib/site';

export const runtime = 'edge';
export const alt = siteInfo.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1F3A2E', // --color-forest
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
          color: '#F5F2EB', // --color-bone
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
          <div style={{ width: '80px', height: '8px', background: '#B27C4E' }}></div>
          <h1 style={{ fontSize: '80px', fontWeight: 'bold', margin: 0 }}>Atelier.</h1>
          <div style={{ width: '80px', height: '8px', background: '#B27C4E' }}></div>
        </div>
        <p style={{ fontSize: '40px', color: '#ECE7DC', opacity: 0.8 }}>
          {siteInfo.taglineEn}
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}

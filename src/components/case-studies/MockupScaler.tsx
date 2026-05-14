'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  baseWidth: number;
  baseHeight: number;
};

export function MockupScaler({ children, baseWidth, baseHeight }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      if (!isMobile) {
        setScale(1);
        return;
      }
      const width = el.clientWidth;
      setScale(width / baseWidth);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener('resize', update);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [baseWidth]);

  return (
    <div
      ref={containerRef}
      className="mockup-scaler-container"
      style={
        {
          '--base-width': `${baseWidth}px`,
          '--base-height': `${baseHeight}px`,
          '--aspect': `${baseWidth} / ${baseHeight}`,
          '--scale': scale,
        } as CSSProperties
      }
    >
      <div className="mockup-scaler-inner">{children}</div>
    </div>
  );
}

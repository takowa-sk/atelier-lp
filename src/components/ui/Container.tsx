import * as React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  narrow?: boolean;
}

export function Container({ className, narrow = false, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 md:px-12',
        narrow ? 'max-w-[880px]' : 'max-w-[1240px]',
        className
      )}
      {...props}
    />
  );
}

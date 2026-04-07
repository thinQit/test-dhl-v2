'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children?: ReactNode;
  className?: string;
}

export default function ScrollReveal({ children = null, className = '' }: Partial<ScrollRevealProps>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setVisible(true));
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn('transition-all duration-700', visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0', className)}>
      {children}
    </div>
  );
}

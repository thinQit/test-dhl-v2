"use client";

import { cn } from '@/lib/utils';
import { ShieldCheck, Truck, Clock3, Globe } from 'lucide-react';

interface IconBadgeProps {
  label?: string;
  icon?: string;
  className?: string;
}

const iconMap = { ShieldCheck, Truck, Clock3, Globe };

export default function IconBadge({ label = 'Trusted Logistics', icon = 'ShieldCheck', className = '' }: Partial<IconBadgeProps>) {
  const Icon = iconMap[icon as keyof typeof iconMap] || ShieldCheck;

  return (
    <span className={cn('inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700', className)}>
      <Icon className="h-3.5 w-3.5 text-[#0EA5E9]" />
      {label}
    </span>
  );
}

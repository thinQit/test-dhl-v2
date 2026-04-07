"use client";

import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface CTABannerProps {
  title?: string;
  bullets?: string[];
  className?: string;
}

export default function CTABanner({
  title = 'Ready to optimize your global shipping operations?',
  bullets = ['Fast onboarding in under 48 hours', 'Dedicated logistics advisor', 'Real-time shipment visibility'],
  className = '',
}: Partial<CTABannerProps>) {
  return (
    <section className={'py-20 md:py-24 ' + className}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-[#1E3A5F] p-8 text-white md:p-12">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-8 border-[#0EA5E9]/30" />
          <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">{title}</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2 text-sm text-slate-100">
                <Check className="h-4 w-4 text-[#0EA5E9]" />
                {bullet}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="bg-[#0EA5E9] text-white hover:bg-[#0284c7]">Get a Quote</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1E3A5F]">Talk to Sales</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

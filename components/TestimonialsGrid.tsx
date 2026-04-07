"use client";

import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  rating: number;
}

interface TestimonialsGridProps {
  testimonials?: Testimonial[];
  className?: string;
}

export default function TestimonialsGrid({
  testimonials = [
    { quote: 'DHL helped us reduce international lead times by 32% within one quarter.', name: 'Sarah Mendez', title: 'Supply Chain Director, MedNova', rating: 5 },
    { quote: 'The tracking and customs support is excellent. Our customers now get predictable ETAs.', name: 'Ben Carter', title: 'COO, CoreTech Retail', rating: 5 },
    { quote: 'Reliable pickups and clear communication made scaling to new markets seamless.', name: 'Anika Dutta', title: 'Logistics Manager, Bloommerce', rating: 5 },
  ],
  className = '',
}: Partial<TestimonialsGridProps>) {
  return (
    <section className={'bg-white py-20 md:py-24 ' + className}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">What clients say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={t.name + i} className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="mb-4 flex">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-[#0EA5E9] text-[#0EA5E9]" />
                ))}
              </div>
              <p className="text-slate-700">“{t.quote}”</p>
              <p className="mt-4 font-medium text-[#1E3A5F]">{t.name}</p>
              <p className="text-sm text-slate-500">{t.title}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

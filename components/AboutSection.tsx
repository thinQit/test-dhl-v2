"use client";

import Image from 'next/image';
import { CheckCircle2, MapPin } from 'lucide-react';

interface AboutSectionProps {
  imageSrc?: string;
  className?: string;
}

export default function AboutSection({
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576895/site-images/corporate/10041266.jpg',
  className = '',
}: Partial<AboutSectionProps>) {
  return (
    <section id="about" className={'bg-white py-20 md:py-24 ' + className}>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <div>
          <p className="text-sm font-medium text-[#0EA5E9]">About DHL Express</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#1E3A5F] md:text-4xl">Built for global business velocity</h2>
          <p className="mt-4 text-slate-600">We help businesses ship smarter with reliable transit networks, local customs expertise, and digital visibility at every checkpoint.</p>
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[#0EA5E9]" /> Customer-first service with proactive updates</p>
            <p className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[#0EA5E9]" /> Sustainability roadmap with optimized routes</p>
            <p className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[#0EA5E9]" /> Security and compliance standards across regions</p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-lg border border-slate-200 p-4"><p className="text-2xl font-bold text-[#1E3A5F]">220+</p><p className="text-xs text-slate-500">Countries</p></div>
            <div className="rounded-lg border border-slate-200 p-4"><p className="text-2xl font-bold text-[#1E3A5F]">500k+</p><p className="text-xs text-slate-500">Daily Shipments</p></div>
            <div className="rounded-lg border border-slate-200 p-4"><p className="text-2xl font-bold text-[#1E3A5F]">99.2%</p><p className="text-xs text-slate-500">On-Time Rate</p></div>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-slate-600"><MapPin className="h-4 w-4 text-[#0EA5E9]" /> Regional HQ: Miami, FL — Global operations network</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <Image src={imageSrc} alt="DHL logistics operations" width={1200} height={800} className="h-full w-full object-cover" unoptimized />
        </div>
      </div>
    </section>
  );
}

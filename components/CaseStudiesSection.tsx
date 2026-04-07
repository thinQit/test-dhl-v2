"use client";

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  company: string;
  challenge: string;
  solution: string;
  results: string;
  href: string;
}

interface CaseStudiesSectionProps {
  studies?: CaseStudy[];
  className?: string;
}

export default function CaseStudiesSection({
  studies = [
    { company: 'PharmaLink EU', challenge: 'Cold-chain delays across 6 countries.', solution: 'Dedicated priority lanes + proactive exception alerts.', results: '28% faster delivery and 41% fewer incidents.', href: '#' },
    { company: 'UrbanCart', challenge: 'Unstable last-mile performance in peak season.', solution: 'Hybrid express routing and expanded pickup windows.', results: 'On-time delivery improved from 91% to 98%.', href: '#' },
    { company: 'ElectroWorks', challenge: 'Customs holds for high-value electronics.', solution: 'Pre-clearance workflows and digital compliance docs.', results: 'Customs clearance time reduced by 36%.', href: '#' },
  ],
  className = '',
}: Partial<CaseStudiesSectionProps>) {
  return (
    <section id="case-studies" className={'bg-[#F8FAFC] py-20 md:py-24 ' + className}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">Case Studies</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {studies.map((study) => (
            <Card key={study.company} className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#1E3A5F]">{study.company}</h3>
              <p className="mt-3 text-sm text-slate-600"><span className="font-medium text-slate-800">Challenge:</span> {study.challenge}</p>
              <p className="mt-2 text-sm text-slate-600"><span className="font-medium text-slate-800">Solution:</span> {study.solution}</p>
              <p className="mt-2 text-sm text-slate-600"><span className="font-medium text-slate-800">Results:</span> {study.results}</p>
              <Link href={study.href} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#0EA5E9]">
                View details <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

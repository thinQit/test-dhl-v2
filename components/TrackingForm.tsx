'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, CircleCheck, Truck, Package, MapPin } from 'lucide-react';

interface TrackingFormProps {
  helperText?: string;
  className?: string;
}

export default function TrackingForm({
  helperText = 'Enter DHL tracking number (e.g., DHL123456789).',
  className = '',
}: Partial<TrackingFormProps>) {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="tracking" className={'bg-[#F8FAFC] py-20 md:py-24 ' + className}>
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">Track your shipment</h2>
        <p className="mt-2 text-sm text-slate-600">{helperText}</p>
        <div className="mt-6 flex gap-3">
          <Input value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)} placeholder="DHL123456789" />
          <Button onClick={() => setSubmitted(true)} className="bg-[#0EA5E9] text-white"><Search className="mr-2 h-4 w-4" />Track</Button>
        </div>

        {submitted && (
          <Card className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              <CircleCheck className="h-4 w-4" /> In Transit
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-3"><Package className="mt-0.5 h-4 w-4 text-[#0EA5E9]" /><div><p className="text-sm font-medium text-slate-800">Shipment picked up</p><p className="text-xs text-slate-500">Berlin, Germany — 08:15</p></div></div>
              <div className="flex items-start gap-3"><Truck className="mt-0.5 h-4 w-4 text-[#0EA5E9]" /><div><p className="text-sm font-medium text-slate-800">Departed transit hub</p><p className="text-xs text-slate-500">Leipzig Hub — 14:40</p></div></div>
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-[#0EA5E9]" /><div><p className="text-sm font-medium text-slate-800">Arrived destination facility</p><p className="text-xs text-slate-500">New York, USA — 07:05</p></div></div>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
}

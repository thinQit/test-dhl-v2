'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Globe, PackageCheck, Warehouse, ShieldCheck, Truck, Clock3 } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  highlight: string;
}

interface ServicesGridProps {
  title?: string;
  services?: ServiceItem[];
  className?: string;
}

const iconMap = { Globe, PackageCheck, Warehouse, ShieldCheck, Truck, Clock3 };

export default function ServicesGrid({
  title = 'Shipping & Logistics Services',
  services = [
    { title: 'International Express', description: 'Door-to-door global delivery with end-to-end tracking.', icon: 'Globe', highlight: '220+ countries' },
    { title: 'Freight Solutions', description: 'Air, ocean, and road freight tailored for business volume.', icon: 'Truck', highlight: 'Flexible capacity' },
    { title: 'Secure Packaging', description: 'Certified handling and packaging for sensitive shipments.', icon: 'ShieldCheck', highlight: 'Damage protection' },
    { title: 'Warehouse & Fulfillment', description: 'Inventory storage, picking, packing, and dispatch.', icon: 'Warehouse', highlight: 'Scalable ops' },
    { title: 'Customs Clearance', description: 'Fast documentation and compliance support at borders.', icon: 'PackageCheck', highlight: 'Fewer delays' },
    { title: 'Time-Critical Delivery', description: 'Priority lanes for urgent and same-day logistics needs.', icon: 'Clock3', highlight: 'Express SLA' },
  ],
  className = '',
}: Partial<ServicesGridProps>) {
  return (
    <section id="services" className={cn('bg-[#F8FAFC] py-20 md:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">{title}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Globe;
            return (
              <Card key={service.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="inline-flex rounded-lg bg-sky-50 p-3">
                  <Icon className="h-5 w-5 text-[#0EA5E9]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1E3A5F]">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                <p className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{service.highlight}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

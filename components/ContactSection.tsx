'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface ContactSectionProps {
  mapEmbedUrl?: string;
  className?: string;
}

export default function ContactSection({
  mapEmbedUrl = 'https://maps.google.com/maps?q=Miami%20FL&t=&z=13&ie=UTF8&iwloc=&output=embed',
  className = '',
}: Partial<ContactSectionProps>) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const isValid = name.trim().length > 1 && email.includes('@') && message.trim().length > 10;

  return (
    <section id="contact" className={'bg-white py-20 md:py-24 ' + className}>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">Contact DHL Business Team</h2>
          <p className="mt-3 text-slate-600">Tell us about your shipping volume and lanes, and we’ll prepare a tailored logistics plan.</p>
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#0EA5E9]" /> +1 (800) 225-5345</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#0EA5E9]" /> enterprise@dhl-express.com</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#0EA5E9]" /> 1210 Logistics Way, Miami, FL</p>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
            <iframe src={mapEmbedUrl} className="h-64 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>

        <Card className="rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Cooper" />
            </div>
            <div>
              <Label htmlFor="email">Business Email</Label>
              <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@company.com" />
            </div>
            <div>
              <Label htmlFor="service">Service Interest</Label>
              <Select id="service" defaultValue="International Express">
                <option>International Express</option>
                <option>Freight Solutions</option>
                <option>Warehousing</option>
                <option>Customs Support</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="message">Project Details</Label>
              <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Monthly shipment volume, destinations, and timeline..." />
            </div>
            <Button disabled={!isValid} className="w-full bg-[#0EA5E9] text-white hover:bg-[#0284c7]">Submit Request</Button>
          </div>
        </Card>
      </div>
    </section>
  );
}

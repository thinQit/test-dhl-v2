"use client";

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  companyName?: string;
  className?: string;
}

export default function Footer({ companyName = 'DHL Express', className = '' }: Partial<FooterProps>) {
  return (
    <footer className={'border-t border-slate-200 bg-[#1E3A5F] text-white ' + className}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div>
          <h3 className="text-lg font-semibold">{companyName}</h3>
          <p className="mt-3 text-sm text-slate-200">Global shipping and logistics solutions for businesses that move fast.</p>
          <div className="mt-4 space-y-2 text-sm text-slate-100">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#0EA5E9]" /> +1 (800) 225-5345</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#0EA5E9]" /> enterprise@dhl-express.com</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#0EA5E9]" /> 1210 Logistics Way, Miami, FL</p>
          </div>
        </div>

        <div>
          <h4 className="font-medium">Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li><Link href="#services">International Express</Link></li>
            <li><Link href="#services">Freight Transport</Link></li>
            <li><Link href="#services">Warehousing</Link></li>
            <li><Link href="#services">Customs Clearance</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium">Tools</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li><Link href="#tracking">Track Shipment</Link></li>
            <li><Link href="#pricing">Rate Calculator</Link></li>
            <li><Link href="#contact">Book Pickup</Link></li>
            <li><Link href="#contact">Support Center</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#team">Leadership</Link></li>
            <li><Link href="#case-studies">Case Studies</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-slate-300 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
      <p className="mx-auto max-w-7xl px-4 pb-6 text-[11px] text-slate-400 md:px-6">Disclaimer: Transit times may vary by destination, customs processing, and weather conditions.</p>
    </footer>
  );
}

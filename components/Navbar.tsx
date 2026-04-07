'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, Package, Truck, DollarSign, Building2, Briefcase, Phone, LocateFixed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavLink {
  label: string;
  href: string;
  icon: string;
}

interface NavbarProps {
  logoText?: string;
  links?: NavLink[];
  className?: string;
}

const iconMap = {
  Package,
  Truck,
  DollarSign,
  Building2,
  Briefcase,
  Phone,
  LocateFixed,
};

export default function Navbar({
  logoText = 'DHL Express',
  links = [
    { label: 'Services', href: '#services', icon: 'Package' },
    { label: 'Tracking', href: '#tracking', icon: 'LocateFixed' },
    { label: 'Pricing', href: '#pricing', icon: 'DollarSign' },
    { label: 'About', href: '#about', icon: 'Building2' },
    { label: 'Case Studies', href: '#case-studies', icon: 'Briefcase' },
    { label: 'Contact', href: '#contact', icon: 'Phone' },
  ],
  className = '',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);

  return (
    <header className={cn('sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur', className)}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-md bg-[#1E3A5F] p-2 text-white">
            <Truck className="h-4 w-4" />
          </div>
          <span className="font-semibold text-[#1E3A5F]">{logoText}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-[#0EA5E9]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" className="border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white">
            Track
          </Button>
          <Button className="bg-[#0EA5E9] text-white hover:bg-[#0284c7]">Get Quote</Button>
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-md p-2 text-slate-700 lg:hidden" aria-label="Toggle navigation">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <button
            onClick={() => setMobileAccordionOpen(!mobileAccordionOpen)}
            className="flex w-full items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-left text-sm font-medium text-[#1E3A5F]"
          >
            Navigation Links
            <ChevronDown className={cn('h-4 w-4 transition-transform', mobileAccordionOpen ? 'rotate-180' : '')} />
          </button>

          {mobileAccordionOpen && (
            <div className="mt-3 space-y-1">
              {links.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap] || Package;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="h-4 w-4 text-[#0EA5E9]" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          )}

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button variant="outline" className="border-[#1E3A5F] text-[#1E3A5F]">
              Track
            </Button>
            <Button className="bg-[#0EA5E9] text-white">Get Quote</Button>
          </div>
        </div>
      )}
    </header>
  );
}

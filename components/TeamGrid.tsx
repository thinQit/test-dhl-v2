"use client";

import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

interface TeamGridProps {
  members?: TeamMember[];
  className?: string;
}

export default function TeamGrid({
  members = [
    { name: 'Elena Fischer', role: 'VP, Global Operations', bio: 'Leads cross-border delivery performance and hub optimization.', photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg' },
    { name: 'Marcus Reed', role: 'Director, Freight Solutions', bio: 'Designs multimodal freight programs for enterprise clients.', photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg' },
    { name: 'Nadia Khan', role: 'Head of Customer Experience', bio: 'Builds digital-first shipment visibility and support workflows.', photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577335/site-images/team-people/1181734.jpg' },
    { name: 'James Ortega', role: 'Customs Compliance Lead', bio: 'Ensures smooth customs processing across high-volume lanes.', photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577325/site-images/team-people/10347164.jpg' },
  ],
  className = '',
}: Partial<TeamGridProps>) {
  return (
    <section id="team" className={'bg-[#F8FAFC] py-20 md:py-24 ' + className}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">Leadership Team</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <Card key={member.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="overflow-hidden rounded-lg">
                <Image src={member.photo} alt={member.name} width={1200} height={800} className="h-52 w-full object-cover" unoptimized />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1E3A5F]">{member.name}</h3>
              <p className="text-sm text-[#0EA5E9]">{member.role}</p>
              <p className="mt-2 text-sm text-slate-600">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

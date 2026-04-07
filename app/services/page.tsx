export const dynamic = 'force-dynamic';

import { Silk } from 'reactbits'
import HeroSpotlight from '@/components/HeroSpotlight'
import FeaturesGrid from '@/components/FeaturesGrid'
import CTAVortex from '@/components/CTAVortex'

export default function ServicesPage() {
  return (
    <main>
      <section
        className="relative min-h-[80vh] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576911/site-images/corporate/11408874.jpg')",
        }}
      >
        <div className="absolute inset-0 z-0">
          <Silk color="#1E3A5F" speed={5} scale={1} noiseIntensity={1.5} />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 animate-fade-in-up">
          <HeroSpotlight
            title="Choose the right express service for every shipment"
            subtitle="Compare delivery options, add-ons, and customs support—built for business shipping across borders."
            primaryCta={{ label: 'Get pricing', href: '/pricing' }}
            secondaryCta={{ label: 'Track a shipment', href: '/tracking' }}
          />
        </div>
      </section>

      <section className="animate-fade-in-up bg-background py-20 md:py-24">
        <FeaturesGrid
          badge="Service Levels"
          headline="Service levels and add-ons"
          subheadline="Build a shipment plan that matches your urgency, value, and compliance needs."
          features={[
            { icon: 'Plane', title: 'Express Worldwide', description: 'Time-definite international delivery with end-to-end tracking for parcels and documents.' },
            { icon: 'Clock', title: 'Express 12:00', description: 'Delivery by midday in select destinations for urgent B2B shipments.' },
            { icon: 'FileCheck', title: 'Customs & documentation support', description: 'Reduce delays by preparing accurate commercial invoices and commodity details.' },
            { icon: 'Package', title: 'Pickup scheduling', description: 'Arrange on-demand pickups and align cutoff times with your warehouse workflow.' },
          ]}
        />
      </section>

      <section className="animate-fade-in-up bg-muted py-20 md:py-24">
        <CTAVortex
          title="Not sure which service fits?"
          subtitle="Tell us your origin, destination, and timeline. We’ll recommend the best option for speed and cost."
          ctaLabel="Talk to a specialist"
          ctaHref="/contact"
          secondaryCtaLabel="View pricing"
          secondaryCtaHref="/pricing"
        />
      </section>
    </main>
  )
}

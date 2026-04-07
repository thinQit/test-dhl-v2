export const dynamic = 'force-dynamic';

import { Silk } from 'reactbits'
import HeroSpotlight from '@/components/HeroSpotlight'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import CTAVortex from '@/components/CTAVortex'

export default function CaseStudiesPage() {
  return (
    <main>
      <section
        className="relative min-h-[80vh] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576864/site-images/corporate/1181344.jpg')",
        }}
      >
        <div className="absolute inset-0 z-0">
          <Silk color="#1E3A5F" speed={5} scale={1} noiseIntensity={1.5} />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 animate-fade-in-up">
          <HeroSpotlight
            title="Case studies: shipping performance in practice"
            subtitle="See how businesses reduce exceptions, improve ETAs, and scale cross-border operations with better visibility and documentation."
            primaryCta={{ label: 'Request a quote', href: '/pricing#quote' }}
            secondaryCta={{ label: 'Contact', href: '/contact' }}
          />
        </div>
      </section>

      <section className="animate-fade-in-up bg-background py-20 md:py-24">
        <CaseStudiesSection />
      </section>
      <section className="animate-fade-in-up bg-muted py-20 md:py-24">
        <CTAVortex
          title="Want results like these?"
          subtitle="We’ll review your lanes and shipment profile and recommend the best service mix."
          ctaLabel="Get a shipping assessment"
          ctaHref="/contact"
          secondaryCtaLabel="Pricing"
          secondaryCtaHref="/pricing"
        />
      </section>
    </main>
  )
}

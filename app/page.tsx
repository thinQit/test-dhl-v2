export const dynamic = 'force-dynamic';

import { Silk } from 'reactbits'
import HeroSpotlight from '@/components/HeroSpotlight'
import ServicesGrid from '@/components/ServicesGrid'
import AboutSection from '@/components/AboutSection'
import TeamGrid from '@/components/TeamGrid'
import TestimonialsGrid from '@/components/TestimonialsGrid'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import CTABanner from '@/components/CTABanner'
import ContactSection from '@/components/ContactSection'
import ScrollReveal from '@/components/ScrollReveal'

export default function HomePage() {
  return (
    <main>
      <section
        className="relative min-h-[80vh] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576895/site-images/corporate/10041266.jpg')",
        }}
      >
        <div className="absolute inset-0 z-0">
          <Silk color="#1E3A5F" speed={5} scale={1} noiseIntensity={1.5} />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 animate-fade-in-up">
          <HeroSpotlight
            title="Express shipping built for businesses that can’t wait"
            subtitle="Book international shipments, get transparent rates, and track deliveries in real time—backed by a global air network and proactive customs support."
            primaryCta={{ label: 'Track a shipment', href: '/tracking' }}
            secondaryCta={{ label: 'Get pricing', href: '/pricing' }}
          />
        </div>
      </section>

      <div className="animate-fade-in-up bg-background py-20 md:py-24">
        <ServicesGrid />
      </div>
      <div className="animate-fade-in-up bg-muted py-20 md:py-24">
        <AboutSection />
      </div>
      <div className="animate-fade-in-up bg-background py-20 md:py-24">
        <TeamGrid />
      </div>
      <div className="animate-fade-in-up bg-muted py-20 md:py-24">
        <TestimonialsGrid />
      </div>
      <div className="animate-fade-in-up bg-background py-20 md:py-24">
        <CaseStudiesSection />
      </div>
      <div className="animate-fade-in-up bg-primary py-20 md:py-24">
        <CTABanner />
      </div>
      <div className="animate-fade-in-up bg-muted py-20 md:py-24">
        <ContactSection />
      </div>
      <ScrollReveal />
    </main>
  )
}

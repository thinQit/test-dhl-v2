export const dynamic = 'force-dynamic';

import { Silk } from 'reactbits'
import HeroSpotlight from '@/components/HeroSpotlight'
import ContactSection from '@/components/ContactSection'

export default function ContactPage() {
  return (
    <main>
      <section
        className="relative min-h-[80vh] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576881/site-images/corporate/11901335.jpg')",
        }}
      >
        <div className="absolute inset-0 z-0">
          <Silk color="#1E3A5F" speed={5} scale={1} noiseIntensity={1.5} />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 animate-fade-in-up">
          <HeroSpotlight
            title="Talk to a shipping specialist"
            subtitle="Get help with service selection, documentation, pickups, and business pricing—so your shipments move without surprises."
            primaryCta={{ label: 'Send an inquiry', href: '#contact-form' }}
            secondaryCta={{ label: 'Track a shipment', href: '/tracking' }}
          />
        </div>
      </section>

      <section className="animate-fade-in-up bg-background py-20 md:py-24">
        <ContactSection />
      </section>
    </main>
  )
}

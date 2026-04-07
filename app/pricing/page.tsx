export const dynamic = 'force-dynamic';

import { Silk } from 'reactbits'
import HeroSpotlight from '@/components/HeroSpotlight'
import PricingTable from '@/components/PricingTable'
import ContactForm from '@/components/ContactForm'

export default function PricingPage() {
  return (
    <main>
      <section
        className="relative min-h-[80vh] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576857/site-images/corporate/1181408.jpg')",
        }}
      >
        <div className="absolute inset-0 z-0">
          <Silk color="#1E3A5F" speed={5} scale={1} noiseIntensity={1.5} />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 animate-fade-in-up">
          <HeroSpotlight
            title="Transparent pricing for business shipping"
            subtitle="Estimate costs by service level and shipment profile. Request a tailored quote for your lanes and volume."
            primaryCta={{ label: 'Request a quote', href: '#quote' }}
            secondaryCta={{ label: 'Compare services', href: '/services' }}
          />
        </div>
      </section>

      <section className="animate-fade-in-up bg-background py-20 md:py-24" id="quote">
        <PricingTable
          headline="Service-based estimates"
          subheadline="Simple starting points for common business shipments. Get an exact quote for your lane and volume."
          tiers={[
            { name: 'Documents', price: '$49+', period: 'per shipment', description: 'Time-definite delivery for contracts, invoices, and critical paperwork.', features: ['Tracking + delivery confirmation', 'Door-to-door service', 'Paperwork guidance'], ctaLabel: 'Quote documents', ctaHref: '#quote' },
            { name: 'Parcels (0–5 kg)', price: '$89+', period: 'per shipment', description: 'Express parcels for samples, spare parts, and small goods.', features: ['End-to-end tracking', 'Customs support', 'Pickup options'], ctaLabel: 'Quote parcels', ctaHref: '#quote', highlighted: true },
            { name: 'Business Volume', price: 'Custom', period: 'contract rates', description: 'Optimized rates for recurring lanes and higher monthly volume.', features: ['Lane-based pricing', 'Account support', 'Operational onboarding'], ctaLabel: 'Request contract rates', ctaHref: '#quote' },
          ]}
        />
      </section>

      <section className="animate-fade-in-up bg-muted py-20 md:py-24">
        <ContactForm
          headline="Request a tailored business quote"
          subheadline="Share your lanes and monthly volume. We’ll respond with recommended services and pricing options."
          contactInfo={[
            { icon: 'Phone', label: 'Sales phone', value: '+1 (212) 555-0199' },
            { icon: 'Mail', label: 'Email', value: 'business@dhl-express.example' },
            { icon: 'Clock', label: 'Response time', value: 'Within 1 business day' },
          ]}
        />
      </section>
    </main>
  )
}

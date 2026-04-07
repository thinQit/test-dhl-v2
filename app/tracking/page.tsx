export const dynamic = 'force-dynamic';

import { Silk } from 'reactbits'
import HeroSpotlight from '@/components/HeroSpotlight'
import TrackingForm from '@/components/TrackingForm'
import FeaturesGrid from '@/components/FeaturesGrid'

export default function TrackingPage() {
  return (
    <main>
      <section
        className="relative min-h-[80vh] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576902/site-images/corporate/15371559.jpg')",
        }}
      >
        <div className="absolute inset-0 z-0">
          <Silk color="#1E3A5F" speed={5} scale={1} noiseIntensity={1.5} />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 animate-fade-in-up">
          <HeroSpotlight
            title="Track your shipment in seconds"
            subtitle="Enter your tracking number to see the latest scan events, delivery status, and exceptions."
            primaryCta={{ label: 'Track now', href: '#tracking-form' }}
            secondaryCta={{ label: 'Get help with tracking', href: '/contact' }}
          />
        </div>
      </section>

      <section className="animate-fade-in-up bg-background py-20 md:py-24">
        <TrackingForm />
      </section>

      <section className="animate-fade-in-up bg-muted py-20 md:py-24">
        <FeaturesGrid
          badge="Tracking FAQs"
          headline="Tracking FAQs"
          subheadline="Common questions about scan events, ETAs, and delivery confirmation."
          features={[
            { icon: 'HelpCircle', title: 'Why did my shipment status stop updating?', description: 'Tracking updates appear when a shipment receives a scan event. If there are no updates for 24–48 hours, contact support.' },
            { icon: 'FileSearch', title: 'What does “Clearance event” mean?', description: 'It indicates the shipment is undergoing customs processing. Additional documentation may be required.' },
            { icon: 'MapPin', title: 'Can I change the delivery address?', description: 'In many cases, delivery instructions can be updated before final-mile handoff. Contact support quickly.' },
          ]}
        />
      </section>
    </main>
  )
}

export const dynamic = 'force-dynamic';

import { Silk } from 'reactbits'
import HeroSpotlight from '@/components/HeroSpotlight'
import AboutSection from '@/components/AboutSection'
import TeamGrid from '@/components/TeamGrid'
import CTABanner from '@/components/CTABanner'

export default function AboutPage() {
  return (
    <main>
      <section
        className="relative min-h-[80vh] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576898/site-images/corporate/12912160.jpg')",
        }}
      >
        <div className="absolute inset-0 z-0">
          <Silk color="#1E3A5F" speed={5} scale={1} noiseIntensity={1.5} />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 animate-fade-in-up">
          <HeroSpotlight
            title="A logistics partner built for speed and accountability"
            subtitle="We help businesses ship internationally with clear service levels, proactive tracking, and support that reduces customs friction."
            primaryCta={{ label: 'Explore services', href: '/services' }}
            secondaryCta={{ label: 'Contact', href: '/contact' }}
          />
        </div>
      </section>

      <section className="animate-fade-in-up bg-background py-20 md:py-24">
        <AboutSection />
      </section>
      <section className="animate-fade-in-up bg-muted py-20 md:py-24">
        <TeamGrid />
      </section>
      <section className="animate-fade-in-up bg-primary py-20 md:py-24">
        <CTABanner />
      </section>
    </main>
  )
}

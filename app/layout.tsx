import './globals.css'
import { Inter, IBM_Plex_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-ibm-plex-sans',
})

export const metadata = {
  title: 'DHL Express Logistics | Shipping, Tracking, Pricing & Business Support',
  description:
    'Express shipping for businesses: compare services, track shipments in real time, estimate pricing, and contact a specialist for customs and delivery support.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexSans.variable}`}>
      <body className="bg-background text-foreground antialiased font-sans">
        <Navbar
          logo="DHL Express Logistics"
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Tracking', href: '/tracking' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'About', href: '/about' },
            { label: 'Case Studies', href: '/case-studies' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Get Quote"
          ctaHref="/pricing#quote"
        />
        {children}
        <Footer
          brand="DHL Express Logistics"
          description="Express shipping solutions for modern businesses—tracking, pricing, and support in one place."
          columns={[
            {
              title: 'Services',
              links: [
                { label: 'Express Worldwide', href: '/services#express-worldwide' },
                { label: 'Customs support', href: '/services#customs' },
                { label: 'Pickups', href: '/services#pickups' },
              ],
            },
            {
              title: 'Tools',
              links: [
                { label: 'Tracking', href: '/tracking' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Shipping checklist', href: '/resources/shipping-checklist' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'About', href: '/about' },
                { label: 'Case studies', href: '/case-studies' },
                { label: 'Contact', href: '/contact' },
              ],
            },
          ]}
          copyright="© 2026 DHL Express Logistics. This is a demo website blueprint for a DHL Express-style business shipping site."
        />
      </body>
    </html>
  )
}

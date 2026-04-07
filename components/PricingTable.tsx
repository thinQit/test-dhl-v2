'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

interface PricingTableProps {
  headline: string;
  subheadline?: string;
  tiers: PricingTier[];
}

export default function PricingTable({
  headline = 'Flexible Plans for Teams of Every Size',
  subheadline = 'Choose the engagement model that fits your business priorities and growth stage.',
  tiers = [],
}: Partial<PricingTableProps>) {
  return (
    <section className="py-20 md:py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="animate-fade-in-up mt-16 grid gap-8 md:grid-cols-3">
          {tiers.map(function (tier, i) {
            return (
              <Card
                key={i}
                className={
                  'card-hover relative flex flex-col transition-all duration-200 ' +
                  (tier.highlighted ? 'border-primary ring-2 ring-primary scale-105' : 'border-border')
                }
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">/{tier.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map(function (feature, j) {
                      return (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full transition-all duration-200 hover:scale-105" variant={tier.highlighted ? 'default' : 'outline'} asChild>
                    <a href={tier.ctaHref}>{tier.ctaLabel}</a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

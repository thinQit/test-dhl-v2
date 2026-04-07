import { z } from "zod";

export const contactTopics = [
  "Business pricing",
  "Pickup scheduling",
  "Customs documentation",
  "Tracking support",
  "Other",
] as const;

export const shipmentTypes = [
  "Documents",
  "Parcels",
  "Medical / Temperature-sensitive",
  "High-value goods",
  "Other",
] as const;

export const monthlyVolumes = ["1–10", "11–50", "51–200", "201–1000", "1000+"] as const;

export const avgWeights = ["Under 0.5 kg", "0.5–2 kg", "2–5 kg", "5–20 kg", "20+ kg"] as const;

export const contactSchema = z.object({
  fullName: z.string().min(2).max(120),
  company: z.string().min(2).max(160),
  email: z.string().email().max(254),
  topic: z.enum(contactTopics),
  message: z.string().min(10).max(5000),
});

export const homeContactSchema = z.object({
  fullName: z.string().min(2).max(120),
  company: z.string().min(2).max(160),
  email: z.string().email().max(254),
  phone: z.string().max(40).optional(),
  shipmentType: z.enum(shipmentTypes),
  originCountry: z.string().min(2).max(120),
  destinationCountry: z.string().min(2).max(120),
  monthlyVolume: z.enum(monthlyVolumes),
  message: z.string().min(10).max(5000),
});

export const quoteSchema = z.object({
  fullName: z.string().min(2).max(120),
  company: z.string().min(2).max(160),
  email: z.string().email().max(254),
  origin: z.string().min(2).max(160),
  destinations: z.string().min(2).max(500),
  avgWeight: z.enum(avgWeights),
  monthlyVolume: z.enum(monthlyVolumes),
  notes: z.string().max(5000).optional(),
});

export const trackSchema = z.object({
  trackingNumbers: z
    .array(z.string().trim().min(10).max(30))
    .min(1)
    .max(10)
    .optional(),
  trackingNumber: z.string().trim().min(10).max(30).optional(),
  raw: z.string().max(1000).optional(),
});

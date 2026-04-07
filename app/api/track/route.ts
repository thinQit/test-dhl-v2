import { NextResponse } from "next/server";
import { trackSchema } from "@/lib/validators";
import { getClientIp, rateLimitByKey } from "@/lib/rate-limit";

const MAX_REQUESTS = 20;
const WINDOW_MS = 60_000;

type TrackingEvent = {
  time: string;
  date: string;
  location: string;
  description: string;
};

type TrackingResult = {
  trackingNumber: string;
  status: "Out for delivery" | "In transit" | "Delivered" | "Clearance event";
  estimatedDelivery: string;
  events: TrackingEvent[];
  exceptionNote?: string;
};

function normalizeTrackingNumbers(input: {
  trackingNumbers?: string[];
  trackingNumber?: string;
  raw?: string;
}): string[] {
  const list = new Set<string>();

  if (input.trackingNumbers?.length) {
    for (const n of input.trackingNumbers) list.add(n.trim());
  }

  if (input.trackingNumber) {
    list.add(input.trackingNumber.trim());
  }

  if (input.raw) {
    const split = input.raw
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);
    for (const n of split) list.add(n);
  }

  return [...list];
}

function mockTracking(number: string): TrackingResult {
  return {
    trackingNumber: number,
    status: "Out for delivery",
    estimatedDelivery: "Today by 6:00 PM",
    events: [
      {
        time: "08:12",
        date: "2026-04-07",
        location: "New York, NY",
        description: "Out for delivery",
      },
      {
        time: "05:46",
        date: "2026-04-07",
        location: "New York, NY",
        description: "Arrived at delivery facility",
      },
      {
        time: "22:18",
        date: "2026-04-06",
        location: "Cincinnati, OH",
        description: "Departed facility",
      },
      {
        time: "16:03",
        date: "2026-04-06",
        location: "Cincinnati, OH",
        description: "Processed at facility",
      },
    ],
    exceptionNote:
      "If your shipment shows an exception, contact support with your tracking number and commercial invoice details.",
  };
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rate = rateLimitByKey(`track:${ip}`, MAX_REQUESTS, WINDOW_MS);

    if (!rate.allowed) {
      return NextResponse.json(
        { success: false, error: "Too many tracking requests. Please try again shortly." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const parsed = trackSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid payload", issues: parsed.error.issues },
        { status: 400 },
      );
    }

    const numbers = normalizeTrackingNumbers(parsed.data).filter(
      (n) => n.length >= 10 && n.length <= 30,
    );

    if (numbers.length === 0) {
      return NextResponse.json(
        { success: false, error: "Provide at least one valid tracking number." },
        { status: 400 },
      );
    }

    if (numbers.length > 10) {
      return NextResponse.json(
        { success: false, error: "Maximum 10 tracking numbers per request." },
        { status: 400 },
      );
    }

    const results = numbers.map((n) => mockTracking(n));

    return NextResponse.json({ success: true, results }, { status: 200 });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("POST /api/track error:", error);
    return NextResponse.json(
      { success: false, error: "Unexpected server error." },
      { status: 500 },
    );
  }
}

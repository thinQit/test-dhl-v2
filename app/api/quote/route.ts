import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validators";
import { getClientIp, rateLimitByKey } from "@/lib/rate-limit";

const MAX_REQUESTS = 5;
const WINDOW_MS = 60_000;

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rate = rateLimitByKey(`quote:${ip}`, MAX_REQUESTS, WINDOW_MS);

    if (!rate.allowed) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again shortly." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const parsed = quoteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid payload", issues: parsed.error.issues },
        { status: 400 },
      );
    }

    // TODO: Forward to CRM/email webhook.
    // eslint-disable-next-line no-console
    console.log("[quote_submission]", parsed.data);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thanks—your quote request has been submitted. A business specialist will contact you within 1 business day.",
      },
      { status: 200 },
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("POST /api/quote error:", error);
    return NextResponse.json(
      { success: false, error: "Unexpected server error." },
      { status: 500 },
    );
  }
}

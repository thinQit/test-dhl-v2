import { NextResponse } from "next/server";
import { contactSchema, homeContactSchema } from "@/lib/validators";
import { getClientIp, rateLimitByKey } from "@/lib/rate-limit";

const MAX_REQUESTS = 5;
const WINDOW_MS = 60_000;

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rate = rateLimitByKey(`contact:${ip}`, MAX_REQUESTS, WINDOW_MS);

    if (!rate.allowed) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again shortly." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
    const parsedHome = homeContactSchema.safeParse(body);

    if (!parsed.success && !parsedHome.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid payload",
          issues: [...parsed.error.issues, ...parsedHome.error.issues],
        },
        { status: 400 },
      );
    }

    const payload = parsed.success ? parsed.data : parsedHome.data;

    // TODO: Integrate email provider (e.g., Resend) or CRM webhook here.
    // eslint-disable-next-line no-console
    console.log("[contact_submission]", payload);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thanks—your request has been received. A DHL Express business specialist will contact you within 1 business day.",
      },
      { status: 200 },
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("POST /api/contact error:", error);
    return NextResponse.json(
      { success: false, error: "Unexpected server error." },
      { status: 500 },
    );
  }
}

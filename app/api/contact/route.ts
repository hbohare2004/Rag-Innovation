import { NextResponse } from "next/server";
import { Resend } from "resend";

// Helper function to format greeting based on name
function getGreeting(name?: string): string {
  if (!name) return "Dear Sir / Madam,";
  const trimmed = name.trim();
  if (!trimmed) return "Dear Sir / Madam,";
  return `Dear ${trimmed},`;
}

// Basic email validation regex
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// HTML Template Builder
function buildHtmlEmail(greeting: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Reaching Out - Rag Innovations</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #1f2937;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f6f8; padding: 40px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); border: 1px solid #e5e7eb;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); padding: 32px 30px; text-align: center; border-bottom: 4px solid #16a34a;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; tracking-style: 0.5px;">
                Rag Innovations
              </h1>
              <p style="margin: 6px 0 0 0; color: #16a34a; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px;">
                Menstrual Hygiene &amp; Manufacturing Solutions
              </p>
            </td>
          </tr>

          <!-- Email Content Body -->
          <tr>
            <td style="padding: 36px 32px; font-size: 15px; line-height: 1.7; color: #374151;">
              <p style="margin: 0 0 20px 0; font-size: 16px; font-weight: 600; color: #111827;">
                ${greeting}
              </p>
              
              <p style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #16a34a;">
                Welcome to Rag Innovations!
              </p>
              
              <p style="margin: 0 0 16px 0;">
                Thank you for reaching out to us. We truly appreciate your interest and look forward to assisting you.
              </p>
              
              <p style="margin: 0 0 20px 0;">
                We have received your enquiry. Our team will get back to you shortly.
              </p>
              
              <!-- Callout Info Box -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 6px; margin: 24px 0;">
                <tr>
                  <td style="padding: 16px 20px; font-size: 14px; color: #166534;">
                    For immediate assistance, please call us at 
                    <a href="tel:+919425128596" style="color: #16a34a; font-weight: 700; text-decoration: underline;">
                      +91 94251 28596
                    </a>.
                  </td>
                </tr>
              </table>

              <p style="margin: 28px 0 0 0; color: #4b5563;">
                With warm regards,<br>
                <strong style="color: #111827;">Team Rag Innovations</strong>
              </p>
            </td>
          </tr>

          <!-- Footer Section -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 32px; border-top: 1px solid #f3f4f6; text-align: left; font-size: 13px; color: #6b7280; line-height: 1.6;">
              <p style="margin: 0 0 4px 0; font-weight: 700; color: #1f2937;">
                Rag Innovations
              </p>
              <p style="margin: 0 0 8px 0; color: #4b5563;">
                Menstrual Hygiene &amp; Manufacturing Solutions
              </p>
              <p style="margin: 0 0 4px 0;">
                📞 Phone: 
                <a href="tel:+919425128596" style="color: #16a34a; text-decoration: none; font-weight: 600;">
                  +91 94251 28596
                </a>
              </p>
              <p style="margin: 0;">
                🌐 Website: 
                <a href="https://raginnovations.com" target="_blank" style="color: #16a34a; text-decoration: none; font-weight: 600;">
                  raginnovations.com
                </a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// Plain Text Builder
function buildPlainTextEmail(greeting: string): string {
  return `${greeting}

Welcome to Rag Innovations!

Thank you for reaching out to us. We truly appreciate your interest and look forward to assisting you.

We have received your enquiry. Our team will get back to you shortly.

For immediate assistance, please call us at +91 94251 28596.

With warm regards,
Team Rag Innovations

Rag Innovations
Menstrual Hygiene & Manufacturing Solutions
+91 94251 28596
raginnovations.com`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !isValidEmail(email.trim())) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const recipientEmail = email.trim();
    const sender = process.env.SENDER_EMAIL || "Rag Innovations <onboarding@resend.dev>";
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey || apiKey === "your_resend_api_key") {
      console.warn("RESEND_API_KEY is missing or unconfigured.");
      return NextResponse.json(
        {
          success: false,
          error: "Resend API key is not configured. Please set RESEND_API_KEY in environment variables.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const greeting = getGreeting(name);
    const htmlContent = buildHtmlEmail(greeting);
    const textContent = buildPlainTextEmail(greeting);

    // Dispatch email via Resend
    const { data, error } = await resend.emails.send({
      from: sender,
      to: recipientEmail,
      subject: "Thank you for reaching out to Rag Innovations",
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        {
          success: false,
          error: error.message || "Failed to send thank-you email via Resend.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank-you email sent successfully.",
      id: data?.id,
    });
  } catch (err: unknown) {
    console.error("Contact API route error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { company } from "@/lib/data";

/**
 * Contact Form API Route
 *
 * Sends contact form submissions via email using Resend.
 * Make sure to set RESEND_API_KEY in your environment variables.
 */
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company: companyName, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const emailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-top: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              ${
                companyName
                  ? `<p><strong>Company:</strong> ${companyName}</p>`
                  : ""
              }
              <p><strong>Message:</strong></p>
              <div style="background-color: white; padding: 15px; border-left: 3px solid #007bff; margin-top: 10px;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">
              This message was sent from the contact form on ${
                company.name
              } website.
            </p>
          </div>
        `;

        const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${companyName ? `Company: ${companyName}` : ""}

Message:
${message}

---
This message was sent from the contact form on ${company.name} website.
        `;

        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
          to: company.email,
          replyTo: email,
          subject: `New inquiry from ${name}${
            companyName ? ` (${companyName})` : ""
          }`,
          html: emailHtml,
          text: emailText,
        });

        console.log("Email sent successfully to:", company.email);
      } catch (emailError: any) {
        console.error("Resend email error:", emailError);
        // Log the error but don't fail the request if email fails
        // In production, you might want to queue this or use a fallback
        return NextResponse.json(
          {
            error: "Failed to send email. Please try again later.",
            details:
              process.env.NODE_ENV === "development"
                ? emailError.message
                : undefined,
          },
          { status: 500 }
        );
      }
    } else {
      // If RESEND_API_KEY is not set, log to console (for development)
      console.log("Contact form submission (RESEND_API_KEY not set):", {
        name,
        email,
        company: companyName,
        message,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We will be in touch soon!",
    });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

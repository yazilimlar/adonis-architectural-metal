import { NextResponse } from "next/server";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const inquiry = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    projectType: String(formData.get("projectType") || "Not specified").trim(),
    message: String(formData.get("message") || "").trim(),
  };

  if (!inquiry.name || !inquiry.email || !inquiry.message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const recipient = process.env.QUOTE_RECIPIENT_EMAIL || "gokmenoktem@gmail.com";
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.QUOTE_FROM_EMAIL || "Adonis Website <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("Adonis inquiry email is not configured: RESEND_API_KEY is missing.", {
      recipient,
      inquiry,
    });
    return NextResponse.redirect(
      new URL("/?submitted=0&reason=email-not-configured#contact", request.url),
      303,
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      reply_to: inquiry.email,
      subject: `Adonis quote request — ${inquiry.projectType}`,
      html: `
        <h1>New Adonis quote request</h1>
        <p><strong>Name:</strong> ${escapeHtml(inquiry.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(inquiry.email)}</p>
        <p><strong>Project type:</strong> ${escapeHtml(inquiry.projectType)}</p>
        <p><strong>Project details:</strong></p>
        <p>${escapeHtml(inquiry.message).replaceAll("\n", "<br />")}</p>
      `,
      text: [
        "New Adonis quote request",
        `Name: ${inquiry.name}`,
        `Email: ${inquiry.email}`,
        `Project type: ${inquiry.projectType}`,
        "Project details:",
        inquiry.message,
      ].join("\n\n"),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Adonis inquiry email delivery failed.", {
      status: response.status,
      detail,
      recipient,
    });
    return NextResponse.redirect(
      new URL("/?submitted=0&reason=email-delivery-failed#contact", request.url),
      303,
    );
  }

  console.info("Adonis inquiry email delivered.", { recipient });
  return NextResponse.redirect(new URL("/?submitted=1#contact", request.url), 303);
}

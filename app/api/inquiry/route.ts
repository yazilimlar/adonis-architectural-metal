import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const inquiry = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    projectType: String(formData.get("projectType") || ""),
    message: String(formData.get("message") || "")
  };

  if (!inquiry.name || !inquiry.email || !inquiry.message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // Phase 2: persist to CRM/database and send email notification.
  console.info("New Adonis inquiry", inquiry);
  return NextResponse.redirect(new URL("/?submitted=1#contact", request.url), 303);
}

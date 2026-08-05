import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const sentAt = new Date().toLocaleString("en-GB", { dateStyle: "long", timeStyle: "short" });

  try {
    const { data, error } = await resend.emails.send({
      from: "Maison Motion Studio <noreply@maisonmotionstudio.com>",
      to: siteConfig.email,
      replyTo: email,
      subject: "New enquiry from Maison Motion Studio website",
      text: `Name: ${name}
Email: ${email}
Subject: ${subject || "-"}
Date: ${sentAt}

Message:
${message}`,
    });

    if (error || !data) {
      return NextResponse.json({ error: error?.message ?? "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}

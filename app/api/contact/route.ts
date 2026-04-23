import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  gdpr?: string;
};

function validEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Nesprávny formát požiadavky." }, { status: 400 });
  }

  const { name, email, phone, service, message, gdpr } = body;

  if (!name || name.trim().length < 2) {
    return NextResponse.json({ error: "Prosím zadajte meno." }, { status: 400 });
  }
  if (!email || !validEmail(email)) {
    return NextResponse.json({ error: "Zadajte platný e-mail." }, { status: 400 });
  }
  if (!phone || phone.trim().length < 6) {
    return NextResponse.json({ error: "Zadajte platný telefón." }, { status: 400 });
  }
  if (!service) {
    return NextResponse.json({ error: "Vyberte službu." }, { status: 400 });
  }
  if (!gdpr) {
    return NextResponse.json({ error: "Je potrebný súhlas so spracovaním údajov." }, { status: 400 });
  }

  const submission = {
    at: new Date().toISOString(),
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    service,
    message: (message ?? "").trim()
  };

  // In production, connect this to Resend / SendGrid / SMTP.
  // For now we log to server so deployments keep a record in Vercel logs.
  console.log("[MORAK contact]", submission);

  return NextResponse.json({ ok: true });
}

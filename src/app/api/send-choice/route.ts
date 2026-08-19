import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { siteConfig } from '../../../config/site.config';



export async function POST(request: NextRequest) {
  try {

    if (!process.env.RESEND_API_KEY) {
      console.error('Email send error: RESEND_API_KEY is not set');
      return NextResponse.json(
        { ok: false, error: 'Email sending is not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { email, dateTitle, dateDescription, isCustom } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { ok: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Birthday <noreply@yourdomain.com>',
      to: [process.env.TO_EMAIL || siteConfig.yourEmail],
      subject: `🎂 Birthday Date Choice from ${siteConfig.partnerName}`,
      html: `
        <h1>🎂 Birthday Choice Received!</h1>
        <p><strong>From:</strong> ${siteConfig.partnerName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h2>Chosen Date: ${dateTitle}</h2>
        <p>${dateDescription || 'No description provided'}</p>
        ${isCustom ? '<p>✨ This is a custom date idea!</p>' : ''}
        <hr />
        <p>Reply to ${email} to confirm the date.</p>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Email send error:', error);
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
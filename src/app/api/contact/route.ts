import { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  const { name, email, subject, message } = await request.json()

  if (!name || !email || !subject || !message) {
    return Response.json({ error: 'All fields are required.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#0f0f0f;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f0f;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#171212;border-radius:12px;overflow:hidden;border:1px solid rgba(236,224,223,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1e0a0a 0%,#2a0d0d 100%);padding:36px 40px;border-bottom:1px solid rgba(141,2,31,0.3);">
            <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.5em;text-transform:uppercase;color:rgba(236,224,223,0.35);">// Portfolio Contact</p>
            <h1 style="margin:0;font-size:24px;font-weight:700;color:#ece0df;letter-spacing:-0.02em;">New Message</h1>
          </td>
        </tr>

        <!-- Sender info -->
        <tr>
          <td style="padding:32px 40px 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="50%" style="padding-right:8px;">
                  <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(236,224,223,0.35);">From</p>
                  <p style="margin:0;font-size:14px;color:#ece0df;font-weight:600;">${name}</p>
                </td>
                <td width="50%" style="padding-left:8px;">
                  <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(236,224,223,0.35);">Reply-to</p>
                  <p style="margin:0;font-size:14px;color:#ffb3b2;">${email}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Subject -->
        <tr>
          <td style="padding:20px 40px 0;">
            <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(236,224,223,0.35);">Subject</p>
            <p style="margin:0;font-size:16px;font-weight:600;color:#ece0df;">${subject}</p>
          </td>
        </tr>

        <!-- Divider -->
        <tr>
          <td style="padding:24px 40px 0;">
            <div style="height:1px;background:rgba(236,224,223,0.08);"></div>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding:24px 40px 32px;">
            <p style="margin:0 0 12px;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(236,224,223,0.35);">Message</p>
            <p style="margin:0;font-size:14px;line-height:1.8;color:rgba(236,224,223,0.8);white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#0f0f0f;padding:20px 40px;border-top:1px solid rgba(236,224,223,0.06);">
            <p style="margin:0;font-size:11px;color:rgba(236,224,223,0.25);text-align:center;">Sent via your portfolio contact form</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

  await transporter.sendMail({
    from: `"${name}" <${process.env.GMAIL_USER}>`,
    to: process.env.REDIRECT_GMAIL_USER,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
    html: htmlBody,
  })

  return Response.json({ ok: true })
}

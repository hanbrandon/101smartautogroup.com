import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, type, message, data } = body;

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'info@101smartautogroup.com';
    const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME || '101 Smart Auto Group';
    const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || BREVO_SENDER_EMAIL;

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not defined');
      return NextResponse.json({ error: 'Mail server configuration error' }, { status: 500 });
    }

    const emailContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: sans-serif; line-height: 1.6; color: #ffffff; background-color: #000000; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
            .card { background: #0a0a0a; border: 1px solid #1a1a1a; border-radius: 24px; padding: 40px; }
            .header { border-bottom: 1px solid #1a1a1a; padding-bottom: 24px; margin-bottom: 32px; }
            .tag { display: inline-block; padding: 4px 12px; background: #ff7a00; color: #ffffff; font-size: 10px; font-weight: bold; border-radius: 100px; text-transform: uppercase; letter-spacing: 0.1em; }
            .title { font-size: 24px; font-weight: 800; color: #ffffff; margin-top: 16px; }
            .section-title { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255,255,255,0.3); margin: 32px 0 16px 0; }
            .label { font-size: 10px; color: rgba(255,255,255,0.4); font-weight: bold; text-transform: uppercase; margin-bottom: 4px; }
            .value { font-size: 15px; color: #ffffff; font-weight: 500; }
            .message-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 20px; margin-top: 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="card">
              <div class="header">
                <span class="tag">New Inquiry</span>
                <h1 class="title">${type === 'new_car' ? 'New Car Inquiry' : 'Sell Your Car Inquiry'}</h1>
              </div>

              <div class="section-title">Customer Information</div>
              <div style="margin-bottom: 20px;">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              <div style="margin-bottom: 20px;">
                <div class="label">Email</div>
                <div class="value">${email}</div>
              </div>
              <div style="margin-bottom: 20px;">
                <div class="label">Phone</div>
                <div class="value">${phone}</div>
              </div>

              ${data ? `
                <div class="section-title">Details</div>
                <div class="message-box">
                  ${Object.entries(data).map(([key, val]) => `
                    <div style="margin-bottom: 8px;">
                      <span style="font-size: 9px; color: rgba(255,255,255,0.4); text-transform: uppercase; display: block; margin-bottom: 2px;">${key.replace(/([A-Z])/g, ' $1')}</span>
                      <span style="font-size: 13px; color: #ffffff; font-weight: 600;">${val}</span>
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              <div class="section-title">Message</div>
              <div class="message-box">${message || 'No message provided.'}</div>
            </div>
          </div>
        </body>
      </html>
    `;

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: BREVO_SENDER_NAME, email: BREVO_SENDER_EMAIL },
        to: [{ email: NOTIFICATION_EMAIL }],
        subject: `[101 Inquiry] ${type === 'new_car' ? 'New Car' : 'Sell Car'} from ${name}`,
        htmlContent: emailContent,
        replyTo: { email, name },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API Error:', errorData);
      return NextResponse.json({ error: 'Failed to send email' }, { status: response.status });
    }

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

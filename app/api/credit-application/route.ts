import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            firstName,
            lastName,
            email,
            phone,
            zipCode,
            applicationType,
            personalData,
            residenceHistory,
            workHistory,
            businessInfo,
            businessAddress,
            businessIncome,
            signature,
        } = body;

        const brevoApiKey = process.env.BREVO_API_KEY;
        const senderEmail = process.env.BREVO_SENDER_EMAIL || 'info@101smartautogroup.com';
        const senderName = process.env.BREVO_SENDER_NAME || '101 Smart Auto Group';
        const receiverEmail = process.env.NOTIFICATION_EMAIL || senderEmail;

        if (!brevoApiKey) {
            console.error('BREVO_API_KEY is missing');
            return NextResponse.json({ error: 'Email service configuration missing' }, { status: 500 });
        }

        let htmlContent = `
          <div style="font-family: sans-serif; max-width: 800px; margin: 0 auto; border: 1px solid #eee; padding: 20px; background: #000; color: #fff;">
            <h2 style="color: #ff7a00; border-bottom: 2px solid #ff7a00; padding-bottom: 10px;">New Pre-Approval Application</h2>
            <p><strong>Application Type:</strong> ${applicationType.toUpperCase()}</p>
            <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Zip Code:</strong> ${zipCode}</p>
        `;

        if (applicationType === 'personal') {
            htmlContent += `
              <h3 style="background: #111; padding: 10px; color: #ff7a00;">Personal Information</h3>
              <p><strong>SSN/ITIN:</strong> ${personalData?.ssn}</p>
              <p><strong>Employment:</strong> ${personalData?.employmentStatus}</p>
              <h3 style="background: #111; padding: 10px; color: #ff7a00;">Residence History</h3>
              ${residenceHistory.map((res: any) => `<p>${res.address}, ${res.city} (${res.years}y ${res.months}m) - $${res.amount}/mo</p>`).join('')}
            `;
        } else {
            htmlContent += `
              <h3 style="background: #111; padding: 10px; color: #ff7a00;">Business Information</h3>
              <p><strong>Legal Name:</strong> ${businessInfo.legalName}</p>
              <p><strong>Tax ID:</strong> ${businessInfo.taxId}</p>
              <p><strong>Monthly Profit:</strong> $${businessIncome.grossProfit}</p>
            `;
        }

        htmlContent += `<p><strong>Signature:</strong> ${signature}</p></div>`;

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'api-key': brevoApiKey,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                sender: { name: senderName, email: senderEmail },
                to: [{ email: receiverEmail }],
                subject: `[101 Credit App] ${firstName} ${lastName}`,
                htmlContent: htmlContent,
                replyTo: { email, name: `${firstName} ${lastName}` },
            }),
        });

        if (!response.ok) {
            const data = await response.json();
            console.error('Brevo API Error:', data);
            return NextResponse.json({ error: 'Failed to send application' }, { status: response.status });
        }

        return NextResponse.json({ message: 'Application sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Pre-approve API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

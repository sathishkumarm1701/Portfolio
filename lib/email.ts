import nodemailer, { Transporter } from 'nodemailer';

let transporter: Transporter | null = null;
let transporterPromise: Promise<Transporter | null> | null = null;

async function getTransporter(): Promise<Transporter | null> {
  // Return cached transporter if available
  if (transporter) return transporter;
  
  // If already creating, wait for it
  if (transporterPromise) return transporterPromise;

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('Email configuration incomplete. Emails will not be sent.');
    return null;
  }

  // Create transporter with connection pooling
  transporterPromise = Promise.resolve(
    nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      pool: {
        maxConnections: 5,
        maxMessages: 100,
        rateDelta: 2000,
        rateLimit: 5,
      },
      connectionTimeout: 5000,
      socketTimeout: 5000,
    } as any)
  );

  transporter = await transporterPromise;
  transporterPromise = null;
  return transporter;
}

export async function sendEmail(
  to: string,
  subject: string,
  html: string
): Promise<void> {
  const transporter = await getTransporter();
  
  if (!transporter) {
    console.warn('Email service not configured. Skipping email send.');
    return;
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      html,
    });
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
}

export async function sendContactConfirmation(
  email: string,
  name: string
): Promise<void> {
  const transporter = await getTransporter();
  
  if (!transporter) {
    console.warn('Email service not configured. Skipping confirmation email.');
    return;
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #333;">Thank you for reaching out, ${name}!</h2>
      <p style="color: #666; line-height: 1.6;">
        I've received your message and will get back to you as soon as possible.
      </p>
      <p style="color: #666; line-height: 1.6;">
        Best regards,<br>
        <strong>Sathish Kumar M</strong><br>
        React Native Developer | OTT & Fire TV Specialist
      </p>
    </div>
  `;

  try {
    await sendEmail(email, 'Message Received - Sathish Kumar M', html);
  } catch (error) {
    console.warn('Failed to send confirmation email:', error);
  }
}

export async function sendAdminNotification(
  name: string,
  email: string,
  subject: string,
  category: string,
  phone: string,
  message: string
): Promise<void> {
  const transporter = await getTransporter();
  
  if (!transporter) {
    console.warn('Email service not configured. Skipping admin notification.');
    return;
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <p style="color: #666;"><strong>Name:</strong> ${name}</p>
      <p style="color: #666;"><strong>Email:</strong> ${email}</p>
      ${phone ? `<p style="color: #666;"><strong>Phone:</strong> ${phone}</p>` : ''}
      <p style="color: #666;"><strong>Subject:</strong> ${subject}</p>
      <p style="color: #666;"><strong>Category:</strong> ${category}</p>
      <p style="color: #666;"><strong>Message:</strong></p>
      <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; color: #333;">
        ${message.replace(/\n/g, '<br>')}
      </div>
    </div>
  `;

  try {
    await sendEmail(
      process.env.SMTP_USER || '',
      `New Contact: ${subject} (${category})`,
      html
    );
  } catch (error) {
    console.warn('Failed to send admin notification:', error);
  }
}

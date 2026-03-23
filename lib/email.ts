import nodemailer from 'nodemailer';

let transporter: any = null;

function getTransporter() {
  if (transporter) return transporter;

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('Email configuration incomplete. Emails will not be sent.');
    return null;
  }

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

export async function sendEmail(
  to: string,
  subject: string,
  html: string
): Promise<void> {
  const transporter = getTransporter();
  
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
  const transporter = getTransporter();
  
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
  message: string
): Promise<void> {
  const transporter = getTransporter();
  
  if (!transporter) {
    console.warn('Email service not configured. Skipping admin notification.');
    return;
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <p style="color: #666;"><strong>Name:</strong> ${name}</p>
      <p style="color: #666;"><strong>Email:</strong> ${email}</p>
      <p style="color: #666;"><strong>Message:</strong></p>
      <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; color: #333;">
        ${message.replace(/\n/g, '<br>')}
      </div>
    </div>
  `;

  try {
    await sendEmail(
      process.env.SMTP_USER || '',
      `New Contact: ${name}`,
      html
    );
  } catch (error) {
    console.warn('Failed to send admin notification:', error);
  }
}

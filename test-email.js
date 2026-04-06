// Email Test Script - Run this to diagnose email issues
// Usage: node test-email.js

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('🔍 Testing Email Configuration...\n');

  // Check environment variables
  console.log('📋 Environment Variables:');
  console.log('SMTP_HOST:', process.env.SMTP_HOST || '❌ Missing');
  console.log('SMTP_PORT:', process.env.SMTP_PORT || '❌ Missing');
  console.log('SMTP_USER:', process.env.SMTP_USER || '❌ Missing');
  console.log('SMTP_PASS:', process.env.SMTP_PASS ? '✅ Set (hidden)' : '❌ Missing');
  console.log('SMTP_FROM:', process.env.SMTP_FROM || '❌ Missing');
  console.log('');

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('❌ Email configuration incomplete!');
    console.log('\nPlease set these in .env.local:');
    console.log('SMTP_HOST=smtp.gmail.com');
    console.log('SMTP_PORT=587');
    console.log('SMTP_USER=your-email@gmail.com');
    console.log('SMTP_PASS=your-app-password');
    console.log('SMTP_FROM=your-email@gmail.com');
    process.exit(1);
  }

  // Create transporter
  console.log('🔧 Creating email transporter...');
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    debug: true, // Enable debug output
    logger: true, // Log to console
  });

  // Verify connection
  console.log('🔌 Verifying SMTP connection...');
  try {
    await transporter.verify();
    console.log('✅ SMTP connection successful!\n');
  } catch (error) {
    console.error('❌ SMTP connection failed:');
    console.error(error.message);
    console.log('\n💡 Common issues:');
    console.log('1. App Password incorrect (check for spaces)');
    console.log('2. 2-Step Verification not enabled on Gmail');
    console.log('3. "Less secure app access" disabled');
    console.log('4. Wrong SMTP host or port');
    process.exit(1);
  }

  // Send test email
  console.log('📧 Sending test email...');
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_USER, // Send to yourself
      subject: 'Test Email from Portfolio Website',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #333;">✅ Email Configuration Working!</h2>
          <p style="color: #666;">
            Your portfolio contact form email is configured correctly.
          </p>
          <p style="color: #666;">
            Test sent at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('\n📬 Check your inbox:', process.env.SMTP_USER);
    console.log('\n✨ Email configuration is working correctly!');
  } catch (error) {
    console.error('❌ Failed to send test email:');
    console.error(error.message);
    console.log('\n💡 Troubleshooting:');
    console.log('1. Check Gmail App Password is correct');
    console.log('2. Remove any spaces from the password');
    console.log('3. Generate a new App Password if needed');
    console.log('4. Check Gmail security settings');
    process.exit(1);
  }
}

testEmail().catch(console.error);

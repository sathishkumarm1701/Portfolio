import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, getClientIP } from '@/lib/rateLimit';

// In-memory storage for development (replace with DB in production)
const messages: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIP(request);

    // Rate limiting
    if (!rateLimit(ip, 900000, 5)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email' },
        { status: 400 }
      );
    }

    // Try to save to database if MongoDB is configured
    let savedId = null;
    if (process.env.MONGODB_URI) {
      try {
        const { connectDB } = await import('@/lib/db');
        const Contact = (await import('@/lib/models/Contact')).default;
        
        await connectDB();
        const contact = await Contact.create({
          name,
          email,
          message,
          ipAddress: ip,
        });
        savedId = contact._id;
      } catch (dbError) {
        console.warn('Database save failed, using in-memory storage:', dbError);
        // Continue without database
      }
    }

    // Store in memory as fallback
    const messageData = {
      id: savedId || `msg_${Date.now()}`,
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      ipAddress: ip,
    };
    messages.push(messageData);

    // Try to send emails if configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const { sendContactConfirmation, sendAdminNotification } = await import('@/lib/email');
        await sendContactConfirmation(email, name);
        await sendAdminNotification(name, email, message);
        console.log('Emails sent successfully');
      } catch (emailError) {
        console.warn('Email sending skipped - not configured yet. See GMAIL_SETUP.md to enable.');
        // Don't fail the request if email fails
      }
    } else {
      console.log('Email notifications disabled - configure SMTP to enable');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully! Thank you for reaching out.',
        id: messageData.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Add authentication here in production
    const authHeader = request.headers.get('authorization');
    if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Try to fetch from database first
    if (process.env.MONGODB_URI) {
      try {
        const { connectDB } = await import('@/lib/db');
        const Contact = (await import('@/lib/models/Contact')).default;
        
        await connectDB();
        const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
        return NextResponse.json(contacts);
      } catch (dbError) {
        console.warn('Database fetch failed, returning in-memory messages:', dbError);
      }
    }

    // Return in-memory messages
    return NextResponse.json(messages.slice(-50).reverse());
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}

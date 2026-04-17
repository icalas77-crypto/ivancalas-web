import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate required fields
function validateFormData(data: ContactFormData): { valid: boolean; error?: string } {
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    return { valid: false, error: 'El nombre es requerido' };
  }

  if (!data.email || !isValidEmail(data.email)) {
    return { valid: false, error: 'Por favor ingresa un email válido' };
  }

  if (!data.phone || typeof data.phone !== 'string' || data.phone.trim().length === 0) {
    return { valid: false, error: 'El teléfono es requerido' };
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length === 0) {
    return { valid: false, error: 'El mensaje es requerido' };
  }

  if (data.message.length > 5000) {
    return { valid: false, error: 'El mensaje no puede exceder 5000 caracteres' };
  }

  return { valid: true };
}

// Create email transporter
function createTransporter() {
  // For development, use Ethereal Email (testing service)
  // For production, configure with real SMTP credentials
  if (process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // Fallback: configure with environment variables for common services
  // This is for development/testing only
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || '',
      pass: process.env.EMAIL_PASS || '',
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate form data
    const validation = validateFormData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = body;

    // Create transporter
    const transporter = createTransporter();

    // Verify connection (optional, can be slow)
    // await transporter.verify();

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FF6B35;">Nuevo contacto de ${name}</h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
        <p style="color: #666; font-size: 12px;">
          Este mensaje fue enviado desde el formulario de contacto de ivancalas.es
        </p>
      </div>
    `;

    const plainTextContent = `
Nuevo contacto de ${name}

Nombre: ${name}
Email: ${email}
Teléfono: ${phone}

Mensaje:
${message}

---
Este mensaje fue enviado desde el formulario de contacto de ivancalas.es
    `.trim();

    // Send email to owner
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER || 'noreply@ivancalas.es',
      to: process.env.EMAIL_TO || 'info@ivancalas.es',
      subject: `Nuevo contacto: ${name}`,
      html: htmlContent,
      text: plainTextContent,
      replyTo: email,
    });

    // Optional: Send confirmation email to user
    if (process.env.SEND_CONFIRMATION_EMAIL === 'true') {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM || process.env.EMAIL_USER || 'noreply@ivancalas.es',
        to: email,
        subject: 'Hemos recibido tu mensaje',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #FF6B35;">¡Gracias por contactarnos!</h2>
            <p>Hola ${escapeHtml(name)},</p>
            <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
            <p>Saludos,<br>Iván Calás</p>
          </div>
        `,
        text: `Hola ${name},\n\nHemos recibido tu mensaje y nos pondremos en contacto contigo pronto.\n\nSaludos,\nIván Calás`,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Mensaje enviado correctamente. Nos pondremos en contacto pronto.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    // Don't expose internal error details to client
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Detailed error:', errorMessage);

    return NextResponse.json(
      {
        error: 'Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo más tarde.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}

// Helper function to escape HTML entities
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido. Use POST.' },
    { status: 405 }
  );
}

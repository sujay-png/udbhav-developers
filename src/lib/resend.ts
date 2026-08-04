import { Resend } from 'resend';
import type { ContactFormPayload } from '../types/contact';

export async function sendContactEmail(payload: ContactFormPayload) {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const emailTo = import.meta.env.CONTACT_EMAIL_TO;
  const emailFrom = import.meta.env.CONTACT_EMAIL_FROM;

  if (!apiKey) {
    console.warn("RESEND_API_KEY is not set. Email will not be sent.");
    return { success: false, error: "Missing RESEND_API_KEY" };
  }
  
  if (!emailTo) {
    console.warn("CONTACT_EMAIL_TO is not set. Email will not be sent.");
    return { success: false, error: "Missing CONTACT_EMAIL_TO" };
  }

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: emailFrom || 'Acme <onboarding@resend.dev>',
      to: emailTo.split(','),
      subject: `New Enquiry from ${payload.name}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Phone:</strong> ${payload.phone}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Preferred Unit Type:</strong> ${payload.unitType || 'Not specified'}</p>
        <p><strong>Intended Use:</strong> ${payload.intent || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${payload.message || 'No message provided'}</p>
        <p><strong>WhatsApp Opt-in:</strong> ${payload.whatsappOptIn ? 'Yes' : 'No'}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}

import type { APIRoute } from 'astro';
import { validateContactForm } from '../../utils/validation';
import { sendContactEmail } from '../../lib/resend';
import { appendToGoogleSheet } from '../../lib/googleSheets';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // 1. Validate request
    const validation = validateContactForm(data);
    
    if (!validation.isValid || !validation.payload) {
      return new Response(JSON.stringify({ 
        success: false, 
        errors: validation.errors 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const payload = validation.payload;

    // 2. Run Google Sheet operation
    // Resend email integration commented out for now as requested
    const [sheetResult] = await Promise.all([
      // sendContactEmail(payload),
      appendToGoogleSheet(payload)
    ]);

    // If Google Sheets failed, return an error
    if (!sheetResult.success) {
       console.error("Google sheet integration failed.");
       return new Response(JSON.stringify({
         success: false,
         error: "Failed to process enquiry. Please try again later."
       }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    // 3. Return JSON success response
    return new Response(JSON.stringify({
      success: true,
      message: "Enquiry submitted successfully."
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("API route error:", error);
    return new Response(JSON.stringify({
      success: false,
      error: "Internal Server Error"
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

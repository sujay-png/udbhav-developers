import type { APIRoute } from 'astro';

export const prerender = false;

const GF_BASE = 'https://dashboard.udbhavdevelopers.com/wp-json/gf/v2/forms';

// ─── Verified Field ID Mappings ───────────────────────────────────
// Form 1 (Footer / Contact Us):
//   1=Name (text), 8=Email (email), 9=Phone (phone),
//   6=Subject (text), 7=Message (text), 10=CAPTCHA
//
// Form 2 (Popup Enquiry):
//   1.3=First Name, 1.6=Last Name,
//   3=Phone (phone), 4=Email (email), 10=Current City (text),
//   8=Preferred Unit Type (radio: 3BHK, 4BHK),
//   11=Intended Use (radio: Self Use, Investment),
//   12=Bank/Loan Pref (radio), 13=WhatsApp Consent (radio)
//
// Form 3 (Chinmaya Sidebar):
//   1.3=First Name, 1.6=Last Name,
//   3=Phone (phone), 4=Email (email), 5=Budget (text),
//   6=Preferred Unit Type (radio: 3 BHK, 4 BHK),
//   7=Intended Use (radio: Self-Use, Investment),
//   8=Bank/Loan Pref (radio), 9=WhatsApp Consent (radio)
// ──────────────────────────────────────────────────────────────────

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { formId, ...fields } = data;

    if (!formId) {
      return new Response(JSON.stringify({ success: false, error: 'Missing formId' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let gfPayload: Record<string, string> = {};

    if (formId === 1) {
      // Form 1: Footer / Contact Us
      gfPayload = {
        'input_1': fields.name || '',
        'input_8': fields.email || '',
        'input_9': fields.phone || '',
        'input_6': fields.subject || '',
        'input_7': fields.message || '',
      };
      // Only include captcha token if provided
      if (fields.recaptchaToken) {
        gfPayload['input_10'] = fields.recaptchaToken;
      }

    } else if (formId === 2) {
      // Form 2: Global Popup
      const firstName = fields.firstName || '';
      const lastName = fields.lastName || '';
      gfPayload = {
        'input_1.3': firstName,
        'input_1.6': lastName,
        'input_3': fields.phone || '',
        'input_4': fields.email || '',
        'input_10': fields.budget || fields.city || '',
      };
      // Radio fields — send the exact value text
      if (fields.bhk) gfPayload['input_8'] = fields.bhk;
      if (fields.intendedUse) gfPayload['input_11'] = fields.intendedUse;
      if (fields.loanPref) gfPayload['input_12'] = fields.loanPref;
      if (fields.whatsapp) gfPayload['input_13'] = 'I agree to receive project details and updates via WhatsApp.';

    } else if (formId === 3) {
      // Form 3: Chinmaya sidebar
      const firstName = fields.firstName || '';
      const lastName = fields.lastName || '';
      gfPayload = {
        'input_1.3': firstName,
        'input_1.6': lastName,
        'input_3': fields.phone || '',
        'input_4': fields.email || '',
        'input_5': fields.budget || '',
      };
      // Radio fields — send the exact value text
      if (fields.unitType || fields.bhk) gfPayload['input_6'] = fields.unitType || fields.bhk;
      if (fields.intendedUse) gfPayload['input_7'] = fields.intendedUse;
      if (fields.loanPref) gfPayload['input_8'] = fields.loanPref;
      if (fields.whatsapp) gfPayload['input_9'] = 'I agree to receive project details and updates via WhatsApp';

    } else {
      return new Response(JSON.stringify({ success: false, error: 'Unknown formId' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log(`Submitting to GF Form ${formId}:`, JSON.stringify(gfPayload));

    const gfResponse = await fetch(`${GF_BASE}/${formId}/submissions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(gfPayload),
      redirect: 'manual', // Prevent Astro from following GF's success redirects
    });

    const responseText = await gfResponse.text();
    let gfData;
    
    try {
      gfData = JSON.parse(responseText);
    } catch (e) {
      // GF is configured to redirect on success, which returns an HTML page or empty body.
      // If we hit this block and the status is 302, it means the submission was successful.
      if (gfResponse.status === 302 || gfResponse.status === 301) {
        gfData = { is_valid: true };
      } else {
        throw new Error(`GF API returned non-JSON. Status: ${gfResponse.status}. Body: ${responseText.substring(0, 100)}`);
      }
    }

    // GF returns is_valid: true on success
    if (gfData.is_valid === false) {
      console.error('GF validation failed:', JSON.stringify(gfData.validation_messages));
      return new Response(JSON.stringify({
        success: false,
        error: 'Form validation failed',
        details: gfData.validation_messages,
      }), {
        status: 422,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Enquiry submitted successfully.',
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('API route error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Internal Server Error',
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

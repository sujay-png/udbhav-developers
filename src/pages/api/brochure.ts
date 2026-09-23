import type { APIRoute } from 'astro';
import { google } from 'googleapis';

export const prerender = false;

// The Google Sheet ID from the provided URL
const SPREADSHEET_ID = '1DtvXqr89n2C7yIbX5QjFp7YDaaAiWmszeaAihEjTuB8';
const RANGE = "'Brochure Downloads'!A:C"; // Target the specific sheet

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { firstName, pincode } = data;

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const clientEmail = import.meta.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = import.meta.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!clientEmail || !privateKey) {
      console.warn("Google Sheets credentials (GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY) not found. Skipping sheet append.");
      // Return 200 so the frontend doesn't throw an error if the user hasn't configured it yet
      return new Response(JSON.stringify({ success: true, warning: 'No credentials configured' }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, firstName || '', pincode || '']],
      },
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    // Return 500 so it can be caught, though the frontend will fail silently
    return new Response(JSON.stringify({
      success: false,
      error: 'Internal Server Error',
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

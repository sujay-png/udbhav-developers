import type { APIRoute } from 'astro';
import { google } from 'googleapis';

export const prerender = false;

// The Google Sheet ID from the provided URL
const SPREADSHEET_ID = '1DtvXqr89n2C7yIbX5QjFp7YDaaAiWmszeaAihEjTuB8';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { firstName, pincode, type } = data;

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const clientEmail =
      import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
      import.meta.env.GOOGLE_CLIENT_EMAIL ||
      process.env.GOOGLE_CLIENT_EMAIL;
    const rawPrivateKey = import.meta.env.GOOGLE_PRIVATE_KEY || process.env.GOOGLE_PRIVATE_KEY;
    const privateKey = rawPrivateKey?.replace(/\\n/g, '\n');

    if (!clientEmail || !privateKey) {
      console.warn("Google Sheets credentials (GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY) not found. Skipping sheet append.");
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

    const targetSheet = type === 'rera' ? 'RERA' : 'Brochure Downloads';
    const range = `'${targetSheet}'!A:C`;

    // Ensure header row exists if the tab is empty
    if (type === 'rera') {
      try {
        const headerCheck = await sheets.spreadsheets.values.get({
          spreadsheetId: SPREADSHEET_ID,
          range: "'RERA'!A1:C1",
        });
        if (!headerCheck.data.values || headerCheck.data.values.length === 0) {
          await sheets.spreadsheets.values.update({
            spreadsheetId: SPREADSHEET_ID,
            range: "'RERA'!A1:C1",
            valueInputOption: 'USER_ENTERED',
            requestBody: {
              values: [['Timestamp', 'Name', 'Pincode']],
            },
          });
        }
      } catch (headerErr) {
        console.warn('Could not verify RERA headers, continuing append:', headerErr);
      }
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range,
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

import { google } from 'googleapis';
import type { ContactFormPayload } from '../types/contact';

export async function appendToGoogleSheet(payload: ContactFormPayload) {
  const serviceAccountEmail = import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = import.meta.env.GOOGLE_PRIVATE_KEY;
  const sheetId = import.meta.env.GOOGLE_SHEET_ID;

  if (!serviceAccountEmail || !privateKey || !sheetId) {
    console.warn("Google Sheets credentials not fully set. Skipping sheets append.");
    return { success: false, error: "Missing Google Sheets credentials" };
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: serviceAccountEmail,
        // Replace escaped newlines if they are passed in from env
        private_key: privateKey.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Values to append
    const values = [
      [
        new Date().toISOString(),
        payload.name,
        `'${payload.phone}`, // Prefix with apostrophe to prevent +91 from being treated as a formula
        payload.email,
        payload.unitType || '',
        payload.intent || '',
        payload.message || '',
        payload.whatsappOptIn ? 'Yes' : 'No'
      ]
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:H', // Assumes a sheet named "Sheet1" and columns A to H
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to append to Google Sheets:", error);
    return { success: false, error };
  }
}

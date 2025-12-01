import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

const auth = new GoogleAuth({
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

export async function appendToSheet(sheetName: string, values: any[]) {
  try {
    const res = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: `${sheetName}!A:Z`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [values],
      },
    });
    return res.data;
  } catch (error) {
    console.log("Error appending to sheet", error);
    throw error;
  }
}

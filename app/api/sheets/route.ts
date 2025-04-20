import { google } from "googleapis";
import { NextResponse } from "next/server";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, phone, description, testerProgram } = body;

    // First, get all existing values from the sheet
    const readResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:D", // Assuming columns A (email), B (phone), C (description), D (testerProgram)
    });

    const existingValues = readResponse.data.values || [];

    // Check if email or phone already exists
    const emailExists = existingValues.some(row => row[0] === email);
    const phoneExists = existingValues.some(row => row[1] === phone);

    if (emailExists || phoneExists) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Entry already exists",
          details: {
            emailExists,
            phoneExists,
            message: emailExists 
            ? "This email is already registered" 
            : "This phone number is already registered"
          }
        }, 
        { status: 400 }
      );
    }

    // If email and phone don't exist, append the new row
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, phone, description, testerProgram]],
      },
    });

    return NextResponse.json({ 
      success: true, 
      data: appendResponse.data 
    });
  } catch (error) {
    console.error("Error processing sheet data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process sheet data" },
      { status: 500 }
    );
  }
}
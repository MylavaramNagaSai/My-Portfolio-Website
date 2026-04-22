import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Configure the Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 1. The ULTRA-PREMIUM Email sent to the USER
    const userHtmlTemplate = `
      <div style="background-color: #030303; padding: 40px 20px; font-family: ui-monospace, Menlo, Monaco, Consolas, 'Courier New', monospace; color: #e5e5e5; text-align: center; width: 100%; box-sizing: border-box;">
        
        <div style="max-width: 600px; margin: 0 auto; background-color: #0a0a0a; border: 1px solid #1f1f1f; border-radius: 12px; overflow: hidden; text-align: left; box-shadow: 0 20px 40px rgba(0,255,65,0.05);">
          
          <div style="background-color: #0d0d0d; border-bottom: 1px solid rgba(0,255,65,0.3); padding: 25px 30px;">
            <div style="color: #00ff41; font-size: 11px; font-weight: bold; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 6px;">
              STATUS: 200 OK
            </div>
            <div style="color: #ffffff; font-size: 22px; font-weight: 600; letter-spacing: 1px; margin: 0;">
              > SECURE_RECEIPT_GENERATED
            </div>
          </div>

          <div style="padding: 35px 30px;">
            <p style="font-size: 15px; color: #888888; margin-top: 0; margin-bottom: 20px;">
              Initiating handshake with client node <span style="color: #00ff41; font-weight: bold;">[${name}]</span>...
            </p>
            
            <p style="font-size: 16px; line-height: 1.7; color: #cccccc; margin-bottom: 30px;">
              Your payload has been successfully decrypted and logged into my secure local servers. I am currently analyzing the transmission and will establish a direct return channel within <span style="color: #ffffff; font-weight: bold;">24 hours</span>.
            </p>
            
            <div style="margin: 30px 0; padding: 20px 25px; background-color: #121212; border-left: 3px solid #00ff41; border-radius: 0 8px 8px 0;">
              <div style="font-size: 10px; color: #555555; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;">
                // DECRYPTED_PAYLOAD
              </div>
              <p style="font-size: 15px; color: #a3a3a3; font-style: italic; margin: 0; line-height: 1.6;">
                "${message}"
              </p>
            </div>

            <p style="font-size: 13px; color: #555555; margin-top: 30px; margin-bottom: 0;">
              Connection terminated. End of sequence.
            </p>
          </div>

          <div style="background-color: #050505; border-top: 1px solid #1f1f1f; padding: 25px 30px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="vertical-align: middle;">
                  <div style="color: #00ff41; font-size: 16px; font-weight: bold; letter-spacing: 1px; margin-bottom: 5px;">
                    MYLAVARAM NAGA SAI
                  </div>
                  <div style="color: #666666; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">
                    Infrastructure & Security Engineer
                  </div>
                </td>
              </tr>
            </table>
          </div>

        </div>

        <div style="margin-top: 25px; font-size: 10px; color: #333333; letter-spacing: 1px; text-transform: uppercase;">
          DO NOT REPLY DIRECTLY TO THIS AUTOMATED DAEMON
        </div>
        
      </div>
    `;

    // Send the automated reply to the user
    await transporter.sendMail({
      from: `"Mylavaram Sai (Automated)" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "CONFIRMATION: Secure Transmission Received",
      html: userHtmlTemplate,
    });

    // Send the notification to YOU
    await transporter.sendMail({
      from: `"Portfolio System" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `PORTFOLIO CONTACT: New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });

  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
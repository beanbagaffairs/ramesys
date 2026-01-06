import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      company,
      service,
      message,
      projectType,
      subProject,
      budget,
      timeline,
      description,
      formType, // To distinguish between 'contact' and 'quote'
    } = body;

    // Check if required fields are present
    if (!firstName || !email || (!message && !description)) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const isQuote = formType === "quote" || !!projectType;
    const subject = isQuote
      ? `New Quote Request: ${projectType} ${
          subProject ? `(${subProject})` : ""
        }`
      : `New Contact Form Submission: ${service || "General Inquiry"}`;

    const content = isQuote
      ? `
        <h3>New Quote Request</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Sub Project:</strong> ${subProject || "N/A"}</p>
        <p><strong>Budget:</strong> ${budget || "N/A"}</p>
        <p><strong>Timeline:</strong> ${timeline || "N/A"}</p>
        <p><strong>Description:</strong></p>
        <p>${
          description?.replace(/\n/g, "<br>") || "No description provided"
        }</p>
      `
      : `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Service:</strong> ${service || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message?.replace(/\n/g, "<br>") || "No message provided"}</p>
      `;

    // Email content
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "contact@ramesys.co.uk",
      replyTo: email,
      subject: subject,
      html: content,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}

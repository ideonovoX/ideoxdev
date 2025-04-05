
import nodemailer from 'nodemailer';
import { GetStartedFormValues } from './formSchemas';

// SMTP Configuration
// These values should be replaced with the actual SMTP credentials
const SMTP_CONFIG = {
  host: "smtp.example.com",       // Replace with your SMTP server
  port: 587,                      // Common SMTP ports: 587 (TLS) or 465 (SSL)
  secure: false,                  // true for 465, false for other ports
  auth: {
    user: "your-email@example.com", // Replace with your email
    pass: "your-password"          // Replace with your password
  }
};

// The email addresses for form submissions
const BUSINESS_EMAIL = "ideonovoit@gmail.com"; // Business owner email
const FROM_EMAIL = "noreply@ideox.ai";         // Sender email address

/**
 * Creates and configures the nodemailer transporter
 */
const transporter = nodemailer.createTransport(SMTP_CONFIG);

/**
 * Formats form data into HTML for email body
 */
const formatFormDataToHtml = (data: GetStartedFormValues) => {
  return `
    <h2>New Form Submission from ${data.name}</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
    <p><strong>Organization:</strong> ${data.organization || "Not provided"}</p>
    <p><strong>Interested In:</strong> ${data.interestedIn}</p>
    <p><strong>Needs:</strong> ${data.needs}</p>
    <p><strong>Additional Info:</strong> ${data.additionalInfo || "None"}</p>
  `;
};

/**
 * Creates client confirmation email HTML
 */
const createClientEmailHtml = (name: string, interestedIn: string) => {
  return `
    <h2>Thank You for Contacting IdeoXai</h2>
    <p>Hello ${name},</p>
    <p>We appreciate your interest in ${interestedIn}. Our team has received your inquiry 
    and will review it promptly.</p>
    <p>We'll be in touch with you shortly to discuss how we can help meet your needs.</p>
    <p>Best regards,</p>
    <p>The IdeoXai Team</p>
    <hr>
    <p><small>IdeoXai | <a href="https://ideox.ai">ideox.ai</a> | +1-000-000-0000</small></p>
  `;
};

/**
 * Sends two emails:
 * 1. To the business owner with form details
 * 2. To the client with a confirmation
 */
export const sendFormEmail = async (data: GetStartedFormValues) => {
  try {
    // Prepare email content for business owner
    const businessEmailHtml = formatFormDataToHtml(data);
    
    // Prepare email content for client
    const clientEmailHtml = createClientEmailHtml(data.name, data.interestedIn);
    
    console.log(`Sending form data to business email: ${BUSINESS_EMAIL}`);
    
    // Send email to business owner
    const businessResponse = await transporter.sendMail({
      from: FROM_EMAIL,
      to: BUSINESS_EMAIL,
      subject: `New Form Submission: ${data.name} - ${data.interestedIn}`,
      html: businessEmailHtml,
      replyTo: data.email
    });
    
    console.log('SMTP business email response:', businessResponse);
    
    console.log(`Sending confirmation email to client: ${data.email}`);
    
    // Send confirmation email to client
    const clientResponse = await transporter.sendMail({
      from: FROM_EMAIL,
      to: data.email,
      subject: `Thank You for Contacting IdeoXai`,
      html: clientEmailHtml,
      replyTo: BUSINESS_EMAIL
    });
    
    console.log('SMTP client email response:', clientResponse);
    
    return { businessResponse, clientResponse };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

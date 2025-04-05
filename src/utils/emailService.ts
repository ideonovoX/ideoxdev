
import { GetStartedFormValues } from './formSchemas';

// Email Configuration Variables
// Replace these values with your actual SMTP credentials
export const EMAIL_CONFIG = {
  // Email server details
  SERVER: "smtp.example.com",
  PORT: 587,
  SECURE: false,
  USERNAME: "your-email@example.com",
  PASSWORD: "your-password",
  
  // Business information
  BUSINESS_EMAIL: "ideonovoit@gmail.com",
  FROM_EMAIL: "noreply@ideox.ai",
  COMPANY_NAME: "IdeoXai"
};

/**
 * Prepares form data for the business owner email
 */
const prepareBusinessEmailData = (data: GetStartedFormValues) => {
  return {
    subject: `New Form Submission: ${data.name} - ${data.interestedIn}`,
    name: data.name,
    email: data.email,
    phone: data.phone || "Not provided",
    organization: data.organization || "Not provided",
    interested_in: data.interestedIn,
    needs: data.needs,
    additional_info: data.additionalInfo || "None"
  };
};

/**
 * Prepares data for the client confirmation email
 */
const prepareClientEmailData = (data: GetStartedFormValues) => {
  return {
    subject: "Thank You for Contacting IdeoXai",
    name: data.name,
    interested_in: data.interestedIn
  };
};

/**
 * Sends form emails:
 * 1. To the business owner with form details
 * 2. To the client with a confirmation
 * 
 * Note: This is a placeholder function. Implement your actual email sending logic here
 * using your preferred email service or API.
 */
export const sendFormEmail = async (data: GetStartedFormValues) => {
  try {
    console.log('Preparing to send emails');
    
    // Prepare data for business owner email
    const businessEmailData = prepareBusinessEmailData(data);
    console.log(`Would send form data to business email: ${EMAIL_CONFIG.BUSINESS_EMAIL}`);
    console.log('Business email data:', businessEmailData);
    
    // Prepare data for client confirmation email
    const clientEmailData = prepareClientEmailData(data);
    console.log(`Would send confirmation email to client: ${data.email}`);
    console.log('Client email data:', clientEmailData);
    
    // This is where you would implement your actual email sending logic
    // For now, we'll just return a mock success response
    return {
      businessResponse: { success: true, messageId: 'mock-business-email-id' },
      clientResponse: { success: true, messageId: 'mock-client-email-id' }
    };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

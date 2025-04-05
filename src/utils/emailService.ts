
import emailjs from 'emailjs-com';
import { GetStartedFormValues } from './formSchemas';

// EmailJS Configuration
const EMAILJS_USER_ID = "M2t7osoWXb0vhIiEn"; // User ID for EmailJS
const EMAILJS_SERVICE_ID = "service_7vums0h";  // Replace with your service ID
const EMAILJS_TEMPLATE_ID_BUSINESS = "template_business";  // Replace with your business template ID
const EMAILJS_TEMPLATE_ID_CLIENT = "template_client";  // Replace with your client template ID

// The email address for business inquiries
const BUSINESS_EMAIL = "ideonovoit@gmail.com"; // Business owner email

/**
 * Prepares form data for the business owner email
 */
const prepareBusinessEmailData = (data: GetStartedFormValues) => {
  return {
    to_email: BUSINESS_EMAIL,
    from_name: data.name,
    from_email: data.email,
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
    to_email: data.email,
    to_name: data.name,
    from_email: BUSINESS_EMAIL,
    subject: "Thank You for Contacting IdeoXai",
    interested_in: data.interestedIn
  };
};

/**
 * Sends two emails:
 * 1. To the business owner with form details
 * 2. To the client with a confirmation
 */
export const sendFormEmail = async (data: GetStartedFormValues) => {
  try {
    console.log('Preparing to send emails with EmailJS');
    
    // Prepare data for business owner email
    const businessEmailData = prepareBusinessEmailData(data);
    console.log(`Sending form data to business email: ${BUSINESS_EMAIL}`);
    
    // Send email to business owner
    const businessResponse = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_BUSINESS,
      businessEmailData,
      EMAILJS_USER_ID
    );
    
    console.log('EmailJS business email response:', businessResponse);
    
    // Prepare data for client confirmation email
    const clientEmailData = prepareClientEmailData(data);
    console.log(`Sending confirmation email to client: ${data.email}`);
    
    // Send confirmation email to client
    const clientResponse = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CLIENT,
      clientEmailData,
      EMAILJS_USER_ID
    );
    
    console.log('EmailJS client email response:', clientResponse);
    
    return { businessResponse, clientResponse };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

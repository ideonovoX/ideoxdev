
import emailjs from 'emailjs-com';
import { GetStartedFormValues } from './formSchemas';

// EmailJS credentials
const EMAILJS_SERVICE_ID = "service_ideox_id";
const EMAILJS_TEMPLATE_ID = "template_r82cb38";
const EMAILJS_USER_ID = "UF9uyP2j19y9rEiif1mf5";

// The email addresses for form submissions
const BUSINESS_EMAIL = "ideonovoit@gmail.com"; // Updated business email
const TARGET_EMAIL = "onlyshipar@gmail.com";   // Kept for backward compatibility

/**
 * Sends two emails:
 * 1. To the business owner with form details
 * 2. To the client with a confirmation
 */
export const sendFormEmail = async (data: GetStartedFormValues) => {
  try {
    // Prepare template params for business owner
    const businessTemplateParams = {
      from_name: data.name,
      reply_to: data.email,
      to_email: BUSINESS_EMAIL,
      to_name: "IdeoXai Team",
      phone: data.phone || "Not provided",
      organization: data.organization || "Not provided",
      interested_in: data.interestedIn,
      needs: data.needs,
      additional_info: data.additionalInfo || "None",
    };
    
    // Prepare template params for client confirmation email
    const clientTemplateParams = {
      from_name: "IdeoXai Team",
      reply_to: BUSINESS_EMAIL,
      to_email: data.email,
      to_name: data.name,
      message: `Thank you for your interest in ${data.interestedIn}. We have received your inquiry and will contact you shortly.`,
      company_name: "IdeoXai",
      company_address: "IdeoXai Headquarters",
      company_phone: "+1-000-000-0000",
      company_website: "https://ideox.ai",
    };
    
    console.log(`Sending form data to business email: ${BUSINESS_EMAIL}`);
    console.log('Business template params:', businessTemplateParams);
    
    // Send email to business owner
    const businessResponse = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      businessTemplateParams,
      EMAILJS_USER_ID
    );
    
    console.log('EmailJS business response:', businessResponse);
    
    console.log(`Sending confirmation email to client: ${data.email}`);
    console.log('Client template params:', clientTemplateParams);
    
    // Send confirmation email to client
    const clientResponse = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID, // Using same template for now, but ideally would use a customer-specific template
      clientTemplateParams,
      EMAILJS_USER_ID
    );
    
    console.log('EmailJS client response:', clientResponse);
    
    return { businessResponse, clientResponse };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

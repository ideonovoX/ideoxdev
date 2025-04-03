
import emailjs from 'emailjs-com';
import { GetStartedFormValues } from './formSchemas';

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_USER_ID = "YOUR_USER_ID";

// The email address to send form submissions to
const TARGET_EMAIL = "aiagent@freelancedemy.com";

export const sendFormEmail = async (data: GetStartedFormValues) => {
  const templateParams = {
    from_name: data.name,
    reply_to: data.email,
    to_email: TARGET_EMAIL,
    to_name: "IdeoXai Team",
    phone: data.phone || "Not provided",
    organization: data.organization || "Not provided",
    interested_in: data.interestedIn,
    needs: data.needs,
    additional_info: data.additionalInfo || "None",
  };
  
  console.log(`Sending form data to ${TARGET_EMAIL}`);
  
  return await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_USER_ID
  );
};


import emailjs from 'emailjs-com';
import { GetStartedFormValues } from './formSchemas';

// EmailJS credentials
const EMAILJS_SERVICE_ID = "service_ideox_id";
const EMAILJS_TEMPLATE_ID = "template_r82cb38";
const EMAILJS_USER_ID = "v6g1LY5Mntrxy9AwL";

// The email address to send form submissions to
const TARGET_EMAIL = "onlyshipar@gmail.com";

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

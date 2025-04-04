
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { toast as sonnerToast } from 'sonner';
import { Form } from '@/components/ui/form';
import { CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FormHeader from '@/components/forms/FormHeader';
import PersonalInfoFields from '@/components/forms/PersonalInfoFields';
import InterestSelection from '@/components/forms/InterestSelection';
import NeedsInfoFields from '@/components/forms/NeedsInfoFields';
import FormActions from '@/components/forms/FormActions';
import { getStartedFormSchema, type GetStartedFormValues } from '@/utils/formSchemas';
import { sendFormEmail } from '@/utils/emailService';
import SEO from '@/components/SEO';
import { generateWebPageSchema } from '@/utils/schemaMarkup';

const GetStartedForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<GetStartedFormValues>({
    resolver: zodResolver(getStartedFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      organization: '',
      interestedIn: 'Chat Bot',
      needs: '',
      additionalInfo: '',
    },
  });

  const onSubmit = async (data: GetStartedFormValues) => {
    setIsSubmitting(true);
    
    try {
      console.log('Form data to be sent:', data);
      
      const response = await sendFormEmail(data);
      
      console.log('Emails sent successfully:', response);
      
      // Show toast notification
      toast({
        title: "Form submitted successfully!",
        description: `We've sent a confirmation to your email (${data.email}). We'll be in touch shortly.`,
      });
      
      // Show sonner toast
      sonnerToast.success("Form Submitted", {
        description: `Check your inbox at ${data.email} for our confirmation email`
      });
      
      // Navigate back to homepage after successful submission
      setTimeout(() => {
        navigate('/');
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Show toast notification for error
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly at ideonovoit@gmail.com.",
        variant: "destructive",
      });
      
      // Show sonner toast for error
      sonnerToast.error("Submission Failed", {
        description: "There was a problem sending your form. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const pageSchema = generateWebPageSchema({
    title: "Get Started with IdeoXai - Request Information",
    description: "Fill out our form to get started with IdeoXai's AI automation solutions. Tell us about your business needs and we'll help you transform your operations.",
    url: "https://ideox.ai/get-started-form"
  });

  return (
    <>
      <SEO 
        title="Get Started with IdeoXai - Request Information"
        description="Fill out our form to get started with IdeoXai's AI automation solutions. Tell us about your business needs and we'll help you transform your operations."
        canonicalUrl="https://ideox.ai/get-started-form"
        schemaMarkup={pageSchema}
      />
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 pt-20 pb-20">
        <FormHeader 
          title="Get Started with IdeoXai" 
          description="Tell us about your needs and we'll get back to you shortly"
        />
        
        <div className="w-full max-w-3xl">
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <PersonalInfoFields form={form} />
                <InterestSelection form={form} />
                <NeedsInfoFields form={form} />
                <FormActions onCancel={handleCancel} isSubmitting={isSubmitting} />
              </form>
            </Form>
          </CardContent>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetStartedForm;

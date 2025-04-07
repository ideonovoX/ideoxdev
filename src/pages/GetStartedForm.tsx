
import BasicPage from '@/components/BasicPage';
import FormHeader from '@/components/forms/FormHeader';
import PersonalInfoFields from '@/components/forms/PersonalInfoFields';
import NeedsInfoFields from '@/components/forms/NeedsInfoFields';
import InterestSelection from '@/components/forms/InterestSelection';
import FormActions from '@/components/forms/FormActions';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { getStartedFormSchema, GetStartedFormValues } from '@/utils/formSchemas';
import { Form } from '@/components/ui/form';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { sendFormEmail } from '@/utils/emailService';

const GetStartedForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<GetStartedFormValues>({
    resolver: zodResolver(getStartedFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      organization: '',
      interestedIn: 'Chat Bot' as const,
      needs: '',
      additionalInfo: ''
    }
  });

  const onSubmit = async (values: GetStartedFormValues) => {
    setIsSubmitting(true);
    try {
      await sendFormEmail(values);
      toast({
        title: "Form submitted!",
        description: "We'll be in touch with you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive"
      });
      console.error(error);
    }
    setIsSubmitting(false);
  };

  const handleCancel = () => {
    form.reset();
  };

  return (
    <BasicPage 
      title="Get Started with IdeoXai"
      highlightedWord="Started"
      description="Tell us about your needs and our team will help you get started with IdeoXai"
    >
      <div className="max-w-2xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormHeader 
              title="Let's start your AI automation journey" 
              description="Please fill out this form and our team will contact you soon to discuss how IdeoXai can help your business."
            />
            
            <PersonalInfoFields form={form} />
            <NeedsInfoFields form={form} />
            <InterestSelection form={form} />
            
            <FormActions isSubmitting={isSubmitting} onCancel={handleCancel} />
          </form>
        </Form>
      </div>
    </BasicPage>
  );
};

export default GetStartedForm;

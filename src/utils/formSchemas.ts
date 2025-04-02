
import { z } from 'zod';

export const getStartedFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  organization: z.string().optional(),
  interestedIn: z.enum(['Chat Bot', 'Business Automation', 'FB Business Automation', 'Personal Assistant', 'Others'], {
    required_error: "Please select what you're interested in",
  }),
  needs: z.string().min(10, { message: "Please describe your needs in at least 10 characters" }).max(500),
  additionalInfo: z.string().optional(),
});

export type GetStartedFormValues = z.infer<typeof getStartedFormSchema>;

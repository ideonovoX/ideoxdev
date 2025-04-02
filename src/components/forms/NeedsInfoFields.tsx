
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { UseFormReturn } from 'react-hook-form';
import { GetStartedFormValues } from '@/utils/formSchemas';

interface NeedsInfoFieldsProps {
  form: UseFormReturn<GetStartedFormValues>;
}

const NeedsInfoFields = ({ form }: NeedsInfoFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="needs"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Describe your needs</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Tell us more about your project requirements..."
                className="min-h-[120px] resize-y"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="additionalInfo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Additional Information (Optional)</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Anything else you'd like to share..."
                className="min-h-[80px] resize-y"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default NeedsInfoFields;

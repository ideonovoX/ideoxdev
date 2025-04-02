
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { UseFormReturn } from 'react-hook-form';
import { GetStartedFormValues } from '@/utils/formSchemas';

interface InterestSelectionProps {
  form: UseFormReturn<GetStartedFormValues>;
}

const InterestSelection = ({ form }: InterestSelectionProps) => {
  const options = ['Chat Bot', 'Business Automation', 'FB Business Automation', 'Personal Assistant', 'Others'];
  
  return (
    <FormField
      control={form.control}
      name="interestedIn"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>What are you interested in?</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {options.map((option) => (
                <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={option} />
                  </FormControl>
                  <FormLabel className="font-normal">{option}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InterestSelection;

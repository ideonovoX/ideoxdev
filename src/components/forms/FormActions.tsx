
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';

interface FormActionsProps {
  onCancel: () => void;
  isSubmitting: boolean;
}

const FormActions = ({ onCancel, isSubmitting }: FormActionsProps) => {
  return (
    <div className="flex justify-end space-x-4">
      <Button 
        type="button" 
        variant="outline" 
        onClick={onCancel}
        disabled={isSubmitting}
      >
        <X className="mr-2 h-4 w-4" />
        Cancel
      </Button>
      
      <Button 
        type="submit" 
        className="bg-slack-purple hover:bg-slack-purple/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit"} 
        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>
    </div>
  );
};

export default FormActions;

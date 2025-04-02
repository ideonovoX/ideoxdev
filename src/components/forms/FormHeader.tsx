
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface FormHeaderProps {
  title: string;
  description?: string;
}

const FormHeader = ({ title, description }: FormHeaderProps) => {
  return (
    <>
      <Link to="/" className="flex items-center mb-8 gap-2">
        <Zap className="h-8 w-8 text-slack-purple" />
        <span className="text-xl font-bold text-slack-black dark:text-white">IdeoXai</span>
      </Link>
      
      <Card className="w-full max-w-3xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
          {description && (
            <CardDescription className="text-center">
              {description}
            </CardDescription>
          )}
        </CardHeader>
      </Card>
    </>
  );
};

export default FormHeader;


import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface IntegrationCardProps {
  name: string;
  description: string;
  features: string[];
  logo: string;
  className?: string;
}

const IntegrationCard = ({ name, description, features, logo, className }: IntegrationCardProps) => {
  // Generate a background color based on the integration name for a fallback
  const generateBgColor = (name: string) => {
    const colors = [
      'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 
      'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500',
      'bg-orange-500', 'bg-cyan-500', 'bg-amber-500', 'bg-lime-500',
      'bg-emerald-500', 'bg-sky-500', 'bg-violet-500', 'bg-fuchsia-500',
      'bg-rose-500'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <Card className={cn("p-6 hover:shadow-md transition-shadow overflow-hidden group", className)}>
      <div className="flex items-center gap-4 mb-4">
        <div className={cn(
          "w-12 h-12 rounded-md flex items-center justify-center bg-white shadow-soft overflow-hidden",
          generateBgColor(name)
        )}>
          <div className="text-white font-bold text-xl">
            {name.charAt(0)}
          </div>
        </div>
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <p className="text-slate-600 dark:text-slate-400 mb-4 min-h-[3rem]">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.slice(0, 3).map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-start">
            <Check className="h-5 w-5 text-slack-purple mr-2 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Button 
          variant="outline" 
          className="w-full group-hover:bg-slack-purple group-hover:text-white transition-colors"
        >
          Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
};

export default IntegrationCard;

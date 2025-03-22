
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  index?: number;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  className, 
  iconClassName,
  index = 0 
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "relative p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-slack-black/50 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in",
        className
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div 
        className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-slack-lightGray dark:bg-slate-800 text-slack-purple",
          iconClassName
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-slack-black dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
};

export default FeatureCard;

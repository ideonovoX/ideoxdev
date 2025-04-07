
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface IntegrationCategoriesProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const IntegrationCategories = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: IntegrationCategoriesProps) => {
  // Generate a color based on the category name
  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      'All': 'bg-gradient-to-r from-purple-500 to-indigo-500',
      'Popular': 'bg-gradient-to-r from-amber-500 to-orange-500',
      'Communication': 'bg-gradient-to-r from-blue-500 to-cyan-500',
      'Microsoft': 'bg-gradient-to-r from-blue-600 to-blue-400',
      'Google': 'bg-gradient-to-r from-red-500 to-yellow-500',
      'Office': 'bg-gradient-to-r from-green-500 to-emerald-500',
      'Automation': 'bg-gradient-to-r from-violet-500 to-fuchsia-500',
      'Database': 'bg-gradient-to-r from-teal-500 to-green-500',
      'Productivity': 'bg-gradient-to-r from-sky-500 to-indigo-500',
      'Enterprise': 'bg-gradient-to-r from-slate-500 to-gray-500',
      'CRM': 'bg-gradient-to-r from-rose-500 to-pink-500',
      'Collaboration': 'bg-gradient-to-r from-indigo-500 to-blue-500',
      'Project Management': 'bg-gradient-to-r from-emerald-500 to-teal-500',
      'Marketing': 'bg-gradient-to-r from-orange-500 to-amber-500',
      'E-commerce': 'bg-gradient-to-r from-pink-500 to-rose-500',
      'Development': 'bg-gradient-to-r from-gray-500 to-slate-500',
      'Atlassian': 'bg-gradient-to-r from-blue-500 to-indigo-500',
      'DevOps': 'bg-gradient-to-r from-cyan-500 to-blue-500',
      'Cloud': 'bg-gradient-to-r from-sky-500 to-cyan-500',
      'Infrastructure': 'bg-gradient-to-r from-slate-500 to-zinc-500',
      'Finance': 'bg-gradient-to-r from-green-500 to-lime-500',
      'Social Media': 'bg-gradient-to-r from-blue-500 to-purple-500',
      'Email': 'bg-gradient-to-r from-amber-500 to-yellow-500',
      'Customer Support': 'bg-gradient-to-r from-teal-500 to-cyan-500',
      'Storage': 'bg-gradient-to-r from-blue-500 to-sky-500',
      'CMS': 'bg-gradient-to-r from-lime-500 to-green-500',
      'Design': 'bg-gradient-to-r from-fuchsia-500 to-pink-500'
    };

    return colorMap[category] || 'bg-gradient-to-r from-gray-500 to-slate-500';
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          className={cn(
            "rounded-full border border-gray-200 dark:border-gray-800",
            activeCategory === category 
              ? `${getCategoryColor(category)} text-white` 
              : "hover:bg-slate-100 dark:hover:bg-slate-800"
          )}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default IntegrationCategories;


import React, { useState } from 'react';
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
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          className={cn(
            "rounded-full border border-gray-200 dark:border-gray-800",
            activeCategory === category ? "bg-slack-purple hover:bg-slack-purple/90 text-white" : ""
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

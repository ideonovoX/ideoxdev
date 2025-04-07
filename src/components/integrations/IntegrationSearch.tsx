
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface IntegrationSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const IntegrationSearch = ({ searchQuery, onSearchChange }: IntegrationSearchProps) => {
  return (
    <div className="relative mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <Input
        type="text"
        placeholder="Search integrations..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700"
      />
    </div>
  );
};

export default IntegrationSearch;

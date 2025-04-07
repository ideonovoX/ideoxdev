
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
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 h-5 w-5">
        <Search className="h-5 w-5" />
      </div>
      <Input
        type="text"
        placeholder="Search 35+ integrations..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-200"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <span className="text-xs text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-0.5">
          {searchQuery ? 'ESC to clear' : 'Type to search'}
        </span>
      </div>
    </div>
  );
};

export default IntegrationSearch;

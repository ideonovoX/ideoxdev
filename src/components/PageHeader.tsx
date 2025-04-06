
import React from 'react';
import AnimatedGradient from '@/components/AnimatedGradient';
import FadeIn from '@/components/FadeIn';

interface PageHeaderProps {
  title: string;
  highlightedWord?: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  highlightedWord, 
  description 
}) => {
  // If highlightedWord is provided, replace it with a highlighted version in the title
  const renderTitle = () => {
    if (!highlightedWord) return title;
    
    const parts = title.split(highlightedWord);
    if (parts.length === 1) return title; // Word not found in title
    
    return (
      <>
        {parts[0]}
        <span className="text-slack-purple">{highlightedWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <AnimatedGradient />
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-slack-black dark:text-white leading-tight mb-6">
              {renderTitle()}
            </h1>
            {description && (
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;

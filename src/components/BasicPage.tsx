
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

interface BasicPageProps {
  title: string;
  highlightedWord?: string;
  description?: string;
  children?: React.ReactNode;
}

const BasicPage: React.FC<BasicPageProps> = ({ 
  title, 
  highlightedWord, 
  description, 
  children 
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title={title}
        highlightedWord={highlightedWord}
        description={description}
      />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BasicPage;

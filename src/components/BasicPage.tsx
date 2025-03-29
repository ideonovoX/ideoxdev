
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BasicPageProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const BasicPage: React.FC<BasicPageProps> = ({ title, description, children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slack-black dark:text-white">
              {title}
            </h1>
            {description && (
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                {description}
              </p>
            )}
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BasicPage;

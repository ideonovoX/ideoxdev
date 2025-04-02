
import React from 'react';

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="font-semibold text-slack-black dark:text-white mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
};

export default FooterColumn;

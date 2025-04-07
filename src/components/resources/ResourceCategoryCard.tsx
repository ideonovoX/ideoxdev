
import React from "react";
import FadeIn from "@/components/FadeIn";

interface ResourceCategoryProps {
  category: {
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
    iconColor: string;
  };
  index: number;
}

const ResourceCategoryCard = ({ category, index }: ResourceCategoryProps) => {
  const Icon = category.icon;
  
  return (
    <FadeIn delay={index * 100}>
      <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/30 hover:shadow-lg transition-all duration-300 flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${category.color}`}>
          <Icon className={`h-6 w-6 ${category.iconColor}`} />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-slack-black dark:text-white">
            {category.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            {category.description}
          </p>
          <a
            href="#"
            className="text-slack-purple hover:text-slack-purple/90 font-medium inline-flex items-center"
          >
            Browse resources
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </FadeIn>
  );
};

export default ResourceCategoryCard;

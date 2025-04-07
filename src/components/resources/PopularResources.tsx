
import React from "react";
import FadeIn from "@/components/FadeIn";

interface ResourceItem {
  title: string;
  type: string;
  timeToRead: string;
  url: string;
}

const PopularResources = () => {
  const popularResources: ResourceItem[] = [
    {
      title: "Getting Started with AutomateAI",
      type: "Guide",
      timeToRead: "10 min",
      url: "#"
    },
    {
      title: "Building Your First Workflow",
      type: "Tutorial",
      timeToRead: "15 min",
      url: "#"
    },
    {
      title: "Advanced Workflow Patterns",
      type: "Documentation",
      timeToRead: "20 min",
      url: "#"
    },
    {
      title: "AI Integration Best Practices",
      type: "Guide",
      timeToRead: "12 min",
      url: "#"
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slack-black dark:text-white mb-4">
            Popular resources
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get started with our most accessed guides and tutorials
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularResources.map((resource, index) => (
            <FadeIn key={resource.title} delay={index * 100}>
              <a
                href={resource.url}
                className="block p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-xs font-medium text-slack-purple mb-2 uppercase tracking-wider">
                  {resource.type}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slack-black dark:text-white">
                  {resource.title}
                </h3>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {resource.timeToRead} read
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularResources;

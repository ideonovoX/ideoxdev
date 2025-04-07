
import React from "react";
import { Zap, FileText, BookOpen, GraduationCap, Video, Download } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ResourceCategoryCard from "./ResourceCategoryCard";

interface ResourceCategory {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

const ResourceCategories = () => {
  const resourceCategories: ResourceCategory[] = [
    {
      title: "Documentation",
      description: "Comprehensive guides and API references for AutomateAI",
      icon: FileText,
      color: "bg-indigo-100 dark:bg-indigo-950/30",
      iconColor: "text-indigo-600 dark:text-indigo-400"
    },
    {
      title: "Learning Paths",
      description: "Structured courses to master AutomateAI from beginner to expert",
      icon: GraduationCap,
      color: "bg-pink-100 dark:bg-pink-950/30",
      iconColor: "text-pink-600 dark:text-pink-400"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for visual learners",
      icon: Video,
      color: "bg-amber-100 dark:bg-amber-950/30",
      iconColor: "text-amber-600 dark:text-amber-400"
    },
    {
      title: "Guides & Tutorials",
      description: "Practical how-to guides for common automation scenarios",
      icon: BookOpen,
      color: "bg-emerald-100 dark:bg-emerald-950/30",
      iconColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
      title: "Downloads",
      description: "SDKs, plugins, and extensions for your development environment",
      icon: Download,
      color: "bg-blue-100 dark:bg-blue-950/30",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Community",
      description: "Join our community of automation experts and enthusiasts",
      icon: Zap,
      color: "bg-purple-100 dark:bg-purple-950/30",
      iconColor: "text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-gray-900/50 rounded-xl">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slack-black dark:text-white mb-4">
            Explore by category
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find the resources you need based on your learning goals
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceCategories.map((category, index) => (
            <ResourceCategoryCard 
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceCategories;


import BasicPage from '@/components/BasicPage';
import { Zap, FileText, BookOpen, GraduationCap, Video, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import FeatureCard from "@/components/FeatureCard";

const Resources = () => {
  const resourceCategories = [
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

  const popularResources = [
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
    <BasicPage
      title="Resources to help you succeed"
      highlightedWord="Resources"
      description="Explore our comprehensive collection of guides, tutorials, and documentation to get the most out of AutomateAI"
    >
      <div className="py-8">
        <div className="relative max-w-xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full rounded-full border border-gray-300 dark:border-gray-700 py-3 px-6 pr-12 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slack-purple"
          />
          <Button className="absolute right-1 top-1 rounded-full bg-slack-purple hover:bg-slack-purple/90 h-9">
            Search
          </Button>
        </div>

        {/* Resource Categories */}
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
                <FadeIn key={category.title} delay={index * 100}>
                  <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/30 hover:shadow-lg transition-all duration-300 flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      <category.icon className={`h-6 w-6 ${category.iconColor}`} />
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
              ))}
            </div>
          </div>
        </section>

        {/* Popular Resources */}
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

        {/* CTA Section */}
        <section className="py-16 bg-slack-purple/10 dark:bg-slack-purple/5 rounded-xl mt-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-slack-black dark:text-white mb-6">
                  Need additional support?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Our team of experts is ready to help you get the most out of AutomateAI.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-slack-purple hover:bg-slack-purple/90 text-white">
                    Contact support
                  </Button>
                  <Button variant="outline" className="border-slack-purple text-slack-purple hover:bg-slack-purple/10">
                    Join community
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </BasicPage>
  );
};

export default Resources;

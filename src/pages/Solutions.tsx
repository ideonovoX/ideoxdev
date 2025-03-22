
import { BarChart, BriefcaseIcon, BuildingIcon, LightbulbIcon, LayoutIcon, CodesandboxIcon, UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import FeatureCard from "@/components/FeatureCard";

const Solutions = () => {
  const industrySolutions = [
    {
      title: "Finance & Banking",
      description: "Streamline compliance workflows and automate customer onboarding with AI-powered document processing.",
      icon: BarChart,
      index: 0
    },
    {
      title: "Healthcare",
      description: "Enhance patient care with intelligent scheduling and automate administrative tasks to reduce overhead.",
      icon: BriefcaseIcon,
      index: 1
    },
    {
      title: "Manufacturing",
      description: "Optimize production workflows and implement predictive maintenance to minimize downtime.",
      icon: CodesandboxIcon,
      index: 2
    },
    {
      title: "Retail & E-commerce",
      description: "Personalize customer experiences and automate inventory management for increased efficiency.",
      icon: BuildingIcon,
      index: 3
    }
  ];

  const useCases = [
    {
      title: "Document Automation",
      description: "Extract data from any document type with AI-powered OCR and process documents at scale.",
      icon: LayoutIcon,
      iconClassName: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    },
    {
      title: "Customer Service",
      description: "Implement intelligent chatbots and automate ticket routing to improve response times.",
      icon: UsersIcon,
      iconClassName: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
    },
    {
      title: "Process Optimization",
      description: "Identify bottlenecks and automate repetitive tasks for increased operational efficiency.",
      icon: LightbulbIcon,
      iconClassName: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <h1 className="text-4xl md:text-5xl font-bold text-slack-black dark:text-white mb-6">
                  Solutions that transform your business
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10">
                  Discover how AutomateAI can solve complex challenges across industries and departments.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-slack-purple hover:bg-slack-purple/90 text-white">
                    Explore solutions
                  </Button>
                  <Button variant="outline" className="border-slack-purple text-slack-purple hover:bg-slack-purple/10">
                    Schedule a demo
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-12 md:py-16 bg-white dark:bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-8">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slack-black dark:text-white mb-4">
                Industry solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Tailored automation solutions designed for your specific industry challenges
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industrySolutions.map((solution) => (
                <FadeIn key={solution.title} delay={solution.index * 100}>
                  <div className="bg-white dark:bg-gray-800/30 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                    <solution.icon className="h-10 w-10 text-slack-purple mb-4" />
                    <h3 className="text-2xl font-bold text-slack-black dark:text-white mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {solution.description}
                    </p>
                    <a
                      href="#"
                      className="text-slack-purple hover:text-slack-purple/90 font-medium inline-flex items-center"
                    >
                      Learn more
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
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8">
            <FadeIn className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-slack-black dark:text-white mb-4">
                Common use cases
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See how organizations like yours are leveraging AutomateAI to solve real-world problems
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <FadeIn key={useCase.title} delay={index * 100}>
                  <FeatureCard
                    title={useCase.title}
                    description={useCase.description}
                    icon={useCase.icon}
                    iconClassName={useCase.iconClassName}
                    index={index}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="py-12 md:py-16 bg-slack-purple/10 dark:bg-slack-purple/5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <FadeIn direction="left">
                  <div className="rounded-xl bg-gray-200 dark:bg-gray-700 aspect-video flex items-center justify-center">
                    <div className="text-gray-400 dark:text-gray-500">Case Study Image</div>
                  </div>
                </FadeIn>
                <FadeIn direction="right">
                  <div className="lg:pl-8">
                    <div className="text-sm font-semibold text-slack-purple mb-2 uppercase tracking-wide">
                      Case Study
                    </div>
                    <h2 className="text-3xl font-bold text-slack-black dark:text-white mb-4">
                      How Company X increased productivity by 300%
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Learn how a leading financial services company streamlined their document processing workflow and reduced manual labor by implementing AutomateAI's intelligent automation platform.
                    </p>
                    <Button className="bg-slack-purple hover:bg-slack-purple/90 text-white">
                      Read case study
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-white dark:bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-slack-black dark:text-white mb-6">
                  Ready to transform your business?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Get in touch with our solutions experts to discuss your specific needs and challenges.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-slack-purple hover:bg-slack-purple/90 text-white">
                    Contact sales
                  </Button>
                  <Button variant="outline" className="border-slack-purple text-slack-purple hover:bg-slack-purple/10">
                    View pricing
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Solutions;

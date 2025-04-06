
import BasicPage from '@/components/BasicPage';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Check } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const Solutions = () => {
  const industrySolutions = [
    {
      industry: "Healthcare",
      description: "Streamline patient care, reduce administrative burden, and enhance data security for healthcare providers.",
      useCases: [
        "Automated patient intake and record management",
        "Smart appointment scheduling and reminders",
        "Secure document processing and compliance",
        "Intelligent medical data analysis"
      ],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
    },
    {
      industry: "Finance",
      description: "Enhance customer experience, automate compliance workflows, and optimize operations for financial institutions.",
      useCases: [
        "Automated account opening and KYC processes",
        "Smart fraud detection and prevention",
        "Regulatory compliance monitoring",
        "AI-powered financial advisory services"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
    },
    {
      industry: "Retail",
      description: "Deliver personalized customer experiences, optimize inventory management, and streamline operations.",
      useCases: [
        "Intelligent product recommendations",
        "Automated inventory forecasting",
        "Smart customer service chatbots",
        "Omnichannel marketing automation"
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      industry: "Manufacturing",
      description: "Improve production efficiency, reduce downtime, and optimize supply chain operations.",
      useCases: [
        "Predictive maintenance scheduling",
        "Quality control automation",
        "Supply chain optimization",
        "Production planning and forecasting"
      ],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      industry: "Legal",
      description: "Accelerate contract review, automate document processing, and enhance legal research capabilities.",
      useCases: [
        "Intelligent contract review and analysis",
        "Case management automation",
        "Legal research assistance",
        "Compliance monitoring and alerts"
      ],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      industry: "Education",
      description: "Transform the learning experience, streamline administrative tasks, and personalize education.",
      useCases: [
        "Personalized learning paths",
        "Administrative task automation",
        "Smart student engagement tools",
        "Automated grading and feedback"
      ],
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <BasicPage
      title="Industry Solutions"
      highlightedWord="Solutions"
      description="Discover how IdeoXai helps transform operations across different industries"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {industrySolutions.map((solution, index) => (
          <FadeIn key={index} delay={index * 100}>
            <Card className="overflow-hidden h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.industry} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{solution.industry}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{solution.description}</p>
                <h4 className="font-semibold mb-2">Use Cases:</h4>
                <ul className="space-y-2 mb-6">
                  {solution.useCases.map((useCase, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-slack-purple mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-slate-400">{useCase}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-slack-purple/10 to-slack-blue/10 p-8 rounded-xl mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't see your industry?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            IdeoXai's flexible platform can be adapted to virtually any industry. Contact our team to discuss your specific needs and discover how we can help transform your operations.
          </p>
          <Button className="bg-slack-purple hover:bg-slack-purple/90">
            Contact Us
          </Button>
        </div>
      </div>
    </BasicPage>
  );
};

export default Solutions;


import { Button } from '@/components/ui/button';
import FadeIn from '@/components/FadeIn';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection = ({ faqs }: FAQSectionProps) => {
  return (
    <section className="py-20 bg-white dark:bg-slack-black">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slack-black dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Find answers to common questions about our pricing and plans
            </p>
          </div>
        </FadeIn>
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 50}>
              <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
                <h3 className="text-lg font-semibold text-slack-black dark:text-white mb-3">{faq.question}</h3>
                <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={300}>
          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Still have questions? We're here to help.
            </p>
            <Button className="bg-slack-purple hover:bg-slack-purple/90 text-white">
              Contact Support
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQSection;


import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/FadeIn';
import AnimatedGradient from '@/components/AnimatedGradient';

const CTASection = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <AnimatedGradient className="absolute inset-0 w-full h-full -z-10 opacity-30" />
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slack-black dark:text-white mb-4">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using IdeoxAI to streamline operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-slack-purple hover:bg-slack-purple/90 text-white h-12 px-6">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-slack-purple text-slack-purple hover:bg-slack-purple/10 h-12 px-6">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-3">
              No credit card required. Free 14-day trial.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

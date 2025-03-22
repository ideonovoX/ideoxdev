
import { Switch } from '@/components/ui/switch';
import FadeIn from '@/components/FadeIn';

interface PricingHeaderProps {
  annual: boolean;
  setAnnual: (value: boolean) => void;
}

const PricingHeader = ({ annual, setAnnual }: PricingHeaderProps) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-slack-black dark:text-white leading-tight mb-6">
              Simple, Transparent <span className="text-slack-purple">Pricing</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Choose the plan that's right for your business with our straightforward pricing options.
            </p>
            
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${annual ? 'text-slate-500' : 'text-slack-black dark:text-white font-medium'}`}>Monthly</span>
              <Switch checked={annual} onCheckedChange={setAnnual} />
              <span className={`ml-3 ${annual ? 'text-slack-black dark:text-white font-medium' : 'text-slate-500'}`}>Annual</span>
              {annual && (
                <span className="ml-2 bg-slack-green/10 text-slack-green text-xs font-medium px-2 py-1 rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default PricingHeader;

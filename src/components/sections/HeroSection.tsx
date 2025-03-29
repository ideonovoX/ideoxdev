
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import AnimatedGradient from '@/components/AnimatedGradient';
import TextSlider from '@/components/TextSlider';
import { useToast } from '@/hooks/use-toast';

interface HeroSectionProps {
  sliderContent: Array<{
    title: string;
    description: string;
  }>;
}

const HeroSection = ({ sliderContent }: HeroSectionProps) => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter an email or phone number",
        variant: "destructive",
      });
      return;
    }
    
    navigate('/get-started-form');
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <AnimatedGradient />
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-3 py-1 text-sm font-medium text-slack-purple mb-4 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-slack-green mr-2"></span>
            Now available for enterprise
          </div>
          
          <TextSlider 
            slides={sliderContent} 
            className="animate-fade-in" 
          />
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in mt-6" style={{ animationDelay: '300ms' }}>
            <div className="flex-1 max-w-xs mx-auto sm:mx-0">
              <Input 
                type="text" 
                placeholder="Email or Phone" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
            </div>
            <Button type="submit" className="bg-slack-purple hover:bg-slack-purple/90 text-white h-12 px-6">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-3 animate-fade-in" style={{ animationDelay: '400ms' }}>
            No credit card required. Free 14-day trial.
          </p>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-strong mt-8 mx-auto animate-fade-in" style={{ animationDelay: '500ms', maxWidth: '1000px' }}>
          <div className="bg-gradient-to-b from-slack-purple/10 to-slack-blue/10 backdrop-blur-sm rounded-xl p-1">
            <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-4 py-3">
                <div className="w-3 h-3 rounded-full bg-slack-red"></div>
                <div className="w-3 h-3 rounded-full bg-slack-yellow"></div>
                <div className="w-3 h-3 rounded-full bg-slack-green"></div>
                <div className="ml-2 text-sm text-slate-600 dark:text-slate-400 font-mono">IdeoxAI Dashboard</div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80" 
                alt="AI Automation Dashboard" 
                className="w-full object-cover"
                style={{ height: '500px' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

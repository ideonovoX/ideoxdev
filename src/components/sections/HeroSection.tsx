
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import AnimatedGradient from '@/components/AnimatedGradient';
import TextSlider from '@/components/TextSlider';
import { useToast } from '@/hooks/use-toast';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

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

  const visualImages = [
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // laptop
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // code
    "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // circuit board
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"  // matrix style
  ];

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
      <AnimatedGradient />
      
      {/* Left side visual slider - visible on medium screens and up */}
      <div className="hidden md:block md:w-1/2 h-screen relative">
        <Carousel className="w-full h-full" autoplay={true} loop={true}>
          <CarouselContent className="h-full">
            {visualImages.map((src, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
                  <img 
                    src={src} 
                    alt={`AI Technology ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      {/* Right side text content */}
      <div className="w-full md:w-1/2 flex items-center justify-center min-h-screen pt-32 md:pt-0 px-4 md:px-8 relative">
        <div className="max-w-2xl mx-auto relative z-10">
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
      </div>
    </section>
  );
};

export default HeroSection;

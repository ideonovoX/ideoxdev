
import React, { useEffect } from 'react';
import FadeIn from '@/components/FadeIn';
import TestimonialCard from '@/components/TestimonialCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
  {
    quote: "IdeoxAI has transformed how we handle customer support. The AI chatbot has reduced our response time by 80% while maintaining high customer satisfaction.",
    author: "Sarah Johnson",
    role: "Customer Success Manager",
    company: "TechGlobal",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Implementing the business automation solution from IdeoxAI has saved us countless hours on repetitive tasks and helped us focus on strategic initiatives.",
    author: "Michael Chen",
    role: "Operations Director",
    company: "Nexus Innovations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "The Facebook automation tools have revolutionized our social media strategy. We've seen a 45% increase in engagement and our team saves 15 hours per week.",
    author: "Emily Rodriguez",
    role: "Digital Marketing Lead",
    company: "BrandForward",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "What impressed me most about IdeoxAI is how quickly it adapted to our specific industry needs. The customization capabilities are unmatched in the market.",
    author: "David Wilson",
    role: "CTO",
    company: "HealthTech Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "The integration capabilities are exceptional. IdeoxAI seamlessly connected with all our existing systems, making the transition incredibly smooth for our team.",
    author: "Amanda Patel",
    role: "IT Systems Manager",
    company: "Global Finance Group",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "The ROI we've seen with IdeoxAI has been remarkable. Within just three months, we reduced operational costs by 30% while improving our customer experience metrics.",
    author: "James Taylor",
    role: "CEO",
    company: "Retail Innovations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

const TestimonialsSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
              What Our Customers Say
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-center mb-16">
            Discover how businesses around the world are transforming their operations with IdeoxAI's intelligent solutions.
          </p>
        </FadeIn>
        
        <FadeIn>
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto px-4 sm:px-6"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 pl-4 md:pl-6">
                  <TestimonialCard 
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    company={testimonial.company}
                    image={testimonial.image}
                    index={index}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        </FadeIn>
      </div>
    </section>
  );
};

export default TestimonialsSection;

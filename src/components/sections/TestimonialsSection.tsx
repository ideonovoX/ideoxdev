
import FadeIn from '@/components/FadeIn';
import TestimonialCard from '@/components/TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "IdeoxAI has completely transformed how our marketing team operates. We've saved countless hours on repetitive tasks and seen a 40% increase in campaign efficiency.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "The intelligent workflow optimization has helped us identify bottlenecks we didn't even know existed. Our customer response time has improved by 65%.",
      author: "Michael Chen",
      role: "Operations Manager",
      company: "Globex Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "Setting up integrations used to take our dev team days. With IdeoxAI, our business team can do it themselves in minutes. Game changer!",
      author: "James Wilson",
      role: "CTO",
      company: "Innovate Labs",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slack-black">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slack-black dark:text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Discover how IdeoxAI is transforming businesses worldwide
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.author} delay={index * 150}>
              <TestimonialCard 
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                image={testimonial.image}
                index={index}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

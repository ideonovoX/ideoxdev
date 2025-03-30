
import React from 'react';
import { 
  ShoppingCart, 
  Heart, 
  Briefcase, 
  Plane, 
  UtensilsCrossed, 
  Package2, 
  BarChart, 
  TruckIcon, 
  Calculator 
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import FeatureCard from '@/components/FeatureCard';
import { Link } from 'react-router-dom';

const industries = [
  {
    title: "Healthcare",
    description: "Streamline patient care, automate administrative tasks, and enhance medical record management.",
    icon: Heart,
    color: "from-red-400 to-red-600",
    link: "/industries/healthcare"
  },
  {
    title: "Banking",
    description: "Secure transactions, automated compliance, and personalized customer service solutions.",
    icon: Calculator,
    color: "from-blue-400 to-blue-600",
    link: "/industries/banking"
  },
  {
    title: "Travel",
    description: "Simplify bookings, enhance customer experience, and optimize operational efficiency.",
    icon: Plane,
    color: "from-cyan-400 to-cyan-600",
    link: "/industries/travel"
  },
  {
    title: "E-commerce",
    description: "Automated inventory management, personalized recommendations, and streamlined order processing.",
    icon: ShoppingCart,
    color: "from-green-400 to-green-600",
    link: "/industries/ecommerce"
  },
  {
    title: "Food & Restaurant",
    description: "Order management, inventory control, and enhanced customer engagement solutions.",
    icon: UtensilsCrossed,
    color: "from-orange-400 to-orange-600",
    link: "/industries/food"
  },
  {
    title: "Courier",
    description: "Route optimization, tracking solutions, and automated dispatch management.",
    icon: Package2,
    color: "from-yellow-400 to-yellow-600",
    link: "/industries/courier"
  },
  {
    title: "Sales & Marketing",
    description: "Lead generation, campaign automation, and data-driven strategy optimization.",
    icon: BarChart,
    color: "from-purple-400 to-purple-600",
    link: "/industries/sales"
  },
  {
    title: "CnF",
    description: "Freight management, documentation automation, and compliance solutions.",
    icon: TruckIcon,
    color: "from-indigo-400 to-indigo-600",
    link: "/industries/cnf"
  },
  {
    title: "Airlines",
    description: "Booking management, crew scheduling, and operational efficiency solutions.",
    icon: Plane,
    color: "from-sky-400 to-sky-600",
    link: "/industries/airlines"
  }
];

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 text-center max-w-3xl mx-auto">
            IdeoxAI provides tailored automation solutions across various industries, helping businesses optimize operations and enhance customer experiences.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <Link to={industry.link} key={industry.title} className="no-underline">
              <FadeIn delay={index * 100}>
                <div className="h-full">
                  <FeatureCard
                    title={industry.title}
                    description={industry.description}
                    icon={industry.icon}
                    index={index}
                    className="h-full hover:scale-105 transition-transform duration-300"
                    iconClassName={`bg-gradient-to-r ${industry.color} text-white`}
                  />
                </div>
              </FadeIn>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

import BasicPage from '@/components/BasicPage';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const PartnersPage = () => {
  const partnerTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrate your technology with IdeoXai or build on our platform to create innovative solutions.',
      benefits: [
        'Access to our API and developer resources',
        'Co-marketing opportunities',
        'Technical support and training',
        'Joint customer success initiatives'
      ],
      image: '/lovable-uploads/679e28e1-ef64-40c7-90a2-8050d4bb4128.png'
    },
    {
      title: 'Solution Partners',
      description: 'Implement IdeoXai for your clients and help them maximize the value of our platform.',
      benefits: [
        'Partner-exclusive training and certification',
        'Lead sharing and referral programs',
        'Dedicated partner manager',
        'Competitive discounts'
      ],
      image: '/lovable-uploads/439205cc-0083-4f3a-a658-23eb8872e230.png'
    },
    {
      title: 'Strategic Alliances',
      description: 'Join forces with IdeoXai to drive innovation and create mutual value through deeper collaboration.',
      benefits: [
        'Executive sponsorship',
        'Joint product development',
        'Shared go-to-market strategy',
        'Strategic business planning'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  return (
    <BasicPage 
      title="Partner with IdeoXai"
      highlightedWord="Partner"
      description="Join our ecosystem and grow your business with IdeoXai's leading AI automation platform"
    >
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partnerTypes.map((partner, index) => (
            <FadeIn key={index} delay={index * 100}>
              <Card className="p-6 h-full flex flex-col">
                <div className="aspect-video mb-6 overflow-hidden rounded-md">
                  <img 
                    src={partner.image} 
                    alt={partner.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{partner.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{partner.description}</p>
                <h4 className="font-semibold mb-2 text-slack-purple">Benefits:</h4>
                <ul className="list-disc pl-5 mb-6 text-slate-600 dark:text-slate-400 space-y-1">
                  {partner.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>
      
      <section className="mb-16 bg-slate-50 dark:bg-slate-900/50 p-8 rounded-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Ready to explore partnership opportunities with IdeoXai? Fill out our partner application form and our team will contact you to discuss the next steps.
          </p>
          <Button size="lg" className="bg-slack-purple hover:bg-slack-purple/90">
            Apply Now
          </Button>
        </div>
      </section>
    </BasicPage>
  );
};

export default PartnersPage;

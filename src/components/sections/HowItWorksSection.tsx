
import FadeIn from '@/components/FadeIn';

const HowItWorksSection = () => {
  const steps = [
    {
      step: '01',
      title: 'Connect Your Apps',
      description: 'Easily integrate with your existing tools and platforms with our no-code connectors.'
    },
    {
      step: '02',
      title: 'Create Workflows',
      description: 'Design intelligent workflows that automate your business processes end-to-end.'
    },
    {
      step: '03',
      title: 'Optimize & Scale',
      description: 'Let AI analyze and improve your automation while you scale across your organization.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slack-black dark:text-white mb-4">
              How IdeoxAI Works
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Get started in minutes with our simple three-step process
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 150}>
              <div className="relative p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-slack-black/50 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="text-4xl font-bold text-slack-purple/20 dark:text-slack-purple/30 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slack-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

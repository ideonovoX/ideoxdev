
import FadeIn from '@/components/FadeIn';

const StatsSection = () => {
  const stats = [
    { value: '95%', label: 'Time Saved' },
    { value: '3x', label: 'Productivity Boost' },
    { value: '1000+', label: 'Integrations' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section className="py-16 bg-slack-purple dark:bg-slack-purple/90 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 100}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

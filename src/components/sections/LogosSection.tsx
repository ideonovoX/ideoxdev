
import FadeIn from '@/components/FadeIn';

const LogosSection = () => {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {['Microsoft', 'Google', 'Amazon', 'Slack', 'Adobe', 'Shopify'].map((company, index) => (
              <div 
                key={company} 
                className="text-xl font-bold text-slate-400 dark:text-slate-600"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {company}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default LogosSection;

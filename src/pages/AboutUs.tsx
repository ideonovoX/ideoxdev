
import BasicPage from '@/components/BasicPage';
import FadeIn from '@/components/FadeIn';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Award, TrendingUp, Heart } from 'lucide-react';

const AboutUs = () => {
  const coreValues = [
    {
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible with AI technology.",
      icon: <TrendingUp className="h-6 w-6 text-slack-purple" />
    },
    {
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we create.",
      icon: <Award className="h-6 w-6 text-slack-purple" />
    },
    {
      title: "Customer Focus",
      description: "We build solutions that address real business needs and deliver tangible value.",
      icon: <Heart className="h-6 w-6 text-slack-purple" />
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork between humans and AI systems.",
      icon: <Users className="h-6 w-6 text-slack-purple" />
    }
  ];

  return (
    <BasicPage
      title="About IdeoXai"
      highlightedWord="About"
      description="Learn about our mission to transform businesses through innovative AI automation"
    >
      <div className="space-y-16 py-8">
        {/* Our Story Section */}
        <section>
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                  IdeoXai was founded in 2022 by a team of AI researchers and business automation experts with a shared vision: to make powerful AI technology accessible and practical for businesses of all sizes.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  What began as a specialized chatbot solution has evolved into a comprehensive suite of AI automation tools that help businesses streamline operations, enhance customer experiences, and drive growth through intelligent automation.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slack-purple/10 to-slack-blue/10 rounded-xl p-6">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="IdeoXai team" 
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 bg-slack-purple/5 rounded-xl px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                We're on a mission to democratize AI automation technology, making it accessible, understandable, and valuable for businesses of all sizes. We believe that by reducing the complexity of AI implementation, we can help organizations focus on growth and innovation.
              </p>
              <Button asChild className="bg-slack-purple hover:bg-slack-purple/90">
                <Link to="/get-started">Join Our Mission</Link>
              </Button>
            </div>
          </FadeIn>
        </section>

        {/* Core Values Section */}
        <section>
          <FadeIn>
            <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="flex p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
                  <div className="mr-4 p-3 bg-slack-purple/10 rounded-lg self-start">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Leadership Team Section */}
        <section>
          <FadeIn>
            <h2 className="text-3xl font-bold mb-10 text-center">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div key={member} className="text-center">
                  <div className="w-48 h-48 rounded-full bg-slate-200 dark:bg-slate-700 mx-auto mb-4 overflow-hidden">
                    <img 
                      src={`https://randomuser.me/api/portraits/women/${member + 20}.jpg`}
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                  <p className="text-slack-purple">CEO & Co-founder</p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">
                    15+ years experience in AI & machine learning
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Join Us CTA */}
        <section className="bg-gradient-to-r from-slack-purple/20 to-slack-blue/20 rounded-xl p-12 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate and talented individuals to join our team and help shape the future of AI automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link to="/careers">Explore Careers</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </section>
      </div>
    </BasicPage>
  );
};

export default AboutUs;

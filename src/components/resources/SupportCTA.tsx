
import React from "react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const SupportCTA = () => {
  return (
    <section className="py-16 bg-slack-purple/10 dark:bg-slack-purple/5 rounded-xl mt-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slack-black dark:text-white mb-6">
              Need additional support?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our team of experts is ready to help you get the most out of AutomateAI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-slack-purple hover:bg-slack-purple/90 text-white">
                Contact support
              </Button>
              <Button variant="outline" className="border-slack-purple text-slack-purple hover:bg-slack-purple/10">
                Join community
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default SupportCTA;

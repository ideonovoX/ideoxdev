
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const ResourceSearch = () => {
  return (
    <div className="relative max-w-xl mx-auto mb-12">
      <input
        type="text"
        placeholder="Search resources..."
        className="w-full rounded-full border border-gray-300 dark:border-gray-700 py-3 px-6 pr-12 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slack-purple"
      />
      <Button className="absolute right-1 top-1 rounded-full bg-slack-purple hover:bg-slack-purple/90 h-9">
        Search
      </Button>
    </div>
  );
};

export default ResourceSearch;

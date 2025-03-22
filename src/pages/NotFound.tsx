
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import AnimatedGradient from "@/components/AnimatedGradient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center relative">
        <AnimatedGradient />
        <div className="relative z-10 text-center px-4 md:px-8 max-w-2xl mx-auto">
          <h1 className="text-9xl font-bold text-slack-purple mb-4">404</h1>
          <h2 className="text-3xl font-bold text-slack-black dark:text-white mb-4">Page Not Found</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            We couldn't find the page you're looking for. The page may have been moved or no longer exists.
          </p>
          <Button asChild className="bg-slack-purple hover:bg-slack-purple/90 text-white">
            <Link to="/" className="inline-flex items-center">
              <HomeIcon className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;

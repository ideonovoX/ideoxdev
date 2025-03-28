
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GetStarted = () => {
  const [contact, setContact] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contact) {
      toast({
        title: "Error",
        description: "Please enter an email or phone number",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      toast({
        title: "Welcome to IdeoxAI!",
        description: "We'll send you an invitation shortly.",
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 pt-20 pb-20">
        <Link to="/" className="flex items-center mb-8 gap-2">
          <Zap className="h-8 w-8 text-slack-purple" />
          <span className="text-xl font-bold text-slack-black dark:text-white">IdeoxAI</span>
        </Link>
        
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Get Started with IdeoxAI</CardTitle>
            <CardDescription className="text-center">
              Join thousands of teams transforming their workflows
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input 
                  placeholder="Email or Phone" 
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  className="h-12"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  We'll send you an exclusive invitation
                </p>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-slack-purple hover:bg-slack-purple/90"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Request Invite"} 
                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default GetStarted;

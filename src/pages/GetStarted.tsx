
import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const GetStarted = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      toast({
        title: "Account created",
        description: "Welcome to AutomateAI! Your account has been created successfully.",
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <Link to="/" className="flex items-center mb-8 gap-2">
        <Zap className="h-8 w-8 text-slack-purple" />
        <span className="text-xl font-bold text-slack-black dark:text-white">AutomateAI</span>
      </Link>
      
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Get started with AutomateAI today
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                placeholder="John Smith" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Create a strong password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Password must be at least 8 characters long
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm font-normal">
                I agree to the <Link to="#" className="text-slack-purple hover:underline">Terms of Service</Link> and <Link to="#" className="text-slack-purple hover:underline">Privacy Policy</Link>
              </Label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-slack-purple hover:bg-slack-purple/90"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Create Account"} 
              {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>
          
          <div className="mt-4 text-center text-sm">
            <span className="text-gray-500 dark:text-gray-400">Already have an account? </span>
            <Link to="/login" className="text-slack-purple hover:text-slack-purple/90 font-medium">
              Login instead
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GetStarted;

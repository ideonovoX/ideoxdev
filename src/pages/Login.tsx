
import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import BasicPage from "@/components/BasicPage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      toast({
        title: "Success",
        description: "You have successfully logged in!",
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <BasicPage
      title="Sign in to your account"
      highlightedWord="Sign in"
      description="Enter your credentials to access your dashboard and tools"
    >
      <div className="flex flex-col items-center justify-center p-4">
        <Link to="/" className="flex items-center mb-8 gap-2">
          <Zap className="h-8 w-8 text-slack-purple" />
          <span className="text-xl font-bold text-slack-black dark:text-white">IdeoXai</span>
        </Link>
        
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="#" className="text-sm text-slack-purple hover:text-slack-purple/90">
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">Remember me</Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-slack-purple hover:bg-slack-purple/90"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
            
            <div className="mt-4 text-center text-sm">
              <span className="text-gray-500 dark:text-gray-400">Don't have an account? </span>
              <Link to="/get-started" className="text-slack-purple hover:text-slack-purple/90 font-medium">
                Get started
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </BasicPage>
  );
};

export default Login;

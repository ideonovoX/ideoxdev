
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Index from "./pages/Index";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Solutions from "./pages/Solutions";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";
import GetStartedForm from "./pages/GetStartedForm";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// New Pages
import Integrations from "./pages/Integrations";
import Enterprise from "./pages/Enterprise";
import Documentation from "./pages/Documentation";
import Guides from "./pages/Guides";
import ApiReference from "./pages/ApiReference";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Partners from "./pages/Partners";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Security from "./pages/Security";
import Cookies from "./pages/Cookies";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// Feature Pages
import ChatbotDetails from "./pages/ChatbotDetails";
import CheckoutDemo from "./pages/CheckoutDemo";
import BusinessAutomation from "./pages/BusinessAutomation";
import FacebookAutomation from "./pages/FacebookAutomation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ScrollToTop />
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/get-started-form" element={<GetStartedForm />} />
        
        {/* New Routes */}
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/api" element={<ApiReference />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/security" element={<Security />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        
        {/* Feature-specific Routes */}
        <Route path="/chatbot" element={<ChatbotDetails />} />
        <Route path="/checkout-demo" element={<CheckoutDemo />} />
        <Route path="/business-automation" element={<BusinessAutomation />} />
        <Route path="/facebook-automation" element={<FacebookAutomation />} />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

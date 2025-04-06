
import { Link } from 'react-router-dom';
import FooterSocialLinks from './FooterSocialLinks';

const FooterCompanyInfo = () => {
  return (
    <div>
      <Link to="/" className="flex items-center space-x-2 mb-4">
        <img 
          src="/lovable-uploads/679e28e1-ef64-40c7-90a2-8050d4bb4128.png" 
          alt="IdeoXai Logo" 
          className="h-12 w-auto"
        />
      </Link>
      <p className="text-slate-600 dark:text-slate-400 mb-4 max-w-sm">
        Revolutionizing workflows with intelligent automation powered by cutting-edge AI technology.
      </p>
      <div className="mb-4">
        <p className="text-slate-600 dark:text-slate-400">
          Address: Sonabaria, Satkhira, Dhaka, Bangladesh
        </p>
        <p className="text-slate-600 dark:text-slate-400">
          Contact: +88 01311 34 47 47
        </p>
        <p className="text-slate-600 dark:text-slate-400">
          Email: ai@ideoxai.com
        </p>
      </div>
      <FooterSocialLinks />
    </div>
  );
};

export default FooterCompanyInfo;

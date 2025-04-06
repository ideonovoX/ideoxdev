
import { Link } from 'react-router-dom';

interface NavLogoProps {
  handleLinkClick: () => void;
}

const NavLogo = ({ handleLinkClick }: NavLogoProps) => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
        <img 
          src="/lovable-uploads/679e28e1-ef64-40c7-90a2-8050d4bb4128.png" 
          alt="IdeoXai Logo" 
          className="h-10 w-auto"
        />
        <span className="sr-only">IdeoXai - Automate your business</span>
      </Link>
    </div>
  );
};

export default NavLogo;

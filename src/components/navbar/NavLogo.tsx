
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

interface NavLogoProps {
  handleLinkClick: () => void;
}

const NavLogo = ({ handleLinkClick }: NavLogoProps) => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
        <Zap className="h-8 w-8 text-slack-purple" />
        <span className="text-xl font-bold text-slack-black dark:text-white">IdeoXai</span>
      </Link>
    </div>
  );
};

export default NavLogo;

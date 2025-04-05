
import { Link } from 'react-router-dom';

interface NavLogoProps {
  handleLinkClick: () => void;
}

const NavLogo = ({ handleLinkClick }: NavLogoProps) => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <circle cx="20" cy="20" r="20" fill="url(#paint0_linear)" />
          <path 
            d="M28 16.5C28 19.5376 25.5376 22 22.5 22C19.4624 22 17 19.5376 17 16.5C17 13.4624 19.4624 11 22.5 11C25.5376 11 28 13.4624 28 16.5Z" 
            fill="url(#paint1_linear)" 
          />
          <path 
            d="M12 24C12 26.2091 10.2091 28 8 28C5.79086 28 4 26.2091 4 24C4 21.7909 5.79086 20 8 20C10.2091 20 12 21.7909 12 24Z" 
            fill="url(#paint2_linear)" 
          />
          <path 
            d="M33.5 28C35.433 28 37 26.433 37 24.5C37 22.567 35.433 21 33.5 21C31.567 21 30 22.567 30 24.5C30 26.433 31.567 28 33.5 28Z" 
            fill="url(#paint3_linear)" 
          />
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M22.5 24C19.8218 24 17.4632 22.6329 16.049 20.5H12.8882C14.5422 24.609 18.2269 27.5 22.5 27.5C24.5823 27.5 26.5041 26.8625 28.0933 25.7683L26.3149 22.5074C25.1925 23.4288 23.8014 24 22.5 24Z" 
            fill="white" 
          />
          <path 
            d="M16 28.5L12 18L20 25L16 28.5Z" 
            fill="white" 
          />
          <path 
            d="M29 28L33 19L27 24L29 28Z" 
            fill="white" 
          />
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1A1F2C" />
              <stop offset="1" stopColor="#2C3144" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="17" y1="11" x2="28" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9B87F5" />
              <stop offset="1" stopColor="#7E69AB" />
            </linearGradient>
            <linearGradient id="paint2_linear" x1="4" y1="20" x2="12" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0EA5E9" />
              <stop offset="1" stopColor="#38BDF8" />
            </linearGradient>
            <linearGradient id="paint3_linear" x1="30" y1="21" x2="37" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F97316" />
              <stop offset="1" stopColor="#FB923C" />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-xl font-bold text-slate-800 dark:text-white">IdeoXai</span>
      </Link>
    </div>
  );
};

export default NavLogo;

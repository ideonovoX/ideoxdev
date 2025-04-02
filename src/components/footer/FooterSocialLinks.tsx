
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const FooterSocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a href="#" className="text-slack-darkGray hover:text-slack-purple transition-colors">
        <Twitter size={20} />
      </a>
      <a href="#" className="text-slack-darkGray hover:text-slack-purple transition-colors">
        <Linkedin size={20} />
      </a>
      <a href="#" className="text-slack-darkGray hover:text-slack-purple transition-colors">
        <Github size={20} />
      </a>
      <a href="#" className="text-slack-darkGray hover:text-slack-purple transition-colors">
        <Instagram size={20} />
      </a>
    </div>
  );
};

export default FooterSocialLinks;

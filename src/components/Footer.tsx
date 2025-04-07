
import FooterCompanyInfo from './footer/FooterCompanyInfo';
import FooterNavLinks from './footer/FooterNavLinks';
import FooterColumn from './footer/FooterColumn';
import FooterBlogPosts from './footer/FooterBlogPosts';
import FooterCopyright from './footer/FooterCopyright';

const Footer = () => {
  // Mock blog posts (these would normally come from a data source)
  const recentBlogPosts = [
    { title: "How AI Is Revolutionizing Customer Service", slug: "ai-customer-service" },
    { title: "5 Ways to Automate Your Business with IdeoXai", slug: "business-automation" },
    { title: "The Future of eCommerce Automation", slug: "ecommerce-automation" }
  ];
  
  // Reorganized footer links according to the request
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Integrations', href: '/integrations' },
        { name: 'Enterprise', href: '/enterprise' },
        { name: 'Solutions', href: '/solutions' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '/privacy' },
        { name: 'Terms', href: '/terms' },
        { name: 'Security', href: '/security' },
        { name: 'Cookies', href: '/cookies' }
      ]
    }
  ];

  return (
    <footer className="bg-white dark:bg-slack-black pt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info Column */}
          <FooterCompanyInfo />

          {/* Navigation Links */}
          <FooterNavLinks sections={footerLinks} />
          
          {/* Blog Column */}
          <FooterColumn title="Blog">
            <FooterBlogPosts posts={recentBlogPosts} />
          </FooterColumn>
        </div>

        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;

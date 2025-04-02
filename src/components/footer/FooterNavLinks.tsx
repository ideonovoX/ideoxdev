
import FooterColumn from './FooterColumn';
import FooterLink from './FooterLink';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterNavLinksProps {
  sections: FooterSection[];
}

const FooterNavLinks = ({ sections }: FooterNavLinksProps) => {
  return (
    <>
      {sections.map((section, index) => (
        <FooterColumn key={index} title={section.title}>
          <ul className="space-y-3">
            {section.links.map((link) => (
              <FooterLink key={link.name} href={link.href} name={link.name} />
            ))}
          </ul>
        </FooterColumn>
      ))}
    </>
  );
};

export default FooterNavLinks;

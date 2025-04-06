
import BasicPage from '@/components/BasicPage';
import { Card } from '@/components/ui/card';
import { Shield, Lock, Database, FileCheck, AlertCircle, Users } from 'lucide-react';
import SEO from '@/components/SEO';
import { generateWebPageSchema } from '@/utils/schemaMarkup';

const SecurityPage = () => {
  const securityFeatures = [
    {
      title: "Data Encryption",
      description: "All data is encrypted both in transit and at rest using industry-standard encryption protocols.",
      icon: <Lock className="h-8 w-8 text-slack-purple" />
    },
    {
      title: "Access Controls",
      description: "Role-based access controls and multi-factor authentication to protect sensitive information.",
      icon: <Users className="h-8 w-8 text-slack-purple" />
    },
    {
      title: "Secure Infrastructure",
      description: "Our platform is hosted on secure cloud infrastructure with regular security audits and monitoring.",
      icon: <Database className="h-8 w-8 text-slack-purple" />
    },
    {
      title: "Compliance",
      description: "We maintain compliance with major security standards including GDPR, HIPAA, SOC 2, and ISO 27001.",
      icon: <FileCheck className="h-8 w-8 text-slack-purple" />
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous monitoring of our systems to detect and respond to potential security threats.",
      icon: <AlertCircle className="h-8 w-8 text-slack-purple" />
    },
    {
      title: "Data Protection",
      description: "Regular backups and disaster recovery procedures to ensure the safety of your data.",
      icon: <Shield className="h-8 w-8 text-slack-purple" />
    }
  ];

  const securitySchema = generateWebPageSchema({
    title: "Security at IdeoXai - How We Protect Your Data",
    description: "Learn about IdeoXai's security practices, data protection measures, and compliance certifications.",
    url: "https://ideox.ai/security"
  });

  return (
    <>
      <SEO 
        title="Security at IdeoXai - How We Protect Your Data"
        description="Learn about IdeoXai's security practices, data protection measures, and compliance certifications."
        canonicalUrl="https://ideox.ai/security"
        schemaMarkup={securitySchema}
      />
      <BasicPage 
        title="Security at IdeoXai"
        highlightedWord="Security" 
        description="We prioritize the security and privacy of your data at every level"
      >
        <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
          <p>
            At IdeoXai, we understand that the security and privacy of your data is paramount. Our comprehensive security program is designed to ensure that your information is protected at every level, from infrastructure to application security.
          </p>
          <p>
            We employ a defense-in-depth approach to security, implementing multiple layers of controls to protect your data and systems. Our security practices are continuously updated to address new threats and vulnerabilities.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Our Security Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Compliance and Certifications</h2>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Data Protection Regulations</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                  <li>General Data Protection Regulation (GDPR)</li>
                  <li>California Consumer Privacy Act (CCPA)</li>
                  <li>Health Insurance Portability and Accountability Act (HIPAA)</li>
                  <li>Personal Information Protection and Electronic Documents Act (PIPEDA)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Security Certifications</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                  <li>ISO 27001 Certification</li>
                  <li>SOC 2 Type II Compliance</li>
                  <li>Cloud Security Alliance (CSA) STAR</li>
                  <li>PCI DSS Compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Our Security Commitment</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p>
              We are committed to maintaining the highest standards of security to protect your data and systems. Our dedicated security team works tirelessly to:
            </p>
            <ul>
              <li>Continuously monitor our systems for potential threats</li>
              <li>Regularly conduct security assessments and penetration testing</li>
              <li>Update our security practices to address emerging threats</li>
              <li>Train our team on the latest security best practices</li>
              <li>Maintain transparency with our customers about our security practices</li>
            </ul>
            <p>
              If you have any questions about our security practices or would like more information, please contact our security team at security@ideox.ai.
            </p>
          </div>
        </section>
      </BasicPage>
    </>
  );
};

export default SecurityPage;

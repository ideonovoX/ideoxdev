
import BasicPage from '@/components/BasicPage';
import { Shield, Lock, FileCheck, Server, Eye, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const SecurityCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: React.ElementType }) => (
  <Card className="p-6">
    <div className="flex items-start mb-4">
      <div className="rounded-full bg-slack-purple/10 p-3 mr-4">
        <Icon className="h-6 w-6 text-slack-purple" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400">{description}</p>
      </div>
    </div>
  </Card>
);

const Security = () => {
  return (
    <BasicPage 
      title="Security" 
      description="How we protect your data and ensure the security of our platform"
    >
      <section className="mb-8">
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
          At IdeoxAI, security is a top priority. We employ industry-leading security measures to protect your data, maintain privacy, and ensure the reliability of our platform. Our comprehensive approach to security encompasses infrastructure, application, and organizational security.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <SecurityCard 
            title="Data Encryption" 
            description="All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption, ensuring your information remains secure."
            icon={Lock}
          />
          <SecurityCard 
            title="Access Controls" 
            description="We implement strict access controls and authentication mechanisms, including role-based access control and multi-factor authentication."
            icon={Eye}
          />
          <SecurityCard 
            title="Compliance" 
            description="Our platform is designed to comply with industry standards and regulations, including GDPR, CCPA, and SOC 2 Type II."
            icon={FileCheck}
          />
          <SecurityCard 
            title="Infrastructure Security" 
            description="We use cloud providers with enterprise-grade security and implement multiple layers of infrastructure protection."
            icon={Server}
          />
          <SecurityCard 
            title="Regular Audits" 
            description="We conduct regular security audits, vulnerability assessments, and penetration testing to identify and address potential vulnerabilities."
            icon={Shield}
          />
          <SecurityCard 
            title="Security Program" 
            description="Our comprehensive security program includes employee training, incident response planning, and continuous security monitoring."
            icon={Award}
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Security Commitments</h2>
        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We implement strong safeguards to protect your data from unauthorized access, disclosure, alteration, and destruction. Your data belongs to you, and we treat it with the utmost care.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We're committed to being transparent about our security practices and keeping you informed about how we protect your data. We promptly notify affected users in the event of a data breach.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Security is never "done." We continuously evaluate and improve our security measures to address emerging threats and vulnerabilities, investing in advanced technologies and practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Enterprise Security Features</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          For our enterprise customers, we offer enhanced security features and controls to meet the most demanding security requirements:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="rounded-full bg-green-500 p-1 mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-slate-600 dark:text-slate-400">Single Sign-On (SSO) with SAML 2.0 support</span>
          </li>
          <li className="flex items-start">
            <div className="rounded-full bg-green-500 p-1 mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-slate-600 dark:text-slate-400">Advanced audit logging and activity monitoring</span>
          </li>
          <li className="flex items-start">
            <div className="rounded-full bg-green-500 p-1 mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-slate-600 dark:text-slate-400">Custom data retention policies and data residency options</span>
          </li>
          <li className="flex items-start">
            <div className="rounded-full bg-green-500 p-1 mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-slate-600 dark:text-slate-400">Dedicated security reviews and enhanced SLAs</span>
          </li>
          <li className="flex items-start">
            <div className="rounded-full bg-green-500 p-1 mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-slate-600 dark:text-slate-400">Private cloud deployment options</span>
          </li>
          <li className="flex items-start">
            <div className="rounded-full bg-green-500 p-1 mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-slate-600 dark:text-slate-400">Advanced DLP (Data Loss Prevention) controls</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Reporting Security Concerns</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          We take security vulnerabilities seriously. If you discover a potential security issue, we appreciate your help in disclosing it to us responsibly.
        </p>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Please email security concerns to <a href="mailto:security@ideox.ai" className="text-slack-purple hover:underline">security@ideox.ai</a> with details about the issue. Our security team will investigate all legitimate reports and do our best to quickly resolve any vulnerabilities.
        </p>
      </section>
    </BasicPage>
  );
};

export default Security;

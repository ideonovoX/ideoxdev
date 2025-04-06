import BasicPage from '@/components/BasicPage';
import SEO from '@/components/SEO';
import { generateWebPageSchema } from '@/utils/schemaMarkup';

const Privacy = () => {
  const privacySchema = generateWebPageSchema({
    title: "Privacy Policy | IdeoXai",
    description: "Learn about how IdeoXai collects, uses, and protects your personal information.",
    url: "https://ideox.ai/privacy"
  });

  return (
    <>
      <SEO 
        title="Privacy Policy | IdeoXai"
        description="Learn about how IdeoXai collects, uses, and protects your personal information."
        canonicalUrl="https://ideox.ai/privacy"
        schemaMarkup={privacySchema}
      />
      <BasicPage 
        title="Privacy Policy"
        highlightedWord="Privacy" 
        description="Last updated: June 1, 2024"
      >
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Introduction</h2>
            <p>
              IdeoxAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI automation platform.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, email address, telephone number, and company information that you voluntarily give to us when you register with the platform or when you choose to participate in various activities related to the platform. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the platform.
            </p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access the platform, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the platform.
            </p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Data From Third Parties</h3>
            <p>
              Information from third parties, such as personal information or network friends, if you connect your account to the third party and grant the platform permission to access this information.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the platform to:</p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
              <li>Create and manage your account.</li>
              <li>Deliver targeted advertising, newsletters, and other information regarding promotions and the platform to you.</li>
              <li>Email you regarding your account or order.</li>
              <li>Enable user-to-user communications.</li>
              <li>Generate a personal profile about you to make future visits to the platform more personalized.</li>
              <li>Increase the efficiency and operation of the platform.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the platform.</li>
              <li>Notify you of updates to the platform.</li>
              <li>Offer new products, services, and/or recommendations to you.</li>
              <li>Perform other business activities as needed.</li>
              <li>Request feedback and contact you about your use of the platform.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
              <li>Respond to product and customer service requests.</li>
              <li>Send you a newsletter.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
            </p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Marketing Communications</h3>
            <p>
              With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes.
            </p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Interactions with Other Users</h3>
            <p>
              If you interact with other users of the platform, those users may see your name, profile photo, and descriptions of your activity.
            </p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Online Postings</h3>
            <p>
              When you post comments, contributions or other content to the platform, your posts may be viewed by all users and may be publicly distributed outside the platform in perpetuity.
            </p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Business Transfers</h3>
            <p>
              We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Policy for Children</h2>
            <p>
              We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              IdeoxAI<br />
              Sonabaria, Satkhira<br />
              Dhaka, Bangladesh<br />
              Email: ai@ideox.ai<br />
              Phone: +8801311344747
            </p>
          </section>
        </div>
      </BasicPage>
    </>
  );
};

export default Privacy;

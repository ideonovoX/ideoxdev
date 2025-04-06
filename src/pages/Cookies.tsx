import BasicPage from '@/components/BasicPage';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { generateWebPageSchema } from '@/utils/schemaMarkup';

const Cookies = () => {
  const cookieSchema = generateWebPageSchema({
    title: "Cookie Policy | IdeoXai",
    description: "Learn about how IdeoXai uses cookies on our website and how you can control them.",
    url: "https://ideox.ai/cookies"
  });

  return (
    <>
      <SEO 
        title="Cookie Policy | IdeoXai"
        description="Learn about how IdeoXai uses cookies on our website and how you can control them."
        canonicalUrl="https://ideox.ai/cookies"
        schemaMarkup={cookieSchema}
      />
      <BasicPage 
        title="Cookie Policy"
        highlightedWord="Cookie" 
        description="Last updated: June 1, 2024"
      >
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">What Are Cookies</h2>
            <p>
              Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the service or a third-party to recognize you and make your next visit easier and the service more useful to you.
            </p>
            <p>
              Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">How IdeoxAI Uses Cookies</h2>
            <p>
              When you use and access our platform, we may place a number of cookie files in your web browser.
            </p>
            <p>
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
              <li>To enable certain functions of the platform</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
              <li>To enable advertisements delivery, including behavioral advertising</li>
            </ul>
            <p>
              We use both session and persistent cookies on the platform and we use different types of cookies to run the platform:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
              <li><strong>Essential cookies.</strong> We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.</li>
              <li><strong>Preferences cookies.</strong> We may use preferences cookies to remember information that changes the way the platform behaves or looks, such as the "remember me" functionality or your language preference.</li>
              <li><strong>Analytics cookies.</strong> We may use analytics cookies to track information about how the platform is used so that we can make improvements. We may also use analytics cookies to test new advertisements, pages, features or new functionality of the platform to see how our users react to them.</li>
              <li><strong>Marketing cookies.</strong> These types of cookies track your browsing habits to enable us to show advertising which is more likely to be of interest to you. These cookies use information about your browsing history to group you with other users who have similar interests. Based on that information, and with our permission, third-party advertisers can place cookies to enable them to show adverts which we think will be relevant to your interests while you are on third-party websites.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the platform, deliver advertisements on and through the platform, and so on.
            </p>
            <p>Some of the third-party services we use include:</p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
              <li><strong>Google Analytics:</strong> We use Google Analytics to help us understand how our customers use the platform. You can read more about how Google uses your personal information here: <a href="https://www.google.com/intl/en/policies/privacy/" className="text-slack-purple hover:underline" target="_blank" rel="noopener noreferrer">https://www.google.com/intl/en/policies/privacy/</a>. You can also opt-out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout" className="text-slack-purple hover:underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>.</li>
              <li><strong>Intercom:</strong> We use Intercom to provide customer support and chat functionality. You can read more about how Intercom uses your personal information here: <a href="https://www.intercom.com/legal/privacy" className="text-slack-purple hover:underline" target="_blank" rel="noopener noreferrer">https://www.intercom.com/legal/privacy</a>.</li>
              <li><strong>Hotjar:</strong> We use Hotjar to understand how users interact with our platform. You can read more about how Hotjar uses your personal information here: <a href="https://www.hotjar.com/legal/policies/privacy" className="text-slack-purple hover:underline" target="_blank" rel="noopener noreferrer">https://www.hotjar.com/legal/policies/privacy</a>.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">What Are Your Choices Regarding Cookies</h2>
            <p>
              If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
            </p>
            <p>
              Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
            </p>
            <p>You can learn more about cookies at the following third-party websites:</p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
              <li>AllAboutCookies: <a href="https://www.allaboutcookies.org/" className="text-slack-purple hover:underline" target="_blank" rel="noopener noreferrer">https://www.allaboutcookies.org/</a></li>
              <li>Network Advertising Initiative: <a href="https://www.networkadvertising.org/" className="text-slack-purple hover:underline" target="_blank" rel="noopener noreferrer">https://www.networkadvertising.org/</a></li>
            </ul>
          </section>

          <section className="mb-8 bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3">Cookie Preferences</h2>
            <p className="mb-4">
              You can set your cookie preferences using the options below. Please note that disabling some types of cookies may impact your experience of our platform and the services we are able to offer.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Essential Cookies</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">These cookies are necessary for the website to function and cannot be switched off in our systems.</p>
                </div>
                <div className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded text-xs font-medium">
                  Always Active
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Preferences Cookies</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">These cookies allow us to remember choices you have made and provide enhanced features.</p>
                </div>
                <Button variant="outline" size="sm">
                  Enable
                </Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Analytics Cookies</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">These cookies help us understand how visitors interact with our website.</p>
                </div>
                <Button variant="outline" size="sm">
                  Enable
                </Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Marketing Cookies</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">These cookies are used to deliver advertisements more relevant to you and your interests.</p>
                </div>
                <Button variant="outline" size="sm">
                  Enable
                </Button>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-4">
              <Button variant="outline">
                Reject All
              </Button>
              <Button>
                Accept All
              </Button>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
            </p>
            <p>
              You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us:
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

export default Cookies;

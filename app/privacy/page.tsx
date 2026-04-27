export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full bg-white font-sans text-[#202124] overflow-x-hidden min-h-screen">
      <div className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-8">Privacy Policy</h1>
        <p className="text-[#5f6368] mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-12 text-[#3c4043] leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">1. Introduction</h2>
            <p>
              Welcome to Logic2byte. We respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website or use our services. Please read this privacy policy carefully. If you do not agree 
              with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, and your access times.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our website and services.</li>
              <li>Improve, personalize, and expand our website.</li>
              <li>Understand and analyze how you use our website.</li>
              <li>Develop new products, services, features, and functionality.</li>
              <li>Communicate with you, either directly or through one of our partners, for customer service, to provide you with updates, and for marketing purposes.</li>
              <li>Send you emails and respond to inquiries.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">4. Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows: 
              By Law or to Protect Rights, Third-Party Service Providers, Marketing Communications, and Business Transfers. 
              We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">5. Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. 
              While we have taken reasonable steps to secure the personal information you provide to us, please be aware 
              that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission 
              can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">6. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at: <br />
              <a href="mailto:support@logic2byte.com" className="text-[#1a73e8] hover:underline font-medium mt-2 inline-block">support@logic2byte.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

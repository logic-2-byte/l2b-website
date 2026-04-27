export default function TermsOfService() {
  return (
    <div className="flex flex-col w-full bg-white font-sans text-[#202124] overflow-x-hidden min-h-screen">
      <div className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-8">Terms of Service</h1>
        <p className="text-[#5f6368] mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-12 text-[#3c4043] leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Logic2byte website and services, you accept and agree to be bound by the terms 
              and provision of this agreement. In addition, when using these particular services, you shall be subject 
              to any posted guidelines or rules applicable to such services. Any participation in this service will constitute 
              acceptance of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">2. Description of Service</h2>
            <p>
              Logic2byte provides users with access to a rich collection of resources, including various communications tools, 
              forums, shopping services, personalized content, and branded programming through its network of properties. 
              You understand and agree that the Service is provided "AS-IS" and that Logic2byte assumes no responsibility 
              for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">3. User Conduct</h2>
            <p className="mb-4">You agree to use the services provided by Logic2byte strictly for lawful purposes. You are prohibited from:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violating any applicable local, state, national or international law.</li>
              <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the service.</li>
              <li>Taking any action that imposes, or may impose at our sole discretion an unreasonable or disproportionately large load on our infrastructure.</li>
              <li>Uploading invalid data, viruses, worms, or other software agents through the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">4. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of 
              Logic2byte and its licensors. The Service is protected by copyright, trademark, and other laws of both the 
              United States and foreign countries. Our trademarks and trade dress may not be used in connection with any 
              product or service without the prior written consent of Logic2byte.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall Logic2byte, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable 
              for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of 
              profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability 
              to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content 
              obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a 
              material change will be determined at our sole discretion. By continuing to access or use our Service after those 
              revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">7. Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at: <br />
              <a href="mailto:support@logic2byte.com" className="text-[#1a73e8] hover:underline font-medium mt-2 inline-block">support@logic2byte.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

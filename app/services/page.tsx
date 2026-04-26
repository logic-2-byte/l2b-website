import Link from 'next/link';
import { ArrowRight, Code2, Link as LinkIcon, Cloud } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-zinc-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-black text-white pt-24 pb-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Our Services</h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Custom solutions built precisely for your unique business needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="container mx-auto max-w-5xl px-6 -mt-16 space-y-8">
        
        {/* Service 1 */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-200 flex flex-col md:flex-row gap-8 items-center hover:shadow-md transition-shadow group">
          <div className="w-20 h-20 shrink-0 bg-zinc-100 text-black rounded-2xl flex items-center justify-center group-hover:bg-brand transition-colors">
            <Code2 className="w-10 h-10" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Custom Software Development</h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              We build tailored applications for your business. Whether you need an internal tool, a customer-facing portal, or a specialized SaaS platform, our team delivers high-quality, scalable code.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-200 flex flex-col md:flex-row gap-8 items-center hover:shadow-md transition-shadow group">
          <div className="w-20 h-20 shrink-0 bg-zinc-100 text-black rounded-2xl flex items-center justify-center group-hover:bg-brand transition-colors">
            <LinkIcon className="w-10 h-10" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">System Integration</h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Connect your existing tools and automate workflows. We help businesses integrate scattered APIs, legacy systems, and modern SaaS products into one unified process.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-200 flex flex-col md:flex-row gap-8 items-center hover:shadow-md transition-shadow group">
          <div className="w-20 h-20 shrink-0 bg-zinc-100 text-black rounded-2xl flex items-center justify-center group-hover:bg-brand transition-colors">
            <Cloud className="w-10 h-10" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Cloud & Deployment</h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Scalable and secure cloud solutions. Let us handle your infrastructure, ensuring maximum uptime, fast performance, and compliant security on AWS, Azure, or GCP.
            </p>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="mt-24 px-6">
        <div className="container mx-auto max-w-4xl text-center bg-white border border-zinc-200 rounded-3xl p-12 md:p-16 shadow-lg shadow-zinc-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Need a custom solution?</h2>
          <p className="text-zinc-600 mb-8 max-w-xl mx-auto relative z-10">
            Let's discuss how we can build the perfect technical foundation for your next big idea.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-black text-white hover:bg-brand hover:text-black transition-colors px-8 py-4 rounded-xl font-bold relative z-10 shadow-md">
            Contact Us <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

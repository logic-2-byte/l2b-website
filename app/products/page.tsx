import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Logic2byte",
  description: "Explore our collection of specialized business management software and subscription plans.",
};

import { MARKETPLACE_DATA } from '@/lib/data';

function slugify(text: string) {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

export default async function ProductsPage() {
  const products = MARKETPLACE_DATA.products;

  const cardColors = [
    'bg-[#e3e4e6]', // Gray
    'bg-[#f0f4ff]', // Blue
    'bg-[#e6e4fc]', // Purple
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-white font-sans text-[#202124]">
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-20">
            <h1 className="hero-title max-w-none mx-auto !text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl">
              Specialized products for <span className="glass-underline">every business</span>.
            </h1>
            <p className="text-[#5f6368] text-lg max-w-none mx-auto font-normal">
              We build specialized platforms that help your business manage operations and grow faster.
            </p>

            {/* Combined Overview Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 w-full max-w-7xl mx-auto text-left">
              {/* Card 1 & 2 Combined: Ecommerce Solutions */}
              <div className="md:col-span-2 bg-[#f0f4ff] rounded-[2.5rem] overflow-hidden group transition-transform hover:-translate-y-1 duration-500 flex flex-col h-auto md:h-[580px]">
                {/* Single Centered Header */}
                <div className="pt-16 px-8 space-y-6 text-center max-w-2xl mx-auto">
                  <h3 className="text-3xl md:text-[40px] font-medium text-black tracking-tight leading-tight">
                    Ecommerce for your business.
                  </h3>
                  <p className="text-[16px] text-[#3c4043] font-normal leading-relaxed">
                    Launch a high-performance storefront for your customers on mobile and manage your entire business seamlessly with our professional desktop dashboard.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                    <Link href="/contact?product=ecommerce-erp-system" className="bg-black text-white px-10 py-3 rounded-full text-[14px] font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-black/5">
                      Request Demo
                    </Link>
                    <Link href="/products/ecommerce-erp-system#pricing" className="bg-[#d4c1ff] border border-black/5 rounded-full px-10 py-3 text-[14px] font-bold text-black hover:bg-[#c4afff] transition-all">
                      View Pricing
                    </Link>
                  </div>
                </div>

                {/* Dual Visuals Row */}
                <div className="flex-1 flex flex-row items-end justify-center gap-8 md:gap-16 mt-6">
                  {/* Mobile Part */}
                  <div className="flex flex-col items-center">
                    <div className="w-[160px] md:w-[180px] h-[260px] md:h-[300px] bg-white rounded-t-[2.5rem] border-t-8 border-x-8 border-white shadow-2xl relative overflow-hidden">
                      <div className="w-1/3 h-4 bg-zinc-200/50 rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-10" />
                      <img
                        src="/images/Ecom.webp"
                        alt="Mobile Storefront"
                        className="w-full h-full object-cover pt-4"
                      />
                    </div>
                  </div>

                  {/* Laptop Part */}
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-[300px] md:w-[420px] h-[200px] md:h-[240px] bg-white rounded-t-xl border-t-4 border-x-4 border-white shadow-2xl relative overflow-hidden">
                      <img
                        src="/images/desktop_ecom.webp"
                        alt="Desktop Dashboard"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: All-in-One Business Management Platform */}
              <div className="bg-[#e6e4fc] rounded-[2.5rem] pt-12 flex flex-col items-center h-[580px] overflow-hidden group transition-transform hover:-translate-y-1 duration-500">
                <div className="px-8 space-y-4 text-center">
                  <h3 className="text-2xl font-medium text-black tracking-tight leading-tight">
                    All-in-One Business <br /> Management Platform.
                  </h3>
                  <p className="text-[14px] text-[#3c4043] font-normal max-w-sm mx-auto">
                    Optimize your service-based business with scheduling and CRM.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <Link href="/contact?product=gym-management-system" className="bg-black text-white px-8 py-2 rounded-full text-[13px] font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-black/5">
                      Request Demo
                    </Link>
                    <Link href="/products/gym-management-system#pricing" className="bg-white/50 border border-black/10 backdrop-blur-sm rounded-full px-8 py-2 text-[13px] font-bold text-black hover:bg-black hover:text-white transition-all">
                      View Price
                    </Link>
                  </div>
                </div>
                <div className="flex-1 w-full mt-2 relative flex items-end justify-center px-8">
                  {/* Back Frame */}
                  <div className="w-[60%] h-[85%] bg-white rounded-t-[2rem] border-t-4 border-x-4 border-white shadow-xl absolute bottom-0 -translate-x-10 z-0 overflow-hidden opacity-90 transition-transform group-hover:-translate-y-2 duration-700">
                    <img 
                      src="/images/management2.webp" 
                      alt="Management Preview 2" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Front Frame */}
                  <div className="w-[60%] h-[95%] bg-white rounded-t-[2rem] border-t-4 border-x-4 border-white shadow-2xl relative z-10 overflow-hidden transition-transform group-hover:-translate-y-1 duration-500 translate-x-6">
                    <div className="w-1/3 h-3 bg-zinc-200/50 rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2 z-20" />
                    <img 
                      src="/images/management.webp" 
                      alt="Management Preview 1" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Second Row: Merged Rectangular Card */}
              <div className="md:col-span-3 bg-[#f0f4ff] rounded-[2.5rem] p-10 h-auto md:h-[320px] overflow-hidden group transition-transform hover:-translate-y-1 duration-500 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Enterprise Part */}
                <div className="flex-[2] space-y-6">
                  <h3 className="text-3xl font-medium text-black tracking-tight leading-tight">
                    Custom Enterprise <br /> Solutions.
                  </h3>
                  <p className="text-[15px] text-[#3c4043] font-normal max-w-md leading-relaxed">
                    Tailor-made infrastructure and features designed for complex organizational workflows and large-scale operations.
                  </p>
                  <Link href="/#contact" className="inline-block bg-black text-white px-8 py-2.5 rounded-full text-[14px] font-bold hover:bg-zinc-800 transition-all">
                    Talk to Sales
                  </Link>
                </div>

                {/* API Part */}
                <div className="flex-1 h-full border-l border-black/5 pl-12 flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-medium text-black tracking-tight">API & Global <br /> Integration.</h3>
                    <p className="text-[14px] text-[#5f6368] font-normal leading-relaxed">
                      Connect your existing tools with our robust API ecosystem.
                    </p>
                  </div>
                  <div className="pt-2">
                    <Link href="/#contact" className="inline-flex items-center text-black font-bold text-[14px] hover:underline">
                      View Docs <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>

                {/* Visual Part */}
                <div className="flex-1 w-full h-full relative hidden lg:flex items-center justify-center">
                  <div className="w-full h-48 bg-white/40 rounded-3xl border border-white/60 shadow-xl relative overflow-hidden flex items-center justify-center">
                    <div className="w-2/3 h-2 bg-zinc-200/40 rounded-full absolute top-6" />
                    <div className="w-16 h-16 rounded-full bg-[#d4c1ff]/30 blur-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="product-list" className="pt-24">
            <h2 className="text-3xl font-bold text-black mb-12 text-center">All Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => {
                const bgColor = cardColors[index % cardColors.length];
                const slug = product.slug;

                return (
                  <div
                    key={product.id}
                    className={`${bgColor} rounded-[2.5rem] pt-12 flex flex-col items-center h-[620px] overflow-hidden group transition-transform hover:-translate-y-1 duration-500`}
                  >
                    <div className="px-8 space-y-6 text-center">
                      <h3 className="text-2xl md:text-[32px] font-medium text-black tracking-tight leading-tight px-4">
                        {product.name}
                      </h3>
                      <p className="text-[15px] text-[#3c4043] font-normal max-w-sm mx-auto leading-relaxed h-[3em]">
                        {product.description}
                      </p>

                      <div className="flex flex-col gap-3 pt-4 items-center">
                        <div className="flex flex-row items-center justify-center gap-3 w-full">
                          <Link
                            href={`/contact?product=${slug}`}
                            className="flex-1 bg-black text-white px-6 py-2.5 rounded-full text-[14px] font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-black/5 text-center"
                          >
                            Try now
                          </Link>
                          <Link
                            href={`/products/${slug}`}
                            className="flex-1 border border-black/20 bg-white/50 backdrop-blur-sm rounded-full px-6 py-2.5 text-[14px] font-bold text-black hover:bg-white transition-all flex items-center justify-center gap-1.5"
                          >
                            Learn more <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>
                        <Link
                          href={`/products/${slug}#pricing`}
                          className="w-full bg-[#d4c1ff] text-black px-8 py-2.5 rounded-full text-[14px] font-bold hover:bg-[#c4afff] transition-all text-center"
                        >
                          View Price
                        </Link>
                      </div>
                    </div>

                    {/* Visual Placeholder */}
                    <div className="flex-1 w-full mt-12 relative flex items-end justify-center px-10">
                      <div className="w-full h-[90%] bg-white/60 rounded-t-[2.5rem] border-t border-x border-white/80 shadow-2xl relative overflow-hidden flex flex-col items-center">
                        <div className="w-1/3 h-4 bg-zinc-200/50 rounded-b-xl mt-0" />
                        <div className="w-full h-full flex flex-col p-8 space-y-4">
                          <div className="w-1/2 h-2 bg-zinc-200/40 rounded-full" />
                          <div className="w-full h-24 bg-zinc-100/30 rounded-2xl" />
                          <div className="grid grid-cols-2 gap-4">
                            <div className="h-16 bg-zinc-100/20 rounded-xl" />
                            <div className="h-16 bg-zinc-100/20 rounded-xl" />
                          </div>
                        </div>
                        {/* Subtle Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#d4c1ff]/20 rounded-full blur-3xl" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-40 bg-zinc-50 rounded-[3rem] p-12 md:p-20 text-center space-y-8 border border-zinc-100">
            <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight">Need a custom solution?</h2>
            <p className="text-[#5f6368] text-lg font-medium max-w-2xl mx-auto">
              Our engineering team can build tailor-made platforms for your specific organizational requirements.
            </p>
            <div className="flex justify-center pt-4">
              <Link href="/#contact" className="bg-black text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-zinc-800 transition-all shadow-lg shadow-black/10">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
